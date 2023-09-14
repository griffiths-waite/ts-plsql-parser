import { getParsedNodes, getParserFromInput } from "./parser";

const input = `create or replace PACKAGE BODY BAAPI001P
AS
/*
 * Module Name    : BAAPI001P
 * Description    : Customer tool / API
 *
 * Overview
 * --------
 *  This package contains procedures/functions to support batch process for Atrium Upg.
 *
 * Amendement History
 * ------------------
 * Date           Author    Version    Change Description
 * ----------------------------------------------------------------------------
 * 06-JUL-2020        JS    1.00.00    Initial
 * 21-JUL-2020        RA    1.00.01    ATRII-2771 Add poll_result check to cu_get_payload_cover
 * 22-JUL-2020        RA    1.00.02    ATRII-2783 Use local code to perform updates instead of legacy procedures
 *                                     in update_export_req
 * 23-JUL-2020        RA    1.00.03    ATRII-2830 Treat BUYERRATING as COVER when setting p_poll_result in call to get_user_export_prefs
 * 09-FEB-2022        RA    1.00.04    ATRII-6013 Changed p_filename in poll_export to NVARCHAR2
 * 23-FEB-2022        RA    1.00.05    ATRII-6209 Changed cu_get_payload_cover in poll_export to check identifier_type = 'BUYER'
 * 18-OCT-2022        MD/ML 1.00.06    ATRII-8028 updated poll export to return genapi_nclob_wrapper 
 * 27-FEB-2022        TR    1.00.07    ATRII-8666 changed USAPI003P.get_user_export_prefs to include p_include_risk_info for CUSTOM_NR
 */
 
 
 /*----------------------- Public Variables -----------------------------*/

   c_package_body_name       CONSTANT VARCHAR2(40) := 'BAAPI001P';
   
   
    /************************ poll_export ***************************
    * Entry point for Node to come in and "ask" for any work to process i.e any export records which need dealing with
    * Poll through the records which need to be processed across cover and claims.
	* Select the latest record, lock it and pass the Json back to Node code
	* Starting point: BUAPI004P.EXPORT_REQUEST_WRAPPER
	* Queue: PROCESS_EXPORT_QU
	* Dequeue: PROCESS_EXPORT_QU.SQL
    ***********************************************************************/
    
	PROCEDURE poll_export                 
				( p_poll_result             OUT VARCHAR2
                , p_filename            	OUT NVARCHAR2
                , p_username                OUT VARCHAR2
                , p_export_req_id           OUT tbap_cover_export_files.id%type       --NUMBER  (8,0)
                , p_export_lang         	OUT tbap_cover_export_files.language%type --VARCHAR2(2)
                , p_export_json             OUT genapi_nclob_wrapper_obj
                , p_preferences_clob        OUT genapi_nclob_wrapper_obj
                , p_error_code              OUT VARCHAR2
                , p_error_message           OUT VARCHAR2
                , p_error_indicator         OUT VARCHAR2
                , p_error_identifier        OUT VARCHAR2
                , p_error_level             OUT NUMBER)
            IS

		l_procedure_name                VARCHAR2(30)  := 'poll_export';
        l_procedure_identifier          VARCHAR2(100) := 'Package:' || c_package_body_name || ',Procedure:' || l_procedure_name || '.';
        l_query_identifier              PLS_INTEGER   := 1000;
        
        
        l_error_detail_out_obj          ERROR_DETAIL_OUT_OBJ;
        l_export_json                   NCLOB;
        l_user_session_in_type          USAPI_USER_SESSION_IN_TYPE; -- AT2

		-- Get the latest available record to process across covers and cases.
        -- We need to visit each table individually so that we can lock via the "FOR UPDATE" statement
		CURSOR cu_get_payload_cover IS
            SELECT  json_response
                  , filename
                  , id
                  , language language_code
                  , indiv_uid
                  , requested_dat
                  , CASE WHEN identifier IS NOT NULL 
                              AND identifier_type = 'BUYER'
                         THEN 
                             'BUYERRATING'
                         ELSE
                             'COVER'
                    END poll_result           -- so we know which table to update + inform Node how to build file
                  , CASE WHEN NVL(identifier_type,'x') = 'CUSTOM_NR'
                       THEN 'N'
                       ELSE 'Y'
                    END include_buyer_rating
             FROM tbap_cover_export_files
            WHERE export_completion_dat IS NULL
              AND status = 3                      -- Ready for export
              AND json_response IS NOT NULL       -- AND the export has produced some JSON to process
              AND export_batch_picked_dat IS NULL -- if a request is ongoing this is set so we do NOT want those records
         ORDER BY id asc
        FOR UPDATE SKIP LOCKED;
        
        r_get_payload_cover       cu_get_payload_cover%rowtype;
        
        CURSOR cu_get_payload_claims IS
               SELECT json_response
                         , filename
                         , id
                         , language_code language_code
                         , indiv_uid
                         , requested_dat
                         , CASE WHEN filetype = 'case'        THEN  'NNPCASES'
                                WHEN filetype = 'transaction' THEN  'NNPTRANSACTIONS'
                          END poll_result           -- so we know which table to update + inform Node how to build file
                    FROM TBAP_CASE_EXPORT_FILES 
                   WHERE export_completion_dat IS NULL
                     AND status = 3                       -- Ready for export
                     AND json_response IS NOT NULL        -- AND the export has produced some JSON to process
                     AND export_batch_picked_dat IS NULL  -- if a request is ongoing this is set so we do NOT want those records
                ORDER BY id asc
                     FOR UPDATE SKIP LOCKED;
                     
        r_get_payload_claims       cu_get_payload_claims%rowtype;

	BEGIN
        -- original status is N(ot found) any unit-of-work to process
        p_poll_result := 'N';
        
        l_error_detail_out_obj := error_detail_out_obj (
                             NULL,
                             NULL,
                             seerr01p.error_indicator_n,
                             l_procedure_identifier || 'No errors',
                             seerr01p.g_e_error_level_1
                            ); 
                            


		-- Get the latest record to process for COVER
		l_query_identifier := 1010;
		OPEN  cu_get_payload_cover;
		FETCH cu_get_payload_cover INTO r_get_payload_cover;
        
        -- Get the latest record to process for COVER
		l_query_identifier := 1010;
		OPEN  cu_get_payload_claims;
		FETCH cu_get_payload_claims INTO r_get_payload_claims;

      
        -- in the very very unlikely event we have two at the same time for cover and claims, choose cover.
        -- if we don't handle this then no rows get picked up and the job breaks from then-on
        IF r_get_payload_cover.requested_dat >= nvl(r_get_payload_claims.requested_dat, cl_global.remote_past)
        THEN
          l_query_identifier := 1011;    
          l_export_json       := r_get_payload_cover.json_response;
		  p_filename          := r_get_payload_cover.filename;
          p_export_req_id     := r_get_payload_cover.id;
          p_export_lang       := r_get_payload_cover.language_code;
          p_username          := r_get_payload_cover.indiv_uid;
          p_poll_result       := r_get_payload_cover.poll_result;
          
            UPDATE tbap_cover_export_files
              SET export_batch_picked_dat = sysdate
            WHERE CURRENT OF cu_get_payload_cover;
          
        ELSIF  r_get_payload_claims.requested_dat > nvl(r_get_payload_cover.requested_dat, cl_global.remote_past) THEN
          l_query_identifier  := 1012;  
          l_export_json       := r_get_payload_claims.json_response;
		  p_filename          := r_get_payload_claims.filename;
          p_export_req_id     := r_get_payload_claims.id;
          p_export_lang       := r_get_payload_claims.language_code;
          p_username          := r_get_payload_claims.indiv_uid;
          p_poll_result       := r_get_payload_claims.poll_result;
          
           UPDATE tbap_case_export_files
              SET export_batch_picked_dat = sysdate
            WHERE CURRENT OF cu_get_payload_claims;
         
        END IF;
        
        p_export_json := genapi_nclob_wrapper_obj(l_export_json);
        
        l_query_identifier := 1015;                          

        -- Check a record has been found to process and get the preferences 
        IF  p_poll_result != 'N' THEN 

            l_query_identifier := 1030;

            -- Get the user export preferences for the process type COVER or NNPCASES
            USAPI003P.get_user_export_prefs (
                p_username           => p_username 
              , p_user_role          => NULL
              , p_lang_code          => p_export_lang
              , p_mimic_username     => NULL
              , p_process_type       => CASE WHEN p_poll_result = 'BUYERRATING'
                                             THEN 'COVER'
                                             ELSE p_poll_result
                                        END
              , p_include_risk_info  => r_get_payload_cover.include_buyer_rating
              , p_preferences_clob   => p_preferences_clob -- out
              , p_error_code         => p_error_code
              , p_error_message      => p_error_message
              , p_error_indicator    => p_error_indicator
              , p_error_identifier   => p_error_identifier
              , p_error_level        => p_error_level
              );
        
            IF (p_error_identifier != seerr01p.error_indicator_n)
            THEN
                -- if we cannot get the user preferences for whatever reason
                -- we should fail this export

                IF p_poll_result IN ('BUYERRATING','COVER') THEN
                  UPDATE tbap_cover_export_files
                     SET status        = -1,
                         error_msg     = 'User preferences error. Cancelling Export: ' ||  p_error_message,
                         json_response = null
                   WHERE CURRENT OF cu_get_payload_cover;
                   
                ELSIF p_poll_result in ('NNPCASES','NNPTRANSACTIONS') THEN

                  UPDATE tbap_case_export_files
                    SET status         = -1,
                        error_msg      = 'User preferences error. Cancelling Export: ' ||  p_error_message,
                        json_response  = null
                  WHERE CURRENT OF cu_get_payload_claims;
                END IF;
                
            END IF;       

        END IF;
        
        l_query_identifier := 1040;
        
      
        CLOSE cu_get_payload_cover;
        CLOSE cu_get_payload_claims;
        
        l_query_identifier := 1050;
       
         -- we have updated the request row,whever it came from, so commit
         -- do this at the end as there may have been errors within the getting preferences hence we do not commit before that
		COMMIT;
        
    EXCEPTION
        WHEN OTHERS
       
            THEN
                IF (cu_get_payload_cover%ISOPEN) THEN
                    close cu_get_payload_cover;
                END IF;
               
                IF (cu_get_payload_claims%ISOPEN) THEN
                    close cu_get_payload_claims;
                END IF;
                
                -- These catches are for errors we expect, so fail silently
                
                -- No rows found
                IF SQLCODE = -01410 THEN
                    p_poll_result := 'N';

                -- Row we found was already locked, so we should (B)ack off
                ELSIF SQLCODE = -54 THEN
                   p_poll_result := 'B';
                
                ELSE 
               
                  l_error_detail_out_obj := seerr01p.process_error_level( seerr01p.g_e_sqlerror
                                                                         , 'EN'
                                                                         , seerr01p.error_indicator_y
                                                                         , l_procedure_identifier
                                                                         , l_query_identifier
                                                                         , sqlerrm
                                                                         , seerr01p.g_e_error_level_2 );

                  p_error_code       := l_error_detail_out_obj.error_code;
                  p_error_message    := l_error_detail_out_obj.error_message;
                  p_error_indicator  := l_error_detail_out_obj.error_indicator;
                  p_error_identifier := l_error_detail_out_obj.error_identifier;
                  p_error_level      := l_error_detail_out_obj.error_level;
                
                END IF;

	END poll_export;   
   
    /************************ update_export_req ***************************
    * Updates the export request row within by tbap_cover_export_files OR tbap_case_export_files 
    * depending on the p_export_type (COVER or [NNPCASES | NNPTRANSACTIONS] )
    ***********************************************************************/
   
    PROCEDURE update_export_req                 
                ( 
                  p_file_id               IN    NUMBER
                , p_wcc_file_guid         IN    VARCHAR2
                , p_status                IN    NUMBER
                , p_row_count             IN    NUMBER
                , p_expiry_dat            IN    DATE
                , p_error_msg_from_export IN    VARCHAR2
                , p_username              IN    VARCHAR2
                , p_export_type           IN    VARCHAR2  -- NEW FOR A2, SO CODE KNOWS TO CALL BUEXT OR CLEXT: COVER | [NNPCASES | NNPTRANSACTIONS]
                , p_error_code              OUT VARCHAR2
                , p_error_message           OUT VARCHAR2
                , p_error_indicator         OUT VARCHAR2
                , p_error_identifier        OUT VARCHAR2
                , p_error_level             OUT NUMBER)
            IS

        l_procedure_name                VARCHAR2(30)  := 'update_export_req';
        l_procedure_identifier          VARCHAR2(100) := 'Package:' || c_package_body_name || ',Procedure:' || l_procedure_name || '.';
        l_query_identifier              PLS_INTEGER   := 1000;
        l_error_detail_out_obj          ERROR_DETAIL_OUT_OBJ;
        
        l_user_session_in_type          USAPI_USER_SESSION_IN_TYPE; 
        l_usext_user_session_in_type    USEXT_USER_SESSION_IN_TYPE;

    BEGIN
    
      LIBAPI001P.initialise( 
                 p_package_body_name            => c_package_body_name 
                ,p_procedure_identifier         => l_procedure_identifier
                ,p_procedure_name               => l_procedure_name 
                ,p_username                     => p_username 
                ,p_user_role                    => 'CUST' 
                ,p_lang_code                    => 'EN' 
                ,p_mimic_username               => null 
                ,p_user_session_in_type         => l_user_session_in_type
                ,p_usext_user_session_in_type   => l_usext_user_session_in_type
                ,p_error_detail_out_obj         => l_error_detail_out_obj 
                );

        IF (l_error_detail_out_obj.error_indicator != seerr01p.error_indicator_n)
        THEN
            p_error_code        := l_error_detail_out_obj.error_code;
            p_error_message     := l_error_detail_out_obj.error_message;
            p_error_indicator   := l_error_detail_out_obj.error_indicator;
            p_error_identifier  := l_error_detail_out_obj.error_identifier;
            p_error_level       := l_error_detail_out_obj.error_level;
            RETURN;
        END IF;

        l_query_identifier := 1010;
        
        IF p_export_type = 'COVER' 
        THEN

            l_query_identifier := 1020;
        
            -- Update the status of the cover file based on the values passed in
            UPDATE tbap_cover_export_files
            SET    last_updated_dat      = SYSDATE
                 , wcc_file_guid         = p_wcc_file_guid
                 , status                = p_status
                 , rowcount              = NVL(p_row_count, rowcount)            -- Only update if the field is not null
                 , expiry_dat            = p_expiry_dat
                 , error_msg             = SUBSTR(p_error_msg_from_export,1,2000)-- Make sure we dont go over 2000
                 , json_response         = CASE WHEN p_status = 4 THEN NULL      -- Set json_response to null if status is 4
                                                                  ELSE json_response
                                           END
                 , export_completion_dat = CASE WHEN p_status = 4 THEN SYSDATE   -- Set export_completion_dat if status is 4
                                                                  ELSE NULL
                                           END
            WHERE  id = p_file_id;

            l_query_identifier := 1030;

            COMMIT;

         ELSIF p_export_type IN ('NNPCASES','NNPTRANSACTIONS') 
         THEN

             l_query_identifier := 1040;

             UPDATE tbap_case_export_files
             SET    last_updated_dat      = SYSDATE
                  , wcc_file_guid         = p_wcc_file_guid
                  , status                = p_status
                  , row_count             = NVL(p_row_count, row_count)           -- Only update if the field is not null
                  , expiry_dat            = p_expiry_dat
                  , error_msg             = SUBSTR(p_error_msg_from_export,1,2000)-- Make sure we dont go over 2000
                  , json_response         = CASE WHEN p_status = 4 THEN NULL      -- Set json_response to null if status is 4
                                                                    ELSE json_response
                                            END
                  , export_completion_dat = CASE WHEN p_status = 4 THEN SYSDATE   -- Set export_completion_dat if status is 4
                                                                   ELSE NULL
                                            END
             WHERE  id = p_file_id;

             l_query_identifier := 1050;

             COMMIT;

         END IF;
         
    EXCEPTION
        WHEN OTHERS
            THEN

                    l_error_detail_out_obj := seerr01p.process_error_level( seerr01p.g_e_sqlerror
                                                                         , 'EN'
                                                                         , seerr01p.error_indicator_y
                                                                         , l_procedure_identifier
                                                                         , l_query_identifier
                                                                         , sqlerrm
                                                                         , seerr01p.g_e_error_level_2 );

                    p_error_code       := l_error_detail_out_obj.error_code;
                    p_error_message    := SQLERRM;
                    p_error_indicator  := l_error_detail_out_obj.error_indicator;
                    p_error_identifier := (DBMS_UTILITY.format_error_backtrace); 
                    p_error_level      := l_error_detail_out_obj.error_level;


	END update_export_req;   
   
END BAAPI001P;
/`;

const parser = getParserFromInput(input);

const nodes = getParsedNodes(input, parser.unit_statement());

console.log(JSON.stringify(nodes, null, 2));
