export const descriptions: Record<string, {description: string; color: string}> = {
  "Sql_scriptContext": {
    "description": "The SQL Script node is used to execute multiple SQL statements in a single PL/SQL block.",
    "color": "#FFC107"
  },
  "Unit_statementContext": {
    "description": "The UNIT statement is used to define a PL/SQL unit, which can be a package, a procedure, or a function.",
    "color": "#f3c74a"
  },
  "Alter_diskgroupContext": {
    "description": "The ALTER_DISKGROUP statement is used to modify attributes of an existing disk group in Oracle ASM.",
    "color": "#f9c922"
  },
  "Add_disk_clauseContext": {
    "description": "The ADD_DISK_CLAUSE is used in an ALTER DISKGROUP statement to add one or more disks to a disk group in Oracle Automatic Storage Management (ASM). This clause specifies the disks to be added and can include disk names, paths, or wildcard characters.",
    "color": "#FACD42"
  },
  "Drop_disk_clauseContext": {
    "description": "The DROP_DISK_CLAUSE is used in Oracle PL/SQL to specify the disk group or disk that should be dropped from the database. It is used with the DROP DATABASE command to remove a disk or disk group from the database.",
    "color": "#ffa726"
  },
  "Resize_disk_clauseContext": {
    "description": "The RESIZE_DISK_CLAUSE is used in the ALTER DISKGROUP statement in Oracle PL/SQL to resize a disk in a disk group. It allows you to increase or decrease the size of a disk within a disk group, which can be useful for managing storage capacity.",
    "color": "#c586c0"
  },
  "Replace_disk_clauseContext": {
    "description": "The REPLACE DISK clause is used in Oracle PL/SQL to specify that a disk should be replaced in a disk group. This clause is used in the ALTER DISKGROUP statement.",
    "color": "#fada5e"
  },
  "Wait_nowaitContext": {
    "description": "The WAIT and NOWAIT clauses are used in Oracle PL/SQL to implement concurrency control when accessing database objects. The WAIT clause allows a transaction to wait for a lock to be released before proceeding, while the NOWAIT clause specifies that a transaction should not wait and should return immediately if it encounters a locked object.",
    "color": "#009688"
  },
  "Rename_disk_clauseContext": {
    "description": "The RENAME_DISK_CLAUSE is used in Oracle PL/SQL to rename a disk group member or a file that belongs to a disk group. It helps in managing the disk group by providing the ability to change the name of a specific disk or file.",
    "color": "#d9f0fa"
  },
  "Disk_online_clauseContext": {
    "description": "The DISK ONLINE clause is used in Oracle PL/SQL to specify whether a disk group is brought online with the database at startup or manually online as needed.",
    "color": "#f5a623"
  },
  "Disk_offline_clauseContext": {
    "description": "The DISK_OFFLINE_CLAUSE is used in Oracle PL/SQL to specify the disks that should be taken offline. This clause is typically used in ALTER DATABASE statements to remove faulty or damaged disks from use.",
    "color": "#f7c6c7"
  },
  "Timeout_clauseContext": {
    "description": "The TIMEOUT clause is used in Oracle PL/SQL to specify a time limit for a specific operation or block of code. It allows you to control the maximum time that a program can wait for a certain condition to be met.",
    "color": "#f0ad4e"
  },
  "Rebalance_diskgroup_clauseContext": {
    "description": "The REBALANCE_DISKGROUP_CLAUSE is used in Oracle PL/SQL to specify a clause for rebalancing disks in a disk group.",
    "color": "#2aa1ae"
  },
  "PhaseContext": {
    "description": "The PHASE node is used in the Oracle PL/SQL language to define the current phase of execution in a block of code. This node is mainly used in iterative constructs such as loops to determine which phase of execution is currently being processed. It allows developers to specify different actions or behavior for each phase.",
    "color": "#fcafd7"
  },
  "Check_diskgroup_clauseContext": {
    "description": "The CHECK_DISKGROUP_CLAUSE is used in the ALTER DISKGROUP statement in Oracle PL/SQL to identify the disk group that you want to check for inconsistencies and perform repair operations.",
    "color": "#f5b942"
  },
  "Diskgroup_template_clausesContext": {
    "description": "The diskgroup_template_clauses specify the attributes for creating a disk group template in Oracle ASM (Automatic Storage Management). The template is a pre-defined set of disk group attributes that can be used to create multiple disk groups with consistent settings.",
    "color": "#B8860B"
  },
  "Qualified_template_clauseContext": {
    "description": "The QUALIFIED_TEMPLATE_CLAUSE is used in Oracle PL/SQL to specify a qualified template to be used for cursor variables or variable declarations. It allows you to declare a variable or cursor variable based on a template record or cursor that belongs to a different schema or package. This clause is particularly useful when you want to reuse a common template definition across multiple schemas or packages.",
    "color": "#12a4d9"
  },
  "Redundancy_clauseContext": {
    "description": "The REDUNDANCY_CLAUSE is used in Oracle PL/SQL to specify the level of redundancy in a database cluster. It is typically used in CREATE TABLE statements to indicate how data will be replicated across different nodes in the cluster.",
    "color": "#ffcc00"
  },
  "Striping_clauseContext": {
    "description": "The STRIPING_CLAUSE is used in Oracle PL/SQL to specify the striping attributes when creating or altering a table or index. It determines how data is distributed across multiple disks or storage devices in a disk group. The striping attributes include the stripe size and the number of stripes.",
    "color": "#FFC107"
  },
  "Force_noforceContext": {
    "description": "The 'FORCE' and 'NOFORCE' keywords are used in Oracle PL/SQL to specify whether or not to forcefully compile a stored procedure, function, or package even if it has references to invalid or missing objects.",
    "color": "#008080"
  },
  "Diskgroup_directory_clausesContext": {
    "description": "The diskgroup_directory_clauses are used in Oracle PL/SQL to specify the directory paths where the Oracle Automatic Storage Management (ASM) disk groups will be created or modified.",
    "color": "#3d85c6"
  },
  "Dir_nameContext": {
    "description": "DIR_NAME is a built-in function in Oracle PL/SQL that returns the name of a directory object.",
    "color": "#ff9933"
  },
  "Diskgroup_alias_clausesContext": {
    "description": "Diskgroup_alias_clauses is a set of clauses used in Oracle PL/SQL to specify or change alias names for disk groups. It allows you to define alternative names for disk groups to make their identification more meaningful or user-friendly.",
    "color": "#005cc5"
  },
  "Diskgroup_volume_clausesContext": {
    "description": "Diskgroup volume clauses are used in Oracle ASM (Automatic Storage Management) to define and manage disk groups and their volumes.",
    "color": "#DBB400"
  },
  "Add_volume_clauseContext": {
    "description": "The ADD_VOLUME_CLAUSE is used in the ROLLBACK statement in Oracle PL/SQL to specify additional undo tablespaces that should be added to the database's undo tablespace group.",
    "color": "#6C71C4"
  },
  "Modify_volume_clauseContext": {
    "description": "The MODIFY_VOLUME_CLAUSE is used in Oracle PL/SQL to specify the attributes and settings for modifying a specific volume of a database tablespace.",
    "color": "#d773ff"
  },
  "Diskgroup_attributesContext": {
    "description": "Diskgroup_attributes is a PL/SQL node used to define and manage attributes of a disk group in Oracle ASM (Automatic Storage Management). It is used to set various properties related to disk groups such as name, redundancy, compatibility, size, and other attributes.",
    "color": "#d0d672"
  },
  "Modify_diskgroup_fileContext": {
    "description": "The MODIFY_DISKGROUP_FILE statement is used to modify the attributes of a file in an Oracle ASM disk group. It allows you to change the redundancy level, resize the file, or relocate the file to a different disk group.",
    "color": "#1f77b4"
  },
  "Disk_region_clauseContext": {
    "description": "The disk_region_clause is used in the ALTER DISKGROUP statement to specify the region allocation policy for newly added disks in an Automatic Storage Management (ASM) disk group.",
    "color": "#9cdcfe"
  },
  "Drop_diskgroup_file_clauseContext": {
    "description": "The DROP_DISKGROUP_FILE clause is used in Oracle PL/SQL to remove a file or files from a disk group in a database. This clause is part of the ALTER DISKGROUP statement and is used when a file needs to be removed from an existing disk group.",
    "color": "#d4d4d4"
  },
  "Convert_redundancy_clauseContext": {
    "description": "The CONVERT_REDUNDANCY_CLAUSE is a clause used in the ALTER TABLE statement in Oracle PL/SQL. It is used to convert tablespace redundancy for an index-organized table from NO to YES or from YES to NO.",
    "color": "#ff7f50"
  },
  "Usergroup_clausesContext": {
    "description": "Usergroup clauses are used in Oracle PL/SQL to define and manipulate user groups within a database. User groups are logical entities that group together multiple users for the purpose of managing permissions and privileges.",
    "color": "#ffa726"
  },
  "User_clausesContext": {
    "description": "The USER_CLAUSES node is used to specify the user or users for which a PL/SQL program is created. It allows you to define the privileges and restrictions associated with the program.",
    "color": "#9932CC"
  },
  "File_permissions_clauseContext": {
    "description": "The FILE_PERMISSIONS_CLAUSE is used in Oracle PL/SQL to specify the file permissions for a file being created or accessed in the file system. It allows the user to define the read, write, and execute permissions for the file. This clause is typically used in the UTL_FILE package to control file permissions.",
    "color": "#00BFFF"
  },
  "File_owner_clauseContext": {
    "description": "The FILE_OWNER_CLAUSE is part of the Oracle PL/SQL CREATE DIRECTORY statement. It specifies the owner of the directory objects being created. The owner must have the necessary privileges to create a directory.",
    "color": "#DDBA7F"
  },
  "Scrub_clauseContext": {
    "description": "The SCRUB_CLAUSE is a clause used in Oracle PL/SQL to sanitize data by removing unwanted characters or patterns from strings.",
    "color": "#ffcc00"
  },
  "Quotagroup_clausesContext": {
    "description": "The QUOTAGROUP_CLAUSES clause is used in Oracle PL/SQL to define quota group clauses for a user or role. Quota groups are used to manage the storage space of different users or roles.",
    "color": "#b38600"
  },
  "Property_nameContext": {
    "description": "In Oracle PL/SQL, PROPERTY_NAME is a built-in function that returns the name of a specified property for a given object.",
    "color": "#2f9fd0"
  },
  "Property_valueContext": {
    "description": "Property_value is a term commonly used in Oracle PL/SQL to refer to the value assigned to a variable or property.",
    "color": "#00CCCC"
  },
  "Filegroup_clausesContext": {
    "description": "The filegroup_clauses in Oracle PL/SQL are used to specify the attributes and properties of filegroups in a database. Filegroups are logical containers that group multiple data files together for easier management and organization.",
    "color": "#FFA726"
  },
  "Add_filegroup_clauseContext": {
    "description": "The ADD_FILEGROUP_CLAUSE is used in Oracle PL/SQL to specify the name of a new filegroup to be added to a database tablespace.",
    "color": "#ff4081"
  },
  "Modify_filegroup_clauseContext": {
    "description": "The MODIFY_FILEGROUP_CLAUSE is used to modify the attributes of a filegroup in an Oracle PL/SQL database. The filegroup is a logical grouping of files that belong to a tablespace. This clause allows you to change the attributes of the filegroup, such as adding or removing files.",
    "color": "#f4a261"
  },
  "Move_to_filegroup_clauseContext": {
    "description": "The MOVE_TO_FILEGROUP clause is used in Oracle PL/SQL to move a table or partition from one filegroup to another. The filegroup is a logical grouping of data files that determines where the data is stored on disk.",
    "color": "#00aabb"
  },
  "Drop_filegroup_clauseContext": {
    "description": "The DROP FILEGROUP clause is used in Oracle PL/SQL to remove a filegroup from a database.",
    "color": "#E36B6B"
  },
  "Quorum_regularContext": {
    "description": "The QUORUM_REGULAR is a built-in constant in Oracle PL/SQL that represents the regular quorum for a commit operation in Real Application Clusters (RAC). It specifies the minimum number of voting instances required for a commit operation to be considered successful.",
    "color": "#d3d3d3"
  },
  "Undrop_disk_clauseContext": {
    "description": "The UNDROP DISK clause is used in Oracle's ASM (Automatic Storage Management) to restore a dropped ASM disk.",
    "color": "#44aaee"
  },
  "Diskgroup_availabilityContext": {
    "description": "The Diskgroup_availability is a PL/SQL function that returns the availability of a disk group.",
    "color": "#f0ad4e"
  },
  "Enable_disable_volumeContext": {
    "description": "The ENABLE/DISABLE VOLUME statement is used in Oracle PL/SQL to enable or disable the volume on a specific channel of a tape device.",
    "color": "#DCDCAA"
  },
  "Drop_functionContext": {
    "description": "The DROP FUNCTION statement is used to remove a user-defined function from the database. This statement permanently drops the function and all the associated data such as function bodies, dependencies, and privileges.",
    "color": "#fc0362"
  },
  "Alter_flashback_archiveContext": {
    "description": "The ALTER_FLASHBACK_ARCHIVE statement is used to configure or modify the settings for a Flashback Data Archive. Flashback Data Archive is a feature in Oracle PL/SQL that provides long-term storage and retrieval of historical data for auditing or compliance purposes.",
    "color": "#4287f5"
  },
  "Alter_hierarchyContext": {
    "description": "The ALTER HIERARCHY statement is used to modify the structure or behavior of a Oracle PL/SQL hierarchy.",
    "color": "#F9AD50"
  },
  "Alter_functionContext": {
    "description": "The ALTER FUNCTION statement is used to modify the definition of an existing PL/SQL function in Oracle. It allows you to change the function name, parameters, return type, and body of the function.",
    "color": "#cc00cc"
  },
  "Alter_javaContext": {
    "description": "The ALTER_JAVA statement is used to modify the properties or behavior of a Java class that has been previously loaded into the Oracle database. This statement can be used to change the class name, method signatures, access modifiers, constant values, and other attributes of the Java class.",
    "color": "#DD6E42"
  },
  "Match_stringContext": {
    "description": "The MATCH_STRING function is used to search for a specified pattern within a string and return the starting position of the first occurrence. It uses regular expressions to perform the pattern matching.",
    "color": "#FF9933"
  },
  "Create_function_bodyContext": {
    "description": "The CREATE FUNCTION statement is used to create a new user-defined function in Oracle PL/SQL. The function body contains the actual implementation of the function.",
    "color": "#FFA500"
  },
  "Sql_macro_bodyContext": {
    "description": "The SQL_MACRO_BODY is a PL/SQL node that represents the body of a SQL macro. It contains the logic and statements that will be executed when the macro is invoked. The SQL macro is a feature in Oracle PL/SQL that allows you to define reusable SQL code that can be used in queries or other SQL statements. It helps in reducing code repetition and improving code maintainability.",
    "color": "#f8a740"
  },
  "Parallel_enable_clauseContext": {
    "description": "The PARALLEL_ENABLE_CLAUSE is a clause in Oracle PL/SQL that allows you to enable or disable parallel execution of a particular SQL statement or query. When enabled, the query can be processed using multiple parallel slave processes, which can improve performance for large data operations.",
    "color": "#BA8FFF"
  },
  "Partition_by_clauseContext": {
    "description": "The PARTITION BY clause is used in Oracle PL/SQL to divide a result set into partitions or groups based on one or more columns. It is commonly used in analytical functions to perform calculations separately for each partition.",
    "color": "#f49842"
  },
  "Result_cache_clauseContext": {
    "description": "The RESULT_CACHE clause is used in PL/SQL to specify whether a function or procedure should use result caching. Result caching allows the result of a function or procedure to be stored in memory, improving performance by avoiding unnecessary re-computation.",
    "color": "#42aaf4"
  },
  "Relies_on_partContext": {
    "description": "The RELIES_ON_PART is a node in Oracle PL/SQL that represents a dependency relationship between different program units. It is used to indicate that one program unit relies on another program unit's specific part.",
    "color": "#f4a261"
  },
  "Streaming_clauseContext": {
    "description": "The STREAMING clause is used in Oracle PL/SQL to specify the type of data that should be streamed while querying a table in a Real-Time Materialized View. It allows the user to define how the data should be delivered and processed by the query.",
    "color": "#d6f5ff"
  },
  "Alter_outlineContext": {
    "description": "The ALTER_OUTLINE statement is used to modify an existing outline in Oracle PL/SQL. An outline is a set of hints that provides instructions to the optimizer on how to execute a SQL statement.",
    "color": "#29af7f"
  },
  "Outline_optionsContext": {
    "description": "The OUTLINE_OPTIONS hint is used to specify the level of detail for the execution plan outline used by the optimizer. It allows you to control the behavior of the optimizer by specifying which operations should be included or excluded from the execution plan outline.",
    "color": "#f4d452"
  },
  "Alter_lockdown_profileContext": {
    "description": "The ALTER_LOCKDOWN_PROFILE statement is used to modify an existing lockdown profile in Oracle PL/SQL. A lockdown profile is a named collection of privileges that restricts the operations that can be performed by a user or a group of users. This statement allows you to change the name of the lockdown profile, enable or disable it, and modify the list of unlocked privileges.",
    "color": "#f07178"
  },
  "Lockdown_featureContext": {
    "description": "The LOCKDOWN_FEATURE is a built-in constant in Oracle PL/SQL that indicates whether specific features of the language should be restricted.",
    "color": "#008080"
  },
  "Lockdown_optionsContext": {
    "description": "The LOCKDOWN_OPTIONS parameter is used to specify the level of lockdown for PL/SQL program units in Oracle Database. It determines the restrictions on the capabilities and privileges that PL/SQL program units can have.",
    "color": "#d4c343"
  },
  "Lockdown_statementsContext": {
    "description": "The LOCKDOWN statements are used in Oracle PL/SQL to control the execution environment by restricting certain actions or operations.",
    "color": "#DD4B39"
  },
  "Statement_clausesContext": {
    "description": "Statement_clauses refers to the different clauses that can be used in Oracle PL/SQL statements. These clauses provide additional functionality and control over the execution of the statements.",
    "color": "#f4b942"
  },
  "Clause_optionsContext": {
    "description": "Clause options in Oracle PL/SQL refer to the various settings and parameters that can be specified within different clauses of a PL/SQL statement. These options provide additional control and customization for the execution of SQL and procedural statements.",
    "color": "#23c3e8"
  },
  "Option_valuesContext": {
    "description": "Option_values is a PL/SQL node used to store multiple values for a specific option. It is commonly used in situations where a single option can have multiple possible values.",
    "color": "#808080"
  },
  "String_listContext": {
    "description": "String_list is a collection datatype in Oracle PL/SQL that stores a list of strings. It allows you to group multiple string values together as a single object.",
    "color": "#f15a24"
  },
  "Disable_enableContext": {
    "description": "The DISABLE ENABLE statement is used in Oracle PL/SQL to disable or enable triggers, constraints, or indexes on a table.",
    "color": "#D4D400"
  },
  "Drop_lockdown_profileContext": {
    "description": "The DROP_LOCKDOWN_PROFILE statement is used to remove a previously created lockdown profile in Oracle PL/SQL. A lockdown profile is a security feature that allows fine-grained access control for database users. When you drop a lockdown profile, all the settings and restrictions associated with that profile are deleted.",
    "color": "#f6a434"
  },
  "Drop_packageContext": {
    "description": "The DROP PACKAGE statement is used to remove a package specification or body and all of its dependent objects from the database.",
    "color": "#F92672"
  },
  "Alter_packageContext": {
    "description": "The ALTER PACKAGE statement is used to modify the definition of an existing package in Oracle PL/SQL. It can be used to add, modify or drop procedures, functions, variables, constants and other elements in the package.",
    "color": "#f18c35"
  },
  "Create_packageContext": {
    "description": "The CREATE PACKAGE statement is used to create a package in Oracle PL/SQL. A package is a schema object that groups related variables, constants, cursors, exceptions, and subprograms together, allowing easier organization and modularization of code.",
    "color": "#FF8800"
  },
  "Create_package_bodyContext": {
    "description": "The CREATE PACKAGE BODY statement is used to define the body of a PL/SQL package. A package body is the implementation part of a package and contains the actual code and logic for the package procedures, functions, and variables.",
    "color": "#f3a23a"
  },
  "Package_obj_specContext": {
    "description": "A package object specification in Oracle PL/SQL defines the public interface of a package. It includes the declarations of variables, cursors, types, and subprograms that can be accessed by other programs.",
    "color": "#ffcb6b"
  },
  "Procedure_specContext": {
    "description": "A procedure_spec is used to define the specification or interface of a procedure in Oracle PL/SQL. It includes the name of the procedure and any parameters that the procedure accepts or returns.",
    "color": "#fcff00"
  },
  "Function_specContext": {
    "description": "A function specification in Oracle PL/SQL declares the name, parameters, and return type of a function without providing the implementation details. It is used to define the interface of a function that is later implemented in a function body.",
    "color": "#00ab00"
  },
  "Package_obj_bodyContext": {
    "description": "The PACKAGE_OBJ_BODY node represents the body of a package object in Oracle PL/SQL. It contains the implementation code for the package, including declarations, definitions of procedures and functions, and any other code that makes up the package body. The package body is used to define the behavior of the package and can be seen as the implementation of the package specification.",
    "color": "#d773ff"
  },
  "Alter_pmem_filestoreContext": {
    "description": "The ALTER_PMEM_FILESTORE statement is used to modify the attributes of a Persistent Memory (PMEM) file store in Oracle PL/SQL. It allows you to change the size or location of the PMEM file store.",
    "color": "#FF5733"
  },
  "Drop_pmem_filestoreContext": {
    "description": "The DROP_PMEM_FILESTORE statement is used to remove a persistent memory (PMEM) filestore from an Oracle database.",
    "color": "#66CCCC"
  },
  "Drop_procedureContext": {
    "description": "The DROP PROCEDURE statement is used to remove a stored procedure from the database.",
    "color": "#35a8e0"
  },
  "Alter_procedureContext": {
    "description": "The ALTER PROCEDURE statement is used to modify an existing stored procedure in Oracle PL/SQL. It allows you to change the definition of the procedure, including its name, parameters, and body.",
    "color": "#f7931e"
  },
  "Function_bodyContext": {
    "description": "A function body is a block of code that contains the implementation of a function in Oracle PL/SQL. It defines the logic and operations that will be executed when the function is called.",
    "color": "#f9b042"
  },
  "Procedure_bodyContext": {
    "description": "The procedure_body is a node in Oracle PL/SQL that contains the executable code of a procedure. It includes statements and declarations that define the logic and behavior of the procedure.",
    "color": "#ffa07a"
  },
  "Create_procedure_bodyContext": {
    "description": "The CREATE PROCEDURE BODY statement is used to define the body of a stored procedure in Oracle PL/SQL. It specifies the actual code or statements that will be executed when the procedure is called.",
    "color": "#f08080"
  },
  "Alter_resource_costContext": {
    "description": "The ALTER_RESOURCE_COST statement is used to modify the resource cost of a specific resource plan or consumer group in Oracle Database. It allows you to adjust the resource allocation and prioritization for different groups or plans within the database.",
    "color": "#ff7f50"
  },
  "Drop_outlineContext": {
    "description": "The DROP OUTLINE statement removes an outline from the database.",
    "color": "#00aba9"
  },
  "Alter_rollback_segmentContext": {
    "description": "The ALTER ROLLBACK SEGMENT statement is used to modify the attributes of an existing rollback segment in an Oracle database. This statement allows you to change the online/offline status, storage parameters, and other properties of the rollback segment.",
    "color": "#f9c74f"
  },
  "Drop_restore_pointContext": {
    "description": "The DROP_RESTORE_POINT statement is used to remove a previously created restore point in Oracle.",
    "color": "#D4D4D4"
  },
  "Drop_rollback_segmentContext": {
    "description": "The DROP_ROLLBACK_SEGMENT statement is used to drop a rollback segment from the database. Rollback segments are used to store undo information for transactions and are necessary for maintaining data consistency and supporting rollback operations.",
    "color": "#4287f5"
  },
  "Drop_roleContext": {
    "description": "The DROP_ROLE statement is used to remove a role from the database. When a role is dropped, all privileges and grantees associated with the role are also removed.",
    "color": "#b58900"
  },
  "Create_pmem_filestoreContext": {
    "description": "The CREATE_PMEM_FILESTORE command is used in Oracle PL/SQL to create a persistent memory (PMEM) file store. PMEM file stores allow for efficient data storage and retrieval in a persistent memory environment.",
    "color": "#FFA500"
  },
  "Pmem_filestore_optionsContext": {
    "description": "The Pmem_filestore_options node represents the options for the PMEM filestore in Oracle PL/SQL. PMEM filestore is used to store persistent data on Persistent Memory (PMem) devices.",
    "color": "#007BFF"
  },
  "File_pathContext": {
    "description": "The FILE_PATH is a user-defined PL/SQL data type that represents the path of a file in the file system.",
    "color": "#be643c"
  },
  "Create_rollback_segmentContext": {
    "description": "The CREATE ROLLBACK SEGMENT statement is used to create a new rollback segment in Oracle PL/SQL. Rollback segments are used to temporarily store undo information for transactions.",
    "color": "#ff8c00"
  },
  "Drop_triggerContext": {
    "description": "The DROP TRIGGER statement is used to remove a trigger from a table in the Oracle database. Triggers are database objects that are associated with a table and are automatically executed in response to specific events or actions on the table, such as INSERT, UPDATE, or DELETE operations.",
    "color": "#D0D0D0"
  },
  "Alter_triggerContext": {
    "description": "The ALTER TRIGGER statement is used to modify the definition of an existing trigger in Oracle PL/SQL. It allows you to change the trigger name, its timing (BEFORE/AFTER), event (INSERT/UPDATE/DELETE), and the PL/SQL block that is executed when the trigger is fired.",
    "color": "#F92672"
  },
  "Create_triggerContext": {
    "description": "The CREATE TRIGGER statement is used to create a new trigger in Oracle PL/SQL. Triggers are stored programs that are executed automatically in response to specific events or actions on a table or view.",
    "color": "#4e9a06"
  },
  "Trigger_follows_clauseContext": {
    "description": "The TRIGGER_FOLLOWS_CLAUSE is used in Oracle PL/SQL to specify the sequence in which triggers should fire when multiple triggers are defined on a table. It allows the developer to control the firing order of triggers.",
    "color": "#ff6f00"
  },
  "Trigger_when_clauseContext": {
    "description": "The TRIGGER_WHEN_CLAUSE is an optional part of a trigger definition in Oracle PL/SQL. It allows you to specify a condition that must be met for the trigger to execute. If the condition evaluates to true, the trigger's statements will be executed; otherwise, they will be skipped.",
    "color": "#D4FB6B"
  },
  "Simple_dml_triggerContext": {
    "description": "A simple DML trigger is a database object that executes automatically in response to a DML (Data Manipulation Language) statement, such as INSERT, UPDATE, or DELETE, being executed on a specific table. This type of trigger is commonly used to enforce business rules or perform auditing in a database.",
    "color": "#53a5c1"
  },
  "For_each_rowContext": {
    "description": "The FOR EACH ROW statement in Oracle PL/SQL is used in triggers to define a block of code that is executed for each row affected by the triggering table event. It allows you to perform specific actions or apply business logic on each affected row.",
    "color": "#D4D4D4"
  },
  "Compound_dml_triggerContext": {
    "description": "A compound DML trigger is a type of trigger in Oracle PL/SQL that is fired in response to multiple data manipulation language (DML) statements, such as INSERT, UPDATE, or DELETE, executed against a specific table or view.",
    "color": "#f4a742"
  },
  "Non_dml_triggerContext": {
    "description": "A non-DML trigger is a type of trigger in Oracle PL/SQL that is not fired by data manipulation language (DML) statements, such as INSERT, UPDATE, or DELETE. Non-DML triggers are fired by non-DML statements, such as ALTER, CREATE, or DROP, or by system events, such as database startup or shutdown.",
    "color": "#D4AF37"
  },
  "Trigger_bodyContext": {
    "description": "The trigger_body is a PL/SQL block of code that is executed when a specific event occurs on a database table. It is the main part of a trigger and contains the logic or actions that are performed when the trigger is fired.",
    "color": "#ff00ff"
  },
  "Routine_clauseContext": {
    "description": "The ROUTINE_CLAUSE is used in PL/SQL to define the characteristics of a stored procedure, function, or package. It specifies details such as the access mode (READ or WRITE), whether the routine is deterministic (returns the same result for the same inputs), and whether it can be called from SQL statements.",
    "color": "#E69138"
  },
  "Compound_trigger_blockContext": {
    "description": "The COMPOUND_TRIGGER_BLOCK is a PL/SQL block used within a compound trigger in Oracle PL/SQL. It is responsible for defining the trigger logic that will be executed on different timing points (BEFORE, AFTER, and INSTEAD OF) of a triggering DML statement.",
    "color": "#FFA500"
  },
  "Timing_point_sectionContext": {
    "description": "A timing_point_section is a portion of a route that is defined by a sequence of timing points",
    "color": "#1e90ff"
  },
  "Non_dml_eventContext": {
    "description": "The NON_DML_EVENT is a PL/SQL event that is raised when a non-DML (Data Manipulation Language) statement is executed. It can be used to perform certain actions whenever a non-DML statement is executed, such as logging or auditing.",
    "color": "#ffcc00"
  },
  "Dml_event_clauseContext": {
    "description": "The DML_EVENT_CLAUSE is a part of the INSERT, UPDATE, DELETE, or MERGE statements in Oracle PL/SQL. It specifies the events that should trigger the statement to be executed. The clause can be used to specify conditions such as BEFORE, AFTER, or INSTEAD OF a DML event.",
    "color": "#FF6F00"
  },
  "Dml_event_elementContext": {
    "description": "Dml_event_element is a component of the DML event clause used in Oracle PL/SQL triggers. It represents a specific column or attribute that triggers the event.",
    "color": "#ff9933"
  },
  "Dml_event_nested_clauseContext": {
    "description": "The DML_EVENT_NESTED_CLAUSE is used in Oracle PL/SQL to define a nested DML event clause. This clause is used within a trigger to specify the conditions under which the trigger should fire based on the DML (Data Manipulation Language) events nested within the trigger. It allows the trigger to only fire when specific DML events occur within the trigger's body.",
    "color": "#ffcc00"
  },
  "Referencing_clauseContext": {
    "description": "The REFERENCING clause is used in Oracle PL/SQL to specify the correlation between the formal parameters of a stored procedure or function and the corresponding actual parameters in a function call or procedure invocation.",
    "color": "#FF9900"
  },
  "Referencing_elementContext": {
    "description": "In Oracle PL/SQL, a referencing element is used to refer to a column or variable in a table or record. It allows you to access or modify the value of the specified element.",
    "color": "#ffa500"
  },
  "Drop_typeContext": {
    "description": "The DROP_TYPE statement is used to remove a user-defined datatype, which was previously created using the CREATE TYPE statement, from the database.",
    "color": "#9900CC"
  },
  "Alter_typeContext": {
    "description": "The ALTER TYPE statement is used to modify the definition of a user-defined object type in Oracle PL/SQL. It can be used to add or drop attributes or methods, change the datatype or length of attributes, or modify methods of the object type.",
    "color": "#7D26CD"
  },
  "Compile_type_clauseContext": {
    "description": "The compile_type_clause is used in Oracle PL/SQL to specify the compile-time checking level for a PL/SQL program unit. It allows you to control the strictness of the compilation process and enforce certain rules and standards during compilation.",
    "color": "#DDA0DD"
  },
  "Replace_type_clauseContext": {
    "description": "The REPLACE_TYPE_CLAUSE is used in PL/SQL to replace the definition of a user-defined type. It is typically used in ALTER TYPE statements to modify the attributes, methods, or any other aspects of a type definition.",
    "color": "#00ADB5"
  },
  "Alter_method_specContext": {
    "description": "The ALTER_METHOD_SPEC node is used to modify the specification of a method in a type specification.",
    "color": "#f1c40f"
  },
  "Alter_method_elementContext": {
    "description": "The ALTER_METHOD_ELEMENT statement is used to modify the attributes or behavior of a method within a user-defined object type. It can be used to change the method's name, parameters, return type, or implementation details.",
    "color": "#fcbf1e"
  },
  "Alter_attribute_definitionContext": {
    "description": "The ALTER_ATTRIBUTE_DEFINITION statement is used to modify the definition of a user-defined attribute for an object type or a collection type.",
    "color": "#f08d49"
  },
  "Attribute_definitionContext": {
    "description": "An attribute definition is used in Oracle PL/SQL to define attributes for an object type. Object types are user-defined types that encapsulate data and behavior. Attribute definitions specify the name, data type, and optionally the default value or nullability of an attribute.",
    "color": "#ff0080"
  },
  "Alter_collection_clausesContext": {
    "description": "The ALTER COLLECTION clauses in Oracle PL/SQL are used to modify the properties of collection types (varrays and nested tables).",
    "color": "#FF7F50"
  },
  "Dependent_handling_clauseContext": {
    "description": "The dependent_handling_clause is used in Oracle PL/SQL to specify how the dependent cursors should be handled during the execution of a SQL statement. It specifies whether the dependent cursors should be marked as invalid and the SQL statement re-parsed, or whether the dependent cursors should be preserved and reused.",
    "color": "#f0ad4e"
  },
  "Dependent_exceptions_partContext": {
    "description": "The DEPENDENT_EXCEPTIONS_PART is used in an exception handler to specify one or more exceptions that are dependent on the specified exception.",
    "color": "#98c379"
  },
  "Create_typeContext": {
    "description": "The CREATE TYPE statement is used to create a user-defined data type in Oracle PL/SQL. This allows you to create complex data structures that can be used as variables or parameters in your PL/SQL programs. You can define the structure of the data type by specifying its attributes and methods.",
    "color": "#f6c23e"
  },
  "Type_definitionContext": {
    "description": "In Oracle PL/SQL, a type definition is used to define a new data type. It allows you to create custom data types based on existing data types or define user-defined record or table types. Type definitions can be used to improve code readability and maintainability by encapsulating complex data structures into a single entity.",
    "color": "#BFBFBF"
  },
  "Object_type_defContext": {
    "description": "The OBJECT_TYPE_DEF is a node in Oracle PL/SQL that defines a user-defined object type. An object type is a composite data type that allows you to create your own data structure consisting of multiple attributes. This node is used to declare and define the structure and behavior of the object type.",
    "color": "#64B5F6"
  },
  "Object_as_partContext": {
    "description": "In Oracle PL/SQL, OBJECT_AS_PART is used to define a nested table type attribute within an object type. It allows an object type to have a collection of elements, similar to an array or list. This nested table type can then be used as a column type in a table or as a parameter type in a procedure or function.",
    "color": "#BB86FC"
  },
  "Object_under_partContext": {
    "description": "The OBJECT_UNDER_PART is a PL/SQL node that represents a subpart of an object under construction or being altered. It is used to define a specific sub-component or property of the object.",
    "color": "#F7922B"
  },
  "Nested_table_type_defContext": {
    "description": "A nested table type definition is used to define a nested table type in PL/SQL. A nested table is a one-dimensional, unbounded collection of elements with the same data type. The type definition specifies the data type of the elements that can be stored in the nested table.",
    "color": "#f5c400"
  },
  "Sqlj_object_typeContext": {
    "description": "The SQLJ_OBJECT_TYPE is a built-in data type in PL/SQL that represents a Java object type. It is used to declare variables, parameters, and columns that store Java objects.",
    "color": "#36a166"
  },
  "Type_bodyContext": {
    "description": "The TYPE BODY statement is used to define the implementation of a user-defined type in Oracle PL/SQL. It is used in conjunction with the TYPE statement to create a complete user-defined type.",
    "color": "#f49842"
  },
  "Type_body_elementsContext": {
    "description": "Type_body_elements is a node in Oracle PL/SQL that represents the various elements that can be included within the body of a user-defined type. These elements include the declaration and definition of attributes (variables), procedures, functions, constructors, and other type-related components.",
    "color": "#4F5D95"
  },
  "Map_order_func_declarationContext": {
    "description": "The MAP_ORDER_FUNC_DECLARATION is a PL/SQL declaration statement used to define a custom ordering function for a MAP or ORDER BY clause.",
    "color": "#7E57C2"
  },
  "Subprog_decl_in_typeContext": {
    "description": "A subprog_decl_in_type is a PL/SQL node used to declare a subprogram within a user-defined datatype.",
    "color": "#ff914d"
  },
  "Proc_decl_in_typeContext": {
    "description": "The PROCEDURE declaration in a user-defined TYPE.",
    "color": "#eb5a46"
  },
  "Func_decl_in_typeContext": {
    "description": "A FUNC_DECL_IN_TYPE node represents a function declaration that is part of a user-defined datatype in Oracle PL/SQL. This node is used to define a function that operates on the datatype.",
    "color": "#ff7f00"
  },
  "Constructor_declarationContext": {
    "description": "A constructor declaration is used to define a constructor for a PL/SQL object type. The constructor is a special method that is automatically called when an object of the type is created. It is used to initialize the object's attributes and perform any necessary setup.",
    "color": "#f15a24"
  },
  "Modifier_clauseContext": {
    "description": "The MODIFIER_CLAUSE is used in a SELECT statement to specify additional modifiers or options for the selected data. It can be used to control the behavior of the query, such as sorting the result set, limiting the number of rows returned, and skipping a certain number of rows.",
    "color": "#5DADE2"
  },
  "Object_member_specContext": {
    "description": "The PL/SQL object_member_spec is used to specify the objects within a user-defined type. It is used in object declarations, assignments, and member access expressions.",
    "color": "#e69500"
  },
  "Sqlj_object_type_attrContext": {
    "description": "The SQLJ_OBJECT_TYPE_ATTR is a built-in attribute in Oracle PL/SQL that is used to reference the attributes or properties of a SQLJ object type.",
    "color": "#FFD700"
  },
  "Element_specContext": {
    "description": "The element_spec is used in PL/SQL to define and specify elements of a collection or record type.",
    "color": "#f9d423"
  },
  "Element_spec_optionsContext": {
    "description": "Element_spec_options is a clause used in the CREATE TYPE or CREATE TYPE BODY statement in Oracle PL/SQL. It specifies the options for creating or modifying the elements of a user-defined type.",
    "color": "#D4D4D4"
  },
  "Subprogram_specContext": {
    "description": "A subprogram_spec is a declaration that specifies the signature of a subprogram (procedure or function). It includes the name of the subprogram, the list of parameters (if any), and the return type (if it is a function). This declaration is used to define the interface of the subprogram, allowing other parts of the code to call it.",
    "color": "#f9c851"
  },
  "Overriding_subprogram_specContext": {
    "description": "The overriding_subprogram_spec node is used to override a subprogram that has been previously declared in a parent type or interface. It is used to redefine the behavior of the subprogram in the derived type or subtype.",
    "color": "#AF6E4D"
  },
  "Overriding_function_specContext": {
    "description": "The OVERRIDING_FUNCTION_SPEC clause is used in the specification of a package or type to indicate that a function with the same name can be overridden by a subtype.",
    "color": "#00aaaa"
  },
  "Type_procedure_specContext": {
    "description": "A type procedure specification is used to define the interface and behavior of a procedure within a PL/SQL type.",
    "color": "#FF8000"
  },
  "Type_function_specContext": {
    "description": "A TYPE function specification is used to define a user-defined function that is associated with a user-defined type. It specifies the name, parameter list, return type, and optional deterministic and parallel_enable modifiers of the function.",
    "color": "#e69f00"
  },
  "Constructor_specContext": {
    "description": "Constructor_spec is a declaration that defines a constructor for a user-defined type. It specifies the arguments and return type of the constructor.",
    "color": "#d9d9d9"
  },
  "Map_order_function_specContext": {
    "description": "The MAP_ORDER_FUNCTION_SPEC is a type definition used in PL/SQL collections to specify the type and order of elements in a map. It is used when declaring and initializing an associative array where the keys are of a specific data type and the values are of another data type. The type definition includes the name and the data types of both the keys and the values.",
    "color": "#d4caec"
  },
  "Pragma_clauseContext": {
    "description": "The PRAGMA clause is used in Oracle PL/SQL to specify compiler instructions or to enable/disable specific compiler features.",
    "color": "#008080"
  },
  "Pragma_elementsContext": {
    "description": "Pragma elements are used to declare compiler directives and control the behavior of the PL/SQL compiler. They are specified using the PRAGMA keyword followed by the desired directive.",
    "color": "#f6c90e"
  },
  "Type_elements_parameterContext": {
    "description": "The TYPE_ELEMENTS_PARAMETER is a parameter mode that is used in Oracle PL/SQL to pass elements of a user-defined collection type. It allows the procedure or function to access and manipulate individual elements of the collection.",
    "color": "#ac8cff"
  },
  "Drop_sequenceContext": {
    "description": "The DROP SEQUENCE statement is used to remove a sequence from the database. Sequences are database objects used to generate unique numeric values.",
    "color": "#e5b93d"
  },
  "Alter_sequenceContext": {
    "description": "The ALTER_SEQUENCE statement is used to modify the properties of a sequence in the Oracle database.",
    "color": "#F92672"
  },
  "Alter_sessionContext": {
    "description": "The ALTER SESSION statement is used to modify the current session's settings for a specific user. It can be used to change various parameters such as language, date format, time zone, and so on.",
    "color": "#569CD6"
  },
  "Alter_session_set_clauseContext": {
    "description": "The ALTER SESSION SET clause is used in Oracle PL/SQL to modify the attributes of the current session. It allows you to change various session-specific settings such as NLS parameters, optimizer goals, and session-level initialization parameters.",
    "color": "#f9cc82"
  },
  "Create_sequenceContext": {
    "description": "The CREATE SEQUENCE statement is used to create a sequence in Oracle PL/SQL. A sequence is a user-defined object that generates a series of unique numbers. It is typically used to generate primary keys for tables.",
    "color": "#DB4C40"
  },
  "Sequence_specContext": {
    "description": "A sequence_spec is used to define and specify the properties of a sequence in Oracle PL/SQL.",
    "color": "#569CD6"
  },
  "Sequence_start_clauseContext": {
    "description": "The SEQUENCE_START_CLAUSE is a part of the CREATE SEQUENCE statement in Oracle PL/SQL. It specifies the starting value of a sequence and controls the way the sequence increments or decrements.",
    "color": "#b35a00"
  },
  "Create_analytic_viewContext": {
    "description": "The CREATE_ANALYTIC_VIEW statement is used to create an analytic view in Oracle PL/SQL. An analytic view is a database object that provides a simplified view of complex data by grouping and analyzing data based on specified dimensions and measures. Analytic views can be used to perform advanced analytics and reporting.",
    "color": "#D8BFD8"
  },
  "Classification_clauseContext": {
    "description": "The CLASSIFICATION_CLAUSE is used in Oracle PL/SQL to classify or categorize rows returned by a query into different groups. It allows you to perform analysis on different groups based on certain criteria.",
    "color": "#d6b656"
  },
  "Caption_clauseContext": {
    "description": "The CAPTION clause is used in a SELECT statement to provide a user-defined caption for a column in the result set. It allows you to customize the column heading displayed in the output.",
    "color": "#FF9900"
  },
  "Description_clauseContext": {
    "description": "The DESCRIPTION clause is used in Oracle PL/SQL to provide comments or a description for a program unit or block of code. It is primarily used for documentation purposes and does not affect the functionality of the code.",
    "color": "#01AEEF"
  },
  "Classification_itemContext": {
    "description": "The CLASSIFICATION_ITEM is a type of collection that represents an item within a classification system. It can be used to define categories, subcategories, or any other form of hierarchical classification.",
    "color": "#f38c00"
  },
  "LanguageContext": {
    "description": "The LANGUAGE keyword in Oracle PL/SQL is used to specify the language in which a stored procedure or function is written. It is mainly used when creating or altering a stored procedure or function.",
    "color": "#69d2e7"
  },
  "Cav_using_clauseContext": {
    "description": "The CAV_Using_Clause is used in Oracle PL/SQL to specify the columns or expressions from the source table that will be available within a CAV (Collection-Associated View). It is used in the CREATE OR REPLACE CAV statement.",
    "color": "#ffff00"
  },
  "Dim_by_clauseContext": {
    "description": "The DIM BY clause is used in Oracle PL/SQL to specify the dimension of a collection or array. It is used when declaring a collection variable or parameter, and determines the maximum number of elements or subscripts that the collection can have.",
    "color": "#f79256"
  },
  "Dim_keyContext": {
    "description": "The DIM_KEY keyword is not a valid Oracle PL/SQL node. It appears to be a custom identifier or variable name. Please provide more context or clarify your question.",
    "color": "#ffffff"
  },
  "Dim_refContext": {
    "description": "The DIM_REF is a reference to a user-defined or system-defined package constant or global variable.",
    "color": "#009688"
  },
  "Hier_refContext": {
    "description": "The HIER_REF is a built-in data type in Oracle PL/SQL that represents a reference to a specific row in a hierarchical query result set. It is used to navigate and process hierarchical data structures.",
    "color": "#6A8759"
  },
  "Measures_clauseContext": {
    "description": "The MEASURES clause is part of the pivot operation in Oracle PL/SQL. It is used to specify the measures or aggregate functions to be applied to the pivoted data. It allows you to perform calculations and aggregations on the values of the defined measures.",
    "color": "#b5cea8"
  },
  "Av_measureContext": {
    "description": "AV_MEASURE is a built-in function in the Oracle PL/SQL language. It calculates the average measure of a given column within a specified group.",
    "color": "#d8bfd8"
  },
  "Base_meas_clauseContext": {
    "description": "The BASE_MEAS_CLAUSE is used in Oracle PL/SQL to specify the measures or columns for calculation in a SQL query when using the MODEL clause.",
    "color": "#b58900"
  },
  "Meas_aggregate_clauseContext": {
    "description": "The MEAS_AGGREGATE_CLAUSE is a clause used in the Oracle PL/SQL language to specify how the measurements in a SQL query result should be aggregated. It is used in the context of the MEASURE function, which is used to perform calculations on the values returned by a query. The MEAS_AGGREGATE_CLAUSE allows you to specify the aggregation method (such as SUM, AVG, MAX, MIN, etc.) and any additional parameters required by the aggregation function.",
    "color": "#f5f5f5"
  },
  "Calc_meas_clauseContext": {
    "description": "The CALC_MEAS_CLAUSE is used in Oracle PL/SQL to specify whether measures should be calculated or aggregated when querying data from a cube.",
    "color": "#DBB855"
  },
  "Default_measure_clauseContext": {
    "description": "The DEFAULT_MEASURE_CLAUSE is part of the CREATE CUBE statement in Oracle PL/SQL. It specifies the default aggregation method for measures that are not explicitly defined in the cube.",
    "color": "#00CCCC"
  },
  "Default_aggregate_clauseContext": {
    "description": "The DEFAULT_AGGREGATE_CLAUSE is used in the definition of a user-defined aggregate function in Oracle PL/SQL. It specifies the default behavior of the aggregate function when no values are passed to it during the aggregation.",
    "color": "#d9d272"
  },
  "Cache_clauseContext": {
    "description": "The CACHE clause is used in Oracle PL/SQL to specify the number of blocks to be cached in memory for a table or index. Caching data in memory can improve performance by reducing disk I/O operations.",
    "color": "#569cd6"
  },
  "Cache_specificationContext": {
    "description": "A cache specification in Oracle PL/SQL is used to define the behavior and properties of a cache. It specifies information such as the size of the cache, the eviction policy, and the time-to-live for cached items.",
    "color": "#DA70D6"
  },
  "Levels_clauseContext": {
    "description": "The LEVELS_CLAUSE is used in a hierarchical query in Oracle PL/SQL to specify the number of levels to be included in the result set. It is typically used in conjunction with the CONNECT BY clause to specify the depth of the hierarchy to be retrieved.",
    "color": "#6A8759"
  },
  "Level_specificationContext": {
    "description": "The level_specification is used in hierarchical queries in Oracle PL/SQL. It specifies the level number for each level in the hierarchy.",
    "color": "#408080"
  },
  "Level_group_typeContext": {
    "description": "The LEVEL_GROUP_TYPE is a user-defined collection type in Oracle PL/SQL used for grouping levels in hierarchical queries. It is typically used in conjunction with the CONNECT BY clause to define the hierarchy.",
    "color": "#BB86FC"
  },
  "Fact_columns_clauseContext": {
    "description": "The FACT_COLUMNS clause is used in a CREATE TABLE statement in Oracle PL/SQL to define the fact table columns for a materialized view.",
    "color": "#c678dd"
  },
  "Qry_transform_clauseContext": {
    "description": "The QRY_TRANSFORM_CLAUSE is used in Oracle PL/SQL to specify a query transformation for a particular query block in a SQL statement.",
    "color": "#f92672"
  },
  "Create_attribute_dimensionContext": {
    "description": "The CREATE_ATTRIBUTE_DIMENSION statement is used to create a new attribute dimension in Oracle PL/SQL. An attribute dimension is a type of dimension used for organizing data by its attributes rather than by explicit hierarchies. This statement defines the attributes and their properties for the dimension.",
    "color": "#f4a261"
  },
  "Ad_using_clauseContext": {
    "description": "The AD_USING_CLAUSE is used in an Oracle PL/SQL program to specify the columns or attributes from a record or a cursor that are used in an implicit or explicit cursor for data access. The AD_USING_CLAUSE is used along with the OPEN, FETCH, or CLOSE statements.",
    "color": "#fbc02d"
  },
  "Source_clauseContext": {
    "description": "The SOURCE clause is used in the CREATE PROCEDURE and CREATE FUNCTION statements in Oracle PL/SQL. It specifies the source code of the procedure or function. The source code can be provided inline within the CREATE statement or stored in a separate file referenced by its location.",
    "color": "#008080"
  },
  "Join_path_clauseContext": {
    "description": "The JOIN_PATH_CLAUSE is used in Oracle PL/SQL to specify the join method or algorithm to be used when executing a query that involves multiple tables. It is used in the FROM clause of a SQL statement and provides hints to the query optimizer on how to perform the join operation efficiently.",
    "color": "#007BBD"
  },
  "Join_conditionContext": {
    "description": "The join_condition is a clause used in SQL queries to specify the criteria for joining two or more tables. It is used to determine how the tables should be matched and combined in the result set. The join_condition is typically specified after the ON keyword in a JOIN statement.",
    "color": "#f6bd16"
  },
  "Join_condition_itemContext": {
    "description": "The Join_condition_item is used in a JOIN clause of an Oracle PL/SQL query to specify a condition that determines how two tables are to be joined. It represents a comparison between columns from the two tables.",
    "color": "#e6b800"
  },
  "Attributes_clauseContext": {
    "description": "The attributes_clause in Oracle PL/SQL is used to specify the attributes of a cursor or cursor variable. It allows you to define attributes such as RETURNING, COLLECT, or BULK COLLECT, which affect the behavior of a cursor or cursor variable.",
    "color": "#ff9800"
  },
  "Ad_attributes_clauseContext": {
    "description": "The AD_ATTRIBUTES_CLAUSE is used in Oracle PL/SQL for creating advanced data attributes. It allows specifying additional attributes for tables, columns, or other database objects. These attributes can include data types, default values, constraints, and other properties.",
    "color": "#979899"
  },
  "Ad_level_clauseContext": {
    "description": "The AD_LEVEL_CLAUSE is used in a hierarchical query in Oracle PL/SQL to specify the level within the hierarchy at which the query should start or stop retrieving data. It is typically used in conjunction with the CONNECT BY clause.",
    "color": "#d69c38"
  },
  "Key_clauseContext": {
    "description": "The KEY_CLAUSE is used in the Oracle PL/SQL language to define the key columns for a table or index. It specifies one or more columns that uniquely identify each row in the table or index.",
    "color": "#f5c242"
  },
  "Alternate_key_clauseContext": {
    "description": "The ALTERNATE_KEY clause is used in Oracle PL/SQL to specify an alternate key for a table. It is often used in combination with the PRIMARY KEY constraint to define multiple unique keys for a table.",
    "color": "#f99494"
  },
  "Dim_order_clauseContext": {
    "description": "The DIM_ORDER_CLAUSE is used in Oracle PL/SQL to specify the dimension ordering of a dimension in a materialized view. It is used in conjunction with the DIMENSION BY clause in the CREATE MATERIALIZED VIEW statement.",
    "color": "#f92672"
  },
  "All_clauseContext": {
    "description": "The ALL clause is used in combination with certain PL/SQL constructs to compare a value with all elements of a collection. It can be used with FORALL statements, EXISTS queries, and aggregate functions like MAX, MIN, COUNT, etc.",
    "color": "#B080FF"
  },
  "Create_audit_policyContext": {
    "description": "The CREATE_AUDIT_POLICY statement is used to create an audit policy in Oracle Database.",
    "color": "#7aa6c2"
  },
  "Privilege_audit_clauseContext": {
    "description": "The PRIVILEGE_AUDIT_CLAUSE is a clause in the GRANT or REVOKE statements in Oracle PL/SQL. It is used to enable or disable the auditing of privileges for specific users or roles. When this clause is specified with the GRANT statement, it enables the auditing of privileges granted to the specified users or roles. When specified with the REVOKE statement, it disables the auditing of privileges previously audited for the specified users or roles.",
    "color": "#f9ba32"
  },
  "Action_audit_clauseContext": {
    "description": "The ACTION_AUDIT_CLAUSE is a part of the Oracle PL/SQL language and is used to define the audit actions for a specific SQL statement. It allows you to specify whether or not to audit the execution of a specific SQL statement, and also provides options to control the level of auditing.",
    "color": "#E6DB74"
  },
  "System_actionsContext": {
    "description": "System_actions is a PL/SQL node used to execute specific actions related to the system or database.",
    "color": "#008080"
  },
  "Standard_actionsContext": {
    "description": "Standard Actions in Oracle PL/SQL are a set of predefined actions that can be executed using built-in PL/SQL packages or functions. These actions perform common tasks such as sending emails, generating random numbers, manipulating strings, and more.",
    "color": "#00bfff"
  },
  "Actions_clauseContext": {
    "description": "The ACTIONS_CLAUSE is used in the UPDATE statement in Oracle PL/SQL to specify the actions to be performed on rows that meet a certain condition.",
    "color": "#fcbf49"
  },
  "Object_actionContext": {
    "description": "The OBJECT_ACTION node in Oracle PL/SQL is used to perform operations on object types. It allows you to call methods or perform actions on objects of a specific type.",
    "color": "#f9c731"
  },
  "System_actionContext": {
    "description": "The SYSTEM_ACTION is a predefined constant in Oracle PL/SQL that indicates the action to be performed for a specific system trigger. It is used in system trigger code to determine the action to take when the trigger is fired. The available values for SYSTEM_ACTION are INSERT, UPDATE, DELETE, SELECT, CREATE, ALTER, DROP, GRANT, REVOKE, and LOGIN.",
    "color": "#d0d0d0"
  },
  "Component_actionsContext": {
    "description": "Component_actions is a PL/SQL package that provides functions for managing and performing actions on Oracle Application Express (APEX) components. This package allows you to programmatically create, modify, and delete components such as pages, items, regions, and buttons within an APEX application.",
    "color": "#ffbc42"
  },
  "Component_actionContext": {
    "description": "The COMPONENT_ACTION is a built-in PL/SQL variable that represents the current action being performed on a component.",
    "color": "#75a3a3"
  },
  "Role_audit_clauseContext": {
    "description": "The ROLE_AUDIT_CLAUSE is used in an Oracle PL/SQL program to specify the auditing options for a specific role. It is used together with the AUDIT statement to enable or disable the auditing of specific actions or privileges for a role.",
    "color": "#f0ad4e"
  },
  "Create_controlfileContext": {
    "description": "The CREATE CONTROLFILE statement is used to create a control file for an Oracle database. The control file is a binary file that contains metadata about the physical structure of the database, such as the names and locations of datafiles and log files, as well as other important information for database recovery and startup.",
    "color": "#7ec0ee"
  },
  "Controlfile_optionsContext": {
    "description": "The CONTROLFILE_OPTIONS parameter is used to specify various options related to the control file in Oracle database. It allows you to control the behavior of the control file such as the number of control files, their names and locations, and the retention policy.",
    "color": "#b5cea8"
  },
  "Logfile_clauseContext": {
    "description": "The LOGFILE_CLAUSE is a clause used in the CREATE DATABASE statement in Oracle PL/SQL. It is used to specify the physical locations and attributes of the redo log files for the database.",
    "color": "#f9c02f"
  },
  "Character_set_clauseContext": {
    "description": "The CHARACTER_SET_CLAUSE is used in Oracle PL/SQL to specify the character set of a database object, such as a table or column. It determines the set of characters that can be stored and manipulated in the object. The character set is important for proper collation and sorting of character data.",
    "color": "#229977"
  },
  "File_specificationContext": {
    "description": "A file specification is a string literal or a variable that specifies the name and location of a file in Oracle PL/SQL.",
    "color": "#02A9FF"
  },
  "Create_diskgroupContext": {
    "description": "The CREATE DISKGROUP statement is used to create an Oracle Automatic Storage Management (ASM) disk group. A disk group is a collection of disks that are managed as a unit and used to store data files, control files, online redo logs, and other types of files.",
    "color": "#ff8c00"
  },
  "Qualified_disk_clauseContext": {
    "description": "The QUALIFIED_DISK_CLAUSE is used in Oracle PL/SQL to specify the disk group and failure group for a disk operation.",
    "color": "#2b8c9b"
  },
  "Create_editionContext": {
    "description": "The CREATE_EDITION statement is used to create a new edition in Oracle PL/SQL. An edition is a version of a database schema that allows for making changes without affecting the existing objects in production. It is typically used in application upgrade scenarios, where the new edition is created and changes are made to it before switching the applications to use the new edition. This statement is part of the Oracle Edition-Based Redefinition feature.",
    "color": "#f16464"
  },
  "Create_flashback_archiveContext": {
    "description": "The CREATE_FLASHBACK_ARCHIVE statement is used to create a flashback archive in Oracle PL/SQL. A flashback archive is a storage space that stores past versions of table rows in a database. It allows you to query and retrieve historical data from these past versions using Oracle Flashback Query.",
    "color": "#FF8C00"
  },
  "Flashback_archive_quotaContext": {
    "description": "The FLASHBACK_ARCHIVE_QUOTA parameter allows you to set a quota for the amount of space a user or table can consume in the Flashback Data Archive. The Flashback Data Archive is used to store historical changes made to database rows over time.",
    "color": "#f0f0f0"
  },
  "Flashback_archive_retentionContext": {
    "description": "Flashback_archvie_retention is a parameter in Oracle PL/SQL used to specify the minimum amount of time, in minutes, that archived undo data should be retained. This parameter is used in conjunction with the Flashback Database feature, which allows you to rewind and recover a database to a previous point in time.",
    "color": "#6A9FB5"
  },
  "Create_hierarchyContext": {
    "description": "The CREATE HIERARCHY statement is used in Oracle PL/SQL to create a hierarchical structure or tree-like organization of data. It is commonly used in scenarios where data needs to be organized in a tree structure, such as representing organizational charts, product categories, or file directories.",
    "color": "#ff8080"
  },
  "Hier_using_clauseContext": {
    "description": "The HIERARCHY USING clause is used in a PL/SQL query to specify the hierarchical relationship between rows in a table. It is used in conjunction with the CONNECT BY clause to define the hierarchical query.",
    "color": "#00e6e6"
  },
  "Level_hier_clauseContext": {
    "description": "The LEVEL_HIER_CLAUSE is a feature in Oracle PL/SQL that allows you to query hierarchical data using the CONNECT BY clause and specify the level of the hierarchy. It is used to retrieve data from tables that have a parent-child relationship, such as an organizational hierarchy.",
    "color": "#AF6E4D"
  },
  "Hier_attrs_clauseContext": {
    "description": "The HIER_ATTRS_CLAUSE is used in Oracle PL/SQL to specify the attributes for hierarchical queries. It is used in combination with the START WITH and CONNECT BY clauses to define the hierarchical relationship between rows in a query.",
    "color": "#ffa500"
  },
  "Hier_attr_clauseContext": {
    "description": "The HIER_ATTR_CLAUSE is a clause used in Oracle PL/SQL to specify attributes for hierarchical queries.",
    "color": "#F7922B"
  },
  "Hier_attr_nameContext": {
    "description": "Hier_attr_name is a built-in function in Oracle PL/SQL that is used to retrieve the attribute name of a hierarchical query. It returns the attribute name of a column specified in a hierarchical query using the CONNECT BY clause.",
    "color": "#4C9AFF"
  },
  "Create_indexContext": {
    "description": "The CREATE INDEX statement is used to create an index on a table in Oracle PL/SQL. Indexes are used to improve the performance of database queries by allowing the database to quickly find the rows of a table that satisfy certain search conditions.",
    "color": "#00aaff"
  },
  "Cluster_index_clauseContext": {
    "description": "The CLUSTER_INDEX_CLAUSE specifies the name of the index to be created or rebuilt on the cluster key. This clause is used in the CREATE CLUSTER statement.",
    "color": "#d4d4d4"
  },
  "Cluster_nameContext": {
    "description": "In Oracle PL/SQL, CLUSTER_NAME is a built-in function that returns the name of the cluster in which the current instance is a member. A cluster is a group of Oracle instances that work together to provide high availability and scalability.",
    "color": "#f0ad4e"
  },
  "Table_index_clauseContext": {
    "description": "The TABLE_INDEX_CLAUSE is used in Oracle PL/SQL to specify indexes for the tables involved in a DML statement or a query. It allows you to control which indexes are used by the database during table access.",
    "color": "#F7922B"
  },
  "Bitmap_join_index_clauseContext": {
    "description": "The BITMAP_JOIN_INDEX_CLAUSE is used in Oracle PL/SQL to specify a bitmap join index for a query. A bitmap join index is a special type of index that is used to improve the performance of queries involving join operations on large tables. By using a bitmap join index, Oracle can eliminate the need to perform expensive join operations by directly accessing the relevant bitmap indexes.",
    "color": "#f7c24c"
  },
  "Index_exprContext": {
    "description": "The INDEX_EXPR is a node in Oracle PL/SQL that represents an indexed reference to an array element or a collection element. It is used to access a specific element within an array or a collection by providing the appropriate index value.",
    "color": "#ff9900"
  },
  "Index_propertiesContext": {
    "description": "The index_properties node is used to define the properties of an index in Oracle PL/SQL. It allows you to specify options such as the type of index (e.g., B-tree index, bitmap index), the column(s) to be indexed, and any additional options such as compression or partitioning.",
    "color": "#ff9800"
  },
  "Domain_index_clauseContext": {
    "description": "The DOMAIN_INDEX_CLAUSE is used in CREATE INDEX statements to specify a domain index for an index-organized table. A domain index is a B-tree index built on one or more columns of a user-defined data type.",
    "color": "#f9aa33"
  },
  "Local_domain_index_clauseContext": {
    "description": "The local_domain_index_clause is used in the CREATE INDEX statement in Oracle PL/SQL to specify whether the index created is a local or global domain index.",
    "color": "#f49842"
  },
  "Xmlindex_clauseContext": {
    "description": "The XMLIndex_clause is used in the CREATE INDEX statement in Oracle PL/SQL to specify the details of an XML index. It allows you to define the index type, the XMLType column to be indexed, and other index-related parameters.",
    "color": "#F2931D"
  },
  "Local_xmlindex_clauseContext": {
    "description": "The LOCAL_XMLINDEX_CLAUSE is a clause used in the CREATE INDEX statement of Oracle PL/SQL. It is used to create a local XML index on an XMLType column in a table. Local XML indexes improve the performance of XML queries by indexing XML data within a particular XML document or set of XML documents stored in the table.",
    "color": "#f7931e"
  },
  "Global_partitioned_indexContext": {
    "description": "A global partitioned index is an index that is partitioned in the same way as the underlying table. Each partition of the index corresponds to a partition of the table.",
    "color": "#e1bee7"
  },
  "Index_partitioning_clauseContext": {
    "description": "The INDEX_PARTITIONING_CLAUSE is used in Oracle PL/SQL to specify how a table's index partitions should be created or maintained. The clause is used along with the CREATE TABLE or ALTER TABLE statements to define the partitioning strategy for the index of a table.",
    "color": "#F2937D"
  },
  "Local_partitioned_indexContext": {
    "description": "A local partitioned index is an index that is created on a specific partition or subpartition of a partitioned table in Oracle PL/SQL. It is used to improve the performance of queries that involve the indexed columns within a specific partition or subpartition.",
    "color": "#7EC0EE"
  },
  "On_range_partitioned_tableContext": {
    "description": "A range partitioned table is a table that is divided into multiple partitions based on a specified range of values. Each partition contains rows with values falling within a specific range.",
    "color": "#f58220"
  },
  "On_list_partitioned_tableContext": {
    "description": "The ON clause specifies the conditions for partitioning a table in Oracle PL/SQL. It is used when creating or altering a partitioned table. The ON clause typically includes a list of partitioning key columns and their corresponding values or expressions.",
    "color": "#f99000"
  },
  "Partitioned_tableContext": {
    "description": "A partitioned table in Oracle PL/SQL is a table that is divided into smaller, more manageable segments called partitions. Each partition is stored separately, allowing for improved performance and manageability. Partitioning is commonly used for large tables or tables with high-volume data.",
    "color": "#f68c1a"
  },
  "On_hash_partitioned_tableContext": {
    "description": "The ON HASH partitioned table is a type of partitioned table in Oracle PL/SQL. It uses a hash function to distribute rows evenly across multiple partitions based on a specified column. This type of partitioning is useful when there is no logical or chronological ordering of the data.",
    "color": "#009688"
  },
  "On_hash_partitioned_clauseContext": {
    "description": "The ON HASH PARTITIONED clause is used in Oracle PL/SQL to define a hash-partitioned table or index.",
    "color": "#800080"
  },
  "On_comp_partitioned_tableContext": {
    "description": "ON_COMP_PARTITIONED_TABLE is a condition that checks if a specified table is composite and partitioned.",
    "color": "#00FF00"
  },
  "On_comp_partitioned_clauseContext": {
    "description": "The ON COMP PARTITIONED clause is used in Oracle PL/SQL to specify the criteria for creating or maintaining a partitioned table or index.",
    "color": "#00bfff"
  },
  "Index_subpartition_clauseContext": {
    "description": "The INDEX_SUBPARTITION_CLAUSE is used to specify the subpartition or subpartitions of an index partition in Oracle PL/SQL. It is used in the context of creating or altering index partitions. By using this clause, you can control the organization and storage of your index data at a more granular level.",
    "color": "#f09400"
  },
  "Index_subpartition_subclauseContext": {
    "description": "The INDEX_SUBPARTITION_SUBCLAUSE is a subclause used in the CREATE INDEX statement in Oracle PL/SQL. It specifies the subpartition to be indexed within a composite partitioned table. It allows for more granular control over the indexing of data within a subpartition.",
    "color": "#f2f2f2"
  },
  "Odci_parametersContext": {
    "description": "ODCI_PARAMETERS is a predefined type in Oracle PL/SQL that is used to define the parameters of an external C function or a C++ member function in PL/SQL. It allows you to build PL/SQL functions to interact with external C or C++ code.",
    "color": "#a6e22e"
  },
  "IndextypeContext": {
    "description": "Indextype is a feature in Oracle PL/SQL that allows you to define custom index types and use them in your database. It allows you to create specialized indexing structures that are tailored to your specific requirements.",
    "color": "#F4B942"
  },
  "Alter_indexContext": {
    "description": "The ALTER INDEX statement is used to modify an existing index in a table. You can use this statement to change the storage parameters, rebuild or coalesce the index, enable or disable the index, and more.",
    "color": "#DEADED"
  },
  "Alter_index_ops_set1Context": {
    "description": "The ALTER_INDEX_OPS_SET1 is a built-in PL/SQL function in Oracle that allows you to modify the options for an index. This function is used to set the options for a specific index and can be used to add or remove options.",
    "color": "#f15b59"
  },
  "Alter_index_ops_set2Context": {
    "description": "The ALTER_INDEX_OPS_SET2 is a PL/SQL node used to modify the options of indexing on a table or partition. It is typically used to enable or disable specific indexing operations.",
    "color": "#f9c74f"
  },
  "Visible_or_invisibleContext": {
    "description": "The VISIBLE or INVISIBLE keywords are used to indicate whether a column in a table is visible or hidden from the user. Invisible columns are not displayed in SELECT queries unless explicitly specified.",
    "color": "#bb80b3"
  },
  "Monitoring_nomonitoringContext": {
    "description": "The NOMONITORING option is used in Oracle PL/SQL to specify that a trigger should not be invoked during the execution of an administrative operation. This prevents the trigger from being fired or executed when certain maintenance operations (such as table reorganization) are performed on the database. By default, triggers are executed during administrative operations unless explicitly specified with the NOMONITORING option.",
    "color": "#FCA5A5"
  },
  "Rebuild_clauseContext": {
    "description": "The REBUILD clause is used in Oracle PL/SQL to rebuild an index or a materialized view. It is typically used to improve the performance of database queries by restructuring and reorganizing the underlying data.",
    "color": "#0f7c9d"
  },
  "Alter_index_partitioningContext": {
    "description": "The ALTER_INDEX_PARTITIONING statement is used to modify the partitioning scheme of an existing index.",
    "color": "#6A8759"
  },
  "Modify_index_default_attrsContext": {
    "description": "The MODIFY_INDEX_DEFAULT_ATTRS procedure is used to modify the default attributes of an index in Oracle PL/SQL.",
    "color": "#1370b0"
  },
  "Add_hash_index_partitionContext": {
    "description": "The ADD_HASH_INDEX_PARTITION statement is used to add a new partition to a hash partitioned index in Oracle PL/SQL. It allows you to specify the partition name, tablespace, and other partition attributes.",
    "color": "#f9971e"
  },
  "Coalesce_index_partitionContext": {
    "description": "A COALESCE_INDEX_PARTITION is used to merge adjacent index partitions into a single partition.",
    "color": "#D4D4D4"
  },
  "Modify_index_partitionContext": {
    "description": "The MODIFY_INDEX_PARTITION statement is used to modify the properties of a specific index partition in Oracle PL/SQL. This includes changing the physical attributes of the partition such as the storage parameters, compression settings, or logging options.",
    "color": "#af956f"
  },
  "Modify_index_partitions_opsContext": {
    "description": "The MODIFY_INDEX_PARTITIONS_OPS node is used in Oracle PL/SQL to specify the operation to be performed on index partitions during a partition maintenance operation. It can be used with the ALTER TABLE...MODIFY PARTITION statement to modify the storage attributes or compression settings of index partitions.",
    "color": "#00bfff"
  },
  "Rename_index_partitionContext": {
    "description": "The RENAME_INDEX_PARTITION statement is used to rename a partition of an index in an Oracle PL/SQL database. This statement is helpful when you want to change the name of a specific partition without affecting the data or the structure of the index.",
    "color": "#f9a94b"
  },
  "Drop_index_partitionContext": {
    "description": "The DROP_INDEX_PARTITION statement is used to remove a partition from an index in Oracle PL/SQL. This statement can be used to improve performance by eliminating unnecessary partitions from an index.",
    "color": "#44aa77"
  },
  "Split_index_partitionContext": {
    "description": "The SPLIT_INDEX_PARTITION statement is used to split a partition of an index into two new partitions, creating a new partition value and moving the data accordingly.",
    "color": "#d6c82b"
  },
  "Index_partition_descriptionContext": {
    "description": "An index partition is a logical division of an index into smaller segments that map to individual partitions of a table. It is used to improve the performance of queries by limiting the search space to a specific partition instead of searching the entire index.",
    "color": "#FFA67D"
  },
  "Modify_index_subpartitionContext": {
    "description": "The MODIFY_INDEX_SUBPARTITION statement is used to modify the definition of a specific subpartition within an index partition. This statement allows you to change various properties of the subpartition, such as its storage attributes, compression settings, or physical attributes.",
    "color": "#ffcc00"
  },
  "Partition_name_oldContext": {
    "description": "The partition_name_old is a placeholder used in Oracle PL/SQL code to refer to the old name of a partition before it is renamed.",
    "color": "#ff9933"
  },
  "New_partition_nameContext": {
    "description": "New_partition_name is a string that represents the name of a partition in a table or index in Oracle PL/SQL.",
    "color": "#fcbf1e"
  },
  "New_index_nameContext": {
    "description": "The new_index_name is used to specify the new name for an index in Oracle PL/SQL.",
    "color": "#6BB0D8"
  },
  "Alter_inmemory_join_groupContext": {
    "description": "The ALTER_INMEMORY_JOIN_GROUP statement is used to create or modify an in-memory join group in Oracle Database. The in-memory join group is a collection of tables that are designated to be stored in memory during query execution to improve performance.",
    "color": "#f2c45a"
  },
  "Create_userContext": {
    "description": "The CREATE USER statement in Oracle PL/SQL is used to create a new user in the Oracle database. This statement specifies the name and password for the user, and optionally includes other attributes such as default tablespace, temporary tablespace, and quota limits. After creating a user, they can be granted privileges and permissions to access and manipulate database objects.",
    "color": "#f44336"
  },
  "Alter_userContext": {
    "description": "The `ALTER USER` statement is used to modify the properties of a user in the Oracle database. It can be used to change the password, grant or revoke privileges, set resource limits, and more.",
    "color": "#E6B422"
  },
  "Drop_userContext": {
    "description": "The DROP USER statement is used to remove a user from the Oracle database.",
    "color": "#E06C75"
  },
  "Alter_identified_byContext": {
    "description": "The ALTER IDENTIFIED BY statement is used to change the password for an existing user in Oracle. It allows you to specify a new password for the user.",
    "color": "#F9C22E"
  },
  "Identified_byContext": {
    "description": "The IDENTIFIED BY clause is used in Oracle PL/SQL to specify the password for a user account when creating or altering the account. This clause allows you to set a password for the user, which is required for authentication when logging into the database.",
    "color": "#fcbc6c"
  },
  "Identified_other_clauseContext": {
    "description": "The IDENTIFIED OTHER clause is used in Oracle PL/SQL to specify that the predefined exception OTHER should be raised when an unhandled exception is encountered. It is typically used in exception handling blocks to handle any exceptions that are not explicitly handled by other exception handlers.",
    "color": "#ff0000"
  },
  "User_tablespace_clauseContext": {
    "description": "The USER_TABLESPACE_CLAUSE is used in Oracle PL/SQL to specify the tablespace where all subsequent objects will be created by the user.",
    "color": "#9999ff"
  },
  "Quota_clauseContext": {
    "description": "The QUOTA_CLAUSE is used in Oracle PL/SQL to specify the maximum amount of a particular resource that a user or role can consume.",
    "color": "#00b894"
  },
  "Profile_clauseContext": {
    "description": "The PROFILE clause is used in Oracle PL/SQL to specify the programmatic profiling of a block or subprogram. It allows developers to collect statistics about the execution time and resource usage of the code. By enabling profiling, developers can identify performance bottlenecks and optimize their code accordingly.",
    "color": "#cc99ff"
  },
  "Role_clauseContext": {
    "description": "The ROLE clause is used in Oracle PL/SQL to specify the roles a user will be connected with when a program unit is executed.",
    "color": "#f6c23e"
  },
  "User_default_role_clauseContext": {
    "description": "The USER_DEFAULT_ROLE_CLAUSE is used in Oracle PL/SQL to specify whether the DEFAULT role(s) are enabled or disabled for the current user when executing a specific statement.",
    "color": "#008080"
  },
  "Password_expire_clauseContext": {
    "description": "The PASSWORD_EXPIRE_CLAUSE is used in Oracle PL/SQL to specify the password expiration options for a user or role. It determines when the password will expire and whether the user will be prompted to change it upon the next login.",
    "color": "#d4b9a6"
  },
  "User_lock_clauseContext": {
    "description": "The USER_LOCK_CLAUSE is used in Oracle PL/SQL to acquire or release a user-defined lock. It allows you to control access to a specific resource or section of code by preventing other sessions from acquiring the same lock.",
    "color": "#569CD6"
  },
  "User_editions_clauseContext": {
    "description": "The USER_EDITIONS_CLAUSE is used in Oracle PL/SQL to specify the edition(s) for which user objects should be compiled. By default, PL/SQL compiles objects using the current edition. This clause allows the user to compile objects in multiple editions.",
    "color": "#FB6107"
  },
  "Alter_user_editions_clauseContext": {
    "description": "The ALTER USER EDITIONS clause is used to modify the editions that a user can access in Oracle PL/SQL. Editions are used to manage different versions of a schema and allow users to access different versions of objects within the schema.",
    "color": "#f4b942"
  },
  "Proxy_clauseContext": {
    "description": "The PROXY_CLAUSE is used in Oracle PL/SQL to specify the proxy user for a PL/SQL block. It allows a user to execute a PL/SQL block with the privileges of another user, known as the proxy user.",
    "color": "#00FFFF"
  },
  "Container_namesContext": {
    "description": "In Oracle PL/SQL, container_names refers to the names of containers that are part of a specified object type. Containers can include tables, views, columns, indexes, packages, procedures, functions, and triggers.",
    "color": "#008080"
  },
  "Set_container_dataContext": {
    "description": "The SET_CONTAINER_DATA statement is used in Oracle PL/SQL to set or update the value of a container data type in a container. Container data types are user-defined types that can store multiple values and can be used as a column data type in a table. This statement allows you to modify the value of a container data type stored in a container.",
    "color": "#00CCCC"
  },
  "Add_rem_container_dataContext": {
    "description": "The ADD_REM_CONTAINER_DATA statement is used to add or remove data from a container table in Oracle PL/SQL. Container tables are used in the Oracle Database Multitenant architecture to store data for multiple pluggable databases (PDBs). This statement allows you to add or remove rows from a container table.",
    "color": "#f1c40f"
  },
  "Container_data_clauseContext": {
    "description": "The CONTAINER_DATA_CLAUSE is used in Oracle PL/SQL to specify the name of the Oracle Database container that should be used for executing a SQL statement within a multitenant environment. It is used to differentiate between different pluggable databases (PDBs) within a single Oracle Database instance.",
    "color": "#00CCCC"
  },
  "Administer_key_managementContext": {
    "description": "The ADMINISTER_KEY_MANAGEMENT procedure is used to administer the key management functionality in Oracle Database. It provides options for managing encryption keys, such as creating, dropping, enabling, disabling, and changing encryption keys.",
    "color": "#FFA500"
  },
  "Keystore_management_clausesContext": {
    "description": "The Keystore Management Clauses in Oracle PL/SQL are used to manage the keystore and perform operations such as creating, altering, and dropping keystores. Keystores are used to securely store and manage encryption keys and certificates.",
    "color": "#a6e22e"
  },
  "Create_keystoreContext": {
    "description": "The CREATE KEYSTORE statement is used to create a new keystore in Oracle PL/SQL. A keystore is a repository used to securely store cryptographic keys, certificates, and other sensitive information.",
    "color": "#c984bb"
  },
  "Open_keystoreContext": {
    "description": "The OPEN_KEYSTORE statement in PL/SQL is used to open a keystore that has been previously created using the CREATE KEYSTORE statement. It allows you to access the keys and certificates stored in the keystore.",
    "color": "#ff6600"
  },
  "Force_keystoreContext": {
    "description": "The FORCE_KEYSTORE clause is used in Oracle PL/SQL to specify that the keystore should be forced open, even if it was previously closed. This is useful when you want to perform operations on the keystore without having to manually open it.",
    "color": "#00BCD4"
  },
  "Close_keystoreContext": {
    "description": "The CLOSE_KEYSTORE statement is used to close a previously opened keystore in Oracle PL/SQL.",
    "color": "#d6d6d6"
  },
  "Backup_keystoreContext": {
    "description": "The BACKUP_KEYSTORE command is used to create a physical backup of the Oracle keystore.",
    "color": "#fcbf49"
  },
  "Alter_keystore_passwordContext": {
    "description": "The ALTER KEYSTORE PASSWORD statement is used to change the password for a database keystore. The keystore is used to store encryption keys and other sensitive information.",
    "color": "#fcbf49"
  },
  "Merge_into_new_keystoreContext": {
    "description": "The MERGE INTO NEW KEYSTORE statement is used in Oracle PL/SQL to combine multiple key stores into a new key store.",
    "color": "#e69f00"
  },
  "Merge_into_existing_keystoreContext": {
    "description": "The MERGE INTO statement in Oracle PL/SQL is used to merge data from a source table into a target table based on a specified condition. The MERGE INTO statement performs either an INSERT or an UPDATE operation on the target table, depending on whether the matching condition is met or not. When merging data into an existing keystore, you can use this statement to update or insert data into the target keystore table based on the matching condition.",
    "color": "#00FFFF"
  },
  "Isolate_keystoreContext": {
    "description": "The ISOLATE_KEYSTORE function is used to isolate a keystore from the keyring in Oracle PL/SQL. It returns a new, isolated keystore that does not share the keys with the original keystore.",
    "color": "#00ADEF"
  },
  "Unite_keystoreContext": {
    "description": "The UNITE_KEYSTORE is a built-in Oracle PL/SQL package that provides functionalities for managing keystores and key entries.",
    "color": "#ff4b00"
  },
  "Key_management_clausesContext": {
    "description": "Key management clauses are used in Oracle PL/SQL to manage encryption keys for securing sensitive data. These clauses provide functionalities to create, alter, enable, disable, and drop encryption keys.",
    "color": "#ffcc00"
  },
  "Set_keyContext": {
    "description": "The SET_KEY statement is used in Oracle PL/SQL to set the value of a specified key in a collection type variable.",
    "color": "#f4d03f"
  },
  "Create_keyContext": {
    "description": "The CREATE KEY statement is used to create a new encryption key in Oracle PL/SQL. Encryption keys are used to secure data and protect it from unauthorized access. This statement is typically used in conjunction with the CREATE TABLE or ALTER TABLE statements to encrypt specific columns or data types.",
    "color": "#ff34b3"
  },
  "MkidContext": {
    "description": "The MKID (Module Kit ID) is a unique identifier for a module in Oracle PL/SQL.",
    "color": "#56B6C2"
  },
  "MkContext": {
    "description": "The MK command is not a valid Oracle PL/SQL command.",
    "color": "#FF0000"
  },
  "Use_keyContext": {
    "description": "The USE keyword is used to specify the name of a schema or a namespace in Oracle PL/SQL. It is used in conjunction with the EXECUTE IMMEDIATE statement to dynamically execute SQL or PL/SQL statements.",
    "color": "#dcdcaa"
  },
  "Set_key_tagContext": {
    "description": "The SET_KEY_TAG command is used to set a user-defined tag for the current key in a loop processing block. This tag can be used to uniquely identify and reference the current key in subsequent statements or operations.",
    "color": "#9400D3"
  },
  "Export_keysContext": {
    "description": "The EXPORT_KEYS clause is used in the CREATE PACKAGE or CREATE TYPE statement to specify whether the public keys associated with the specified package or type should be exported. Public keys can be exported using the DBMS_CRYPTO package in Oracle PL/SQL.",
    "color": "#9cdcfe"
  },
  "Import_keysContext": {
    "description": "The IMPORT_KEYS statement is used to import public and private keys into Oracle PL/SQL. It is typically used in encryption and decryption operations.",
    "color": "#D4E7ED"
  },
  "Migrate_keysContext": {
    "description": "The Migrate_keys node is used in Oracle PL/SQL to migrate keys from one table to another. It is commonly used when you need to copy keys or constraints from one table to another during database restructuring or data migration.",
    "color": "#FFA500"
  },
  "Reverse_migrate_keysContext": {
    "description": "The REVERSE_MIGRATE_KEYS procedure is used to reverse the migration of Transparent Data Encryption (TDE) master keys to an older version of the database.",
    "color": "#f9e38d"
  },
  "Move_keysContext": {
    "description": "The MOVE statement in Oracle PL/SQL is used to assign the value of one variable to another variable of the same datatype. It is used to move data between variables or to initialize variables.",
    "color": "#f4a261"
  },
  "Identified_by_storeContext": {
    "description": "The IDENTIFIED BY clause in Oracle PL/SQL is used to specify the password for a stored PL/SQL procedure, function, or package. It is used when creating or modifying a stored PL/SQL object.",
    "color": "#F2D204"
  },
  "Using_algorithm_clauseContext": {
    "description": "The ALGORITHM clause is used in Oracle PL/SQL to specify the algorithm to be used for executing a specific SQL DDL statement, such as CREATE INDEX or CREATE TABLE.",
    "color": "#f5a623"
  },
  "Using_tag_clauseContext": {
    "description": "The USING tag clause is used in Oracle PL/SQL to provide a short name or alias for a tag name. It allows you to refer to a tag using a different name within the scope of a PL/SQL block.",
    "color": "#f9c251"
  },
  "Secret_management_clausesContext": {
    "description": "Secret management clauses are used in Oracle PL/SQL to protect sensitive information by encrypting it, ensuring its confidentiality and integrity. These clauses include CREATE SECRET, ALTER SECRET, DROP SECRET, GRANT SECRET, and REVOKE SECRET. They are part of Oracle's Transparent Data Encryption (TDE) feature, which provides a secure way to store and manage secrets such as passwords, credit card numbers, and social security numbers.",
    "color": "#DD6E42"
  },
  "Add_update_secretContext": {
    "description": "The ADD_UPDATE_SECRET procedure in Oracle PL/SQL is used to add or update a secret in the Oracle Key Vault. A secret represents sensitive data such as passwords, keys, or other confidential information.",
    "color": "#ff9900"
  },
  "Delete_secretContext": {
    "description": "The DELETE statement in Oracle PL/SQL is used to delete one or more rows from a table. It allows you to remove specific rows that match a given condition or delete all the rows in the table.",
    "color": "#268bd2"
  },
  "Add_update_secret_sepsContext": {
    "description": "The ADD_UPDATE_SECRET_SEPS is a procedure in Oracle PL/SQL that is used to add or update secret seps (Sensitive Exports Points) for database users. Secret seps are used to restrict access to sensitive data in the database.",
    "color": "#9400D3"
  },
  "Delete_secret_sepsContext": {
    "description": "The DELETE_SECRET_SEPS node is used to remove the secret separators (SEPS) from a string in Oracle PL/SQL. Secret separators are characters used to separate sensitive information within a string, such as credit card numbers or social security numbers.",
    "color": "#3498db"
  },
  "Zero_downtime_software_patching_clausesContext": {
    "description": "The Zero Downtime Software Patching Clauses in Oracle PL/SQL are specific clauses used to perform software patching operations without any downtime or disruption to the running system. These clauses allow for patching and upgrading of software components, such as database objects or PL/SQL packages, while the system is still operational.",
    "color": "#008080"
  },
  "With_backup_clauseContext": {
    "description": "The WITH BACKUP clause is used in Oracle PL/SQL to specify that a backup of the database should be taken before executing a particular operation. This clause is commonly used in data manipulation language (DML) statements like INSERT, UPDATE, and DELETE.",
    "color": "#f9d71c"
  },
  "Identified_by_password_clauseContext": {
    "description": "The IDENTIFIED BY PASSWORD clause is used in Oracle PL/SQL to specify a user's password when creating or altering a user account. The PASSWORD keyword is used to indicate that the succeeding value is the user's password.",
    "color": "#d4d4d4"
  },
  "Keystore_passwordContext": {
    "description": "The keystore password is a password used to protect and access the keystore, which is used to store sensitive information such as keys and certificates.",
    "color": "#1f8eff"
  },
  "PathContext": {
    "description": "The PATH is a special PL/SQL package that allows you to manipulate file and directory paths in a platform-independent manner.",
    "color": "#009688"
  },
  "SecretContext": {
    "description": "The SECRET keyword is used to specify that a variable or value should be treated as sensitive, and should be hidden when the PL/SQL code is logged or displayed.",
    "color": "#00bfff"
  },
  "AnalyzeContext": {
    "description": "The ANALYZE command is used to collect statistics for database objects and make them available to the optimizer. These statistics help the optimizer generate efficient execution plans for queries.",
    "color": "#f9c74f"
  },
  "Partition_extention_clauseContext": {
    "description": "The PARTITION_EXTENSION_CLAUSE is used in Oracle PL/SQL to add new partitions to an existing partitioned table. It is used with the ALTER TABLE statement.",
    "color": "#009688"
  },
  "Validation_clausesContext": {
    "description": "Validation_clauses are optional clauses that you can use in Oracle PL/SQL to enforce data validation rules during the execution of a SQL statement. These clauses help ensure the accuracy and integrity of the data being manipulated.",
    "color": "#d4d4d4"
  },
  "Compute_clausesContext": {
    "description": "The COMPUTE clause is used in Oracle PL/SQL to calculate summary statistics for specified columns in a SELECT statement. It allows you to perform calculations and generate subtotals, grand totals, and other summary information for the selected data.",
    "color": "#569CD6"
  },
  "For_clauseContext": {
    "description": "The FOR loop in Oracle PL/SQL is used to iterate over a specific range of values. The FOR loop iterates a specific number of times, defined by the range and increment specified in the loop.",
    "color": "#e67e22"
  },
  "Online_or_offlineContext": {
    "description": "The ONLINE and OFFLINE keywords are used in Oracle PL/SQL to specify whether a table or index should be accessible or inaccessible during certain operations.",
    "color": "#d3d3d3"
  },
  "Into_clause1Context": {
    "description": "The INTO clause is used in Oracle PL/SQL to specify variables or record types that will hold the values returned by a SELECT statement.",
    "color": "#3D85C6"
  },
  "Partition_key_valueContext": {
    "description": "In Oracle PL/SQL, a partition key value refers to the value used to determine the partition in which a row is stored. Partitioning is a technique used to horizontally divide a large table into smaller, more manageable pieces called partitions. Each partition contains a subset of the table's data based on the specified partitioning key.",
    "color": "#ffad33"
  },
  "Subpartition_key_valueContext": {
    "description": "The SUBPARTITION_KEY_VALUE is a value used to determine the subpartition in a subpartitioned table. It is specified when creating or modifying a subpartition.",
    "color": "#ff98bb"
  },
  "Associate_statisticsContext": {
    "description": "The ASSOCIATE STATISTICS statement in Oracle PL/SQL is used to enable or disable the gathering of statistics on a specific table or column.",
    "color": "#f9c74f"
  },
  "Column_associationContext": {
    "description": "Column association in Oracle PL/SQL refers to the process of associating a column or attribute of a table or record with a variable in the PL/SQL code. This allows the variable to store and manipulate the values of the associated column or attribute.",
    "color": "#ffcc00"
  },
  "Function_associationContext": {
    "description": "Function association refers to the process of associating a PL/SQL function with a specific object, such as a package or type. This allows the function to be called and used within the context of that object. By associating functions with objects, it helps in organizing and encapsulating related functionality.",
    "color": "#ff99cc"
  },
  "Indextype_nameContext": {
    "description": "Indextype_name is a predefined PL/SQL identifier used to refer to the name of an indextype in Oracle PL/SQL.",
    "color": "#39cccc"
  },
  "Using_statistics_typeContext": {
    "description": "The USING_STATISTICS_TYPE clause is used in the CREATE TABLE or ALTER TABLE statement to specify the type of statistics collection used by the optimizer for a table.",
    "color": "#02bca0"
  },
  "Statistics_type_nameContext": {
    "description": "The STATISTICS_TYPE_NAME is a string that represents the name of a statistics type in Oracle PL/SQL. This statistics type is used to define the format and behavior of statistics for a specific object, such as a table or an index.",
    "color": "#ffcc00"
  },
  "Default_cost_clauseContext": {
    "description": "The DEFAULT_COST_CLAUSE is used in an Oracle PL/SQL program unit to specify the default cost for a resource when a specific cost is not provided.",
    "color": "#7F7F7F"
  },
  "Cpu_costContext": {
    "description": "The CPU cost is an estimate of the amount of processing power required for executing a specific PL/SQL node. It represents the amount of CPU time that the node is expected to consume.",
    "color": "#ffa500"
  },
  "Io_costContext": {
    "description": "The io_cost is a numeric value that represents the estimated cost of the I/O operations performed by a statement in Oracle PL/SQL. It is used by the optimizer to compare the cost of different execution plans and determine the most efficient plan.",
    "color": "#FF9800"
  },
  "Network_costContext": {
    "description": "The NETWORK_COST is a system-level parameter that represents the cost of accessing a network resource in Oracle PL/SQL. It is used by the SQL optimizer to estimate the cost of queries that involve network operations, such as accessing a remote database or retrieving data over a network link.",
    "color": "#008080"
  },
  "Default_selectivity_clauseContext": {
    "description": "The DEFAULT_SELECTIVITY clause is used in Oracle PL/SQL to specify the estimate of selectivity for a column or expression in a query's WHERE clause. Selectivity refers to the estimated percentage of rows that will be returned by a specific condition.",
    "color": "#ffac00"
  },
  "Default_selectivityContext": {
    "description": "The DEFAULT_SELECTIVITY parameter is used in Oracle PL/SQL to specify the selectivity value for an index when no statistic information is available. It is used by the optimizer to estimate the number of rows returned by a query. A higher value indicates a lower selectivity, meaning the index is less selective and may result in a higher number of rows being returned.",
    "color": "#9966cc"
  },
  "Storage_table_clauseContext": {
    "description": "The STORAGE clause is used in the CREATE TABLE statement in Oracle PL/SQL to specify the storage characteristics of a table. The STORAGE clause is optional and allows you to define the physical attributes of the table, such as the initial extent size, next extent size, and the maximum number of extents.",
    "color": "#fcbf1e"
  },
  "Unified_auditingContext": {
    "description": "Unified auditing is a feature in Oracle Database that consolidates database auditing into a single, centralized audit trail. It provides a comprehensive and flexible auditing solution, capturing both traditional and fine-grained audit data. Unified auditing enhances security and simplifies auditing administration.",
    "color": "#f9c74f"
  },
  "Policy_nameContext": {
    "description": "Policy_name is a user-defined name given to an Oracle PL/SQL policy. It is used to identify and reference the policy in code.",
    "color": "#FF9900"
  },
  "Audit_traditionalContext": {
    "description": "The AUDIT_TRAditional node is used in Oracle PL/SQL to enable or disable traditional auditing for a specific action or privilege. Traditional auditing records information about database activity in the AUD$ table.",
    "color": "#f5bd1f"
  },
  "Audit_direct_pathContext": {
    "description": "The AUDIT_DIRECT_PATH parameter is a system parameter in Oracle PL/SQL that determines whether direct-path INSERT or CREATE TABLE ... AS SELECT operations generate auditing records. When set to TRUE, direct-path operations are audited. When set to FALSE, direct-path operations are not audited.",
    "color": "#6D3F7A"
  },
  "Audit_container_clauseContext": {
    "description": "The AUDIT_CONTAINER_CLAUSE is used in Oracle PL/SQL to specify the container in which to audit a specific operation. The container can be an entire database, a specific tablespace, or a specific table.",
    "color": "#EDEDED"
  },
  "Audit_operation_clauseContext": {
    "description": "The AUDIT_OPERATION_CLAUSE is used in Oracle PL/SQL to specify the operations to be audited for a specific object. It is used with the AUDIT statement to track and record specific database actions, such as INSERT, UPDATE, DELETE, or SELECT, performed on a particular table or view.",
    "color": "#d4caff"
  },
  "Auditing_by_clauseContext": {
    "description": "The AUDITING BY clause is used in Oracle PL/SQL to specify the auditing options for a specific object. It is used in combination with the AUDIT command.",
    "color": "#dc267f"
  },
  "Audit_userContext": {
    "description": "The AUDIT_USER statement is used to enable or disable auditing for a specific user. When auditing is enabled, Oracle logs information about the user's database activities. This can be useful for security and compliance purposes.",
    "color": "#fbd106"
  },
  "Audit_schema_object_clauseContext": {
    "description": "The AUDIT_SCHEMA_OBJECT_CLAUSE is a clause used in Oracle PL/SQL to specify which objects in a schema should be audited. It is used in the AUDIT statement to enable or disable auditing on specific schema objects.",
    "color": "#9ccc65"
  },
  "Sql_operationContext": {
    "description": "Sql_operation is a node in Oracle PL/SQL used to perform SQL operations such as executing SQL statements or querying the database using SELECT statements.",
    "color": "#f58634"
  },
  "Auditing_on_clauseContext": {
    "description": "The AUDITING ON clause is used in Oracle PL/SQL to enable auditing for a specific database object. This clause is typically used within an AUDIT statement and specifies the name of the object to be audited.",
    "color": "#f4a261"
  },
  "Model_nameContext": {
    "description": "The MODEL_NAME is a built-in PL/SQL function that returns the name of the current model being executed in a SQL query.",
    "color": "#f6bc04"
  },
  "Object_nameContext": {
    "description": "The object_name is a string that represents the name of an object in Oracle PL/SQL.",
    "color": "#ffffff"
  },
  "Profile_nameContext": {
    "description": "The PROFILE_NAME is a property of a user profile in Oracle PL/SQL. It represents the name of the profile and is used to identify and manage different profiles for different users.",
    "color": "#7D71DA"
  },
  "Sql_statement_shortcutContext": {
    "description": "The SQL statement shortcut is a shorthand notation in Oracle PL/SQL that allows you to execute a single SQL statement without explicitly declaring a cursor or using a loop structure. It is mainly used for simple queries or single-row operations.",
    "color": "#F7922B"
  },
  "Drop_indexContext": {
    "description": "The DROP INDEX statement in Oracle PL/SQL is used to remove an index from a table or a clustered table.",
    "color": "#f0ad4e"
  },
  "Disassociate_statisticsContext": {
    "description": "The DISASSOCIATE_STATISTICS command in Oracle PL/SQL is used to remove object-level statistics associations for a specified table or index. This command helps in managing the statistics gathering process by allowing you to dissociate specific statistics from an object.",
    "color": "#ffd700"
  },
  "Drop_indextypeContext": {
    "description": "The DROP_INDEXTYPE statement is used to remove a user-defined index type in Oracle PL/SQL. An index type is a type that is used to define an index on a collection or object type column in a database table. When you drop an index type, any associated indexes defined with that type will also be dropped.",
    "color": "#00CCCC"
  },
  "Drop_inmemory_join_groupContext": {
    "description": "The DROP_INMEMORY_JOIN_GROUP statement is used to drop an in-memory join group in Oracle PL/SQL. In-memory join groups are used to improve performance of SQL queries that involve joining large tables by storing the join results in memory.",
    "color": "#f6b900"
  },
  "Flashback_tableContext": {
    "description": "The FLASHBACK_TABLE statement is used to recover a table to a previous state by using the undo data stored in the database. It allows you to undo changes made to a table, such as deleting or modifying data, without having to restore from a backup. This statement can be helpful in scenarios where you accidentally delete or modify data and need to roll it back.",
    "color": "#fcaa48"
  },
  "Restore_pointContext": {
    "description": "A restore point in Oracle PL/SQL is a user-defined name associated with a specific point in time in the database. It is used to mark a specific state of the database that can be later used to restore the database to that state.",
    "color": "#F07178"
  },
  "Purge_statementContext": {
    "description": "The PURGE statement is used to permanently remove objects from the recycle bin, bypassing the normal behavior of the DROP statement. It can be used to free up space in the recycle bin by purging one or more objects, or to purge all objects in the recycle bin by not specifying any specific object.",
    "color": "#f2a742"
  },
  "Noaudit_statementContext": {
    "description": "The NOAUDIT statement in Oracle PL/SQL is used to disable auditing for a specific privilege or a combination of privileges.",
    "color": "#DC143C"
  },
  "Rename_objectContext": {
    "description": "The RENAME_OBJECT statement in Oracle PL/SQL is used to rename database objects such as tables, views, procedures, functions, triggers, and synonyms. This statement allows you to change the name of an existing object without altering its structure or properties.",
    "color": "#32a852"
  },
  "Grant_statementContext": {
    "description": "The GRANT statement is used in Oracle PL/SQL to grant privileges to a user or role, allowing them to perform specified actions on database objects. The privileges include actions such as SELECT, INSERT, UPDATE, DELETE, and EXECUTE.",
    "color": "#fcbf1e"
  },
  "Container_clauseContext": {
    "description": "The CONTAINER clause is used in Oracle PL/SQL to specify the database container for certain operations. It is primarily used in the context of working with Oracle Multitenant databases.",
    "color": "#BF3030"
  },
  "Revoke_statementContext": {
    "description": "The REVOKE statement is used in Oracle PL/SQL to revoke privileges previously granted to a user or a role. It removes the specified privileges from the specified grantee.",
    "color": "#a6e22e"
  },
  "Revoke_system_privilegeContext": {
    "description": "The REVOKE statement in Oracle PL/SQL is used to remove system privileges from a user or a role.",
    "color": "#00FF00"
  },
  "Revokee_clauseContext": {
    "description": "The revokee_clause is used in Oracle PL/SQL to specify the user or role that is being revoked privileges on a specific object. It is part of the REVOKE statement.",
    "color": "#D4D4D4"
  },
  "Revoke_object_privilegesContext": {
    "description": "The REVOKE_OBJECT_PRIVILEGES statement in Oracle PL/SQL is used to revoke object-level privileges granted to users or roles on a specific object.",
    "color": "#fbc02d"
  },
  "On_object_clauseContext": {
    "description": "The ON OBJECT clause is used in PL/SQL to specify the behavior when a specific object is encountered during exception handling. It is typically used in conjunction with the EXCEPTION block of a PL/SQL program.",
    "color": "#FF8800"
  },
  "Revoke_roles_from_programsContext": {
    "description": "The REVOKE_ROLES_FROM_PROGRAMS is a PL/SQL procedure that is used to revoke specific roles from multiple programs in Oracle databases.",
    "color": "#f5a623"
  },
  "Program_unitContext": {
    "description": "A program unit is a PL/SQL code block that can be stored and executed as a unit. It can be a standalone program or a part of a larger program.",
    "color": "#808080"
  },
  "Create_dimensionContext": {
    "description": "The CREATE_DIMENSION statement is used to create a dimension object in Oracle PL/SQL. Dimensions are used in Online Analytical Processing (OLAP) to organize and categorize data. They provide a way to analyze and aggregate data along different hierarchies or levels.",
    "color": "#f9bc86"
  },
  "Create_directoryContext": {
    "description": "The CREATE_DIRECTORY statement is used to create a directory object in the Oracle database. Directory objects are used to map physical directories on the database server to logical names that can be referenced in PL/SQL code. This allows you to read from or write to files located in the specified directory.",
    "color": "#ffff00"
  },
  "Directory_nameContext": {
    "description": "The DIRECTORY_NAME function is used to return the name of the current Oracle service context directory.",
    "color": "#FFA500"
  },
  "Directory_pathContext": {
    "description": "The DIRECTORY_PATH is a configuration parameter in Oracle PL/SQL that specifies the paths to search for datafiles during an import or export operation.",
    "color": "#ff6600"
  },
  "Create_inmemory_join_groupContext": {
    "description": "The CREATE_INMEMORY_JOIN_GROUP statement is used to create an In-Memory Join Group in Oracle PL/SQL. An In-Memory Join Group is a way to define a group of tables that will be stored in memory for faster join operations. By storing frequently joined tables in memory, query performance can be significantly improved.",
    "color": "#f49842"
  },
  "Drop_hierarchyContext": {
    "description": "The DROP_HIERARCHY statement is used to remove a previously created hierarchy in Oracle PL/SQL. This statement permanently deletes the hierarchy from the database.",
    "color": "#f92672"
  },
  "Alter_libraryContext": {
    "description": "ALTER_LIBRARY is a PL/SQL statement used to modify the properties of a PL/SQL library in the Oracle database.",
    "color": "#795548"
  },
  "Drop_javaContext": {
    "description": "The DROP_JAVA statement is used to drop a Java class or resource from the database.",
    "color": "#D4AF37"
  },
  "Drop_libraryContext": {
    "description": "The DROP_LIBRARY statement is used to remove a library from the Oracle Database.",
    "color": "#ffbb77"
  },
  "Create_javaContext": {
    "description": "The CREATE JAVA statement is used to create a Java class or resource within the Oracle database.",
    "color": "#e74c3c"
  },
  "Create_libraryContext": {
    "description": "The CREATE_LIBRARY statement is used to create a library in Oracle PL/SQL. A library is a collection of reusable PL/SQL units, such as procedures, functions, and packages. It can be used to organize and manage code in a modular way.",
    "color": "#4078c0"
  },
  "Plsql_library_sourceContext": {
    "description": "The PLSQL_LIBRARY_SOURCE is a view in Oracle that provides information about the source code for objects stored in PL/SQL libraries. It contains details such as the name of the object, the type of the object, and the source code itself. This view is commonly used for analyzing and querying PL/SQL libraries.",
    "color": "#ffcc00"
  },
  "Credential_nameContext": {
    "description": "The 'Credential_name' in Oracle PL/SQL represents the name of a database credential. A database credential is a stored set of authentication information that is used to connect to an external database or service.",
    "color": "#d6cc1c"
  },
  "Library_editionableContext": {
    "description": "The LIBRARY_EDITIONABLE attribute is used to determine if a library unit can be edited or not. If the attribute is set to TRUE, it means that the library unit can be edited. If it is set to FALSE, the library unit cannot be edited.",
    "color": "#5A8770"
  },
  "Library_debugContext": {
    "description": "The LIBRARY_DEBUG node is used in Oracle PL/SQL to enable or disable the PL/SQL library debugging feature at runtime. When enabled, it allows you to debug PL/SQL code using tools like Oracle SQL Developer or Oracle PL/SQL Developer by setting breakpoints, stepping through code, and inspecting variables.",
    "color": "#6b39a8"
  },
  "Compiler_parameters_clauseContext": {
    "description": "The COMPILER_PARAMETERS_CLAUSE is used in Oracle PL/SQL to specify compiler options for a specific PL/SQL unit.",
    "color": "#00c0c0"
  },
  "Parameter_valueContext": {
    "description": "The parameter_value is a placeholder used in Oracle PL/SQL to represent the value that is passed into a procedure or function as a parameter.",
    "color": "#26C6DA"
  },
  "Library_nameContext": {
    "description": "In Oracle PL/SQL, the library_name is a predefined identifier that represents the name of the PL/SQL library being compiled or invoked. It is used to reference the current library within its own code.",
    "color": "#f6d258"
  },
  "Alter_dimensionContext": {
    "description": "The ALTER_DIMENSION statement is used to modify an existing dimension in an Oracle database. It allows you to add, drop, or modify dimension attributes, hierarchies, levels, and dimension properties.",
    "color": "#ff9900"
  },
  "Level_clauseContext": {
    "description": "The LEVEL clause is used in a hierarchical query to specify the level of recursion in the query. It allows you to control how deep you want the query to traverse the hierarchical structure.",
    "color": "#FFD700"
  },
  "Hierarchy_clauseContext": {
    "description": "The Hierarchy clause is used in a query to specify the relationship between rows in a hierarchical structure. It is mainly used with the CONNECT BY clause to query hierarchical data.",
    "color": "#ff9900"
  },
  "Dimension_join_clauseContext": {
    "description": "The dimension_join_clause is used in Oracle PL/SQL to specify the criteria for joining a dimension table to a fact table in a dimensionally organized query. It allows you to define the relationships between the dimension table and the fact table, which are necessary for analyzing data in a multidimensional way, such as in data warehousing or OLAP (Online Analytical Processing) applications.",
    "color": "#f4a261"
  },
  "Attribute_clauseContext": {
    "description": "The ATTRIBUTE_CLAUSE is used in Oracle PL/SQL to specify attributes for a subprogram or package. It allows you to set various characteristics of the subprogram or package, such as whether it runs with definer's rights or invoker's rights, whether it is deterministic, whether it is parallelizable, etc.",
    "color": "#ad62aa"
  },
  "Extended_attribute_clauseContext": {
    "description": "The extended_attribute_clause is used in PL/SQL to define attributes of program units. These attributes provide additional information or control the behavior of the program unit.",
    "color": "#f4bf75"
  },
  "Column_one_or_more_sub_clauseContext": {
    "description": "The COLUMN clause is part of the SELECT statement in Oracle PL/SQL. It is used to specify one or more columns to be included in the result of the query. Each column can be either an expression or a table column.",
    "color": "#FF944D"
  },
  "Alter_viewContext": {
    "description": "The ALTER VIEW statement is used to modify the definition (structure and/or columns) of an existing view in Oracle PL/SQL.",
    "color": "#5F80FF"
  },
  "Alter_view_editionableContext": {
    "description": "The ALTER VIEW EDITIONABLE statement is used to make a view editionable.",
    "color": "#2b8a81"
  },
  "Create_viewContext": {
    "description": "The CREATE VIEW statement in Oracle PL/SQL is used to create a virtual table based on the result of a query. It allows you to define a view and store its definition in the database, which can be used later to retrieve data without having to write the query again. Views provide a way to simplify complex queries and provide a layer of abstraction between the user and the underlying tables.",
    "color": "#FF851B"
  },
  "Editioning_clauseContext": {
    "description": "The editioning clause is used in Oracle PL/SQL to enable edition-based redefinition. It allows different versions or editions of the same object to exist simultaneously in a database. This feature is mainly used for patching or upgrading applications without interrupting their availability.",
    "color": "#C9CABC"
  },
  "View_optionsContext": {
    "description": "View options are used to modify the behavior and appearance of a view in Oracle PL/SQL.",
    "color": "#E9C46A"
  },
  "View_alias_constraintContext": {
    "description": "A view_alias_constraint is a constraint defined on an alias of a table in a view. It is used to enforce data integrity and define rules for the alias in the view.",
    "color": "#800080"
  },
  "Object_view_clauseContext": {
    "description": "The OBJECT_VIEW_CLAUSE is used in Oracle PL/SQL to define a set of attributes for an object view. An object view is a virtual table that represents the data from one or more object types. The OBJECT_VIEW_CLAUSE allows you to specify the object identifier column, the object type, and any required methods or attributes.",
    "color": "#ffac33"
  },
  "Inline_constraintContext": {
    "description": "An inline constraint in Oracle PL/SQL is used to enforce rules and conditions on a specific column or attribute of a table. It is defined directly within the column definition while creating the table. Inline constraints help to ensure data integrity and prevent invalid or inconsistent data values from being inserted or updated in the table.",
    "color": "#a6e22e"
  },
  "Inline_ref_constraintContext": {
    "description": "An inline_ref_constraint is a constraint defined within the column definition of a table. It is used to enforce referential integrity by creating a foreign key that references another table.",
    "color": "#F8C555"
  },
  "Out_of_line_ref_constraintContext": {
    "description": "Out_of_line_ref_constraint is a node in Oracle PL/SQL used to define a referential constraint on a table. It is used when creating tables or altering existing tables to enforce referential integrity between tables.",
    "color": "#D4D4D4"
  },
  "Out_of_line_constraintContext": {
    "description": "Out_of_line_constraint is a type of constraint in Oracle PL/SQL that is defined separately from the column definition in a table. It is used to enforce data integrity rules on a table.",
    "color": "#FF9800"
  },
  "Constraint_stateContext": {
    "description": "The CONSTRAINT_STATE is a PL/SQL system constant that represents the current state of a constraint on a database table. It can have one of the following values: ENABLED, DISABLED, and RELY.",
    "color": "#09a386"
  },
  "Xmltype_view_clauseContext": {
    "description": "The XMLTYPE_VIEW_CLAUSE is used in Oracle PL/SQL to define a view on XML data type columns. It specifies the structure and storage options for the view, including whether the view is schema-based or schemaless, the XML schema used for validation, and the names and types of the columns in the view.",
    "color": "#f79232"
  },
  "Xml_schema_specContext": {
    "description": "The XML_SCHEMA_SPEC is a specification that defines the structure and constraints of an XML document. It is used in Oracle PL/SQL to validate XML data against a specific schema.",
    "color": "#8f4bc6"
  },
  "Xml_schema_urlContext": {
    "description": "The XML_SCHEMA_URL is a system defined constant in Oracle PL/SQL that represents the URL of an XML schema file. This URL is used to validate XML documents against the specified schema.",
    "color": "#f1fa8c"
  },
  "ElementContext": {
    "description": "The ELEMENT keyword is used in Oracle PL/SQL to retrieve the value of an element in an associative array.",
    "color": "#61affe"
  },
  "Alter_tablespaceContext": {
    "description": "The ALTER TABLESPACE statement is used to modify an existing tablespace in Oracle PL/SQL. It allows you to perform various operations such as renaming a tablespace, changing its size, adding or removing datafiles, or altering its attributes.",
    "color": "#ff9800"
  },
  "Datafile_tempfile_clausesContext": {
    "description": "Datafile_tempfile_clauses is used in Oracle PL/SQL to define the attributes of a datafile or tempfile.",
    "color": "#a6e22e"
  },
  "Tablespace_logging_clausesContext": {
    "description": "The tablespace_logging_clauses define the logging attributes for a tablespace in Oracle PL/SQL.",
    "color": "#9cdcfe"
  },
  "Tablespace_group_clauseContext": {
    "description": "The TABLESPACE GROUP clause is used in Oracle PL/SQL to specify multiple tablespaces to be used as a group for a table or index. This allows for efficient storage management and optimization.",
    "color": "#F9A825"
  },
  "Tablespace_group_nameContext": {
    "description": "The TABLESPACE_GROUP_NAME is a name given to a group of tablespaces in Oracle PL/SQL. It is used to organize and manage multiple tablespaces within a single logical unit. By creating a tablespace group, you can easily manage data across multiple tablespaces.",
    "color": "#008080"
  },
  "Tablespace_state_clausesContext": {
    "description": "The Tablespace State Clauses specify the state of a tablespace in Oracle PL/SQL.",
    "color": "#ff9500"
  },
  "Flashback_mode_clauseContext": {
    "description": "The FLASHBACK_MODE_CLAUSE is used in an Oracle PL/SQL statement to specify the type of flashback operation to perform. It allows you to control how far back in time you want to go when using flashback features.",
    "color": "#008080"
  },
  "New_tablespace_nameContext": {
    "description": "The `NEW_TABLESPACE_NAME` is a parameter used in the `ALTER TABLESPACE` statement in Oracle PL/SQL. It specifies the new name for a tablespace when renaming it.",
    "color": "#79b0ec"
  },
  "Create_tablespaceContext": {
    "description": "The CREATE TABLESPACE statement is used to create a new tablespace within an Oracle database. A tablespace is a logical storage unit composed of one or more datafiles, which are physical files on the disk where the database stores data.",
    "color": "#9CDCFE"
  },
  "Permanent_tablespace_clauseContext": {
    "description": "The PERMANENT_TABLESPACE_CLAUSE is used in Oracle PL/SQL to specify the default permanent tablespace for a user or a database object.",
    "color": "#f77e4e"
  },
  "Tablespace_encryption_specContext": {
    "description": "The TABLESPACE_ENCRYPTION_SPEC is used in Oracle PL/SQL to specify the encryption settings for a tablespace. By using this specification, you can enable or disable tablespace encryption and set the encryption algorithm and key size.",
    "color": "#f4ad42"
  },
  "Logging_clauseContext": {
    "description": "The LOGGING clause is used in the CREATE TABLE statement in Oracle PL/SQL to specify whether the table should be logged or not. Logging refers to the recording of changes made to the table in the database's redo logs, which can be used for recovery purposes. By default, tables in Oracle are logged.",
    "color": "#F8BBD0"
  },
  "Extent_management_clauseContext": {
    "description": "The EXTENT_MANAGEMENT_CLAUSE is used in Oracle PL/SQL to specify the extent management method for a tablespace. It determines how extents are allocated and managed within the tablespace. There are two options: 'DICTIONARY' and 'LOCAL'. 'DICTIONARY' means that extent information is stored in the data dictionary, while 'LOCAL' means that extent information is managed locally within the tablespace.",
    "color": "#e99494"
  },
  "Segment_management_clauseContext": {
    "description": "The SEGMENT_MANAGEMENT_CLAUSE is used in the CREATE TABLESPACE statement in Oracle PL/SQL to specify how the extents of the segment in the tablespace are managed. It determines whether the tablespace uses automatic segment space management or manual segment space management.",
    "color": "#F2BAC9"
  },
  "Temporary_tablespace_clauseContext": {
    "description": "The TEMPORARY TABLESPACE clause is used in Oracle PL/SQL to specify the name of the temporary tablespace for a database operation. Temporary tablespaces are used for sorting and temporary space allocation during query execution.",
    "color": "#F0B27A"
  },
  "Undo_tablespace_clauseContext": {
    "description": "The UNDO_TABLESPACE_CLAUSE is used in Oracle PL/SQL to specify the name of the undo tablespace for a table or a set of tables.",
    "color": "#f9c308"
  },
  "Tablespace_retention_clauseContext": {
    "description": "The TABLESPACE_RETENTION_CLAUSE is a clause used in Oracle PL/SQL to specify the retention policy for a tablespace.",
    "color": "#d2691e"
  },
  "Create_tablespace_setContext": {
    "description": "The CREATE TABLESPACE SET statement is used to create a tablespace set, which is a group of tablespaces that share the same attributes and storage characteristics.",
    "color": "#fb9f47"
  },
  "Permanent_tablespace_attrsContext": {
    "description": "The PERMANENT_TABLESPACE_ATTRS is a system-defined view in Oracle PL/SQL that displays information about the permanent tablespaces in the database.",
    "color": "#FFD700"
  },
  "Tablespace_encryption_clauseContext": {
    "description": "The TABLESPACE ENCRYPTION CLAUSE is used in Oracle PL/SQL to specify the encryption type and key for encrypting data in a tablespace.",
    "color": "#1e88e5"
  },
  "Default_tablespace_paramsContext": {
    "description": "The DEFAULT_TABLESPACE_PARAMS node is used to specify the default tablespace parameters for a PL/SQL package. It allows you to set default storage parameters, such as initial extent size, next extent size, and maximum extent size, for tables created within the package.",
    "color": "#F9A825"
  },
  "Default_table_compressionContext": {
    "description": "Default_table_compression is an Oracle PL/SQL feature that allows you to specify the default compression attribute for a table. It helps reduce the storage space required by the table by compressing the data and reducing the I/O and memory requirements.",
    "color": "#03A9F4"
  },
  "Low_highContext": {
    "description": "The LOW_HIGH compiler directive is used in Oracle PL/SQL to specify the lowest and highest valid values for an index or subscript. It is typically used in conjunction with the INDEX_BY table or index-by element to define the range of valid values.",
    "color": "#dcdcaa"
  },
  "Default_index_compressionContext": {
    "description": "Default index compression is a feature in Oracle PL/SQL that enables automatic compression for indexes on tables. It reduces the space required for storing index data by eliminating duplicate values and optimizing the storage of index keys. Default index compression can be beneficial for improving performance and reducing storage requirements, especially for large indexes.",
    "color": "#C678DD"
  },
  "Inmmemory_clauseContext": {
    "description": "The INMEMORY clause is used in Oracle PL/SQL to specify how a table or partition should be populated or populated and maintained in the In-Memory Column Store.",
    "color": "#FFFF00"
  },
  "Datafile_specificationContext": {
    "description": "The 'DATAFILE' clause in the Oracle PL/SQL specifies the datafile or tablespace where the data is stored. It is used in various statements such as 'CREATE TABLESPACE' or 'ALTER TABLESPACE' to specify the location of the data. The datafile specification includes the file name, size, and optionally other attributes like autoextend or maximum size.",
    "color": "#FF6B6B"
  },
  "Tempfile_specificationContext": {
    "description": "The TEMPFILE_SPECIFICATION is used in Oracle PL/SQL to specify the attributes of a temporary tablespace file.",
    "color": "#d6d6d6"
  },
  "Datafile_tempfile_specContext": {
    "description": "The DATAFILE/TEMPFILE_SPEC is a component of the CREATE TABLESPACE command in Oracle PL/SQL. It is used to specify the datafile or tempfile that will be associated with the newly created tablespace. The DATAFILE/TEMPFILE_SPEC includes the file name, its size, and the storage parameters such as initial size, autoextend, and maximum size.",
    "color": "#ffcc00"
  },
  "Redo_log_file_specContext": {
    "description": "The REDO_LOG_FILE_SPEC is a parameter used to specify the physical properties of a redo log file in Oracle Database. It includes the file name, size, and other attributes.",
    "color": "#00ADB5"
  },
  "Autoextend_clauseContext": {
    "description": "The AUTOEXTEND clause is used in Oracle PL/SQL to specify the automatic extension settings for a datafile in a tablespace. When a datafile reaches its maximum size and AUTOEXTEND is enabled, the file is automatically extended to accommodate additional data.",
    "color": "#e69e00"
  },
  "Maxsize_clauseContext": {
    "description": "The MAXSIZE clause is used in Oracle PL/SQL to specify the maximum size of a database tablespace or a datafile.",
    "color": "#f49ac1"
  },
  "Build_clauseContext": {
    "description": "The BUILD_CLAUSE is used in Oracle PL/SQL to specify how a composite data type is initialized when it is declared. It is used with the object type constructor to assign values to the attributes of the object type.",
    "color": "#2D9574"
  },
  "Parallel_clauseContext": {
    "description": "The PARALLEL_clause is used in Oracle PL/SQL to specify that a statement or query should be executed in parallel, meaning that multiple parallel execution servers will be used to process the work in parallel.",
    "color": "#008080"
  },
  "Alter_materialized_viewContext": {
    "description": "The ALTER_MATERIALIZED_VIEW statement is used to modify an existing materialized view in Oracle PL/SQL. It allows you to change various properties of the materialized view, such as its name, query, refresh method, or storage options.",
    "color": "#fcbf49"
  },
  "Alter_mv_option1Context": {
    "description": "The ALTER MV_OPTION1 statement is used to modify various options and settings of a materialized view in Oracle PL/SQL.",
    "color": "#F79724"
  },
  "Alter_mv_refreshContext": {
    "description": "The ALTER_MV_REFRESH command is used in Oracle PL/SQL to modify the refresh settings for a materialized view.",
    "color": "#BA68C8"
  },
  "Rollback_segmentContext": {
    "description": "In Oracle PL/SQL, a rollback segment is a temporary storage area used to store undo information for rollback operations. When a transaction is rolled back, the undo information from the rollback segments is used to restore the data to its original state before the transaction started. Rollback segments are managed automatically by the Oracle database system.",
    "color": "#dcedc8"
  },
  "Modify_mv_column_clauseContext": {
    "description": "The MODIFY_MV_COLUMN_CLAUSE is used in Oracle PL/SQL to modify a column within a materialized view. This clause allows you to change the datatype or size of a column, add or drop a column, or modify the default value or nullability of a column in the materialized view.",
    "color": "#996633"
  },
  "Alter_materialized_view_logContext": {
    "description": "The ALTER MATERIALIZED VIEW LOG statement is used to modify the settings of an existing materialized view log in Oracle PL/SQL. It allows you to add or remove columns from the log or change the logging options.",
    "color": "#ff3c00"
  },
  "Add_mv_log_column_clauseContext": {
    "description": "The ADD_MV_LOG_COLUMN_CLAUSE is used in Oracle PL/SQL to specify additional columns to be included in the materialized view log. The materialized view log is a table that records changes to the base table, which is used by Oracle to perform fast refreshes of materialized views. By using this clause, you can define additional columns in the log table that track changes to specific columns in the base table.",
    "color": "#d4d4d4"
  },
  "Move_mv_log_clauseContext": {
    "description": "The MOVE_MV_LOG_CLAUSE is used in Oracle PL/SQL to specify the tablespace where the materialized view log should be moved.",
    "color": "#1e88e5"
  },
  "Mv_log_augmentationContext": {
    "description": "MV_LOG_AUGMENTATION is a system table in Oracle that is used for materialized view log augmentation. It stores information about the primary key values of changed or new rows belonging to a base table, which are needed for fast refresh of materialized views.",
    "color": "#C792EA"
  },
  "Datetime_exprContext": {
    "description": "The datetime_expr is an expression that represents a date, time, or timestamp value in Oracle PL/SQL.",
    "color": "#F7922B"
  },
  "Interval_exprContext": {
    "description": "The INTERVAL_EXPR is used in Oracle PL/SQL to specify a duration or interval of time.",
    "color": "#d4b8ff"
  },
  "Synchronous_or_asynchronousContext": {
    "description": "The synchronous_or_asynchronous node represents a decision point in a workflow to determine whether a task should be executed synchronously or asynchronously.",
    "color": "#FF9900"
  },
  "Including_or_excludingContext": {
    "description": "Including_or_excluding is a clause used in various SQL statements, such as the SELECT statement, to specify whether to include or exclude certain values or rows based on specified conditions.",
    "color": "#9303fc"
  },
  "Create_materialized_view_logContext": {
    "description": "A CREATE_MATERIALIZED_VIEW_LOG statement is used to create a materialized view log. Materialized view logs are used to track changes to the master tables of a materialized view, enabling fast refresh operations on the materialized view.",
    "color": "#f9bc86"
  },
  "New_values_clauseContext": {
    "description": "The NEW_VALUES_CLAUSE is used in an Oracle PL/SQL trigger to reference the new values of the columns that were modified in the triggering statement.",
    "color": "#00a8a8"
  },
  "Mv_log_purge_clauseContext": {
    "description": "The MV_LOG_PURGE_CLAUSE is a clause used in Oracle PL/SQL to specify the criteria for purging rows from the materialized view log.",
    "color": "#F2D16B"
  },
  "Create_materialized_zonemapContext": {
    "description": "The CREATE_MATERIALIZED_ZONEMAP statement is used to create a materialized zonemap in Oracle PL/SQL. A materialized zonemap is a structure that represents the zoning information for a spatial table. It helps improve the performance of spatial queries by pre-computing and storing information about the spatial relationships between objects in the table. The zonemap can be used by the optimizer to optimize spatial queries.",
    "color": "#f0ad4e"
  },
  "Alter_materialized_zonemapContext": {
    "description": "The ALTER MATERIALIZED ZONEMAP statement is used to modify an existing materialized zonemap in Oracle PL/SQL. A materialized zonemap is a database object that allows for efficient query performance by precomputing and storing summarized data based on specific columns.",
    "color": "#fbb4ae"
  },
  "Drop_materialized_zonemapContext": {
    "description": "The DROP MATERIALIZED ZONEMAP statement is used to remove an existing materialized zonemap from the database.",
    "color": "#229954"
  },
  "Zonemap_refresh_clauseContext": {
    "description": "The Zonemap_refresh_clause is used to refresh a zone map in Oracle PL/SQL. Zone maps are used for storing and maintaining zone information of a partitioned table. The zonemap_refresh_clause allows you to refresh the zone map metadata for a specific table or partition.",
    "color": "#d4b6ff"
  },
  "Zonemap_attributesContext": {
    "description": "Zonemap_attributes is a PL/SQL function that returns a list of attributes for a specified zonemap in Oracle Database.",
    "color": "#00BFFF"
  },
  "Zonemap_nameContext": {
    "description": "The Zonemap_name is a parameter used in Oracle PL/SQL to specify the name of a Zonemap. A Zonemap is a database feature that helps optimize query performance by mapping data to specific zones based on certain criteria.",
    "color": "#FF9900"
  },
  "Operator_nameContext": {
    "description": "The `Operator_name` is a placeholder for an operator in Oracle PL/SQL. Operators are used to perform different kinds of operations on variables, constants, and expressions.",
    "color": "#e69a00"
  },
  "Operator_function_nameContext": {
    "description": "Operator function name is a valid identifier used to define custom PL/SQL operators.",
    "color": "#569cd6"
  },
  "Create_zonemap_on_tableContext": {
    "description": "The CREATE ZONEMAP statement is used to create a zone map on a table in Oracle PL/SQL. A zone map is a performance-related feature that improves query performance by storing metadata about the data distribution within a table. It allows the database optimizer to skip reading unnecessary data blocks during query execution.",
    "color": "#b58900"
  },
  "Create_zonemap_as_subqueryContext": {
    "description": "The CREATE ZONEMAP AS SUBQUERY statement in Oracle PL/SQL is used to create a zonemap based on the result of a subquery. Zonemaps are used to improve query performance by precomputing and storing aggregated data based on certain columns. The subquery can include aggregations, filtering, and joins to define the data that the zonemap will be based on.",
    "color": "#f3bd69"
  },
  "Alter_operatorContext": {
    "description": "The ALTER OPERATOR statement is used to modify the attributes of an existing user-defined operator in Oracle PL/SQL. This statement allows you to change the operator symbol, precedence, associativity, or implementation type of the operator.",
    "color": "#a6e22e"
  },
  "Drop_operatorContext": {
    "description": "The DROP OPERATOR statement is used to remove a user-defined operator from the Oracle database.",
    "color": "#f4511e"
  },
  "Create_operatorContext": {
    "description": "The CREATE OPERATOR statement is used to create a new operator in Oracle PL/SQL. Operators are symbols or words that represent a specific action or operation, such as addition (+) or subtraction (-). This statement allows you to define a custom operator and specify its behavior and characteristics, such as the input and output data types.",
    "color": "#A6E22E"
  },
  "Binding_clauseContext": {
    "description": "The BINDING_CLAUSE is used in Oracle PL/SQL to specify parameter bindings when using native dynamic SQL. It is used to pass values to placeholders in SQL statements or anonymous blocks of code.",
    "color": "#f29600"
  },
  "Add_binding_clauseContext": {
    "description": "The ADD_BINDING_CLAUSE is used in the Oracle PL/SQL language to specify a binding variable in a SQL statement. Binding variables are used to pass values from PL/SQL to SQL queries and enable dynamic SQL execution.",
    "color": "#fbbd08"
  },
  "Implementation_clauseContext": {
    "description": "The IMPLEMENTATION_CLAUSE is a clause in PL/SQL that is used to control the implementation details of a PL/SQL unit, such as a package or procedure. It allows you to specify whether the unit is to be implemented as a standalone unit or as part of a package, and also provides options for specifying the level of debug information to be compiled into the unit.",
    "color": "#ffa74d"
  },
  "Primary_operator_listContext": {
    "description": "The primary_operator_list is a collection of operators that are used in Oracle PL/SQL to perform various operations on data. These operators include arithmetic operators (+, -, *, /), comparison operators (=, <>, >, <, >=, <=), logical operators (AND, OR, NOT), and others.",
    "color": "#FF8C00"
  },
  "Primary_operator_itemContext": {
    "description": "The PRIMARY_OPERATOR_ITEM is a PL/SQL node that represents an operand or an expression used in a primary operator. It can be a literal value, a variable, a function call, or any other valid PL/SQL expression. It is used as an input to perform operations such as arithmetic operations, string concatenation, logical operations, etc.",
    "color": "#dca3a3"
  },
  "Operator_context_clauseContext": {
    "description": "The OPERATOR_CONTEXT clause is used in Oracle PL/SQL to specify the operator context of a function or a method. It allows you to define the behavior of an operator when used with user-defined data types.",
    "color": "#d4d4d4"
  },
  "Using_function_clauseContext": {
    "description": "The USING function clause is used in Oracle PL/SQL to specify a list of parameters to be passed into a function or procedure. It allows you to pass values from the calling program to the called subroutine.",
    "color": "#f9a041"
  },
  "Drop_binding_clauseContext": {
    "description": "The DROP_BINDING_CLAUSE is used in PL/SQL to specify the name of a cursor variable or host cursor variable to be dropped.",
    "color": "#D4D4D4"
  },
  "Create_materialized_viewContext": {
    "description": "The CREATE MATERIALIZED VIEW statement is used to create a materialized view in Oracle PL/SQL. A materialized view is a database object that stores the results of a query and allows for faster data retrieval. It can be used to improve query performance by precomputing and storing the results of complex queries, and can also be refreshed periodically to keep the data up-to-date.",
    "color": "#FF9800"
  },
  "Scoped_table_ref_constraintContext": {
    "description": "The Scoped_table_ref_constraint node is used to define a table reference constraint within a specific scope in Oracle PL/SQL. It allows you to specify constraints on the columns of a table or view, within a specific scope.",
    "color": "#99CC99"
  },
  "Mv_column_aliasContext": {
    "description": "Mv_column_alias is a node used in Oracle PL/SQL to provide an alias or alternative name for a column in a materialized view. It allows the user to specify a more meaningful or concise name for the column, which can be useful for readability and clarity in queries or reports.",
    "color": "#f9963b"
  },
  "Create_mv_refreshContext": {
    "description": "The CREATE_MV_REFRESH statement is used to create a materialized view refresh group, which is a collection of materialized views that are refreshed together.",
    "color": "#F2E8F7"
  },
  "Drop_materialized_viewContext": {
    "description": "The DROP MATERIALIZED VIEW statement is used to remove an existing materialized view in Oracle PL/SQL.",
    "color": "#f92672"
  },
  "Create_contextContext": {
    "description": "The CREATE_CONTEXT statement creates a new context namespace or declares a new attribute within an existing namespace in Oracle PL/SQL. Context namespaces allow you to store and retrieve attribute values that are shared across multiple program units or sessions.",
    "color": "#fbb03b"
  },
  "Oracle_namespaceContext": {
    "description": "Oracle Namespace is a virtual container used to group related database objects, such as tables, views, procedures, functions, etc., into a single logical unit.",
    "color": "#00ACE6"
  },
  "Create_clusterContext": {
    "description": "The CREATE_CLUSTER statement is used to create a cluster in Oracle PL/SQL. A cluster is a schema object that stores related tables together in the same disk area. The tables must have one or more common columns, which are used to cluster the data physically on the disk. Clusters can improve performance by reducing disk I/O and improving data access speed.",
    "color": "#008080"
  },
  "Create_profileContext": {
    "description": "The CREATE_PROFILE statement is used in Oracle PL/SQL to create a profile. A profile is a collection of settings that can be assigned to users or roles in order to control various aspects of their behavior and resource consumption. These settings include password management, session and resource limits, and idle time limits.",
    "color": "#ffcc00"
  },
  "Resource_parametersContext": {
    "description": "Resource parameters are used in Oracle PL/SQL to pass values to a procedure or function. They are defined in the header of the procedure or function and allow the caller to provide input values when invoking the procedure or function.",
    "color": "#FF5722"
  },
  "Password_parametersContext": {
    "description": "The PASSWORD_PARAMETERS node is used to define the password verification parameters for a user in Oracle PL/SQL. These parameters include password length, complexity requirements, and password expiration settings.",
    "color": "#f2711c"
  },
  "Create_lockdown_profileContext": {
    "description": "The CREATE_LOCKDOWN_PROFILE statement is used to create a new lockdown profile in Oracle PL/SQL. Lockdown profiles are used to restrict certain actions or operations within a database.",
    "color": "#f44336"
  },
  "Static_base_profileContext": {
    "description": "The STATIC_BASE_PROFILE is a type of profile in Oracle PL/SQL that allows you to define a set of session-level parameter values that remain constant for the entire duration of a session. These parameter values are set when the user logs in and cannot be changed during the session.",
    "color": "#ff5722"
  },
  "Dynamic_base_profileContext": {
    "description": "The DYNAMIC_BASE_PROFILE is a feature in Oracle PL/SQL that allows for dynamic manging of user profiles based on certain conditions. It allows for customizing user profiles during runtime based on specific criteria, such as the role of the user or other session attributes. By using the DYNAMIC_BASE_PROFILE, you can dynamically assign different settings and resource limits for different users or sessions.",
    "color": "#009688"
  },
  "Create_outlineContext": {
    "description": "The CREATE_OUTLINE statement is used to create a stored outline, which is a set of hints that can be associated with a specific SQL statement. Stored outlines are used to preserve execution plans and improve performance by providing a consistent plan for a given SQL statement, even if the environment or optimizer settings change.",
    "color": "#f9d56e"
  },
  "Create_restore_pointContext": {
    "description": "Creates a restore point in Oracle database.",
    "color": "#f9c83d"
  },
  "Create_roleContext": {
    "description": "The CREATE_ROLE statement is used to create a new role in Oracle PL/SQL. Roles are used to group a set of privileges and can be granted to users or other roles.",
    "color": "#e91e63"
  },
  "Create_tableContext": {
    "description": "The CREATE TABLE statement is used to create a new table in an Oracle database. It specifies the table name and defines the columns and data types that will be stored in the table.",
    "color": "#f36d33"
  },
  "Xmltype_tableContext": {
    "description": "The XMLTYPE_TABLE is a table type provided by Oracle that is used to store XML data in a structured manner.",
    "color": "#FFC31C"
  },
  "Xmltype_virtual_columnsContext": {
    "description": "XMLType virtual columns are columns that store XML data within a table. These columns are defined using the XMLType data type, and their values are derived from other columns or expressions in the table.",
    "color": "#ff00ff"
  },
  "Xmltype_column_propertiesContext": {
    "description": "XmlType Column Properties are used to define and manipulate XML data stored in an XMLType column of a table. These properties include various functions and methods to extract, transform, and validate the XML data.",
    "color": "#f5821f"
  },
  "Xmltype_storageContext": {
    "description": "The XMLType storage clause is used to specify how to store XML data in Oracle PL/SQL. It allows developers to define whether XML data should be stored inline or in a dedicated tablespace.",
    "color": "#F9A825"
  },
  "Xmlschema_specContext": {
    "description": "The XMLSCHEMA_SPEC is a specification for an XML schema definition language (XSD) that is used to define the structure and constraints of XML documents. It is commonly used in Oracle PL/SQL to validate and manipulate XML data.",
    "color": "#00BCD4"
  },
  "Object_tableContext": {
    "description": "Object_table is a data structure introduced in Oracle PL/SQL to store and manipulate data in an object-oriented manner. It provides a way to define and use custom types as tables, allowing for more complex data structures and operations.",
    "color": "#008080"
  },
  "Object_typeContext": {
    "description": "The object_type is a data type in Oracle PL/SQL used to define the type of an object. It is used to create user-defined data types or to define the type of variables, parameters, or attributes in a program. The object_type can be a built-in type like NUMBER or VARCHAR2, or it can be a user-defined type like a record or a table type.",
    "color": "#EC407A"
  },
  "Oid_index_clauseContext": {
    "description": "The Oid_index_clause is used in Oracle PL/SQL to specify an OID (Object Identifier) index for a table or cluster. An OID index is used to associate a unique identifier with each row in a table or cluster. This clause is typically used in conjunction with the INSERT statement to specify the OID index for the inserted rows.",
    "color": "#f16e00"
  },
  "Oid_clauseContext": {
    "description": "The Oid_clause is used in Oracle PL/SQL to specify the object identifier (OID) for a table or view. The OID is a system-generated unique identifier for each row in an index-organized table or cluster table. It is commonly used for accessing specific rows in these types of tables.",
    "color": "#e6b800"
  },
  "Object_propertiesContext": {
    "description": "Object properties refer to the attributes or characteristics of an object in Oracle PL/SQL. They are used to describe the state or behavior of an object.",
    "color": "#9cdcfe"
  },
  "Object_table_substitutionContext": {
    "description": "Object_table_substitution is a feature in Oracle PL/SQL that allows you to use a PL/SQL record or collection type as a substitute for a table name in SQL statements. It provides a way to manipulate the data stored in the record or collection using SQL statements.",
    "color": "#00BFFF"
  },
  "Relational_tableContext": {
    "description": "A relational table in Oracle PL/SQL is a structured collection of related data stored in rows and columns. It is used to organize and store data in a structured and efficient manner. Tables are the main objects used in database management systems for data storage and retrieval operations.",
    "color": "#FF9800"
  },
  "Immutable_table_clausesContext": {
    "description": "The immutable_table_clauses is a set of clauses used in Oracle PL/SQL to create and manipulate immutable tables. Immutable tables are read-only tables that cannot be modified directly after creation.",
    "color": "#56B4E9"
  },
  "Immutable_table_no_drop_clauseContext": {
    "description": "The IMMUTABLE_TABLE_NO_DROP_CLAUSE is an optional clause used in the definition of a table in Oracle PL/SQL. When this clause is specified, it indicates that the table should be immutable, meaning that it cannot be dropped or modified once created. This is typically used for system tables or tables that need to be protected from accidental deletions or modifications.",
    "color": "#d1d100"
  },
  "Immutable_table_no_delete_clauseContext": {
    "description": "The IMMUTABLE keyword in the DELETE statement is used to specify that the table being referenced is immutable, meaning that the rows in the table cannot be deleted. This clause can be used to prevent accidental deletion of data in a table.",
    "color": "#f9c35b"
  },
  "Blockchain_table_clausesContext": {
    "description": "Blockchain table clauses are specific clauses used with blockchain tables in Oracle PL/SQL. Blockchain tables are a type of table that stores tamper-proof and auditable data using blockchain technology.",
    "color": "#32A852"
  },
  "Blockchain_drop_table_clauseContext": {
    "description": "The BLOCKCHAIN_DROP_TABLE_CLAUSE is used in Oracle PL/SQL to drop a table from a blockchain table. Dropping a table from a blockchain table removes it from the blockchain, and all the associated data is permanently deleted. This clause is specific to managing blockchain tables in Oracle databases.",
    "color": "#FF9900"
  },
  "Blockchain_row_retention_clauseContext": {
    "description": "The BLOCKCHAIN_ROW_RETENTION_CLAUSE is a clause used in Oracle PL/SQL to set the retention period for blockchain tables. Blockchain tables are used to store immutable and auditable data with tamper-evident features.",
    "color": "#ff9900"
  },
  "Blockchain_hash_and_data_format_clauseContext": {
    "description": "The BLOCKCHAIN_HASH_AND_DATA_FORMAT clause is used in Oracle PL/SQL to specify the format of hash and data for blockchain tables. It allows you to define the size, format, and type of hash and data columns in a blockchain table.",
    "color": "#2dcc70"
  },
  "Collation_nameContext": {
    "description": "The COLLATION_NAME is a built-in function in Oracle PL/SQL that returns the name of the collation used for the current session.",
    "color": "#d4d4d4"
  },
  "Table_propertiesContext": {
    "description": "Table_properties is a node used in Oracle PL/SQL to specify various properties and characteristics of a table.",
    "color": "#009688"
  },
  "Read_only_clauseContext": {
    "description": "The READ ONLY clause is used in Oracle PL/SQL to specify that a particular SQL statement should not modify any data in the database. It is often used in situations where you want to ensure that a query does not have any unintended side effects.",
    "color": "#EF7F7F"
  },
  "Indexing_clauseContext": {
    "description": "The indexing_clause is used in Oracle PL/SQL to specify the way data is indexed in a table. It allows you to define one or more indexes on specific table columns, improving the performance of queries that access the table.",
    "color": "#FACD00"
  },
  "Attribute_clustering_clauseContext": {
    "description": "The ATTRIBUTE_CLUSTERING_CLAUSE is used in Oracle PL/SQL to specify the attribute clustering for a table or table partition. Attribute clustering is a way to physically group rows of a table or partition based on the values of one or more columns. This can improve query performance by reducing disk I/O and improving data locality within storage.",
    "color": "#f5bc42"
  },
  "Clustering_joinContext": {
    "description": "The CLUSTERING_JOIN hint is used in Oracle PL/SQL to specify the join method for a specific query block. It hints the optimizer to use the specified join method, which is typically clustering join, to improve performance.",
    "color": "#FF8C00"
  },
  "Clustering_join_itemContext": {
    "description": "The CLUSTERING_JOIN_ITEM is a node in Oracle PL/SQL that is used to specify the table and the column used in the clustering join of a SELECT statement. It is used to improve performance by reducing disk I/O and improving data locality. By clustering related rows together on disk, the database can read multiple rows in a single I/O operation, resulting in faster query execution.",
    "color": "#dcdcaa"
  },
  "Equijoin_conditionContext": {
    "description": "The equijoin_condition is a condition that defines the equality relationship between columns of two tables in an equijoin operation in Oracle PL/SQL.",
    "color": "#36A1B0"
  },
  "Cluster_clauseContext": {
    "description": "The CLUSTER clause is used in the CREATE TABLE statement in Oracle PL/SQL to specify that the table should be clustered on a specific column or columns. Clustering is a physical storage technique that groups together table rows that share common values in the clustering column(s), which can improve query performance on those columns.",
    "color": "#f7921e"
  },
  "Clustering_columnsContext": {
    "description": "Clustering_columns is a set of columns in a table that are used to physically arrange the data in the table in a specific order. The purpose of clustering columns is to reduce disk I/O and improve query performance by grouping together related rows on disk.",
    "color": "#038C65"
  },
  "Clustering_column_groupContext": {
    "description": "A clustering_column_group is a set of columns that are physically stored together on disk in the same data block. This feature improves performance by reducing I/O and enhancing data retrieval efficiency.",
    "color": "#f4a261"
  },
  "Yes_noContext": {
    "description": "The YES_NO data type is a special Boolean type in Oracle PL/SQL that can only store two values: YES or NO. It is often used as a flag to indicate a binary state or to represent a true/false condition.",
    "color": "#d2691e"
  },
  "Zonemap_clauseContext": {
    "description": "The Zonemap_clause is used in Oracle PL/SQL to specify the zone map name for a table or a materialized view. A zone map is a data organization feature that divides a table or a materialized view into regions or zones based on a specified column or set of columns. It provides improved compression and performance by eliminating the need to process irrelevant data during query execution.",
    "color": "#2aa198"
  },
  "Logical_replication_clauseContext": {
    "description": "The LOGICAL REPLICATION clause is used in Oracle PL/SQL to specify the type of replication for a table. It allows you to enable or disable the propagation of changes made to the table to other databases.",
    "color": "#34a2eb"
  },
  "Table_nameContext": {
    "description": "The table_name is used to specify the name of a table in Oracle PL/SQL. It is used in various SQL statements such as INSERT, SELECT, UPDATE, and DELETE to reference a specific table.",
    "color": "#7EC0EE"
  },
  "Relational_propertyContext": {
    "description": "Relational_property is a node in Oracle PL/SQL that represents a property of a relational object, such as a table, view, or column. It provides information about the structure and characteristics of the object.",
    "color": "#f08d49"
  },
  "Table_partitioning_clausesContext": {
    "description": "Table partitioning clauses in Oracle PL/SQL are used to divide a table into smaller, more manageable parts called partitions. These partitions can be based on a specific criterion, such as a range of values, a list of values, or a hash function. Partitioning the table can improve performance, simplify data management, and provide better scalability.",
    "color": "#DA70D6"
  },
  "Range_partitionsContext": {
    "description": "The RANGE PARTITIONS clause is used in Oracle PL/SQL to divide a table or index into multiple partitions based on a specified range of values. Each partition contains a subset of the data that falls within the specified range. This partitioning technique can improve performance and manageability of large tables or indexes.",
    "color": "#ff9f00"
  },
  "List_partitionsContext": {
    "description": "The LIST_PARTITIONS function is used to retrieve a list of all partitions for a given table.",
    "color": "#f6c23e"
  },
  "Hash_partitionsContext": {
    "description": "Hash partitions in Oracle PL/SQL are used to divide a table or index into multiple partitions based on a hash function. Each partition is assigned a unique hash value, and data is distributed across the partitions based on the calculated hash value of a specific column. This technique allows for parallelism and improves performance when querying or processing large datasets.",
    "color": "#66FF33"
  },
  "Individual_hash_partitionsContext": {
    "description": "Individual hash partitions are a partitioning method used in Oracle PL/SQL to horizontally partition a table or index based on a hash function. Each partition is defined by a specific hash value calculated from one or more columns of the table. This method distributes the data evenly across multiple partitions based on the hash value, improving performance for certain types of queries.",
    "color": "#e67475"
  },
  "Hash_partitions_by_quantityContext": {
    "description": "The 'HASH_PARTITIONS_BY_QUANTITY' clause is used to specify the number of hash partitions to create for a table or index in Oracle PL/SQL. This partitioning method evenly distributes data across the specified number of partitions based on a hash function.",
    "color": "#56b6c2"
  },
  "Hash_partition_quantityContext": {
    "description": "The hash_partition_quantity is an attribute used in Oracle PL/SQL to specify the number of hash partitions for a table or an index. Hash partitioning is a method of dividing data across multiple partitions based on a hash function. This attribute determines the number of partitions that will be created for the table or index using hash partitioning.",
    "color": "#FCE94F"
  },
  "Composite_range_partitionsContext": {
    "description": "Composite range partitions in Oracle PL/SQL allow you to partition a table using multiple columns as the partition keys. This means that the table is divided into multiple partitions based on the range of values for each specified column.",
    "color": "#bf616a"
  },
  "Composite_list_partitionsContext": {
    "description": "Composite list partitions are a partitioning technique in Oracle PL/SQL that allows you to further divide a table or index partition based on multiple columns using a combination of list and range partitioning.",
    "color": "#993366"
  },
  "Composite_hash_partitionsContext": {
    "description": "Composite hash partitions is a partitioning method in Oracle PL/SQL that allows you to partition a table or index based on a combination of multiple columns using a hash function. This method is useful when you want to evenly distribute data across multiple partitions based on the hash value of the specified columns.",
    "color": "#008080"
  },
  "Reference_partitioningContext": {
    "description": "Reference partitioning is a feature of Oracle PL/SQL that allows you to divide a table into multiple partitions based on the values of a foreign key column. Each partition corresponds to a distinct value in the foreign key column. This type of partitioning is useful when table data is related to data in another table through a foreign key relationship.",
    "color": "#f3933d"
  },
  "Reference_partition_descContext": {
    "description": "The REFERENCE_PARTITION_DESC is a node in Oracle PL/SQL that represents a partition description for a reference partition.",
    "color": "#d4c682"
  },
  "System_partitioningContext": {
    "description": "System partitioning is a feature in Oracle PL/SQL that allows you to divide a large table or index into smaller partitions for better performance and manageability. It helps improve query performance by allowing the database to scan only the relevant partitions instead of the entire table or index. System partitioning is typically used for tables or indexes that are very large or frequently queried.",
    "color": "#e6b800"
  },
  "Range_partition_descContext": {
    "description": "The RANGE_PARTITION_DESC is used to declare the description of a range partition in Oracle PL/SQL. It is typically used in conjunction with the DECLARE statement to define the attributes and behavior of a range partition.",
    "color": "#a6e4fc"
  },
  "List_partition_descContext": {
    "description": "The LIST partitioning method in Oracle PL/SQL allows you to manually define a list of values that determine which partition a row belongs to. Each partition is defined with a specific list of values, and when a new row is inserted, the partitioning function is evaluated to determine the appropriate partition based on the value of the specified column. This method is useful when your data can be categorized into distinct groups or ranges of values.",
    "color": "#FF5722"
  },
  "Subpartition_templateContext": {
    "description": "A subpartition template is used to define the structure of subpartitions within a partition of a table or index. It specifies the names and attributes of the subpartitions and can be used to create multiple subpartitions with the same structure.",
    "color": "#ffb700"
  },
  "Hash_subpartition_quantityContext": {
    "description": "The `HASH_SUBPARTITION_QUANTITY` is a subpartitioning attribute used in Oracle PL/SQL to specify the number of hash subpartitions for a given partition. It determines how the data within the partition is divided into subpartitions using a hashing algorithm based on the specified quantity.",
    "color": "#f6921e"
  },
  "Subpartition_by_rangeContext": {
    "description": "The SUBPARTITION BY RANGE clause is used to create subpartitions for a given partition in an Oracle PL/SQL table. It specifies the method used to determine the subpartition in a range partitioned table.",
    "color": "#00BFFF"
  },
  "Subpartition_by_listContext": {
    "description": "The SUBPARTITION BY LIST clause is used in Oracle PL/SQL to define a subpartitioning method for a table or index based on a list of values. It allows you to specify multiple subpartitions within each partition, where each subpartition is associated with a specific set of values.",
    "color": "#FF7373"
  },
  "Subpartition_by_hashContext": {
    "description": "The SUBPARTITION BY HASH clause is used in Oracle PL/SQL to partition a subpartitioned table or index using a hash function.",
    "color": "#FFA500"
  },
  "Subpartition_nameContext": {
    "description": "The subpartition_name is a name given to a specific subpartition within a partition of a table or index in Oracle PL/SQL.",
    "color": "#d4d4d4"
  },
  "Range_subpartition_descContext": {
    "description": "The RANGE_SUBPARTITION_DESC is a clause used within the CREATE TABLE statement in Oracle PL/SQL. It is used to specify the range values for subpartitions within a table. This clause is used when creating a partitioned table with subpartitions that are further divided based on a range of values.",
    "color": "#4e8aeb"
  },
  "List_subpartition_descContext": {
    "description": "The LIST_SUBPARTITION_DESC is a clause used in Oracle PL/SQL to specify the description and values for a subpartition in a list partitioned table. It is used in the CREATE TABLE or ALTER TABLE statements.",
    "color": "#ffb347"
  },
  "Individual_hash_subpartsContext": {
    "description": "The INDIVIDUAL_HASH_SUBPARTS clause is used in partitioning an index-organized table (IOT) to specify the number of hash subpartitions within each partition. Each hash subpartition contains one or more primary key values from the IOT. By specifying the number of hash subpartitions, you can distribute the rows of the IOT more evenly across the subpartitions.",
    "color": "#808080"
  },
  "Hash_subparts_by_quantityContext": {
    "description": "The HASH_SUBPARTS_BY_QUANTITY is a clause used in the CREATE TABLE statement in Oracle PL/SQL. It specifies the number of subpartitions to create for each partition when using the HASH partitioning method.",
    "color": "#9cdcfe"
  },
  "Range_values_clauseContext": {
    "description": "The RANGE_VALUES_CLAUSE is used in the PARTITION BY RANGE clause of the CREATE TABLE statement in Oracle PL/SQL. It specifies the range values for each partition in the table. Each range value represents a boundary for a partition that determines which rows will be stored in that partition.",
    "color": "#f1fa8c"
  },
  "List_values_clauseContext": {
    "description": "The LIST_VALUES_CLAUSE is used in the context of a SELECT statement in Oracle PL/SQL. It specifies a comma-separated list of values to be returned by the SELECT statement. This clause is typically used to define a list of values for an IN or NOT IN condition in a WHERE clause.",
    "color": "#ffa500"
  },
  "Table_partition_descriptionContext": {
    "description": "The TABLE_PARTITION node is used to define partitions within a table in Oracle PL/SQL. Partitioning involves dividing a large table into smaller, more manageable segments called partitions, which can improve query performance and maintenance operations.",
    "color": "#FF7400"
  },
  "Partitioning_storage_clauseContext": {
    "description": "The PARTITIONING STORAGE clause is used in Oracle PL/SQL to define the storage attributes for individual partitions or subpartitions of a partitioned table or index. It specifies the tablespaces or storage parameters to be used for each partition or subpartition.",
    "color": "#fbd86f"
  },
  "Lob_partitioning_storageContext": {
    "description": "LOB Partitioning Storage is a feature in Oracle PL/SQL that allows for efficient storage and management of LOB (Large Object) data types in a partitioned table. It provides the ability to store LOB data in separate tablespaces, making it easier to manage and optimize storage for large amounts of LOB data.",
    "color": "#00BFFF"
  },
  "Datatype_null_enableContext": {
    "description": "The DATATYPE_NULL_ENABLE is a compiler directive in Oracle PL/SQL that allows you to enable or disable the use of the NULL keyword as a data type. When enabled, the NULL keyword can be used as a placeholder for variables, parameters, and return types, indicating that they can hold a null value. When disabled, the NULL keyword is treated as an identifier and not as a data type.",
    "color": "#00ff00"
  },
  "Size_clauseContext": {
    "description": "The SIZE_CLAUSE is a clause used in the CREATE TABLESPACE statement in PL/SQL. It specifies the initial size, extent sizes, and maximum size of the tablespace being created. The SIZE_CLAUSE allows you to control the size and growth of the tablespace.",
    "color": "#9933CC"
  },
  "Table_compressionContext": {
    "description": "Table compression is a feature in Oracle PL/SQL that reduces the amount of storage needed for a table by compressing the data in a more efficient format. This can improve the performance of query execution and reduce disk space usage.",
    "color": "#009688"
  },
  "Inmemory_table_clauseContext": {
    "description": "The INMEMORY_TABLE_CLAUSE is used in Oracle PL/SQL to specify whether a table is to be populated in the In-Memory Column Store (IM column store) for faster access and improved performance.",
    "color": "#ffcc00"
  },
  "Inmemory_attributesContext": {
    "description": "Inmemory_attributes is a parameter in Oracle Database that specifies the default INMEMORY attribute for all database tables and materialized views. This attribute determines whether a table or materialized view is populated in the In-Memory Column Store, which is a component of Oracle Database In-Memory option. Tables or materialized views with the INMEMORY attribute set to ENABLED are populated in-memory, while those with the INMEMORY attribute set to DISABLED are not.",
    "color": "#A6E22E"
  },
  "Inmemory_memcompressContext": {
    "description": "The INMEMORY_MEMCOMPRESS parameter is used to specify the compression level for the In-Memory Column Store in Oracle Database. It determines how much compression is applied to the data stored in memory.",
    "color": "#5f7de0"
  },
  "Inmemory_priorityContext": {
    "description": "The INMEMORY_PRIORITY parameter is used to specify the priority of a table or partition in the In-Memory Column Store. Tables or partitions with higher priority values will be populated in memory before the ones with lower priority values.",
    "color": "#ffa500"
  },
  "Inmemory_distributeContext": {
    "description": "The INMEMORY_DISTRIBUTE hint is used to specify how data is distributed among In-Memory Compression Units (IMCUs) in Oracle Database In-Memory. By default, Oracle automatically distributes data across IMCUs using a hashing algorithm based on the primary key of the table. However, you can use this hint to override the default distribution method and explicitly specify how data should be distributed.",
    "color": "#99ccff"
  },
  "Inmemory_duplicateContext": {
    "description": "The INMEMORY_DUPLICATE clause is used in Oracle PL/SQL to specify whether duplicate values are allowed in an In-Memory column store table. When set to NO, duplicate values are not allowed in the specified columns. When set to YES, duplicate values are allowed in the specified columns.",
    "color": "#d69d85"
  },
  "Inmemory_column_clauseContext": {
    "description": "The INMEMORY_COLUMN clause is used in Oracle PL/SQL to specify which columns of a table or partition should be stored in the In-Memory Column Store (IM column store) for faster access. By storing frequently accessed columns in the IM column store, queries that involve these columns can be processed much faster.",
    "color": "#f36c21"
  },
  "Physical_attributes_clauseContext": {
    "description": "The PHYSICAL_ATTRIBUTES_CLAUSE is used in the definition of a table in Oracle PL/SQL. It specifies the physical storage attributes of the table, such as the size of the initial extent, the size of the next extent, and the maximum number of extents allowed. This clause helps in optimizing the storage and performance of the table.",
    "color": "#FF6F00"
  },
  "Storage_clauseContext": {
    "description": "The STORAGE clause is used in the CREATE TABLE statement in Oracle PL/SQL to specify the storage characteristics for a table or partition.",
    "color": "#00bfff"
  },
  "Deferred_segment_creationContext": {
    "description": "Deferred_segment_creation is a parameter in Oracle PL/SQL that controls whether the segments for tables and indexes are automatically created when a table or index is created. When set to TRUE, the segments are created at the first insert operation on the table or index. When set to FALSE, the segments are created immediately when the table or index is created.",
    "color": "#FFD700"
  },
  "Segment_attributes_clauseContext": {
    "description": "The SEGMENT_ATTRIBUTES_CLAUSE is part of the CREATE TABLE statement in Oracle PL/SQL. It is used to specify attributes for individual segments of a table, such as the physical properties of the table segments.",
    "color": "#FAC863"
  },
  "Physical_propertiesContext": {
    "description": "Physical properties in Oracle PL/SQL refer to the characteristics and settings related to the storage and execution of the database objects and program units. These properties include attributes such as tablespace allocation, data segment creation, storage parameters, and execution plans. By modifying and configuring these physical properties, developers can optimize the performance and efficiency of their PL/SQL code and database operations.",
    "color": "#FF5722"
  },
  "Ilm_clauseContext": {
    "description": "The ILM (Information Lifecycle Management) clause is used in Oracle PL/SQL to specify the retention and compression policies for data in a table or partition. It allows you to define how long data should be retained and when it should be compressed or moved to a different storage tier based on its age and access patterns.",
    "color": "#f1c40f"
  },
  "Ilm_policy_clauseContext": {
    "description": "The ILM (Information Lifecycle Management) policy clause is used in Oracle PL/SQL to specify an ILM policy for a table. It defines the storage and retention characteristics for the table's data.",
    "color": "#D4AF37"
  },
  "Ilm_compression_policyContext": {
    "description": "The ILM (Information Lifecycle Management) compression policy is used in Oracle PL/SQL to define how data compression is applied to tables or segments within a tablespace.",
    "color": "#FFA500"
  },
  "Ilm_tiering_policyContext": {
    "description": "A PL/SQL package used for managing Information Lifecycle Management (ILM) tiering policies in Oracle. Tiering policies determine how data is managed and moved between different tiers of storage based on predefined rules.",
    "color": "#ffe0b2"
  },
  "Ilm_after_onContext": {
    "description": "ILM_AFTER_ON is a clause used in Oracle PL/SQL to specify the action to be performed after a specific event occurs on a table in an Information Lifecycle Management (ILM) policy.",
    "color": "#2ECC71"
  },
  "Segment_groupContext": {
    "description": "A segment group in Oracle PL/SQL is a logical grouping of related segments in a control break report. It defines the grouping criteria for the segments and allows for the calculation of summary values at different levels of the report. Segment groups are commonly used in generating subtotals and grand totals in reports.",
    "color": "#00FFFF"
  },
  "Ilm_inmemory_policyContext": {
    "description": "The ILM_INMEMORY_POLICY is a feature in Oracle Database that allows you to specify which segments should be kept in the In-Memory Column Store. It is used to define a policy for segment allocation in the In-Memory Column Store based on various criteria such as object type, size, and usage patterns.",
    "color": "#fcbf49"
  },
  "Ilm_time_periodContext": {
    "description": "The ILM_TIME_PERIOD is a predefined interval of time used in Oracle Database for information lifecycle management (ILM). It represents a specific time duration, such as a day, week, month, quarter, or year.",
    "color": "#009688"
  },
  "Heap_org_table_clauseContext": {
    "description": "The HEAP_ORG_TABLE_CLAUSE is used in CREATE TABLE statements in Oracle PL/SQL to specify that the table should be organized as a heap-organized table. Heap-organized tables store data in an unordered manner, without any specific sorting criteria.",
    "color": "#fcbf1e"
  },
  "External_table_clauseContext": {
    "description": "The EXTERNAL TABLE clause is used in Oracle PL/SQL to create a table that maps to data stored outside the database, such as in files or on external systems. This allows data to be accessed and queried without the need to import it into the database. The clause specifies the location, format, and characteristics of the external data source.",
    "color": "#fbb4ae"
  },
  "Access_driver_typeContext": {
    "description": "The ACCESS_DRIVER_TYPE is a constant that represents the type of access driver used for accessing external tables in Oracle PL/SQL. It is used in the CREATE TABLE statement to specify the access driver for reading data from external files.",
    "color": "#f07178"
  },
  "External_table_data_propsContext": {
    "description": "The EXTERNAL_TABLE_DATA_PROPS is a PL/SQL data type used to define properties and options for accessing data from an external table in Oracle. It allows you to specify various parameters related to the data source such as file format, access method, and parsing options. This data type is commonly used in the CREATE TABLE statement when defining an external table.",
    "color": "#FDB515"
  },
  "Opaque_format_specContext": {
    "description": "The Opaque Format Specifier is a placeholder used to represent values of unknown or complex data types in Oracle PL/SQL. It allows you to store and manipulate data without knowing its actual structure or content.",
    "color": "#d9d9d9"
  },
  "Row_movement_clauseContext": {
    "description": "The ROW_MOVEMENT clause is used in an UPDATE statement to specify whether the row movement is enabled or disabled for a particular table. Row movement refers to the ability to move a row from one partition to another or to change the row's status from active to expired or vice versa.",
    "color": "#4CAF50"
  },
  "Flashback_archive_clauseContext": {
    "description": "The FLASHBACK_ARCHIVE_CLAUSE is used in Oracle PL/SQL to specify a flashback archive for a table. A flashback archive is a storage area used for storing historical versions of table data for a specified period of time.",
    "color": "#DCDCAA"
  },
  "Log_grpContext": {
    "description": "The LOG_GRP node is used in Oracle PL/SQL to define a named logging group. It is commonly used to group related log records together for easier management and analysis.",
    "color": "#FFA500"
  },
  "Supplemental_table_loggingContext": {
    "description": "Supplemental table logging is a feature in Oracle PL/SQL that allows you to enable detailed change logging for specific tables. It helps to capture additional information about changes made to the tables, such as before and after values, transaction information, user information, etc. This information can be useful for data auditing, analysis, and recovery purposes.",
    "color": "#E23D28"
  },
  "Supplemental_log_grp_clauseContext": {
    "description": "The SUPPLEMENTAL_LOG_GRP_CLAUSE is a clause used in the CREATE DATABASE or ALTER DATABASE statement in Oracle PL/SQL. It is used to specify the supplemental logging groups for the database. Supplemental logging is a feature that allows Oracle to generate additional redo log information for certain DML operations, such as updates or deletes on specific columns. This additional logging information can be useful for various purposes, such as data replication or auditing.",
    "color": "#d7d7ff"
  },
  "Supplemental_id_key_clauseContext": {
    "description": "The SUPPLEMENTAL_ID_KEY_CLAUSE is used to specify additional key columns for the supplemental logging of a table in Oracle database. These columns are included in the redo log records to capture additional information for auditing and recovery purposes.",
    "color": "#d6d6d6"
  },
  "Allocate_extent_clauseContext": {
    "description": "The ALLOCATE_EXTENT_CLAUSE is used in the CREATE TABLE statement in Oracle PL/SQL to specify the initial extent size and the maximum number of extents for a table or partition.",
    "color": "#00BFFF"
  },
  "Deallocate_unused_clauseContext": {
    "description": "The DEALLOCATE UNUSED clause is used in Oracle PL/SQL to deallocate unused space in a table or a table partition. It is part of the ALTER TABLE statement.",
    "color": "#f48fb1"
  },
  "Shrink_clauseContext": {
    "description": "The SHRINK clause is used in the ALTER TABLE statement in Oracle PL/SQL to compact the space of a table. It redistributes the rows in the table to reclaim unused space and improve performance.",
    "color": "#29B6F6"
  },
  "Records_per_block_clauseContext": {
    "description": "The RECORDS_PER_BLOCK clause is used in an Oracle PL/SQL block to specify the number of records that will be fetched from a database table in a single block.",
    "color": "#f4d66c"
  },
  "Upgrade_table_clauseContext": {
    "description": "The UPGRADE_TABLE_CLAUSE is used in PL/SQL to upgrade or transform a table in the database. It specifies the actions that should be taken to modify the table structure or data during the upgrade process.",
    "color": "#f15b2a"
  },
  "Truncate_tableContext": {
    "description": "The TRUNCATE TABLE statement is used to remove all data from a table in Oracle PL/SQL. It is a faster alternative to the DELETE statement for removing all rows from a table.",
    "color": "#f47f24"
  },
  "Drop_tableContext": {
    "description": "The DROP TABLE statement is used to remove a table and all of its associated objects, such as indexes and triggers, from the database.",
    "color": "#f92672"
  },
  "Drop_tablespaceContext": {
    "description": "The DROP TABLESPACE statement is used to remove a tablespace along with its data files and all the objects stored in it from the database.",
    "color": "#f6b73c"
  },
  "Drop_tablespace_setContext": {
    "description": "The DROP TABLESPACE statement is used to remove a tablespace and its associated datafiles from the database. The DROP TABLESPACE SET clause is an optional addition that allows you to remove multiple tablespaces with a single statement.",
    "color": "#996633"
  },
  "Including_contents_clauseContext": {
    "description": "The INCLUDING CONTENTS clause is used in the ALTER TABLE statement in Oracle PL/SQL to specify whether to include the existing data in the table when performing certain operations.",
    "color": "#ffcc00"
  },
  "Drop_viewContext": {
    "description": "The DROP VIEW statement is used to remove a view from the database schema. Views are virtual tables that are derived from the result of a query. Dropping a view deletes the view's definition from the database, but it does not delete the actual data that the view is based on.",
    "color": "#008080"
  },
  "Comment_on_columnContext": {
    "description": "The COMMENT ON COLUMN statement is used to add or modify comments on a specific column of a table in the Oracle database. Comments can be used to provide additional information or documentation about the purpose or usage of a column.",
    "color": "#D4D4D4"
  },
  "Enable_or_disableContext": {
    "description": "The ENABLE or DISABLE statement is used in Oracle PL/SQL to enable or disable a procedure, function, trigger, or package. When a program object is enabled, it can be executed or triggered. When it is disabled, it cannot be executed or triggered.",
    "color": "#f8e94e"
  },
  "Allow_or_disallowContext": {
    "description": "The ALLOW_OR_DISALLOW node is used in Oracle PL/SQL to specify whether a particular action is allowed or disallowed in a given context.",
    "color": "#d35400"
  },
  "Alter_synonymContext": {
    "description": "The ALTER SYNONYM statement is used to modify an existing synonym in an Oracle database. It allows you to change the name or the object that the synonym references.",
    "color": "#FFD700"
  },
  "Create_synonymContext": {
    "description": "The CREATE SYNONYM statement is used to create a synonym, which is an alternate name for a table, view, sequence, procedure, function, package, materialized view, Java class schema object, user-defined object type, or another synonym. Synonyms provide a convenient way to reference database objects owned by other users. They can simplify SQL statements by providing alternative names for complex object names.",
    "color": "#FF6347"
  },
  "Drop_synonymContext": {
    "description": "The DROP SYNONYM statement is used to remove a synonym from the database. A synonym is an alternative name for a table, view, sequence, procedure, or other PL/SQL object. When you drop a synonym, the synonym is removed from the database and any references to it will become invalid.",
    "color": "#f07178"
  },
  "Create_spfileContext": {
    "description": "The CREATE SPFILE statement is used to create a server parameter file (SPFILE) for an Oracle Database instance. SPFILE is a binary file that contains the configuration parameters for the database.",
    "color": "#f8c102"
  },
  "Spfile_nameContext": {
    "description": "The SPFILE_NAME function in Oracle PL/SQL is used to retrieve the name of the server parameter file (SPFILE) currently being used by the database instance.",
    "color": "#00aaff"
  },
  "Pfile_nameContext": {
    "description": "The Pfile_name is a parameter in Oracle PL/SQL that refers to the name of the initialization parameter file for an Oracle database instance. The initialization parameter file, also known as the Pfile, is a text-based file that contains various configuration settings for the database. Pfile_name is used to specify the name and location of the Pfile when starting up or modifying the database instance.",
    "color": "#fff175"
  },
  "Comment_on_tableContext": {
    "description": "The COMMENT ON TABLE statement is used to add a comment to a table in Oracle PL/SQL. This comment can be used to provide additional information or description about the table.",
    "color": "#859900"
  },
  "Comment_on_materializedContext": {
    "description": "The COMMENT ON MATERIALIZED command is used to add a comment to a materialized view in Oracle PL/SQL. Comments can provide additional information or documentation about the materialized view.",
    "color": "#FFFF00"
  },
  "Alter_analytic_viewContext": {
    "description": "The ALTER_ANALYTIC_VIEW statement is used to modify the definition of an existing analytic view in Oracle PL/SQL. This statement allows you to add, modify, or remove columns, measures, dimensions, aggregate filters, or other properties of the analytic view.",
    "color": "#ffbb00"
  },
  "Alter_add_cache_clauseContext": {
    "description": "The ALTER_ADD_CACHE_CLAUSE node is used in Oracle PL/SQL to specify the cache size for a table or index in the database. It is used in an ALTER TABLE or ALTER INDEX statement to optimize the performance of data retrieval by storing frequently accessed data in memory.",
    "color": "#F92672"
  },
  "Levels_itemContext": {
    "description": "The LEVELS_ITEM is a built-in function in Oracle PL/SQL that returns the number of levels in a hierarchical query. It is used in conjunction with the hierarchical query clause CONNECT BY.",
    "color": "#a6e22e"
  },
  "Measure_listContext": {
    "description": "The MEASURE_LIST is a comma-separated list of columns or expressions that will be used as measures in a query. It is used in Oracle PL/SQL to specify the set of columns or expressions to be retrieved.",
    "color": "#b58900"
  },
  "Alter_drop_cache_clauseContext": {
    "description": "The ALTER DROP CACHE clause is used in Oracle PL/SQL to remove the data blocks associated with a specified database object from the buffer cache. This can help to improve performance by forcing subsequent queries to read data directly from disk instead of using cached data.",
    "color": "#8F9779"
  },
  "Alter_attribute_dimensionContext": {
    "description": "The ALTER_ATTRIBUTE_DIMENSION statement is used to modify the attributes of a dimension in an Oracle PL/SQL application. It allows you to add, drop, or modify attributes of a dimension, as well as change the hierarchical relationships between attributes.",
    "color": "#f0ad4e"
  },
  "Alter_audit_policyContext": {
    "description": "The ALTER_AUDIT_POLICY statement is used to modify an existing audit policy in Oracle PL/SQL. An audit policy defines what database activities and objects should be audited. By altering an audit policy, you can change its attributes and enable or disable the policy.",
    "color": "#f9c74f"
  },
  "Alter_clusterContext": {
    "description": "The ALTER_CLUSTER statement is used to modify the attributes of an Oracle Real Application Clusters (RAC) cluster. It allows you to change various properties of a cluster such as its name, the number of instances, the voting disk configuration, and more.",
    "color": "#00BFFF"
  },
  "Drop_analytic_viewContext": {
    "description": "The DROP ANALYTIC VIEW statement is used to remove an existing analytic view in Oracle PL/SQL. An analytic view is a database object that combines data from multiple tables or views into a single, virtual table.",
    "color": "#045e9c"
  },
  "Drop_attribute_dimensionContext": {
    "description": "The DROP_ATTRIBUTE_DIMENSION statement is used to remove an attribute dimension from an Oracle database. An attribute dimension is a dimension that contains only attribute hierarchies and no level-based hierarchies. This statement can be used to remove an attribute dimension that is no longer needed or has become obsolete.",
    "color": "#d6ad00"
  },
  "Drop_audit_policyContext": {
    "description": "The DROP_AUDIT_POLICY statement is used to remove an existing audit policy from the database.",
    "color": "#fbca04"
  },
  "Drop_flashback_archiveContext": {
    "description": "The DROP_FLASHBACK_ARCHIVE statement is used to drop a flashback archive. A flashback archive is a logical grouping of historical data that enables you to store and retrieve historical data for long periods of time, even after the data has been purged from the main tables.",
    "color": "#DB639B"
  },
  "Drop_clusterContext": {
    "description": "The DROP_CLUSTER statement is used to remove a specified cluster from the database. Clusters are logical storage units that contain tables with similar characteristics, and dropping a cluster also drops all the tables within it.",
    "color": "#D4BFFF"
  },
  "Drop_contextContext": {
    "description": "The DROP_CONTEXT statement is used to remove a named context namespace, along with all context values associated with it, from the database.",
    "color": "#f9c74f"
  },
  "Drop_directoryContext": {
    "description": "The DROP DIRECTORY statement is used to remove an existing directory object from the Oracle database. A directory object is a pointer to a directory on the file system where external files can be accessed and manipulated by Oracle PL/SQL programs.",
    "color": "#FF8800"
  },
  "Drop_diskgroupContext": {
    "description": "The DROP DISKGROUP statement is used in Oracle PL/SQL to remove a disk group from the database. A disk group is a logical container for storing data files and other Oracle database files. When a disk group is dropped, all the data files and other objects stored in the disk group are also removed.",
    "color": "#f44336"
  },
  "Drop_editionContext": {
    "description": "The DROP_EDITION statement is used to remove an edition from a database in Oracle PL/SQL. An edition is a version of a database schema that can be modified independently of other editions. This statement drops the specified edition and all objects associated with it.",
    "color": "#fca9a9"
  },
  "Truncate_clusterContext": {
    "description": "The TRUNCATE CLUSTER statement is used to remove all rows from a cluster table and deallocate all space used by the cluster, while preserving the structure of the cluster.",
    "color": "#f55d3e"
  },
  "Cache_or_nocacheContext": {
    "description": "The CACHE_OR_NOCACHE clause is used in Oracle PL/SQL to specify whether a table or index should be cached in memory or accessed directly from disk when queried.",
    "color": "#ffcc00"
  },
  "Database_nameContext": {
    "description": "Database_name is a built-in function in Oracle PL/SQL that returns the name of the current database.",
    "color": "#fca130"
  },
  "Alter_databaseContext": {
    "description": "The ALTER DATABASE statement is used to modify the attributes of an existing Oracle database. It can be used to change the database name, enable/disable archiving, modify the default tablespace, set database character set, and perform other database-level modifications.",
    "color": "#fbbd08"
  },
  "Database_clauseContext": {
    "description": "The database_clause is a part of a SQL statement that specifies the database in which the operation should be performed. It is used to specify the name of the database or the link to a remote database.",
    "color": "#f2b73c"
  },
  "Startup_clausesContext": {
    "description": "Startup clauses are used in Oracle PL/SQL to specify the execution behavior when a program is run. These clauses dictate how the program should start and what actions should be taken before the program begins execution.",
    "color": "#d67c03"
  },
  "Resetlogs_or_noresetlogsContext": {
    "description": "The RESETLOGS or NORESETLOGS clause is used in the ALTER DATABASE statement in Oracle PL/SQL to specify whether or not to reset the redo log sequence and start a new log file.",
    "color": "#00758F"
  },
  "Upgrade_or_downgradeContext": {
    "description": "The UPGRADE or DOWNGRADE statement is used to upgrade or downgrade the version of the Oracle database.",
    "color": "#5893d4"
  },
  "Recovery_clausesContext": {
    "description": "The RECOVERY_CLAUSES is a set of optional clauses used in the Oracle PL/SQL RECOVER statement. These clauses provide additional control and options for the recovery process.",
    "color": "#f9bb00"
  },
  "Begin_or_endContext": {
    "description": "The BEGIN and END keywords are used to define a block in Oracle PL/SQL. This block can contain a collection of statements or declarations. It is often used to group multiple statements together to form a single unit of work.",
    "color": "#FF9900"
  },
  "General_recoveryContext": {
    "description": "The GENERAL_RECOVERY clause is used in Oracle PL/SQL to specify that a block of code should be executed when an exception occurs during the normal execution of a program. This clause is used in conjunction with the EXCEPTION block and allows the program to recover gracefully from an exception and continue executing.",
    "color": "#ff851b"
  },
  "Full_database_recoveryContext": {
    "description": "Full database recovery is a process in Oracle PL/SQL used to restore the entire database to a consistent state after a failure or a loss. It involves recovering all data files, control files, and redo log files to a specified point in time, ensuring data integrity and minimizing data loss.",
    "color": "#ff0000"
  },
  "Partial_database_recoveryContext": {
    "description": "Partial database recovery refers to the process of recovering a specific portion of a database that has been damaged or lost due to various reasons such as hardware failure, logical errors, or data corruption. This recovery technique allows you to restore the affected data and make it consistent with the rest of the database.",
    "color": "#008080"
  },
  "Partial_database_recovery_10gContext": {
    "description": "Partial Database Recovery in Oracle 10g is a technique used to recover a portion of a database after a data loss or corruption. It allows for the selective recovery of specific database objects or datafiles that have been affected by the issue, without requiring a full database restore and recovery.",
    "color": "#8ED1F5"
  },
  "Managed_standby_recoveryContext": {
    "description": "Managed standby recovery is a feature in Oracle PL/SQL that allows for automatic recovery on a standby database. When enabled, the standby database will continuously apply changes received from the primary database, keeping it in sync with the primary. This feature is commonly used in high availability configurations to provide data redundancy and disaster recovery.",
    "color": "#ffa500"
  },
  "Db_nameContext": {
    "description": "The 'db_name' is a PL/SQL function that is used to retrieve the name of the current Oracle database instance.",
    "color": "#ca526d"
  },
  "Database_file_clausesContext": {
    "description": "The database_file_clauses is used in the CREATE TABLESPACE statement in Oracle PL/SQL to specify the data files and their attributes for a new tablespace in the database.",
    "color": "#1f6390"
  },
  "Create_datafile_clauseContext": {
    "description": "The CREATE DATAFILE clause is used in Oracle PL/SQL to specify the characteristics of a new datafile that is added to a tablespace. It includes information such as the file name, size, and location.",
    "color": "#d6d6d6"
  },
  "Alter_datafile_clauseContext": {
    "description": "The ALTER DATAFILE clause is used in Oracle PL/SQL to modify the attributes of a datafile in a tablespace. It can be used to rename a datafile, modify its size, or change its autoextend settings.",
    "color": "#ff7518"
  },
  "Alter_tempfile_clauseContext": {
    "description": "The ALTER_TEMPFILE_CLAUSE is used to alter a temp file's attributes or rename a temp file in Oracle PL/SQL. Temp files are temporary files used for temporary tablespace and other temporary operations.",
    "color": "#f4c542"
  },
  "Move_datafile_clauseContext": {
    "description": "The MOVE DATAFILE clause is used in Oracle PL/SQL to move a datafile from its current location to a new location.",
    "color": "#8C61A0"
  },
  "Logfile_clausesContext": {
    "description": "The LOGFILE_CLAUSES is a set of clauses that are used when creating or altering redo log files in Oracle PL/SQL. These clauses can specify the size, disk location, and other attributes of the redo log files.",
    "color": "#a6e22e"
  },
  "Add_logfile_clausesContext": {
    "description": "The ADD LOGFILE clause is used in Oracle PL/SQL to add a new redo log file to a redo log group. Redo log files are used to store information about changes made to the database so that these changes can be recovered in the event of a system failure. The ADD LOGFILE clause is typically used in ALTER DATABASE statements.",
    "color": "#af52d1"
  },
  "Group_redo_logfileContext": {
    "description": "The GROUP_REDO_LOGFILE command is used to specify the group number for a redo log file in Oracle PL/SQL. Redo log files are used to record changes made to the database, and each redo log file is divided into groups, with each group containing one or more redo log files. The GROUP_REDO_LOGFILE command allows you to select or specify a particular group for a redo log file.",
    "color": "#e58c8a"
  },
  "Drop_logfile_clausesContext": {
    "description": "The DROP LOGFILE clause is used to remove an existing redo log file from the database. It is typically used to free up space or to remove obsolete log files.",
    "color": "#56b6c2"
  },
  "Switch_logfile_clauseContext": {
    "description": "The SWITCH_LOGFILE clause is used in Oracle PL/SQL to manually switch the current redo log file to a new one. This is useful in scenarios where you want to manually switch log files, for example to ensure that a log file is archived before starting a backup.",
    "color": "#f9b406"
  },
  "Supplemental_db_loggingContext": {
    "description": "Supplemental Database Logging is a feature in Oracle database that enables capturing additional information during data modifications (insert, update, delete) at the database level. This additional information is stored in the redo log files and can be used for auditing, debugging, and data recovery purposes.",
    "color": "#ff5500"
  },
  "Add_or_dropContext": {
    "description": "This Oracle PL/SQL node is used to add or drop a column in a table.",
    "color": "#f9690e"
  },
  "Supplemental_plsql_clauseContext": {
    "description": "The SUPPLEMENTAL_LOG_DATA clause is used in the CREATE TABLE or ALTER TABLE statement to specify additional columns that should be logged as supplemental log data. Supplemental log data is used for flashback operations, logical standby databases, and Oracle GoldenGate replication.",
    "color": "#f0ad4e"
  },
  "Logfile_descriptorContext": {
    "description": "The logfile_descriptor is a user-defined data type in Oracle PL/SQL used to represent a log file. It typically holds information such as the file name, file size, creation date, and any other relevant metadata related to the log file.",
    "color": "#ffca28"
  },
  "Controlfile_clausesContext": {
    "description": "Controlfile_clauses are the clauses used in the CREATE CONTROLFILE statement in Oracle PL/SQL.",
    "color": "#f58220"
  },
  "Trace_file_clauseContext": {
    "description": "The TRACE_FILE_CLAUSE is a clause used in the ALTER SESSION statement in Oracle PL/SQL. It is used to specify the name and location of the trace file that will be generated for the session. This trace file contains detailed information about the execution of the PL/SQL code, including SQL statements, errors, and performance metrics.",
    "color": "#FFBF00"
  },
  "Standby_database_clausesContext": {
    "description": "The standby database clauses are specific clauses used in Oracle PL/SQL to manage and configure a standby database. They are used in conjunction with the CREATE DATABASE or ALTER DATABASE statements to set up and maintain a standby database for data protection and disaster recovery purposes.",
    "color": "#FFB6C1"
  },
  "Activate_standby_db_clauseContext": {
    "description": "The ACTIVATE_STANDBY_DB_CLAUSE is used in Oracle PL/SQL to activate a standby database, making it the primary database. This clause is usually used in the context of managing a Data Guard environment, where a standby database is maintained to provide high availability and disaster recovery capabilities.",
    "color": "#BD77D8"
  },
  "Maximize_standby_db_clauseContext": {
    "description": "The MAXIMIZE STANDBY DATABASE clause is used in Oracle PL/SQL to specify whether or not to perform a switch operation after creating a standby database.",
    "color": "#f4a261"
  },
  "Register_logfile_clauseContext": {
    "description": "The REGISTER_LOGFILE_CLAUSE is used in Oracle PL/SQL to specify the online redo log file that should be registered with the current session. This clause is typically used in the context of managing online redo log files for backup and recovery purposes.",
    "color": "#87CEEB"
  },
  "Commit_switchover_clauseContext": {
    "description": "The COMMIT_SWITCHOVER_CLAUSE is used in Oracle PL/SQL to switch the roles of primary and standby databases after a successful switchover operation. It is used in conjunction with the COMMIT statement to signify the completion of the switch.",
    "color": "#F4A460"
  },
  "Start_standby_clauseContext": {
    "description": "The START_STANDBY_CLAUSE is a clause used in the Oracle PL/SQL language. It is used to start running a physical standby database after a switchover or failover operation. This clause can be used with the ALTER DATABASE statement.",
    "color": "#f06529"
  },
  "Stop_standby_clauseContext": {
    "description": "The STOP STANDBY clause is used in Oracle PL/SQL to stop the standby database instance from applying redo data from the primary database. It is typically used in a Data Guard configuration where there is a primary database and one or more standby databases.",
    "color": "#2BD49D"
  },
  "Convert_database_clauseContext": {
    "description": "The CONVERT DATABASE clause is used in Oracle PL/SQL to specify the character set conversion for a database or table. It allows you to change the character set of the data stored in the database or table.",
    "color": "#9900FF"
  },
  "Default_settings_clauseContext": {
    "description": "The DEFAULT_SETTINGS_CLAUSE is used in the Oracle PL/SQL language to specify the default settings for a namespace. It is typically used in the PRAGMA AUTONOMOUS_TRANSACTION statement to define the default behavior for autonomous transactions. The DEFAULT_SETTINGS_CLAUSE allows you to specify various settings for the namespace, such as transaction behavior, error handling, and compiler options.",
    "color": "#8A2387"
  },
  "Set_time_zone_clauseContext": {
    "description": "The SET TIME_ZONE clause is used in Oracle PL/SQL to specify the time zone for date and timestamp data types. It allows you to set the time zone at the session or statement level.",
    "color": "#ffa500"
  },
  "Instance_clausesContext": {
    "description": "Instance clauses are used in Oracle PL/SQL to specify which instances a statement should be executed on. They can be used to control the distribution of workload and resources across different instances in a multi-instance Oracle system.",
    "color": "#ffbd00"
  },
  "Security_clauseContext": {
    "description": "The SECURITY clause is used in Oracle PL/SQL to specify the level of definer's rights or invoker's rights for a PL/SQL subprogram. It determines the access privileges the subprogram will have when it is executed.",
    "color": "#fddb6d"
  },
  "DomainContext": {
    "description": "A domain in Oracle PL/SQL is a user-defined data type that allows you to create your own data types based on existing data types in the database. It provides a way to enforce data integrity by defining constraints and default values for the data type.",
    "color": "#ccffcc"
  },
  "DatabaseContext": {
    "description": "A database is an organized collection of structured data, typically stored and accessed electronically. It is designed to efficiently store, retrieve, and manage large amounts of data. Database systems provide mechanisms for creating, modifying, and querying data, as well as enforcing data integrity and security.",
    "color": "#A6E22E"
  },
  "Edition_nameContext": {
    "description": "The EDITION_NAME is a system-supplied pseudo column that returns the name of the edition currently active in the session. An edition is a version of a schema's objects defined in the database. It allows for multiple versions of objects to coexist within the same schema, enabling application upgrades with minimal downtime.",
    "color": "#f9a825"
  },
  "FilenumberContext": {
    "description": "Filenumber is a sequential number assigned to a file in Oracle PL/SQL.",
    "color": "#6A8759"
  },
  "FilenameContext": {
    "description": "The FILENAME in Oracle PL/SQL is a user-defined identifier that represents the name of a file or a file handle.",
    "color": "#d4d4d4"
  },
  "Prepare_clauseContext": {
    "description": "The PREPARE clause is used in Oracle PL/SQL to define a SQL statement that can be executed multiple times with different input values. It allows for the creation of a prepared statement, which can improve efficiency and performance by reducing SQL parsing overhead.",
    "color": "#e69d00"
  },
  "Drop_mirror_clauseContext": {
    "description": "The DROP MIRROR CLAUSE is used in Oracle PL/SQL to drop a mirror of a database object that has been created using the CREATE MIRROR statement. The mirror is a duplicate copy of the object and is typically used for backup or disaster recovery purposes. Dropping the mirror removes the duplicate copy from the database.",
    "color": "#fbc02d"
  },
  "Lost_write_protectionContext": {
    "description": "The LOST_WRITE_PROTECTION parameter is a setting in Oracle Database that helps to prevent corruption of data by ensuring that a corrupt block is not written to disk during a media or I/O failure. When enabled, this parameter uses an algorithm to determine if a block is corrupt and avoids writing it to disk. This helps to maintain data integrity.",
    "color": "#00bfff"
  },
  "Cdb_fleet_clausesContext": {
    "description": "CDB_FLEET_CLAUSES is a PL/SQL namespace package in Oracle Database. It provides procedures and functions to manage clauses in Oracle Multitenant container databases (CDBs) that belong to a fleet.",
    "color": "#f9c851"
  },
  "Lead_cdb_clauseContext": {
    "description": "The LEAD_CDB_CLAUSE is used in Oracle PL/SQL to specify the lead database in a cross-container query. It allows you to retrieve data from a specific database in a multitenant environment.",
    "color": "#d4d4d4"
  },
  "Lead_cdb_uri_clauseContext": {
    "description": "The LEAD_CDB_URI_CLAUSE is used in Oracle PL/SQL to specify a clause that defines the behavior when running a multitenant database operation within a container database (CDB). It is used to define the CDB URI_PREFIX and CDB URI_SUFFIX, which are used to construct the complete connection string for accessing the PDBs within the CDB. This clause is typically used in conjunction with the EXECUTE IMMEDIATE statement.",
    "color": "#af50a1"
  },
  "Property_clausesContext": {
    "description": "Property clauses in Oracle PL/SQL are used to define the properties of different program units, such as variables, constants, exceptions, and cursors.",
    "color": "#c397d8"
  },
  "Replay_upgrade_clausesContext": {
    "description": "The REPLAY_UPGRADE_CLAUSES clause is used in the context of Database Replay to specify the upgrade processing that should be performed during the replay. It is used with the DBMS_WORKLOAD_REPLAY.PROCESS_CAPTURED_SQL function.",
    "color": "#2b7a78"
  },
  "Alter_database_linkContext": {
    "description": "The ALTER DATABASE LINK statement is used to modify an existing database link in Oracle. Database links are used to establish a communication link between two Oracle databases, allowing data to be accessed and manipulated across different databases. By using ALTER DATABASE LINK, you can change the connection information, such as the hostname, port number, or service name, associated with an existing database link.",
    "color": "#fddb6d"
  },
  "Password_valueContext": {
    "description": "The PASSWORD_VALUE is a built-in Oracle PL/SQL function that returns the hash value of a given password. It is commonly used in user management and authentication processes to securely store and compare passwords.",
    "color": "#d46a6a"
  },
  "Link_authenticationContext": {
    "description": "Link authentication is a feature in Oracle PL/SQL used to establish a secure connection between a local database and a remote database. It ensures the authenticity and integrity of data transmitted between the two databases.",
    "color": "#00BCD4"
  },
  "Create_databaseContext": {
    "description": "The CREATE DATABASE statement is used to create a new Oracle database.",
    "color": "#ff5600"
  },
  "Database_logging_clausesContext": {
    "description": "Database logging clauses in Oracle PL/SQL are used to control the logging behavior of specific DML statements within a transaction. They allow you to specify whether or not a particular DML operation should be logged in the database's redo logs for recovery purposes.",
    "color": "#f4d742"
  },
  "Database_logging_sub_clauseContext": {
    "description": "The DATABASE_LOGGING subclause is used in the CREATE TABLE or ALTER TABLE statement in Oracle PL/SQL to specify the logging behavior for database operations on the table.",
    "color": "#FFC107"
  },
  "Tablespace_clausesContext": {
    "description": "Tablespace clauses are used in Oracle PL/SQL to specify the storage location for a table or index. They allow you to control various aspects of how data is stored, such as the data file location, size, and behavior.",
    "color": "#f9dc36"
  },
  "Enable_pluggable_databaseContext": {
    "description": "The ENABLE_PLUGGABLE_DATABASE parameter is used in Oracle Database to control the creation of new pluggable databases (PDBs). When this parameter is set to FALSE, creating new PDBs is not allowed. When set to TRUE, new PDBs can be created.",
    "color": "#006400"
  },
  "File_name_convertContext": {
    "description": "The FILE_NAME_CONVERT parameter is used in Oracle PL/SQL to specify a mapping between original file names and the new file names during file renaming operations, such as in database transport scenarios. It allows you to specify a pattern for converting file names.",
    "color": "#0a81ab"
  },
  "Filename_convert_sub_clauseContext": {
    "description": "The FILENAME_CONVERT subclause is used in the BACKUP COPY ... FROM clause to specify a conversion between filenames and filenames on an operating system.",
    "color": "#B06EAC"
  },
  "Tablespace_datafile_clausesContext": {
    "description": "The Tablespace Datafile Clauses are used in Oracle PL/SQL to specify the attributes and properties of a tablespace datafile.",
    "color": "#569CD6"
  },
  "Undo_mode_clauseContext": {
    "description": "The UNDO_MODE_CLAUSE is used in the FLASHBACK DATABASE statement in Oracle PL/SQL. It specifies the behavior of the undo information during the flashback operation.",
    "color": "#d18f1c"
  },
  "Default_tablespaceContext": {
    "description": "The DEFAULT_TABLESPACE is a parameter in Oracle PL/SQL that specifies the default tablespace for storing database objects when a user or schema is created without explicitly specifying a tablespace. It determines where tables, indexes, and other schema objects will be created by default.",
    "color": "#569CD6"
  },
  "Default_temp_tablespaceContext": {
    "description": "The DEFAULT_TEMP_TABLESPACE is a parameter in Oracle that specifies the default temporary tablespace for users or sessions. A temporary tablespace is used for storing temporary data, such as intermediate query results or temporary tables, during the execution of SQL statements. When a user or session does not specify a temporary tablespace explicitly, the system will use the value of DEFAULT_TEMP_TABLESPACE as the default.",
    "color": "#ff9566"
  },
  "Undo_tablespaceContext": {
    "description": "The UNDO_TABLESPACE is a parameter in Oracle PL/SQL that specifies the tablespace to be used for storing undo information. Undo information is used for managing transactions and undoing changes made to the database. The undo tablespace is a critical component of the Oracle database, as it ensures the database's consistency and enables features such as flashback queries and transaction rollback.",
    "color": "#e67e22"
  },
  "Drop_databaseContext": {
    "description": "The DROP DATABASE statement is used to permanently delete a database and all its objects. It removes all data, tables, views, and other database components.",
    "color": "#FF0000"
  },
  "Create_database_linkContext": {
    "description": "The CREATE DATABASE LINK statement is used to create a link between two databases. This allows you to access and retrieve data from tables in a remote database. The link can be used to execute remote queries and perform distributed transactions.",
    "color": "#5376a9"
  },
  "DblinkContext": {
    "description": "DBLINK is an Oracle extension that enables you to access data on remote Oracle databases. It allows you to perform distributed queries and transactions between multiple databases. With DBLINK, you can treat a remote database as if it were a local one, accessing and retrieving data seamlessly.",
    "color": "#f92672"
  },
  "Drop_database_linkContext": {
    "description": "The DROP DATABASE LINK statement is used to remove a database link in Oracle PL/SQL. A database link is a schema object in one database that allows you to access objects on another database. Dropping a database link removes the link and any associated metadata.",
    "color": "#F28D73"
  },
  "Alter_tablespace_setContext": {
    "description": "The ALTER TABLESPACE SET statement is used to modify the attributes of a tablespace in the Oracle database.",
    "color": "#f9f3a5"
  },
  "Alter_tablespace_attrsContext": {
    "description": "The ALTER TABLESPACE statement is used to modify the attributes of an existing tablespace in Oracle database. This includes changing the data file location, resizing the data file, renaming the tablespace, and setting various options such as read-only mode or automatic segment space management.",
    "color": "#f0ad4e"
  },
  "Alter_tablespace_encryptionContext": {
    "description": "The ALTER TABLESPACE ENCRYPTION statement is used to enable or disable encryption for a specific tablespace in Oracle PL/SQL. Encryption can help protect sensitive data stored in the tablespace by making it unreadable without the appropriate decryption key.",
    "color": "#f4aa42"
  },
  "Ts_file_name_convertContext": {
    "description": "The TS_FILE_NAME_CONVERT parameter is used to specify a mapping between old and new file name formats when transporting tablespaces between databases.",
    "color": "#FF9900"
  },
  "Alter_roleContext": {
    "description": "The ALTER_ROLE statement is used to modify the properties of a role in Oracle PL/SQL. It can be used to change the role's name, password, default tablespace, and other attributes. This statement can also be used to grant or revoke privileges from a role.",
    "color": "#f7922d"
  },
  "Role_identified_clauseContext": {
    "description": "The ROLE IDENTIFIED clause is used in Oracle PL/SQL to specify the authentication method for a user-defined role.",
    "color": "#f1c40f"
  },
  "Alter_tableContext": {
    "description": "The ALTER TABLE statement is used to modify an existing table in Oracle PL/SQL. It allows you to add, modify, or drop columns, constraints, and other table properties.",
    "color": "#f9b748"
  },
  "Memoptimize_read_write_clauseContext": {
    "description": "The MEMOPTIMIZE_READ_WRITE_CLAUSE is a clause used in the ALTER TABLE statement in Oracle PL/SQL. It is used to specify how a table should be optimized for both read and write operations.",
    "color": "#f5f5f5"
  },
  "Alter_table_propertiesContext": {
    "description": "The ALTER TABLE statement is used to modify the structure or properties of an existing table in a database. The ALTER TABLE statement can be used to add or drop columns, modify the data type or length of existing columns, change the default values of columns, add or drop constraints, and perform other table modifications.",
    "color": "#FF9900"
  },
  "Alter_table_partitioningContext": {
    "description": "The ALTER TABLE PARTITIONING statement is used to modify the partitioning of an existing table in Oracle PL/SQL. It allows you to add, drop, or modify partitions, as well as change the partitioning method or key columns.",
    "color": "#10aeb8"
  },
  "Add_table_partitionContext": {
    "description": "The ADD_TABLE_PARTITION command is used in Oracle PL/SQL to add a new partition to an existing table. Partitions allow you to logically divide large tables into smaller, more manageable pieces, improving performance and manageability.",
    "color": "#c678dd"
  },
  "Drop_table_partitionContext": {
    "description": "The DROP TABLE PARTITION statement is used to remove a specific partition from a table in Oracle PL/SQL. This statement can be helpful when you want to delete data in a specific partition without dropping the entire table.",
    "color": "#ff8080"
  },
  "Merge_table_partitionContext": {
    "description": "The MERGE_TABLE_PARTITION procedure is used to merge partitions of a table in Oracle PL/SQL. It allows you to consolidate multiple partitions into a single partition, reducing the number of partitions in the table.",
    "color": "#5F7D8A"
  },
  "Modify_table_partitionContext": {
    "description": "The MODIFY_TABLE_PARTITION command is used to modify the characteristics of a specific partition in an Oracle PL/SQL table. It allows you to change various aspects of the partition, such as the storage parameters, physical attributes, and compression settings.",
    "color": "#d4b82c"
  },
  "Split_table_partitionContext": {
    "description": "The SPLIT_TABLE_PARTITION procedure is used in Oracle PL/SQL to split a specified partition of a table into multiple new partitions. This is a useful operation when the existing partition becomes too large or when data distribution needs to be optimized.",
    "color": "#f6921e"
  },
  "Truncate_table_partitionContext": {
    "description": "The TRUNCATE TABLE PARTITION statement is used to remove all data from a specific partition of a table. This operation is faster than deleting all rows individually.",
    "color": "#f39c12"
  },
  "Exchange_table_partitionContext": {
    "description": "The EXCHANGE TABLE PARTITION statement in Oracle PL/SQL is used to exchange the partition of a table with the contents of another table or a table partition. This allows you to quickly move data between tables or table partitions without having to physically copy the data.",
    "color": "#f9c24c"
  },
  "Coalesce_table_partitionContext": {
    "description": "The COALESCE_TABLE_PARTITION function is used in Oracle PL/SQL to combine or merge adjacent partitions of a table. It takes a table name and the names of the partitions to be merged as parameters and returns the resulting partition name.",
    "color": "#B200B2"
  },
  "Alter_interval_partitionContext": {
    "description": "The ALTER_INTERVAL_PARTITION statement is used to modify the interval of a range or interval partitioned table.",
    "color": "#ff9900"
  },
  "Partition_extended_namesContext": {
    "description": "The PARTITION_EXTENDED_NAMES parameter is used in Oracle PL/SQL to enable or disable the use of extended partition names when creating or referencing individual partitions of a table or index. By default, this parameter is set to FALSE, meaning that standard partition names are used. When set to TRUE, it allows you to use longer partition names that can provide more meaningful information about the partition.",
    "color": "#f9bc64"
  },
  "Subpartition_extended_namesContext": {
    "description": "Subpartition_extended_names is a feature in Oracle PL/SQL that allows you to define subpartitions with more descriptive names. By default, subpartitions are named using a combination of the subpartition template name and a system-generated number. However, with subpartition_extended_names, you can provide custom names for subpartitions, making it easier to identify and manage them.",
    "color": "#00CCCC"
  },
  "Alter_table_properties_1Context": {
    "description": "The ALTER TABLE statement is used to add, modify, or drop columns, constraints, indexes, partitions, or physical attributes of an existing table in a database. The properties that can be altered using ALTER TABLE include column data types, default values, nullability, constraints, and storage attributes.",
    "color": "#2979FF"
  },
  "Alter_iot_clausesContext": {
    "description": "The ALTER_IOT_CLAUSES node is used in Oracle PL/SQL to modify the Index-Organized Table (IOT) properties and attributes.",
    "color": "#eb4034"
  },
  "Alter_mapping_table_clauseContext": {
    "description": "The ALTER_MAPPING_TABLE_CLAUSE is used in Oracle PL/SQL to modify a mapping table associated with a materialized view.",
    "color": "#fde073"
  },
  "Alter_overflow_clauseContext": {
    "description": "The ALTER_OVERFLOW_CLAUSE is used to specify the action to be taken when an overflow condition occurs in a tablespace during an ALTER TABLE operation. It allows you to specify whether to enable or disable automatic segment space management for the tablespace.",
    "color": "#00aaff"
  },
  "Add_overflow_clauseContext": {
    "description": "The ADD_OVERFLOW_CLAUSE is used in a PL/SQL block to handle overflow errors that occur during arithmetic operations.",
    "color": "#f5b942"
  },
  "Update_index_clausesContext": {
    "description": "The UPDATE_INDEX_CLAUSES node is used in Oracle PL/SQL to specify the index clauses for an UPDATE statement. It specifies which indexes should be used to access or update the data in a table.",
    "color": "#FFFF00"
  },
  "Update_global_index_clauseContext": {
    "description": "The UPDATE_GLOBAL_INDEX_CLAUSE is used in Oracle PL/SQL to specify how global indexes should be updated when performing operations on a partitioned table.",
    "color": "#04B404"
  },
  "Update_all_indexes_clauseContext": {
    "description": "The UPDATE_ALL_INDEXES clause is used in Oracle PL/SQL to specify that all indexes on the target table should be updated during an update operation. This clause can be used with the UPDATE statement.",
    "color": "#859900"
  },
  "Update_all_indexes_index_clauseContext": {
    "description": "The UPDATE_ALL_INDEXES_INDEX_CLAUSE is a part of the ALTER INDEX statement in Oracle PL/SQL. It is used to specify the type of index maintenance operation to be performed on all indexes associated with a table.",
    "color": "#1f6176"
  },
  "Update_index_partitionContext": {
    "description": "The UPDATE_INDEX_PARTITION statement in Oracle PL/SQL is used to update the metadata of a partition of an index. It allows you to modify various properties of the partition, such as its name, tablespace, compression settings, and storage parameters.",
    "color": "#f0ad4e"
  },
  "Update_index_subpartitionContext": {
    "description": "The 'UPDATE_INDEX_SUBPARTITION' statement is used to modify rows in a specific subpartition of an index-organized table.",
    "color": "#f7922d"
  },
  "Enable_disable_clauseContext": {
    "description": "The ENABLE/DISABLE clause is used in Oracle PL/SQL to enable or disable triggers, constraints, or indexes on a table.",
    "color": "#f4a261"
  },
  "Using_index_clauseContext": {
    "description": "The USING_INDEX_CLAUSE is used in Oracle PL/SQL to specify a hint for the optimizer to use a specific index for a SQL statement. It can be used to override the default index selected by the optimizer or to force the use of a specific index.",
    "color": "#FFA500"
  },
  "Index_attributesContext": {
    "description": "The INDEX_ATTRIBUTES is a clause used in Oracle PL/SQL to specify additional attributes for an index when creating or modifying it. It allows you to customize the behavior and performance of the index.",
    "color": "#0576b9"
  },
  "Sort_or_nosortContext": {
    "description": "The SORT_OR_NOSORT parameter is used in Oracle PL/SQL to specify whether to sort or not to sort the result set during a query or a cursor operation. It is typically used with the ORDER BY clause.",
    "color": "#c69af5"
  },
  "Exceptions_clauseContext": {
    "description": "The EXCEPTIONS clause is used in Oracle PL/SQL to handle exceptions that may occur during the execution of a block or a statement. It allows you to specify the actions to be taken when a specific exception is raised.",
    "color": "#f3d05a"
  },
  "Move_table_clauseContext": {
    "description": "The MOVE TABLE clause is used in Oracle PL/SQL to move a table and its data to a different schema or tablespace.",
    "color": "#ff9900"
  },
  "Index_org_table_clauseContext": {
    "description": "The INDEX_ORG_TABLE_CLAUSE is used in the CREATE INDEX statement to specify the organization of the index-organized table. It determines the order of the data in the index-organized table.",
    "color": "#9cdcfe"
  },
  "Mapping_table_clauseContext": {
    "description": "The MAPPING_TABLE clause is used in Oracle PL/SQL to specify a mapping table for a nested table or VARRAY type. It is used when creating or altering a type to define a mapping between the elements in the nested table or VARRAY and the rows in the mapping table.",
    "color": "#D4D4D4"
  },
  "Key_compressionContext": {
    "description": "Key compression is a feature in Oracle PL/SQL that allows you to reduce the storage space required for index keys by eliminating duplicate values. It is used to minimize the size of indexes and improve performance for queries that involve these indexes.",
    "color": "#00948c"
  },
  "Index_org_overflow_clauseContext": {
    "description": "The INDEX_ORG_OVERFLOW_CLAUSE is used in Oracle PL/SQL to specify the overflow segment for an index-organized table.",
    "color": "#f6c23e"
  },
  "Column_clausesContext": {
    "description": "The COLUMN_CLAUSES is a part of the SELECT statement in Oracle PL/SQL. It is used to specify the columns that should be included in the result set.",
    "color": "#409EFF"
  },
  "Modify_collection_retrievalContext": {
    "description": "The MODIFY_COLLECTION_RETRIEVAL statement is used in Oracle PL/SQL to modify the retrieval behavior of a collection. It allows you to specify the retrieval method for a varray or nested table when accessing its elements.",
    "color": "#ff9933"
  },
  "Collection_itemContext": {
    "description": "The COLLECTION_ITEM is a built-in function in Oracle PL/SQL that returns the value at a specified index position in a collection.",
    "color": "#00aad4"
  },
  "Rename_column_clauseContext": {
    "description": "The RENAME COLUMN clause is used in Oracle PL/SQL to rename a column in a table.",
    "color": "#f9c74f"
  },
  "Old_column_nameContext": {
    "description": "The 'OLD_COLUMN_NAME' is a predefined identifier in Oracle PL/SQL triggers that represents the old value of a column before an update operation is performed. It is used within trigger bodies to reference the value of a specific column prior to an update.",
    "color": "#FFA500"
  },
  "New_column_nameContext": {
    "description": "The 'New_column_name' is a placeholder for specifying the new name of a column when using the ALTER TABLE statement in Oracle PL/SQL. It is used to rename an existing column in a table.",
    "color": "#ccffcc"
  },
  "Add_modify_drop_column_clausesContext": {
    "description": "The ADD, MODIFY, and DROP column clauses are used in Oracle PL/SQL to add, modify, or drop columns in a table.",
    "color": "#5e81ac"
  },
  "Drop_column_clauseContext": {
    "description": "The DROP COLUMN clause is used in Oracle PL/SQL to remove a column from a table.",
    "color": "#ffa94d"
  },
  "Modify_column_clausesContext": {
    "description": "The MODIFY COLUMN clause is used in Oracle PL/SQL to alter or modify the properties of a column in an existing table. It allows you to change the data type, length, precision, scale, and other attributes of a column.",
    "color": "#f6a434"
  },
  "Modify_col_propertiesContext": {
    "description": "The MODIFY_COL_PROPERTIES node is used in Oracle PL/SQL to modify the properties of a column in a table. It allows you to modify the datatype, size, and other attributes of a column.",
    "color": "#fca45d"
  },
  "Modify_col_visibilityContext": {
    "description": "The MODIFY_COL_VISIBILITY keyword is used in Oracle PL/SQL to alter the visibility of columns in a table or view.",
    "color": "#d9d9d9"
  },
  "Modify_col_substitutableContext": {
    "description": "The MODIFY_COL_SUBSTITUTABLE clause is used in a ALTER TABLE statement to modify a column that has a substitutable datatype. A substitutable datatype is a user-defined datatype that can be substituted with any other datatype derived from it.",
    "color": "#845EC2"
  },
  "Add_column_clauseContext": {
    "description": "The ADD_COLUMN_CLAUSE is a clause used in the ALTER TABLE statement in Oracle PL/SQL. It is used to add a new column to an existing table.",
    "color": "#f6c945"
  },
  "Alter_varray_col_propertiesContext": {
    "description": "The ALTER_VARRAY_COL_PROPERTIES statement is used to modify the properties of a varray column in a table.",
    "color": "#f15b24"
  },
  "Varray_col_propertiesContext": {
    "description": "Varray_col_properties is a system-defined PL/SQL function that returns a collection of properties for an associative array variable of type varray. The properties include the maximum number of elements, the current number of elements, and the status of the variable.",
    "color": "#d773ff"
  },
  "Varray_storage_clauseContext": {
    "description": "The VARRAY_STORAGE_CLAUSE is used in the declaration of a VARRAY type in Oracle PL/SQL. It specifies the storage parameters for the VARRAY, such as the maximum number of elements, the default size of each element, and whether the VARRAY should be stored as a LOB (Large Object) or as a nested table.",
    "color": "#B4A7D6"
  },
  "Lob_segnameContext": {
    "description": "The LOB_SEGNAME is a column in the User_lobs view that represents the segment name of a large object (LOB). The segment name is the unique identifier of the underlying storage segment for the LOB data.",
    "color": "#4fc3f7"
  },
  "Lob_itemContext": {
    "description": "LOB_ITEM is a built-in package that provides a set of methods for working with Large Objects (LOBs) in Oracle PL/SQL. LOBs are used to store large amounts of binary or textual data, such as documents, images, or videos.",
    "color": "#f397d6"
  },
  "Lob_storage_parametersContext": {
    "description": "The LOB_STORAGE_PARAMETERS clause is used to specify the storage parameters for a Large Object (LOB) column. This clause is typically used when creating or modifying a table that includes a LOB column. It allows you to define various storage attributes such as the initial and next extent size, the maximum extent size, and the storage segment name for the LOB data.",
    "color": "#ffa500"
  },
  "Lob_storage_clauseContext": {
    "description": "The LOB_STORAGE_CLAUSE is used to specify the storage characteristics for a Large Object (LOB) column in Oracle PL/SQL. This clause allows you to control how LOB data is stored and managed.",
    "color": "#F28300"
  },
  "Modify_lob_storage_clauseContext": {
    "description": "The MODIFY_LOB_STORAGE_CLAUSE is used in Oracle PL/SQL to modify the storage characteristics of a Large Object (LOB) column in a table.",
    "color": "#FACC15"
  },
  "Modify_lob_parametersContext": {
    "description": "The MODIFY_LOB_PARAMETERS node is used to modify the parameters of a CLOB or BLOB data type column in Oracle PL/SQL. This node allows you to change the storage characteristics and behavior of a LOB column.",
    "color": "#1e90ff"
  },
  "Lob_parametersContext": {
    "description": "LOB Parameters in Oracle PL/SQL are used to reference and manipulate large objects (LOBs) such as BLOBs, CLOBs, NCLOBs, and BFILEs. They allow you to pass and work with these large objects within PL/SQL code.",
    "color": "#FF9900"
  },
  "Lob_deduplicate_clauseContext": {
    "description": "The LOB_DEDUPLICATE_CLAUSE is used in Oracle PL/SQL to specify the parameter for LOB deduplication during LOB compression. It specifies whether duplicate data should be removed or not.",
    "color": "#dcdcaa"
  },
  "Lob_compression_clauseContext": {
    "description": "The LOB_COMPRESSION_CLAUSE is used in Oracle PL/SQL to specify whether to enable or disable the compression of LOB (Large Object) values. This clause is typically used when creating or altering a table with LOB columns. When compression is enabled, LOB values are stored in a compressed format, which can reduce the storage space required for the LOB data.",
    "color": "#9933cc"
  },
  "Lob_retention_clauseContext": {
    "description": "The LOB_RETENTION_CLAUSE is used in Oracle PL/SQL to specify how long a Large Object (LOB) value should be retained in the database. It is typically used in conjunction with the LOB storage clause when defining tables or modifying existing ones. The retention period can be specified in terms of days or seconds.",
    "color": "#569CD6"
  },
  "Encryption_specContext": {
    "description": "The ENCRYPTION_SPEC is a parameter used in Oracle PL/SQL for specifying the encryption algorithm and encryption key for data encryption and decryption operations.",
    "color": "#FFB300"
  },
  "TablespaceContext": {
    "description": "A tablespace in Oracle PL/SQL is a logical storage container that contains tables, indexes, and other database objects. It is used to organize and manage the physical storage of data in a database. Each tablespace is made up of one or more datafiles, which are stored on the operating system's file system.",
    "color": "#ffcc00"
  },
  "Varray_itemContext": {
    "description": "The VARRAY_ITEM is used to reference an element within a varray (variable-size array). It specifies the index or position of the element within the varray.",
    "color": "#cb4b16"
  },
  "Column_propertiesContext": {
    "description": "Column properties in Oracle PL/SQL refer to attributes or characteristics that define the behavior of a column in a database table. These properties help determine how data is stored, validated, and treated within the column.",
    "color": "#f77d43"
  },
  "Lob_partition_storageContext": {
    "description": "LOB_PARTITION_STORAGE is a clause used in CREATE TABLE or ALTER TABLE statements to specify whether to store LOB (Large Object) data in separate tablespaces or inline with the rest of the table data. When LOB_PARTITION_STORAGE is set to ENABLED, LOB data will be stored in separate tablespaces. When set to DISABLED, LOB data will be stored inline with the table data.",
    "color": "#00FF00"
  },
  "Period_definitionContext": {
    "description": "A PERIOD definition is used to define a time interval with a start and end date or timestamp.",
    "color": "#f6b26b"
  },
  "Start_time_columnContext": {
    "description": "The start_time_column is a column in a table that stores the start time of a specific event or task.",
    "color": "#f9f900"
  },
  "End_time_columnContext": {
    "description": "The `END_TIME_COLUMN` is a special column used in Oracle PL/SQL to specify the end time of a time interval. This column is typically used in temporal or historical data tables to track the end time of a record or an event.",
    "color": "#36ab9c"
  },
  "Column_definitionContext": {
    "description": "A column definition defines a column within a table in the Oracle PL/SQL database. It specifies the name, data type, size, constraints, and other properties of the column.",
    "color": "#FF9912"
  },
  "Column_collation_nameContext": {
    "description": "The COLUMN_COLLATION_NAME is a metadata property in Oracle PL/SQL that specifies the collation name of a column in a table or view. Collation refers to the set of rules that determine how string comparison and sorting is performed.",
    "color": "#b58900"
  },
  "Identity_clauseContext": {
    "description": "The identity_clause is used in Oracle PL/SQL to define an identity column for a table. An identity column is a numeric column whose value is automatically generated by the system for each new row inserted into the table. The identity_clause includes options such as specifying the starting value, increment value, and maximum value of the identity column.",
    "color": "#E69F00"
  },
  "Identity_options_parenthesesContext": {
    "description": "The IDENTITY_OPTIONS_PARENS is a node in Oracle PL/SQL that represents the parentheses used in the identity column options. Identity columns are used to automatically generate unique values for a column. The parentheses can be used to specify various options for the identity column, such as the starting value and increment value.",
    "color": "#B8860B"
  },
  "Identity_optionsContext": {
    "description": "The IDENTITY_OPTIONS clause is used to specify the behavior of an identity column in Oracle PL/SQL. It provides options for controlling the generation and sequence of values for an identity column.",
    "color": "#d6e685"
  },
  "Virtual_column_definitionContext": {
    "description": "The VIRTUAL_COLUMN_DEFINITION node is used to define a virtual column in an Oracle PL/SQL table. A virtual column is computed from other columns and does not occupy physical space in the table.",
    "color": "#d6bdbe"
  },
  "Autogenerated_sequence_definitionContext": {
    "description": "An autogenerated_sequence_definition is used to define a sequence in Oracle PL/SQL. A sequence is a database object that generates unique integers in ascending or descending order. It can be used to generate primary key values or other unique identifiers in a table.",
    "color": "#18A2B8"
  },
  "Evaluation_edition_clauseContext": {
    "description": "The EVALUATION_EDITION_CLAUSE is used in Oracle PL/SQL to specify the edition to be used for evaluating the PL/SQL code. This clause is used when you want to ensure that the PL/SQL code runs in a specific edition of the database. It is particularly useful in a multi-edition application where different versions of the code are being developed and tested in parallel.",
    "color": "#CCFF66"
  },
  "Out_of_line_part_storageContext": {
    "description": "Out_of_line_part_storage is a clause used in Oracle PL/SQL to specify whether to store partitioned tables and indexes in the same tablespace as their corresponding partitions or in a separate tablespace.",
    "color": "#F9D966"
  },
  "Nested_table_col_propertiesContext": {
    "description": "The NESTED_TABLE_COL_PROPERTIES function returns information about the properties of a given column in a nested table. It provides details such as the maximum number of elements in the nested table, the type of elements in the table, and whether the table is sparse or not.",
    "color": "#d4bfff"
  },
  "Nested_itemContext": {
    "description": "The NESTED_ITEM function returns the value of a specified item within a nested table.",
    "color": "#00ADB5"
  },
  "Substitutable_column_clauseContext": {
    "description": "The SUBSTITUTABLE COLUMN clause is used in Oracle PL/SQL to enable substitution for columns in a subtype. It allows a subtype to be substituted for its supertype in a query, making it possible to have polymorphic queries.",
    "color": "#F92672"
  },
  "Partition_nameContext": {
    "description": "The partition_name is a name assigned to a specific partition of a table in Oracle PL/SQL. It is used to identify and access data stored in a particular partition of a table.",
    "color": "#ffcc00"
  },
  "Supplemental_logging_propsContext": {
    "description": "The SUPPLEMENTAL_LOGGING_PROPS setting is used in Oracle PL/SQL to specify which additional database information should be captured alongside the usual redo log data. This can include information such as primary key values or column name changes.",
    "color": "#ff9999"
  },
  "Column_or_attributeContext": {
    "description": "In Oracle PL/SQL, a column or attribute refers to a specific data field within a table or object type. It represents a distinct piece of information that is stored within a database. Columns are used to define the structure and characteristics of a table, while attributes define the properties and behavior of an object type.",
    "color": "#f6adc6"
  },
  "Object_type_col_propertiesContext": {
    "description": "Object_type_col_properties is a PL/SQL collection data type that represents a collection of properties for object types.",
    "color": "#f44747"
  },
  "Constraint_clausesContext": {
    "description": "Constraint clauses are used in Oracle PL/SQL to define conditions or rules that must be met for data stored in a table. They are used to ensure data integrity and maintain consistency.",
    "color": "#EF6C00"
  },
  "Old_constraint_nameContext": {
    "description": "The `OLD_CONSTRAINT_NAME` is a deprecated PL/SQL system variable that holds the name of the constraint that is being modified in a trigger. It is used in triggers that are fired before a data manipulation language (DML) statement (e.g., INSERT, UPDATE, DELETE) is executed on a table. This system variable allows the trigger code to refer to the constraint by its name and perform custom actions based on the constraint being modified.",
    "color": "#9cdcfe"
  },
  "New_constraint_nameContext": {
    "description": "The 'New_constraint_name' is a placeholder used in Oracle PL/SQL for specifying a new name for a constraint during alter table operations. It is used when you want to rename an existing constraint to a new name.",
    "color": "#e6f7ff"
  },
  "Drop_constraint_clauseContext": {
    "description": "The DROP CONSTRAINT clause is used in Oracle PL/SQL to remove a constraint from a table. Constraints are rules that enforce certain data integrity requirements on the table. This clause is typically used in ALTER TABLE statements to drop a specific constraint, such as a primary key constraint, unique constraint, or foreign key constraint.",
    "color": "#6A8759"
  },
  "Drop_primary_key_or_unique_or_generic_clauseContext": {
    "description": "The DROP PRIMARY KEY, DROP UNIQUE, or DROP CONSTRAINT clause is used to remove a primary key, unique constraint, or generic constraint from a table in Oracle PL/SQL.",
    "color": "#008080"
  },
  "Add_constraintContext": {
    "description": "The ADD_CONSTRAINT statement is used in Oracle PL/SQL to add a new constraint to an existing table. Constraints are used to enforce rules and conditions on the data in a table, ensuring its integrity and consistency.",
    "color": "#FF7F50"
  },
  "Add_constraint_clauseContext": {
    "description": "The ADD_CONSTRAINT_CLAUSE is used to add a constraint to a table or a column. Constraints are rules that define what data values are allowed in a table.",
    "color": "#f9bd27"
  },
  "Check_constraintContext": {
    "description": "A check constraint is a rule defined on a table column that restricts the values that can be inserted or updated in the column.",
    "color": "#FFA500"
  },
  "Drop_constraintContext": {
    "description": "The DROP_CONSTRAINT statement is used to remove a constraint from a table in the Oracle PL/SQL database. Constraints are rules that define and enforce the integrity of the data in a table.",
    "color": "#ee82ee"
  },
  "Enable_constraintContext": {
    "description": "The ENABLE_CONSTRAINT command is used in Oracle PL/SQL to enable a constraint that has been previously disabled. Constraints are used to enforce rules and restrictions on the data stored in a database table.",
    "color": "#7FDBFF"
  },
  "Disable_constraintContext": {
    "description": "The DISABLE_CONSTRAINT PL/SQL statement is used to disable a constraint on a table.",
    "color": "#f9826c"
  },
  "Foreign_key_clauseContext": {
    "description": "The FOREIGN KEY clause is used to define a foreign key constraint in Oracle PL/SQL. It specifies that a column or a group of columns in a table references a primary key or a unique key column in another table.",
    "color": "#f4d03f"
  },
  "References_clauseContext": {
    "description": "The REFERENCES clause is used in an Oracle PL/SQL CREATE TABLE or ALTER TABLE statement to define a referential constraint between two tables. It specifies that the foreign key column in one table references the primary key or unique key column in another table.",
    "color": "#ff7f50"
  },
  "On_delete_clauseContext": {
    "description": "The ON DELETE clause is used in a foreign key constraint to specify the action to be taken when a referenced row in the parent table is deleted. It allows you to define whether to CASCADE, SET NULL, SET DEFAULT, or restrict the deletion operation.",
    "color": "#f4b942"
  },
  "Unique_key_clauseContext": {
    "description": "The UNIQUE_KEY_CLAUSE is used in Oracle PL/SQL to define a unique constraint on one or more columns in a table. The unique key ensures that the values in the specified columns are unique across all rows in the table.",
    "color": "#31a2ac"
  },
  "Primary_key_clauseContext": {
    "description": "The PRIMARY KEY clause is used in Oracle PL/SQL to define a primary key constraint for a table. The primary key constraint ensures that each record in the table has a unique identifier. It enforces the uniqueness and the non-nullability of the primary key column(s) in the table.",
    "color": "#f39c12"
  },
  "Anonymous_blockContext": {
    "description": "The ANONYMOUS_BLOCK is a PL/SQL construct used to encapsulate a group of PL/SQL statements. It acts as a container for code that can be executed as a single unit.",
    "color": "#FFFF00"
  },
  "Invoker_rights_clauseContext": {
    "description": "The INVOKER RIGHTS clause is used in PL/SQL programs to specify that the program executes with the privileges of the invoker instead of the definer. By default, PL/SQL programs execute with the privileges of the definer, meaning they have access to the definer's privileges and objects. However, when the INVOKER RIGHTS clause is used, the program runs with the privileges of the current user who invokes the program.",
    "color": "#f5b041"
  },
  "Call_specContext": {
    "description": "A call specification (call_spec) in Oracle PL/SQL is a declaration that describes an external C or Java program. It specifies the name, parameters, and return type of the program, allowing PL/SQL code to call and interact with it. Call specifications are used in conjunction with external procedures and functions.",
    "color": "#6A1B9A"
  },
  "Java_specContext": {
    "description": "The Java_spec node in Oracle PL/SQL is used to specify the Java class or resource that you want to invoke from your PL/SQL code. This node allows you to call Java methods and access Java objects and resources in your PL/SQL programs.",
    "color": "#d4a93d"
  },
  "C_specContext": {
    "description": "The C_SPEC is a PL/SQL node used to declare a cursory specification. It defines the structure and behavior of a cursor and specifies the SQL query that the cursor will retrieve. The C_SPEC is part of the cursor declaration statement.",
    "color": "#009688"
  },
  "C_agent_in_clauseContext": {
    "description": "The C_AGENT_IN_CLAUSE is a built-in PL/SQL constant that represents the agent in a SQL 'IN' clause. It can be used to filter records based on a specific agent ID.",
    "color": "#FF00FF"
  },
  "C_parameters_clauseContext": {
    "description": "The C_PARAMETERS_CLAUSE is used in the context of creating or replacing a procedure or function in Oracle PL/SQL. It allows you to specify the parameters that will be passed to the procedure or function, along with their data types and modes.",
    "color": "#f9d423"
  },
  "ParameterContext": {
    "description": "In Oracle PL/SQL, a parameter is a variable that is used to pass values to a program or procedure. Parameters allow a program to accept input values and return output values. They define the type and size of the value that can be passed to the program or procedure.",
    "color": "#4488FF"
  },
  "Default_value_partContext": {
    "description": "The DEFAULT_VALUE_PART is used in the declaration of a variable or parameter in Oracle PL/SQL. It specifies the default value that will be used if no explicit value is assigned when the variable or parameter is initialized.",
    "color": "#5BA8A0"
  },
  "Seq_of_declare_specsContext": {
    "description": "The 'Seq_of_declare_specs' node represents a sequence of multiple declare specifications in Oracle PL/SQL.",
    "color": "#6A8759"
  },
  "Declare_specContext": {
    "description": "The DECLARE_SPEC node is used in Oracle PL/SQL to declare a specification for a program unit, such as a procedure or function. It defines the input and output parameters, return type, and optional exceptions that can be raised.",
    "color": "#990099"
  },
  "Variable_declarationContext": {
    "description": "A variable declaration is used to declare a variable in PL/SQL. It specifies the name of the variable and its data type.",
    "color": "#f3c05e"
  },
  "Subtype_declarationContext": {
    "description": "A subtype_declaration is used to define a new subtype based on an existing datatype. It allows you to create a more specific and restricted version of the original datatype. Subtypes can be used to enforce constraints or to provide additional semantic meaning to variables or parameters.",
    "color": "#f46e32"
  },
  "Cursor_declarationContext": {
    "description": "A cursor declaration is used to define a cursor in Oracle PL/SQL. A cursor is a database object that allows you to retrieve data from a result set in a row-by-row fashion. Cursors are typically used when you need to process data one row at a time, such as in a loop or when performing calculations or transformations on the data.",
    "color": "#f4a261"
  },
  "Parameter_specContext": {
    "description": "The parameter_spec is used in the declaration section of a PL/SQL block or subprogram. It specifies the name and data type of a parameter passed to or received from the block or subprogram.",
    "color": "#e6db74"
  },
  "Exception_declarationContext": {
    "description": "An exception_declaration is used to declare a user-defined exception in an Oracle PL/SQL program. Exceptions are used to handle errors or unexpected situations that may occur during program execution.",
    "color": "#e74c3c"
  },
  "Pragma_declarationContext": {
    "description": "The PRAGMA DECLARATION statement is used to specify the behavior of the PL/SQL compiler during compilation and runtime. It can be used to control things like optimizing code, handling errors, and enabling or disabling specific features.",
    "color": "#D4D4D4"
  },
  "Record_type_defContext": {
    "description": "The RECORD data type is used to define a user-defined record type in Oracle PL/SQL. This data type allows you to create custom data structures that can hold multiple fields of different data types.",
    "color": "#569cd6"
  },
  "Field_specContext": {
    "description": "The FIELD_SPEC is used to define the characteristics of a field in a record structure. It includes information such as the field name, data type, length, and format.",
    "color": "#00BFFF"
  },
  "Ref_cursor_type_defContext": {
    "description": "The REF_CURSOR_TYPE_DEF is a PL/SQL data type used to define a cursor variable that can store the results of a query as a reference to a cursor. It is often used when you need to pass a cursor between different parts of your code or when you want to return a cursor from a stored procedure or function.",
    "color": "#2b8a9e"
  },
  "Type_declarationContext": {
    "description": "A type declaration is used to define a new user-defined type in Oracle PL/SQL. It allows you to create a custom data type that can be used to define variables, parameters, and columns in tables.",
    "color": "#FF9933"
  },
  "Table_type_defContext": {
    "description": "The TABLE_TYPE_DEF node is used to define a user-defined table type in Oracle PL/SQL. This allows you to create custom table types that can be used to declare variables or parameters in procedures or functions.",
    "color": "#4d4dff"
  },
  "Table_indexed_by_partContext": {
    "description": "The TABLE INDEX BY PART clause is used in PL/SQL to declare an indexed table with a specific range to be used as an index for the associated table. It defines the datatype and the range of keys that can be used to access the elements of the indexed table.",
    "color": "#ffa500"
  },
  "Varray_type_defContext": {
    "description": "The VARRAY_TYPE_DEF node is used to define a varying array data type in Oracle PL/SQL. VARRAY (variable-size array) is a collection type that can hold a fixed number of elements of the same data type. It allows you to store data in a structured way and access it using index values.",
    "color": "#d38800"
  },
  "Seq_of_statementsContext": {
    "description": "The SEQ_OF_STATEMENTS node is used to represent a sequence of SQL statements in Oracle PL/SQL. It is commonly used in blocks, procedures, and functions to execute multiple statements one after the other.",
    "color": "#FFD700"
  },
  "Label_declarationContext": {
    "description": "Label declaration is used in Oracle PL/SQL to define a label, which is an identifier that is used to mark a position within a PL/SQL block. Labels are typically used in conjunction with control flow statements to provide a target for unconditional transfers of control.",
    "color": "#008080"
  },
  "StatementContext": {
    "description": "The 'Statement' is a basic unit of execution in Oracle PL/SQL. It represents a single action to be performed or a query to retrieve data from the database.",
    "color": "#FFED00"
  },
  "Swallow_to_semiContext": {
    "description": "The SWALLOW_TO_SEMI statement is used in PL/SQL to ignore any errors that occur until the next semicolon (;) is encountered.",
    "color": "#FF8C00"
  },
  "Assignment_statementContext": {
    "description": "An assignment statement is used to assign a value to a variable or a record element in Oracle PL/SQL. It allows you to update the value of a variable or a record element with a new value.",
    "color": "#f6c90e"
  },
  "Continue_statementContext": {
    "description": "The CONTINUE statement is used to skip the current iteration of a loop and proceed to the next iteration.",
    "color": "#f0ad4e"
  },
  "Exit_statementContext": {
    "description": "The EXIT statement is used to immediately exit from a loop statement.",
    "color": "#f92672"
  },
  "Goto_statementContext": {
    "description": "The GOTO statement is used in PL/SQL to transfer control unconditionally to a specific label within the same block or subprogram. It allows you to alter the normal flow of execution in your code.",
    "color": "#DB3D44"
  },
  "If_statementContext": {
    "description": "The IF statement is used to conditionally execute a block of code based on a specified condition. If the condition evaluates to true, the block of code following the IF statement is executed, otherwise it is skipped.",
    "color": "#F2C94C"
  },
  "Elsif_partContext": {
    "description": "The ELSIF_PART is used within an IF statement in Oracle PL/SQL to provide an alternative condition to be evaluated if the previous IF condition is false. It allows for multiple alternative conditions to be checked in sequential order, each with its own corresponding actions or statements that will be executed if the condition is true.",
    "color": "#f9a825"
  },
  "Else_partContext": {
    "description": "The ELSE part is an optional part of an IF-THEN-ELSE statement in PL/SQL. It is executed when the condition in the IF statement evaluates to false. This part is used to specify the actions to be taken when the condition is false.",
    "color": "#009E73"
  },
  "Loop_statementContext": {
    "description": "The loop_statement is used to repeat a block of code multiple times until a certain condition is met. It is commonly used for iterative tasks.",
    "color": "#f0ad4e"
  },
  "Cursor_loop_paramContext": {
    "description": "The CURSOR_LOOP_PARAM is a parameter used in a cursor loop statement in Oracle PL/SQL.",
    "color": "#f08080"
  },
  "Forall_statementContext": {
    "description": "The FORALL statement is used to efficiently perform multiple DML operations on collections in Oracle PL/SQL. It allows for bulk processing of data by executing the DML statements once for all the elements in the collection, rather than executing the DML statements individually for each element.",
    "color": "#b38600"
  },
  "Bounds_clauseContext": {
    "description": "The BOUNDS clause is used in a PL/SQL loop statement to specify the upper and lower bounds for the loop iteration. It allows you to control the number of times the loop will run.",
    "color": "#569cd6"
  },
  "Between_boundContext": {
    "description": "The BETWEEN_BOUND node is used to define the boundaries for the BETWEEN operator in Oracle PL/SQL. It specifies whether the compare values should be inclusive or exclusive.",
    "color": "#FF6AD5"
  },
  "Lower_boundContext": {
    "description": "The LOWER_BOUND function is used to get the lower bound of an associative array or nested table in PL/SQL.",
    "color": "#fcbd6d"
  },
  "Upper_boundContext": {
    "description": "The UPPER_BOUND function in Oracle PL/SQL returns the largest possible subscript value for a dynamic array.",
    "color": "#f4b942"
  },
  "Null_statementContext": {
    "description": "The NULL statement in Oracle PL/SQL is used to explicitly do nothing. It is primarily used as a placeholder or as a way to indicate that a block of code is intentionally empty.",
    "color": "#b58900"
  },
  "Raise_statementContext": {
    "description": "The RAISE statement is used to raise an exception in an Oracle PL/SQL program. It allows you to raise either a predefined exception or a user-defined exception.",
    "color": "#FF9800"
  },
  "Return_statementContext": {
    "description": "The RETURN statement is used to exit a program or a subroutine and returns a value to the calling program or subroutine.",
    "color": "#F08080"
  },
  "Call_statementContext": {
    "description": "The CALL statement is used in Oracle PL/SQL to invoke a stored procedure or a function. It is often used to execute a subprogram and handle any return values or output parameters.",
    "color": "#D4D4D4"
  },
  "Pipe_row_statementContext": {
    "description": "The PIPE ROW statement is used in Oracle PL/SQL to return a single row of data from a pipelined table function or a PL/SQL procedure that returns a collection type.",
    "color": "#E6DB74"
  },
  "BodyContext": {
    "description": "The BODY block is where the actual implementation code of a PL/SQL program resides. It contains the executable statements that define the logic and functionality of the program.",
    "color": "#ffcc00"
  },
  "Exception_handlerContext": {
    "description": "The EXCEPTION_HANDLER is a block in Oracle PL/SQL that is used to handle and manage exceptions that may occur during the execution of a PL/SQL program. It allows the programmer to specify how to handle specific types of exceptions and provides a way to gracefully handle errors and control the program flow in case of an exception.",
    "color": "#F44336"
  },
  "Trigger_blockContext": {
    "description": "The TRIGGER_BLOCK is a block of code that consists of PL/SQL statements and is used to define the implementation of a trigger in Oracle PL/SQL.",
    "color": "#FA7921"
  },
  "BlockContext": {
    "description": "A block is a basic unit of code in Oracle PL/SQL. It is used to group related declarations and statements together. A block begins with the keyword 'BEGIN' and ends with the keyword 'END;'. All the code within the block is treated as a single unit and is typically used to define procedures, functions, or anonymous blocks.",
    "color": "#569CD6"
  },
  "Sql_statementContext": {
    "description": "The SQL statement is a string containing a valid SQL query or command in Oracle PL/SQL.",
    "color": "#FF9800"
  },
  "Execute_immediateContext": {
    "description": "The EXECUTE_IMMEDIATE statement in PL/SQL is used to dynamically execute a SQL or PL/SQL code stored in a string at runtime. This allows for dynamic and flexible execution of SQL or PL/SQL statements.",
    "color": "#f6ab6c"
  },
  "Dynamic_returning_clauseContext": {
    "description": "The DYNAMIC_RETURNING_CLAUSE is used in Oracle PL/SQL to specify which columns should be returned from a DML (Data Manipulation Language) statement. Instead of specifying a fixed list of columns, it allows the columns to be determined dynamically at runtime.",
    "color": "#800080"
  },
  "Data_manipulation_language_statementsContext": {
    "description": "Data Manipulation Language (DML) statements are used to manage data within databases. They include statements like SELECT, INSERT, UPDATE, and DELETE.",
    "color": "#ff7f00"
  },
  "Cursor_manipulation_statementsContext": {
    "description": "Cursor manipulation statements in Oracle PL/SQL are used to control the processing of query results returned by a cursor. They include the OPEN, FETCH, and CLOSE statements.",
    "color": "#e74c3c"
  },
  "Close_statementContext": {
    "description": "The CLOSE statement is used to close a cursor that has been previously opened with the OPEN statement. Closing a cursor frees up system resources and makes the cursor unavailable for further fetching or processing.",
    "color": "#008080"
  },
  "Open_statementContext": {
    "description": "The OPEN statement is used in Oracle PL/SQL to open a cursor variable or a cursor for processing data. It allows you to retrieve data from the cursor and perform operations on the fetched data.",
    "color": "#f4a261"
  },
  "Fetch_statementContext": {
    "description": "The FETCH statement is used to retrieve rows from a cursor into variables. It is commonly used in combination with the OPEN cursor statement and the LOOP statement.",
    "color": "#eb5a46"
  },
  "Open_for_statementContext": {
    "description": "The OPEN FOR statement in Oracle PL/SQL is used to associate a cursor variable with a query and execute the query. It allows for dynamic execution of SQL statements.",
    "color": "#DB683B"
  },
  "Transaction_control_statementsContext": {
    "description": "Transaction control statements in Oracle PL/SQL are used to manage the transactions within a block of code. They allow you to control the start, end, and rollback of a transaction.",
    "color": "#e2a500"
  },
  "Set_transaction_commandContext": {
    "description": "The SET_TRANSACTION_COMMAND is a directive that specifies the type of transaction command to be used within a PL/SQL block. It allows you to control how the PL/SQL block behaves when it encounters transactional operations like COMMIT or ROLLBACK.",
    "color": "#fbbd08"
  },
  "Set_constraint_commandContext": {
    "description": "The SET_CONSTRAINT_COMMAND is used in Oracle PL/SQL to modify the properties of a constraint on a table.",
    "color": "#f6bb42"
  },
  "Commit_statementContext": {
    "description": "The COMMIT statement is used to permanently save all changes made within a transaction to the database and end the transaction.",
    "color": "#7FBF7F"
  },
  "Write_clauseContext": {
    "description": "The WRITE clause is used in Oracle PL/SQL to specify the destination of the output generated by the DBMS_OUTPUT.PUT_LINE procedure. It allows you to direct the output to different destinations, such as the console, a file, or a network connection.",
    "color": "#FFD700"
  },
  "Rollback_statementContext": {
    "description": "The ROLLBACK statement is used in Oracle PL/SQL to undo all changes made by the current transaction since the last commit or savepoint. It is typically used to cancel the effects of an error or to revert a transaction in case of unexpected results or issues.",
    "color": "#DC143C"
  },
  "Savepoint_statementContext": {
    "description": "A savepoint statement in Oracle PL/SQL creates a named point in a transaction to which you can roll back.",
    "color": "#D6D690"
  },
  "Explain_statementContext": {
    "description": "The EXPLAIN statement is used to display the execution plans for SQL statements. It helps in understanding how a SQL statement will be executed by the Oracle optimizer.",
    "color": "#ffcc00"
  },
  "Select_only_statementContext": {
    "description": "A SELECT statement is used to retrieve data from one or more tables or views in a database. It allows you to specify the columns to retrieve, the table(s) to retrieve data from, and conditions to filter the data.",
    "color": "#FFCC00"
  },
  "Select_statementContext": {
    "description": "A SELECT statement is used to query data from one or more tables in a database. It retrieves a set of rows that match a specified condition or criteria.",
    "color": "#3296D6"
  },
  "Factoring_elementContext": {
    "description": "The FACTORING_ELEMENT is a part of the SQL WITH clause in Oracle PL/SQL. It defines a subquery that can be referenced multiple times within the main query. It is used for code reuse and readability.",
    "color": "#e6b800"
  },
  "Search_clauseContext": {
    "description": "The search_clause is used in the SELECT statement to specify the criteria for selecting rows from a table.",
    "color": "#996633"
  },
  "Cycle_clauseContext": {
    "description": "The CYCLE clause is used in a hierarchical query to specify how to handle cycles in the data. It is used with the CONNECT BY clause in Oracle PL/SQL.",
    "color": "#dcdcaa"
  },
  "SubqueryContext": {
    "description": "A subquery is a query that is nested within another query. It is used to retrieve data from one or more tables and use that data as input for the outer query. Subqueries can be used in various parts of a PL/SQL statement, such as the SELECT, FROM, WHERE, and HAVING clauses.",
    "color": "#00BFFF"
  },
  "Subquery_basic_elementsContext": {
    "description": "A subquery in Oracle PL/SQL is a query nested inside another query. It is used to retrieve data that is needed for the main query. Subqueries can be used in various places such as the SELECT, FROM, WHERE, and HAVING clauses of a query.",
    "color": "#14aaf5"
  },
  "Subquery_operation_partContext": {
    "description": "The SUBQUERY_OPERATION_PART is a component of the Oracle PL/SQL language. It is used within a SQL statement or clause and specifies a subquery operation. The subquery operation part allows you to perform complex queries by including one or more subqueries within the main query. This can be used to filter, join, or aggregate data from multiple tables or views.",
    "color": "#FF767A"
  },
  "Query_blockContext": {
    "description": "The QUERY_BLOCK node is used in Oracle PL/SQL to represent a subquery within a larger query. It defines the scope and structure of the subquery and is used for query optimization and execution.",
    "color": "#f1c40f"
  },
  "Selected_listContext": {
    "description": "The SELECTED_LIST is a built-in collection in Oracle PL/SQL that holds the currently selected columns in a SELECT statement.",
    "color": "#3a87ad"
  },
  "From_clauseContext": {
    "description": "The FROM clause is used in a SELECT statement to specify the tables or views from which to retrieve data.",
    "color": "#d6f2ff"
  },
  "Select_list_elementsContext": {
    "description": "The SELECT list elements in Oracle PL/SQL are the individual items or expressions that are returned in the result set of a SELECT statement. They can be columns from a table, computed expressions, or literal values.",
    "color": "#FD971F"
  },
  "Table_ref_listContext": {
    "description": "The TABLE_REF_LIST is a list of table references used in Oracle PL/SQL. It is typically used in SELECT statements to specify the tables to retrieve data from.",
    "color": "#ffa500"
  },
  "Table_refContext": {
    "description": "The TABLE_REF node is used to reference a table or a view in Oracle PL/SQL. It allows you to specify the name of the table or view and, if necessary, provide an alias for it.",
    "color": "#ffad33"
  },
  "Table_ref_auxContext": {
    "description": "The TABLE_REF_AUX node is used in Oracle PL/SQL to specify additional expressions or conditions for a table reference. It is commonly used in SELECT statements to join multiple tables or apply additional filtering criteria.",
    "color": "#ffb6c1"
  },
  "Table_ref_aux_internalContext": {
    "description": "The TABLE_REF_AUX_INTERNAL node is used in the Oracle PL/SQL syntax tree to represent auxiliary table references within a query. This node is typically used in join operations to reference additional tables or subqueries.",
    "color": "#f2711c"
  },
  "Join_clauseContext": {
    "description": "The JOIN clause in Oracle PL/SQL is used to combine records from two or more tables based on a related column between them. It specifies how the tables should be linked together in a query.",
    "color": "#ff9900"
  },
  "Join_on_partContext": {
    "description": "The JOIN ON clause is used in a SQL statement to specify the criteria for joining two or more tables. The JOIN ON part specifies the conditions that must be met for a row to be included in the result set.",
    "color": "#f9c74f"
  },
  "Join_using_partContext": {
    "description": "The JOIN USING clause is used to specify the columns that are used for matching rows between two tables in a join operation. It allows you to join tables based on columns with the same name.",
    "color": "#E6B422"
  },
  "Outer_join_typeContext": {
    "description": "The outer_join_type node is used in Oracle PL/SQL to specify the type of outer join to be performed when joining two tables in a query.",
    "color": "#f7c35b"
  },
  "Query_partition_clauseContext": {
    "description": "The QUERY_PARTITION_CLAUSE is used in a SELECT statement to specify the partitions or subpartitions from which data is retrieved.",
    "color": "#f9d71c"
  },
  "Flashback_query_clauseContext": {
    "description": "The FLASHBACK_QUERY_CLAUSE is a clause used in Oracle PL/SQL to provide the ability to query data as it existed at a specific point in time.",
    "color": "#FF9900"
  },
  "Pivot_clauseContext": {
    "description": "The PIVOT clause is used in Oracle PL/SQL to rotate rows into columns, effectively transforming a table's row data into aggregated columns. This is useful for summarizing data and producing more concise and readable reports.",
    "color": "#f9a825"
  },
  "Pivot_elementContext": {
    "description": "The PIVOT_ELEMENT is used in a PIVOT operation in Oracle PL/SQL. It represents the transformed column values from the source table. Each PIVOT_ELEMENT corresponds to a column in the result set created by the PIVOT operation.",
    "color": "#ffa500"
  },
  "Pivot_for_clauseContext": {
    "description": "The PIVOT_FOR_clause is used in Oracle PL/SQL to specify the columns that will be pivoted in a PIVOT operation.",
    "color": "#9933cc"
  },
  "Pivot_in_clauseContext": {
    "description": "The PIVOT IN clause is used in Oracle PL/SQL to specify the values that should be transformed into columns in a PIVOT operation. It is used in conjunction with the PIVOT function to rotate rows into columns.",
    "color": "#e76e00"
  },
  "Pivot_in_clause_elementContext": {
    "description": "The PIVOT_IN_CLAUSE_ELEMENT is used in the PIVOT operation in Oracle PL/SQL. It specifies the values to pivot from in the input data set.",
    "color": "#3399FF"
  },
  "Pivot_in_clause_elementsContext": {
    "description": "The PIVOT_IN_CLAUSE_ELEMENTS node is used in the PIVOT clause of a SELECT statement in Oracle PL/SQL. It specifies the list of values that will be used as pivot columns. Each value in the list represents a unique column in the resulting pivot table.",
    "color": "#3c809d"
  },
  "Unpivot_clauseContext": {
    "description": "The UNPIVOT clause is used in Oracle PL/SQL to transform columns into rows in a table or view. It is used in conjunction with the PIVOT clause to perform data pivoting operations.",
    "color": "#fcbf49"
  },
  "Unpivot_in_clauseContext": {
    "description": "The UNPIVOT IN clause in Oracle PL/SQL is used to transform columns into rows in a table. It allows you to unpivot multiple columns into a single column, making the data more manageable for analysis purposes.",
    "color": "#9932CC"
  },
  "Unpivot_in_elementsContext": {
    "description": "The UNPIVOT_IN_ELEMENTS clause is used in the UNPIVOT operation in Oracle PL/SQL. It specifies the columns that will be transformed into rows in the result set.",
    "color": "#f49842"
  },
  "Hierarchical_query_clauseContext": {
    "description": "The hierarchical_query_clause is part of the Oracle SQL syntax used to perform hierarchical queries. It is used to traverse and query hierarchical data stored in a table using a hierarchical query. The hierarchical_query_clause specifies the relationships between parent and child rows in the table.",
    "color": "#FF9900"
  },
  "Start_partContext": {
    "description": "The START statement is used to start a named part of a PL/SQL block.",
    "color": "#ffc107"
  },
  "Group_by_clauseContext": {
    "description": "The GROUP BY clause is used in a SELECT statement to group rows that have the same values in specified columns. The query result is then aggregated or summarized based on these groups.",
    "color": "#007bff"
  },
  "Group_by_elementsContext": {
    "description": "The GROUP BY clause is used to group the result set based on one or more columns in a query. The GROUP BY clause divides the rows into groups based on the specified columns, and aggregate functions like COUNT, SUM, AVG, etc. can be applied to each group separately.",
    "color": "#5C6BC0"
  },
  "Rollup_cube_clauseContext": {
    "description": "The ROLLUP and CUBE clauses are used in PL/SQL to specify the grouping sets for the ROLLUP and CUBE operations in a SELECT statement. The ROLLUP operation generates all possible combination of grouping sets, while the CUBE operation generates all possible aggregations of data for each combination of grouping sets. The ROLLUP_CUBE_CLAUSE is used in conjunction with the GROUP BY clause to define the grouping sets.",
    "color": "#f4a261"
  },
  "Grouping_sets_clauseContext": {
    "description": "The GROUPING SETS clause is used in a SELECT statement to specify multiple grouping sets for generating multiple levels of subtotal aggregates.",
    "color": "#DBB7FF"
  },
  "Grouping_sets_elementsContext": {
    "description": "The GROUPING SETS clause is used in Oracle PL/SQL to specify multiple GROUP BY clauses or grouping sets in a single query. The GROUPING SETS clause allows you to compute multiple groupings in a single query result, which can be useful in creating complex reports or aggregating data across multiple dimensions.",
    "color": "#f0ad4e"
  },
  "Having_clauseContext": {
    "description": "The HAVING clause is used in conjunction with the GROUP BY clause to filter the query results based on a condition applied to grouped rows. It allows you to specify conditions on aggregated values.",
    "color": "#00FFFF"
  },
  "Model_clauseContext": {
    "description": "The MODEL clause is used in Oracle PL/SQL to perform complex calculations and transformations on data. It provides a way to define calculation rules and apply them in a row-by-row manner to a result set. The MODEL clause is commonly used in analytical queries for tasks such as data pivoting, interpolation, and forecasting.",
    "color": "#00CCCC"
  },
  "Cell_reference_optionsContext": {
    "description": "The PL/SQL cell_reference_options is used to specify options for referencing cells in a spreadsheet.",
    "color": "#d2b48c"
  },
  "Return_rows_clauseContext": {
    "description": "The RETURNING clause is used in an Oracle PL/SQL SELECT statement to return the affected rows from a data manipulation language (DML) operation, such as INSERT, UPDATE, or DELETE.",
    "color": "#f4a261"
  },
  "Reference_modelContext": {
    "description": "The REFERENCE MODEL is a feature in Oracle PL/SQL that allows you to define a structure or template for a user-defined object type based on an existing object type. It provides a way to reuse and extend the attributes and methods of an existing object type. By creating a reference model, you can define new object types that inherit properties from the referenced object type.",
    "color": "#f6c23e"
  },
  "Main_modelContext": {
    "description": "The MAIN_MODEL is the main entry point for a PL/SQL program. It is a required element and serves as the starting point of the program's execution.",
    "color": "#D4D4D4"
  },
  "Model_column_clausesContext": {
    "description": "The MODEL_COLUMN_CLAUSES provides the definitions of the columns in the MODEL clause of an Oracle PL/SQL query. It specifies the source columns, measures, and dimension columns for the model.",
    "color": "#f4a261"
  },
  "Model_column_partition_partContext": {
    "description": "The MODEL_COLUMN_PARTITION_PART is a clause used in the SELECT statement of the Oracle PL/SQL MODEL clause. It specifies the column partitioning key values used to divide the data into multiple partitions for performing calculations in parallel.",
    "color": "#D9E6F2"
  },
  "Model_column_listContext": {
    "description": "The MODEL_COLUMN_LIST is a list of column expressions that define the dimensions of the model.",
    "color": "#00bfff"
  },
  "Model_columnContext": {
    "description": "A model_column is a column in the model clause of a query. It represents a variable or expression that is updated and iteratively processed as part of the model calculation. Each model_column has an associated value and can be referenced in other parts of the model clause.",
    "color": "#ffcc00"
  },
  "Model_rules_clauseContext": {
    "description": "The MODEL_RULES_CLAUSE is used in Oracle PL/SQL to define the rules for populating the result columns in a MODEL query. This clause is used in conjunction with the MODEL subquery to specify the calculations and transformations to be performed on the input data.",
    "color": "#00CED1"
  },
  "Model_rules_partContext": {
    "description": "The MODEL_RULES_PART is a clause used in the MODEL clause of a SELECT statement in Oracle PL/SQL. It is used to define the rules for how data is calculated and updated in a specified cell or range of cells within the model.",
    "color": "#FF8C00"
  },
  "Model_rules_elementContext": {
    "description": "The MODEL_RULES_ELEMENT is a PL/SQL element used in the MODEL clause of a SELECT statement in Oracle. It defines the rules that dictate how the values in the specified measures are calculated or aggregated within each iteration of the MODEL.",
    "color": "#00bfff"
  },
  "Cell_assignmentContext": {
    "description": "The CELL_ASSIGNMENT keyword is used in Oracle PL/SQL to assign a value to a cell within a SQL model. It is used to update the value of a specific cell based on the given conditions defined in the model.",
    "color": "#fcb0b0"
  },
  "Model_iterate_clauseContext": {
    "description": "The MODEL ITERATE clause is used in Oracle PL/SQL to define the iteration logic and conditions when performing calculations in a MODEL clause.",
    "color": "#f7c720"
  },
  "Until_partContext": {
    "description": "The UNTIL part is used in a LOOP statement in Oracle PL/SQL to specify the condition that must be evaluated before each iteration of the loop. If the condition is true, the loop continues executing. If the condition is false, the loop terminates and control passes to the next statement after the loop.",
    "color": "#9933CC"
  },
  "Order_by_clauseContext": {
    "description": "The ORDER BY clause is used in SQL queries to specify the order in which the result set should be sorted. It is used to sort the rows based on one or more columns in either ascending (default) or descending order.",
    "color": "#FF9900"
  },
  "Order_by_elementsContext": {
    "description": "The ORDER BY clause in Oracle PL/SQL is used to sort the result set of a query based on one or more columns. The ORDER BY clause is followed by a list of columns or expressions separated by commas. Each column or expression can be sorted in ascending or descending order by using the ASC or DESC keyword respectively. The ORDER BY clause can be used in SELECT statements to sort the retrieved data in a specific order.",
    "color": "#D4AD00"
  },
  "Offset_clauseContext": {
    "description": "The OFFSET clause is used in Oracle PL/SQL to specify the number of rows to skip before starting to return rows from a query result set.",
    "color": "#f9ee55"
  },
  "Fetch_clauseContext": {
    "description": "The fetch_clause is used in a cursor loop to retrieve rows from a result set in Oracle PL/SQL.",
    "color": "#ffa500"
  },
  "For_update_clauseContext": {
    "description": "The FOR UPDATE clause is used in a SELECT statement within a PL/SQL block to lock the selected rows in a table. By using this clause, you can ensure that other sessions do not modify the selected rows until the transaction is complete. This is commonly used in situations where you need to perform some manipulations or calculations on the selected rows without worrying about concurrent modifications by other sessions.",
    "color": "#d6e685"
  },
  "For_update_of_partContext": {
    "description": "The FOR UPDATE OF clause in Oracle PL/SQL is used to specify a subset of columns in a table that should be locked for update by the current transaction. It is typically used in a SELECT statement within a cursor declaration to define a set of rows that should be locked.",
    "color": "#7EBEA5"
  },
  "For_update_optionsContext": {
    "description": "The FOR UPDATE OPTIONS clause is used in a SELECT statement to specify the locking behavior for the rows that are retrieved.",
    "color": "#00BFFF"
  },
  "Update_statementContext": {
    "description": "The UPDATE statement is used to modify existing records in a table. It allows you to set new values for one or more columns based on certain conditions.",
    "color": "#f0ad4e"
  },
  "Update_set_clauseContext": {
    "description": "The UPDATE SET clause is used in an SQL UPDATE statement to specify the columns and their new values that will be updated in a table.",
    "color": "#00a6a6"
  },
  "Column_based_update_set_clauseContext": {
    "description": "The COLUMN_BASED_UPDATE_SET_CLAUSE is a clause used in Oracle PL/SQL to update multiple columns in a table with new values. It allows you to specify the columns and their corresponding values to be updated in a single statement.",
    "color": "#f9c74f"
  },
  "Delete_statementContext": {
    "description": "The DELETE statement is used to remove one or more rows from a table based on a specified condition.",
    "color": "#f9adc7"
  },
  "Insert_statementContext": {
    "description": "The INSERT statement is used to insert one or more rows into a table.",
    "color": "#98c379"
  },
  "Single_table_insertContext": {
    "description": "The SINGLE_TABLE_INSERT is a type of DML statement in Oracle PL/SQL that is used to insert a single row of data into a table.",
    "color": "#EDFB8C"
  },
  "Multi_table_insertContext": {
    "description": "Multi_table_insert is a feature in Oracle PL/SQL that allows you to insert data into multiple tables with a single INSERT statement. It provides a convenient way to insert data into multiple tables that are related through foreign key constraints or other types of relationships.",
    "color": "#f9c134"
  },
  "Multi_table_elementContext": {
    "description": "A multi-table element is a name/value pair that is used in an INSERT statement to specify the value to be inserted into a column of a table. It allows inserting data into multiple tables at once by specifying different column names and values for each table.",
    "color": "#569CD6"
  },
  "Conditional_insert_clauseContext": {
    "description": "The conditional_insert_clause is used in an INSERT statement in Oracle PL/SQL. It allows you to specify conditions that must be met in order for the insert operation to occur. If the conditions are not met, the insert operation is skipped.",
    "color": "#ff9900"
  },
  "Conditional_insert_when_partContext": {
    "description": "The conditional_insert_when_part is used in an INSERT statement in Oracle PL/SQL to specify the condition for inserting a row into a table. It is part of the WHEN clause, which allows you to define multiple conditions for inserting data based on different criteria.",
    "color": "#E6B422"
  },
  "Conditional_insert_else_partContext": {
    "description": "The CONDITIONAL_INSERT_ELSE_PART is a clause that is used in Oracle PL/SQL to specify the actions to be taken when the condition in a conditional insert statement evaluates to false. It allows you to define the alternative logic or actions to be executed when the condition is not met.",
    "color": "#DCDCAA"
  },
  "Insert_into_clauseContext": {
    "description": "The INSERT INTO clause is used in Oracle PL/SQL to specify the table into which data will be inserted during an INSERT statement. It specifies the target table name and (optionally) the column names in which the data will be inserted.",
    "color": "#f6c23e"
  },
  "Values_clauseContext": {
    "description": "The VALUES clause is used in INSERT statements to specify the values to be inserted into a table. It allows you to insert multiple rows in a single INSERT statement.",
    "color": "#abb2bf"
  },
  "Merge_statementContext": {
    "description": "A MERGE statement in Oracle PL/SQL is used to combine INSERT, UPDATE, and DELETE operations into a single statement. It allows you to conditionally insert or update data in a table based on specified conditions, avoiding the need for separate statements. The merge_statement is typically used when you need to synchronize data between two tables or perform upsert (update or insert) operations.",
    "color": "#a6e22e"
  },
  "Merge_update_clauseContext": {
    "description": "The MERGE UPDATE clause is used in the Oracle PL/SQL MERGE statement to specify the update operation that should be performed when a matching condition is met during a merge operation. It allows you to update specific columns in the target table based on values from the source table.",
    "color": "#f6aa11"
  },
  "Merge_elementContext": {
    "description": "The MERGE_ELEMENT is a PL/SQL construct used in the MERGE statement. It represents a single source column or expression and its corresponding target column.",
    "color": "#A6E22E"
  },
  "Merge_update_delete_partContext": {
    "description": "The MERGE statement in Oracle PL/SQL is used to perform an update or insert operation on a target table based on the values from a source table or another subquery. It combines the functionality of the UPDATE and INSERT statements into a single statement. The UPDATE part of the MERGE statement updates the records in the target table based on specified conditions, while the INSERT part inserts new records into the target table that do not exist in the source. The DELETE part of the MERGE statement can also be used to delete records from the target table that meet certain conditions.",
    "color": "#58b6c0"
  },
  "Merge_insert_clauseContext": {
    "description": "The MERGE_INSERT_CLAUSE is a part of the MERGE statement in Oracle PL/SQL. It specifies the values to be inserted into the target table when a match is not found in the source table.",
    "color": "#f9b36b"
  },
  "Selected_tableviewContext": {
    "description": "The SELECTED_TABLEVIEW is a system-defined Boolean variable in Oracle PL/SQL that indicates whether the current execution is happening within a selected table view.",
    "color": "#DC3646"
  },
  "Lock_table_statementContext": {
    "description": "The LOCK TABLE statement is used in Oracle PL/SQL to explicitly lock one or more tables in a database. By acquiring locks on specified tables, this statement helps to control and manage concurrent transactions and ensure data integrity.",
    "color": "#00AAFF"
  },
  "Wait_nowait_partContext": {
    "description": "The WAIT/NOWAIT clause is used in Oracle PL/SQL to control the behavior of a SELECT FOR UPDATE statement when it encounters locked rows. The WAIT option causes the statement to wait until the locked rows are released, while the NOWAIT option causes the statement to raise an immediate exception if any rows are locked.",
    "color": "#993366"
  },
  "Lock_table_elementContext": {
    "description": "The LOCK_TABLE_ELEMENT is a PL/SQL datatype used to represent a specific element within a database table that needs to be locked for exclusive access. It is used in conjunction with the LOCK TABLE statement to control concurrency in a multi-user environment. By specifying the LOCK_TABLE_ELEMENT, you can ensure that only one session at a time can access or modify the specified element of the table.",
    "color": "#FF9900"
  },
  "Lock_modeContext": {
    "description": "The LOCK_MODE is a parameter used in Oracle PL/SQL to control the locking behavior for a specific transaction or statement. It determines how the database handles concurrent access and locking conflicts.",
    "color": "#d6c900"
  },
  "General_table_refContext": {
    "description": "The GENERAL_TABLE_REF is a PL/SQL node used to reference a table or view in a general manner. It can be used as an input parameter or variable in PL/SQL code. It allows you to manipulate table or view data dynamically without explicitly specifying the table or view name.",
    "color": "#f49ac1"
  },
  "Static_returning_clauseContext": {
    "description": "The STATIC_RETURNING_CLAUSE is a clause used in an Oracle PL/SQL MERGE statement to specify the columns to be returned as part of the result set. It allows you to define the columns and expressions that you want to return from the merged rows, even if they are not part of the target table.",
    "color": "#f15a29"
  },
  "Error_logging_clauseContext": {
    "description": "The ERROR_LOGGING_CLAUSE is a clause used in Oracle PL/SQL to specify error logging options for an INSERT, UPDATE, MERGE, or DELETE statement. It allows you to log any errors that occur during the execution of the statement into an error logging table.",
    "color": "#F92672"
  },
  "Error_logging_into_partContext": {
    "description": "The ERROR_LOGGING_INTO_PART is a part of the INSERT statement in Oracle PL/SQL. It is used to insert rows into a table and allows for DML error logging. By specifying the ERROR_LOGGING_INTO_PART clause, any rows that fail to be inserted due to constraints or other errors will be logged into the specified error logging table.",
    "color": "#DB4437"
  },
  "Error_logging_reject_partContext": {
    "description": "The ERROR_LOGGING_REJECT_PART is a clause that can be used with the INSERT statement in Oracle PL/SQL. It allows you to specify a specific table or table partition where rejected rows should be inserted in case a DML error occurs during the execution of the INSERT statement.",
    "color": "#f92672"
  },
  "Dml_table_expression_clauseContext": {
    "description": "The DML table expression clause is used in Oracle PL/SQL to specify tables or table expressions from which data is to be retrieved or modified in a DML (Data Manipulation Language) statement. It allows you to specify the table or table expressions that will be used as the source or target of the DML operation.",
    "color": "#B200FF"
  },
  "Table_collection_expressionContext": {
    "description": "The table_collection_expression is a PL/SQL expression that represents a collection of values, such as a nested table or a varray. It can be used in various PL/SQL constructs, such as FORALL statements and TABLE functions. The table_collection_expression allows you to process and manipulate collections of data as a whole.",
    "color": "#2998ff"
  },
  "Subquery_restriction_clauseContext": {
    "description": "The subquery_restriction_clause in Oracle PL/SQL is used to restrict the results returned by a subquery within a SQL statement. It allows you to specify conditions that must be met for the subquery to be included in the result set.",
    "color": "#33CC99"
  },
  "Sample_clauseContext": {
    "description": "The SAMPLE clause in Oracle PL/SQL is used to specify a percentage or number of rows to be retrieved from a table in a random sample. It is often used in queries to analyze smaller subsets of data when working with large tables.",
    "color": "#6A8759"
  },
  "Seed_partContext": {
    "description": "The SEED_PART is a predefined constant that is used with the RANDOM function in Oracle PL/SQL. It represents the initial value for the random number generator algorithm. By providing a specific value for the SEED_PART, you can control the sequence of random numbers generated by the RANDOM function.",
    "color": "#ff6600"
  },
  "ConditionContext": {
    "description": "A condition in Oracle PL/SQL is an expression that evaluates to either TRUE, FALSE, or NULL. Conditions are commonly used in control structures such as IF-THEN-ELSE statements and loop statements.",
    "color": "#f5b942"
  },
  "Json_conditionContext": {
    "description": "The JSON_CONDITION is a condition that checks whether an expression is valid JSON or not. It can be used in PL/SQL code to perform validations on JSON data.",
    "color": "#DDB900"
  },
  "ExpressionsContext": {
    "description": "Expressions in Oracle PL/SQL are combinations of literals, variables, operators, and function calls that produce a single value. They are used to perform calculations, comparisons, and manipulate data.",
    "color": "#6897bb"
  },
  "ExpressionContext": {
    "description": "An expression is a combination of one or more values, operators, and functions that evaluates to a single value.",
    "color": "#FFA500"
  },
  "Cursor_expressionContext": {
    "description": "A cursor_expression is a PL/SQL expression that returns a cursor. It can be used within a SELECT statement to retrieve and manipulate data from one or more tables.",
    "color": "#a6e22e"
  },
  "Logical_expressionContext": {
    "description": "A logical expression in PL/SQL is used to evaluate conditions and return either true or false. It typically comprises of relational operators (such as equal to, greater than, less than) and logical operators (such as AND, OR, NOT) to compare values and create complex conditions for decision-making.",
    "color": "#E2C044"
  },
  "Unary_logical_expressionContext": {
    "description": "A unary logical expression in Oracle PL/SQL is a logical operation that has only one operand. It applies a logical operator, such as NOT, to the operand, resulting in a boolean value (TRUE or FALSE). Unary logical expressions are commonly used to negate a condition or check if a value is NULL.",
    "color": "#DCDCAA"
  },
  "Logical_operationContext": {
    "description": "The Logical_operation node represents a logical operation in Oracle PL/SQL code. It is used to evaluate multiple conditions and return a boolean result.",
    "color": "#EF5350"
  },
  "Multiset_expressionContext": {
    "description": "The MULTSET_EXPRESSION is used in Oracle PL/SQL to create a collection of values from the result of a subquery. It is part of the multiset operation syntax and is typically used in conjunction with the TABLE operator to specify a subquery that returns a collection of values.",
    "color": "#b25f4a"
  },
  "Relational_expressionContext": {
    "description": "A relational expression is used to compare two values and return a boolean result. It can be used to check if one value is equal to, not equal to, less than, greater than, less than or equal to, or greater than or equal to another value.",
    "color": "#551A8B"
  },
  "Compound_expressionContext": {
    "description": "A compound expression in Oracle PL/SQL is a sequence of two or more expressions that are logically combined. It is used to perform multiple operations or evaluations in a single statement or condition.",
    "color": "#F4B400"
  },
  "Relational_operatorContext": {
    "description": "The relational operator is used to compare two values and return a Boolean result indicating the relationship between them. It is commonly used in conditional expressions and WHERE clauses to filter rows based on specific conditions.",
    "color": "#DCDCAA"
  },
  "In_elementsContext": {
    "description": "The IN_ELEMENTS operator is used to check whether a given value exists within a collection. It returns a boolean value indicating whether the value is present or not.",
    "color": "#8763c4"
  },
  "Between_elementsContext": {
    "description": "The BETWEEN operator is used to check if a value lies within a specified range. The BETWEEN...AND condition is used in a WHERE clause to retrieve records that fall within a given range.",
    "color": "#f9c74f"
  },
  "ConcatenationContext": {
    "description": "Concatenation is an operation used to combine two or more strings together.",
    "color": "#56b6c2"
  },
  "Interval_expressionContext": {
    "description": "The INTERVAL_EXPRESSION is a PL/SQL expression that represents an interval of time or a relative duration. It is used in conjunction with the INTERVAL keyword to specify a time period or duration in PL/SQL statements.",
    "color": "#d7d7ff"
  },
  "Model_expressionContext": {
    "description": "The MODEL expression in Oracle PL/SQL is used to perform complex calculations and transformations on data. It is a powerful feature that allows you to define mathematical formulas and apply them to multiple rows of data in a single query. The MODEL expression uses a combination of dimensions, measures, and rules to specify the calculations and transformations to be performed.",
    "color": "#f6c23e"
  },
  "Model_expression_elementContext": {
    "description": "The MODEL_EXPRESSION_ELEMENT is a component of the MODEL clause in Oracle PL/SQL. It represents a single expression or column that is used in the model query. This element defines the calculation or transformation to be applied to the data model.",
    "color": "#ff7f50"
  },
  "Single_column_for_loopContext": {
    "description": "The SINGLE_COLUMN_FOR_LOOP is a control structure in PL/SQL used for iterating over a single column result set returned by a SELECT statement.",
    "color": "#f9d900"
  },
  "Multi_column_for_loopContext": {
    "description": "The MULTI_COLUMN_FOR_LOOP is a control structure in Oracle PL/SQL used to iterate over multiple columns of a collection or table. It allows you to process each column value of the collection or table in a single iteration.",
    "color": "#f9a61a"
  },
  "Unary_expressionContext": {
    "description": "A unary expression is an expression that operates on a single operand. It performs an operation on the operand and returns a result.",
    "color": "#FF00FF"
  },
  "Case_statementContext": {
    "description": "The CASE statement in Oracle PL/SQL is used to perform conditional logic and control flow based on multiple conditions. It allows you to evaluate a series of conditions and execute different code blocks based on the results.",
    "color": "#f9d423"
  },
  "Simple_case_statementContext": {
    "description": "The simple case statement is a control flow statement in Oracle PL/SQL that allows you to compare a value against a list of possible values and execute different blocks of code based on the match.",
    "color": "#00CED1"
  },
  "Simple_case_when_partContext": {
    "description": "The simple_case_when_part is a part of the CASE statement in PL/SQL. It represents a single 'when' condition and its corresponding result expression.",
    "color": "#00adb5"
  },
  "Searched_case_statementContext": {
    "description": "The Searched CASE statement is a control flow statement in Oracle PL/SQL used to perform conditional branching based on multiple conditions. It allows you to evaluate a series of Boolean expressions and execute the corresponding code block for the first expression that evaluates to true.",
    "color": "#fcdc00"
  },
  "Searched_case_when_partContext": {
    "description": "The searched CASE WHEN part in Oracle PL/SQL allows you to implement conditional logic in your code based on multiple conditions. It is a way of performing conditional branching and can be used within a larger CASE statement or as a standalone construct.",
    "color": "#00FF00"
  },
  "Case_else_partContext": {
    "description": "The CASE_ELSE_PART is used in a CASE statement in Oracle PL/SQL to handle the default action when none of the other WHEN clauses match.",
    "color": "#e6db74"
  },
  "AtomContext": {
    "description": "The ATOM statement in Oracle PL/SQL is used to initialize a collection type. It assigns a single value to each element of the collection.",
    "color": "#97979A"
  },
  "Quantified_expressionContext": {
    "description": "A quantified expression is used to check if a specified condition is true for all or some elements in a collection. It can be used with either the ALL or ANY keyword.",
    "color": "#f4ee42"
  },
  "String_functionContext": {
    "description": "In Oracle PL/SQL, a string function is used to manipulate strings or retrieve specific information about them. These functions perform tasks such as concatenating strings, extracting substrings, changing case, replacing characters, and more.",
    "color": "#FFCC00"
  },
  "Standard_functionContext": {
    "description": "Standard functions are pre-defined functions in Oracle PL/SQL that manipulate data or perform certain operations. These functions can be used within SQL statements or PL/SQL blocks to retrieve or manipulate data.",
    "color": "#FFCC00"
  },
  "Json_object_contentContext": {
    "description": "The JSON_OBJECT_CONTENT function is used to create the content of a JSON object in Oracle PL/SQL. It takes a list of key-value pairs and returns a JSON object.",
    "color": "#ffa726"
  },
  "Json_object_entryContext": {
    "description": "The JSON_OBJECT_ENTRY is used within the JSON_OBJECT function to define a key-value pair in a JSON object. It represents a single member in a JSON object, where the key is a string and the value is any valid JSON data type.",
    "color": "#e67e22"
  },
  "Json_table_clauseContext": {
    "description": "The JSON_TABLE clause is used in Oracle PL/SQL to query JSON data and return the results as relational data. It allows you to map the structure of JSON data to relational columns, making it easier to work with JSON data in SQL queries.",
    "color": "#E9967A"
  },
  "Json_array_elementContext": {
    "description": "The JSON_ARRAY_ELEMENT function retrieves an element from a JSON array at a specified index position.",
    "color": "#ff99cc"
  },
  "Json_on_null_clauseContext": {
    "description": "The JSON_ON_NULL_clause is a clause used in Oracle PL/SQL to specify how to handle null values when converting data to JSON format. It determines whether to include or exclude null values in the generated JSON output.",
    "color": "#6E6EFD"
  },
  "Json_return_clauseContext": {
    "description": "The JSON_RETURNING clause in Oracle PL/SQL is used to return the result of a JSON query as a JSON object or array.",
    "color": "#f9c74f"
  },
  "Json_transform_opContext": {
    "description": "The JSON_TRANSFORM_OP is an operator used in Oracle PL/SQL to transform JSON data. It is used in conjunction with the JSON_TABLE function to specify the transformation of JSON data into relational data. The transformation can include extraction, aggregation, and filtering of JSON values.",
    "color": "#52ae94"
  },
  "Json_column_clauseContext": {
    "description": "The JSON_COLUMN_CLAUSE is used in Oracle PL/SQL to specify which columns of a table should be treated as JSON data. It is used in conjunction with the JSON_VALUE or JSON_QUERY functions to extract values from JSON data stored in the specified columns.",
    "color": "#f5c647"
  },
  "Json_column_definitionContext": {
    "description": "The JSON_COLUMN_DEFINITION is used to define a column with the JSON data type in the Oracle PL/SQL language. This data type allows storing and manipulating JSON data in the database.",
    "color": "#f9bc86"
  },
  "Json_query_returning_clauseContext": {
    "description": "The JSON_QUERY_RETURNING_CLAUSE is a clause used in an Oracle PL/SQL query to extract and return a specific value or values from a JSON document. It allows you to specify a JSON path expression to navigate through the JSON data and retrieve the desired values. The returned values can be of various types, such as text, numeric, or Boolean.",
    "color": "#FFA500"
  },
  "Json_query_return_typeContext": {
    "description": "The JSON_QUERY_RETURN_TYPE is a predefined type in Oracle PL/SQL used to specify the return type of the JSON_QUERY function.",
    "color": "#e68e29"
  },
  "Json_query_wrapper_clauseContext": {
    "description": "The JSON_QUERY wrapper clause is used in Oracle PL/SQL to extract a JSON value from a JSON object or array based on a JSON path expression. It returns the JSON value as a scalar value or an SQL object.",
    "color": "#079BD2"
  },
  "Json_query_on_error_clauseContext": {
    "description": "The JSON_QUERY_ON_ERROR clause is used in conjunction with the JSON_QUERY function in Oracle PL/SQL. It specifies the behavior when an error occurs while processing a JSON query.",
    "color": "#f6921e"
  },
  "Json_query_on_empty_clauseContext": {
    "description": "The JSON_QUERY_ON_EMPTY clause is used in Oracle PL/SQL to specify the behavior when the JSON_QUERY function returns an empty result. It allows you to define an alternate value to be returned instead of raising an error when the JSON data is not found or doesn't match the specified path.",
    "color": "#00BFFF"
  },
  "Json_value_return_clauseContext": {
    "description": "The JSON_VALUE_RETURN_CLAUSE is used in Oracle PL/SQL to specify the desired type for the result when extracting a value from a JSON document using the JSON_VALUE function. It allows you to specify the desired data type, such as VARCHAR2, NUMBER, or BOOLEAN.",
    "color": "#e6194b"
  },
  "Json_value_return_typeContext": {
    "description": "The JSON_VALUE_RETURN_TYPE is a built-in PL/SQL data type that represents the return type of the JSON_VALUE function. It is used to store the result of extracting a scalar value from a JSON document using the JSON_VALUE function.",
    "color": "#d6b08c"
  },
  "Json_value_on_mismatch_clauseContext": {
    "description": "The JSON_VALUE_ON_MISMATCH clause is used in the JSON_VALUE function in Oracle PL/SQL to specify the value to return when the JSON path does not exist or the value is of a different type than requested.",
    "color": "#6A8759"
  },
  "LiteralContext": {
    "description": "In Oracle PL/SQL, a literal is a fixed value that is directly specified in the code and does not change during execution. It can be a string, a number, a date, or a boolean value.",
    "color": "#D4D4D4"
  },
  "Numeric_function_wrapperContext": {
    "description": "The Numeric Function Wrapper is used in Oracle PL/SQL to encapsulate a numeric expression or function call. It allows you to apply mathematical or numerical operations to the enclosed expression or function call.",
    "color": "#ff80ff"
  },
  "Numeric_functionContext": {
    "description": "A numeric function is a function in Oracle PL/SQL that performs calculations or manipulations on numeric values. These functions can be used to calculate mathematical expressions, round numbers, generate random numbers, perform trigonometric calculations, and more.",
    "color": "#F6AD49"
  },
  "Listagg_overflow_clauseContext": {
    "description": "The LISTAGG_OVERFLOW_CLAUSE is used in the LISTAGG function to specify the action to take when the result of the concatenation exceeds the maximum length allowed by the specified data type. It allows you to control how to handle the overflow, either by returning an error or by truncating the result.",
    "color": "#F79232"
  },
  "Other_functionContext": {
    "description": "Other_function is a placeholder term used to refer to any user-defined or built-in PL/SQL function that is not explicitly defined in the Oracle documentation. It could refer to any custom function that has been created by the user or any built-in function that is not specifically mentioned.",
    "color": "#ffffff"
  },
  "Over_clause_keywordContext": {
    "description": "The OVER clause keyword is used in Oracle PL/SQL to define a window or subset of rows to perform a calculation or analysis on. It is typically used with analytic functions to specify the partitioning, ordering, and framing of data within the window.",
    "color": "#85C1E9"
  },
  "Within_or_over_clause_keywordContext": {
    "description": "The 'WITHIN' or 'OVER' clause keyword is used in Oracle PL/SQL to specify the windowing clause in a window function. It is used to define the window within which a function is performed or applied.",
    "color": "#f92672"
  },
  "Standard_prediction_function_keywordContext": {
    "description": "The STANDARD_PREDICTION_FUNCTION_KEYWORD is a keyword used in Oracle PL/SQL to denote a function that is used for prediction in machine learning models. This keyword is typically used in the declaration of a prediction function in PL/SQL code.",
    "color": "#A6E22E"
  },
  "Over_clauseContext": {
    "description": "The OVER clause is used in Oracle PL/SQL to define the window or set of rows over which a window or analytical function operates. It specifies the partitioning, ordering, and framing of the rows within the window. The OVER clause is typically used with window functions or analytical functions to perform calculations across rows in a specific way.",
    "color": "#9265FF"
  },
  "Windowing_clauseContext": {
    "description": "The WINDOWING clause is used in a window function to define the window within which the function operates.",
    "color": "#d6f8ff"
  },
  "Windowing_typeContext": {
    "description": "The WINDOWING_TYPE is a clause used in the OVER clause of a SELECT statement in Oracle PL/SQL. It defines the type of windowing to be used in the window function.",
    "color": "#ffa500"
  },
  "Windowing_elementsContext": {
    "description": "Windowing elements in Oracle PL/SQL refer to the part of a SQL query that defines the window or subset of rows on which a specific function or calculation is performed. Windowing elements allow you to perform aggregate functions, such as computing sums or averages, over specific sets of rows within a result set.",
    "color": "#f9ad3d"
  },
  "Using_clauseContext": {
    "description": "The USING clause is used in an Oracle PL/SQL SELECT statement to specify the tables or views from which to retrieve data. It is used to join multiple tables and retrieve data based on common columns between the tables.",
    "color": "#ff851b"
  },
  "Using_elementContext": {
    "description": "The USING clause in PL/SQL is used to pass parameters into a SQL statement. It allows you to substitute the values of variables in the WHERE clause of a SELECT statement. The USING clause helps in improving the performance of the SQL statement by allowing the database to reuse the execution plan for the statement.",
    "color": "#FF9933"
  },
  "Collect_order_by_partContext": {
    "description": "The COLLECT function is used in Oracle PL/SQL to create a nested table from the selected column values of a query. The ORDER BY clause is used to specify the order in which the values are collected. The COLLECT function is commonly used to aggregate data into an array-like structure, which can be useful for further processing.",
    "color": "#009688"
  },
  "Within_or_over_partContext": {
    "description": "The 'WITHIN OR OVER' clause is used in Oracle Spatial queries to specify the type of spatial relationship between two spatial objects. It is typically used in conjunction with spatial operators such as 'INTERSECTS', 'CONTAINS', 'COVERS', etc. 'WITHIN' specifies that one spatial object is completely contained within another, while 'OVER' specifies that the two objects have at least one point in common.",
    "color": "#f9d66e"
  },
  "Cost_matrix_clauseContext": {
    "description": "The COST_MATRIX_CLAUSE is used in the SELECT statement of a PL/SQL block to specify a cost matrix for the optimizer to use when determining the execution plan for a query. The cost matrix specifies the estimated costs of different types of operations, such as index scans, table scans, and joins. By providing a cost matrix, you can influence the optimizer's decision making and guide it towards a more optimal execution plan.",
    "color": "#b58900"
  },
  "Xml_passing_clauseContext": {
    "description": "The XML_PASSING_CLAUSE is used in Oracle PL/SQL to pass XML data to a function or procedure. It allows you to specify the XML data that needs to be passed as input or output parameter to the function or procedure.",
    "color": "#D4D4D4"
  },
  "Xml_attributes_clauseContext": {
    "description": "The XML_ATTRIBUTES clause is used in Oracle PL/SQL to specify a list of attributes to be included in the XML serialization of a result set or SQL query result. It is used in conjunction with the XMLAGG, XMLCONCAT, or XMLELEMENT function to generate XML data.",
    "color": "#f92672"
  },
  "Xml_namespaces_clauseContext": {
    "description": "The XML_NAMESPACES clause is used in Oracle PL/SQL to define XML namespaces for a SQL query that uses XML data.",
    "color": "#f4a261"
  },
  "Xml_table_columnContext": {
    "description": "The XML_TABLE_COLUMN node is used in Oracle PL/SQL to extract data from an XMLType column in a table. It is part of the XMLTABLE function, which allows you to query XML data in a relational manner. The XML_TABLE_COLUMN specifies the XML column from which to extract data. It can be used to define the structure of the XML data and map it to appropriate columns in the result set.",
    "color": "#FF9933"
  },
  "Xml_general_default_partContext": {
    "description": "The XML_GENERAL_DEFAULT_PART function is used to retrieve the default partition of a table in XML format.",
    "color": "#7e57c2"
  },
  "Xml_multiuse_expression_elementContext": {
    "description": "XML Multi-Use Expression Element is used in Oracle PL/SQL to represent an XML expression that can be used in multiple places within an XML document or query.",
    "color": "#DBA901"
  },
  "Xmlroot_param_version_partContext": {
    "description": "The XMLRoot function in Oracle PL/SQL is used to create an XMLType instance with a specified version value. This parameter specifies the version part of the resulting XMLType instance. The version part indicates the XML version such as '1.0' or '1.1'.",
    "color": "#f9963b"
  },
  "Xmlroot_param_standalone_partContext": {
    "description": "The Xmlroot_param_standalone_part is a parameter of the XMLRoot function in Oracle PL/SQL. It defines whether the resulting XML document should have a standalone declaration or not. The standalone declaration specifies whether the document can be used independently of other external entities. It can have two values: 'YES' or 'NO'.",
    "color": "#81d4fa"
  },
  "Xmlserialize_param_enconding_partContext": {
    "description": "The XMLSERIALIZE_PARAM_ENCODING_PART is a parameter used in the XMLSerialize function in Oracle PL/SQL. It specifies the encoding to be used for the serialized XML data.",
    "color": "#00bcd4"
  },
  "Xmlserialize_param_version_partContext": {
    "description": "The XmlSerialize_param_version_part function is used in Oracle PL/SQL to extract the specified part of the XML version of a document.",
    "color": "#005CDD"
  },
  "Xmlserialize_param_ident_partContext": {
    "description": "The XMLSERIALIZE_PARAM_IDENT_PART is a parameter used in the XMLSERIALIZE function in Oracle PL/SQL. This parameter is used to identify a part of an XML document that needs to be serialized or transformed into a different format. It can be used to specify the XML element, attribute, or text node to be serialized.",
    "color": "#bf84d7"
  },
  "Sql_plus_command_no_semicolonContext": {
    "description": "The SQL*Plus Command NOSEMICOLON is used to toggle off the automatic appending of semicolon (;) to the end of each SQL statement in SQL*Plus.",
    "color": "#a6e22e"
  },
  "Sql_plus_commandContext": {
    "description": "A SQL*Plus command is a command that is used specifically in the SQL*Plus tool, which is typically used for interacting with Oracle databases. SQL*Plus commands are not standard SQL but rather provide additional functionality for working with the SQL*Plus environment. Examples of SQL*Plus commands include CONNECT, DESC, SET, and VARIABLE.",
    "color": "#f6c23e"
  },
  "Start_commandContext": {
    "description": "The START command is used to start the execution of a stored procedure or function in Oracle PL/SQL.",
    "color": "#7F00FF"
  },
  "Whenever_commandContext": {
    "description": "The WHENEVER command is used in Oracle PL/SQL to control the behavior of the program in response to specific types of errors or exceptions. It sets the action to be taken when a certain error or condition occurs.",
    "color": "#00bcd4"
  },
  "Set_commandContext": {
    "description": "The SET_COMMAND is used to set the value of a variable or a parameter in Oracle PL/SQL.",
    "color": "#EC407A"
  },
  "Timing_commandContext": {
    "description": "The TIMING command is used in Oracle PL/SQL to track the execution time of a specific block of code or a SQL statement. It is often used for performance tuning and optimizing queries.",
    "color": "#DB7F28"
  },
  "Partition_extension_clauseContext": {
    "description": "The partition extension clause is used to extend an existing range, list, or composite partitioned table or index. It allows you to add new partitions to accommodate additional data.",
    "color": "#F28D49"
  },
  "Column_aliasContext": {
    "description": "In Oracle PL/SQL, a column alias is a name given to a column in a query result set. It provides a way to customize the column names or provide a more meaningful name for the columns. This can be useful when the result set contains complex calculations or joins, and the default column names are not descriptive enough. Column aliases are specified using the AS keyword followed by the desired alias name.",
    "color": "#f7c07f"
  },
  "Table_aliasContext": {
    "description": "In Oracle PL/SQL, a table alias is used to provide an alternative name for a table or view. It allows you to refer to the table or view using a shorter or more meaningful name in your queries or statements.",
    "color": "#FFA500"
  },
  "Where_clauseContext": {
    "description": "The WHERE clause is used in SQL queries to filter and retrieve specific rows from a table based on specified conditions. It allows you to define conditions that the data must meet in order to be included in the query results.",
    "color": "#BADA55"
  },
  "Quantitative_where_stmtContext": {
    "description": "The quantitative_where_stmt is a part of the Oracle PL/SQL language and is used in SQL statements within a PL/SQL block. It is used to filter data based on specified conditions in a SELECT, UPDATE, or DELETE statement. Unlike the traditional WHERE clause, the quantitative_where_stmt allows performing aggregate functions, such as COUNT, SUM, MAX, MIN, AVG, etc., on subsets of data based on specified conditions.",
    "color": "#d6deeb"
  },
  "Into_clauseContext": {
    "description": "The INTO clause is used in Oracle PL/SQL to specify variables where the result of a SELECT statement should be assigned.",
    "color": "#E69F00"
  },
  "Xml_column_nameContext": {
    "description": "The XML_COLUMN_NAME is a string that represents the name of the XML column in a table.",
    "color": "#9cdcfe"
  },
  "Cost_class_nameContext": {
    "description": "The COST_CLASS_NAME is an attribute of the DBMS_STATS package in Oracle PL/SQL. It is used to specify the name of the cost class that will be used during the collection of statistics. Cost classes are used to group together tables with similar costing properties and allow for more accurate and efficient statistics collection.",
    "color": "#FF9900"
  },
  "Attribute_nameContext": {
    "description": "In Oracle PL/SQL, Attribute_name refers to the name of an attribute in a user-defined object type. It is used to access and manipulate the attribute values of an object instance.",
    "color": "#ffe4b5"
  },
  "Savepoint_nameContext": {
    "description": "Savepoint_name is a user-defined name that is used to mark a specific point within a transaction in Oracle PL/SQL. It allows you to create multiple savepoints within a transaction and rollback to any of these savepoints without rolling back the entire transaction.",
    "color": "#f0b16e"
  },
  "Rollback_segment_nameContext": {
    "description": "The ROLLBACK_SEGMENT_NAME is a parameter in Oracle PL/SQL used to specify the name of the rollback segment to be used for a transaction. A rollback segment is a database structure that stores the old values of changed data so that it can be rolled back in case of a transaction failure or a rollback command.",
    "color": "#f4a261"
  },
  "Table_var_nameContext": {
    "description": "Table_var_name is a variable that is used to reference a table or a cursor in Oracle PL/SQL. It is used to store the name of the table or cursor that you want to work with in your code.",
    "color": "#56b6c2"
  },
  "Schema_nameContext": {
    "description": "The schema_name is the name given to a database schema in Oracle PL/SQL. A schema is a collection of database objects, such as tables, views, indexes, etc., that are owned by a particular user. The schema_name is used to identify and access these objects within the database.",
    "color": "#FF6D00"
  },
  "Routine_nameContext": {
    "description": "The routine_name is a user-defined identifier that represents the name of a PL/SQL routine, such as a procedure, function, or package. It is used to uniquely identify and reference the routine in the code.",
    "color": "#f92672"
  },
  "Package_nameContext": {
    "description": "In Oracle PL/SQL, a package name is used to identify a specific package. A package is a schema object that groups related functions, procedures, variables, and exception definitions. It provides a way to encapsulate and organize code, making it easier to manage and maintain.",
    "color": "#fbb17c"
  },
  "Implementation_type_nameContext": {
    "description": "The implementation_type_name is a property that holds the type name of an object in Oracle PL/SQL. It represents the particular type of an object such as a table, procedure, function, package, or trigger.",
    "color": "#d4d4d4"
  },
  "Parameter_nameContext": {
    "description": "Parameter_name is a placeholder for the actual name of a parameter in a PL/SQL subprogram. Parameters are used to pass values into a subprogram and are defined in the subprogram's header.",
    "color": "#00bfff"
  },
  "Reference_model_nameContext": {
    "description": "The reference_model_name is used in the WITH clause of a query to specify a reference model which serves as the basis for a recursive subquery factoring (RSF) query. It is used to define the name of the reference model table that is used within the query.",
    "color": "#859900"
  },
  "Main_model_nameContext": {
    "description": "The main_model_name is a name given to the primary model in an Oracle PL/SQL program. It helps in organizing and identifying different models within the program.",
    "color": "#6C71C4"
  },
  "Container_tableview_nameContext": {
    "description": "Container_tableview_name is a placeholder for the name of a container table or view in Oracle PL/SQL. It is used to reference or manipulate the data stored in the container table or view.",
    "color": "#f4b942"
  },
  "Aggregate_function_nameContext": {
    "description": "An aggregate function is a function that operates on a set of values and returns a single value as the result. The aggregate function name refers to the name of the specific aggregate function being used in Oracle PL/SQL. Common aggregate functions include SUM, AVG, COUNT, MAX, and MIN.",
    "color": "#FF9966"
  },
  "Query_nameContext": {
    "description": "The QUERY_NAME is an optional specifier that is used to name a PL/SQL query. It allows you to reference the query by its name in other parts of the code, making your code more readable and maintainable.",
    "color": "#f7b500"
  },
  "Grantee_nameContext": {
    "description": "The Grantee_name node is used to specify the name of the user or role that is being granted a privilege in Oracle PL/SQL.",
    "color": "#00BFFF"
  },
  "Role_nameContext": {
    "description": "The role_name is a string that represents the name of a role in Oracle PL/SQL.",
    "color": "#ff0099"
  },
  "Constraint_nameContext": {
    "description": "Constraint_name is a field or attribute of a database table that specifies the unique name for a constraint. Constraints are rules or conditions that are applied to a database table to ensure data integrity and consistency.",
    "color": "#ff8080"
  },
  "Label_nameContext": {
    "description": "A label_name is used to identify a specific point in a PL/SQL code block or loop. Labels are typically used in conjunction with GOTO statements to transfer control to a specific point in the code.",
    "color": "#DC143C"
  },
  "Type_nameContext": {
    "description": "The TYPE_NAME function is used to retrieve the name of a datatype or object type.",
    "color": "#F7D08A"
  },
  "Sequence_nameContext": {
    "description": "The sequence_name is the name of a sequence in Oracle PL/SQL.",
    "color": "#ff9f00"
  },
  "Exception_nameContext": {
    "description": "The exception_name is a user-defined name for an exception in Oracle PL/SQL.",
    "color": "#FF8000"
  },
  "Function_nameContext": {
    "description": "Function_name is a placeholder for the actual name of a function in Oracle PL/SQL. It is used to define and reference user-defined functions within a PL/SQL program.",
    "color": "#ffffff"
  },
  "Procedure_nameContext": {
    "description": "A procedure in Oracle PL/SQL is a named PL/SQL block that performs a specific task. It is a reusable unit of code that can be called from other PL/SQL blocks, such as other procedures, functions, or triggers. Procedures can accept input parameters and return output parameters, allowing for modular and organized coding.",
    "color": "#FF5733"
  },
  "Trigger_nameContext": {
    "description": "A trigger_name in Oracle PL/SQL represents the name given to a trigger. A trigger is a named PL/SQL block that is automatically executed or fired when certain events occur within an Oracle database. These events can include actions like inserting, updating, or deleting records on a particular table. The trigger_name is used to uniquely identify and reference a specific trigger within the database.",
    "color": "#d24726"
  },
  "Variable_nameContext": {
    "description": "In Oracle PL/SQL, a variable_name is used to store and manipulate data within a program. Variables can hold values of different datatypes such as numbers, strings, dates, etc. They are typically declared and assigned a value using the syntax 'variable_name datatype := value;'.",
    "color": "#B48EAD"
  },
  "Index_nameContext": {
    "description": "Index_name is a placeholder for the name of an index in Oracle PL/SQL. An index is a database object that improves the speed of data retrieval operations on database tables. It is created on one or more columns of a table and allows for faster data access by creating a separate structure that contains the values of the indexed columns along with a pointer to the corresponding table rows.",
    "color": "#ffcc00"
  },
  "Cursor_nameContext": {
    "description": "In Oracle PL/SQL, a cursor_name is a user-defined identifier used to reference a cursor within a PL/SQL block. By using a cursor_name, you can open, fetch, and close a cursor to process rows returned from a database query. It allows you to iterate through the result set and perform operations on each row.",
    "color": "#0066CC"
  },
  "Record_nameContext": {
    "description": "The record_name is used to declare a record type variable in Oracle PL/SQL.",
    "color": "#ff7f7f"
  },
  "Collection_nameContext": {
    "description": "Collection_name is a placeholder that represents the name of a collection in Oracle PL/SQL.",
    "color": "#ff6d00"
  },
  "Link_nameContext": {
    "description": "The LINK_NAME is a character string that represents the name of a link in Oracle PL/SQL. A link is a database object that allows you to access data from a remote database using a database link. The LINK_NAME is used to specify the name of the database link when performing operations such as querying remote tables or executing remote procedures.",
    "color": "#FFD700"
  },
  "Column_nameContext": {
    "description": "Column_name refers to the name of a column in a database table.",
    "color": "#FFD700"
  },
  "Tableview_nameContext": {
    "description": "Tableview_name is not a valid Oracle PL/SQL node.",
    "color": "#000000"
  },
  "XmltableContext": {
    "description": "The XMLTABLE function in Oracle PL/SQL is used to extract data from XML documents and return it as rows in a table format. It allows you to query XML data using SQL expressions and retrieve specific elements or attributes from the XML document.",
    "color": "#f2a5d1"
  },
  "Char_set_nameContext": {
    "description": "The char_set_name is a built-in function in Oracle PL/SQL that returns the character set name of the specified character expression or column.",
    "color": "#F9CB9C"
  },
  "Synonym_nameContext": {
    "description": "The SYNONYM_NAME is a node in Oracle PL/SQL that represents the name of a synonym. In Oracle, a synonym is an alternate name for a table, view, sequence, or other database object. The SYNONYM_NAME node is used to reference the synonym in SQL statements.",
    "color": "#f39c12"
  },
  "Schema_object_nameContext": {
    "description": "Schema_object_name is a valid name for a schema object in Oracle PL/SQL. It can be used to refer to tables, views, procedures, functions, packages, and other database objects within a schema.",
    "color": "#8be9fd"
  },
  "Dir_object_nameContext": {
    "description": "The DIR_OBJECT_NAME is a user-defined identifier that represents the name of a directory object in Oracle PL/SQL. A directory object is an alias for a directory in the file system, which allows PL/SQL programs to access files stored in that directory.",
    "color": "#ff6600"
  },
  "User_object_nameContext": {
    "description": "The user_object_name is a variable that stores the name of an object in Oracle PL/SQL that is associated with the current user.",
    "color": "#f9eebc"
  },
  "Grant_object_nameContext": {
    "description": "The grant_object_name is a string that represents the name of an object on which privileges are being granted in Oracle PL/SQL. This can be a table, view, sequence, procedure, function, or any other database object.",
    "color": "#FF00FF"
  },
  "Column_listContext": {
    "description": "A column_list is a comma-separated list of column names or aliases. It is commonly used in SQL statements to specify which columns to include in a query result or which columns to update in an update statement.",
    "color": "#959595"
  },
  "Paren_column_listContext": {
    "description": "The PAREN_COLUMN_LIST is an expression used in Oracle PL/SQL to specify a list of column names enclosed in parentheses. It is commonly used in SQL statements such as SELECT or INSERT to provide a named list of columns to be selected or inserted into.",
    "color": "#f92672"
  },
  "Keep_clauseContext": {
    "description": "The KEEP clause is used in Oracle SQL queries to specify how duplicate values should be handled when using aggregate functions. It is used in conjunction with the GROUP BY clause.",
    "color": "#f6f080"
  },
  "Function_argumentContext": {
    "description": "A function argument is a value that is passed into a function when it is called. It is used to provide input to the function and can be used within the function to perform calculations or operations.",
    "color": "#ff9900"
  },
  "Function_argument_analyticContext": {
    "description": "The FUNCTION_ARGUMENT_ANALYTIC node represents an argument in the definition of an analytic function. It is used to specify the expression that will be evaluated for each row in the result set of the analytic function.",
    "color": "#f8f8f8"
  },
  "Function_argument_modelingContext": {
    "description": "Function argument modeling in Oracle PL/SQL refers to defining and describing the input parameters of a function. It involves specifying the data type, size, and mode (IN, OUT, or IN OUT) of each argument in the function declaration. This helps in making the function reusable and ensures that the correct inputs are passed to the function.",
    "color": "#ffa500"
  },
  "Respect_or_ignore_nullsContext": {
    "description": "Respect_or_ignore_nulls is used to control how null values are treated in a PL/SQL block. By default, PL/SQL treats null values as equal to each other, not different. However, when Respect_or_ignore_nulls is set to TRUE, PL/SQL treats null values as distinct from each other, considering them to be different values. When Respect_or_ignore_nulls is set to FALSE, PL/SQL ignores null values when comparing them, treating them as equal.",
    "color": "#999999"
  },
  "ArgumentContext": {
    "description": "In PL/SQL, an argument refers to a value or variable that is passed to a program or subroutine. Arguments allow you to pass data between different parts of your code.",
    "color": "#ff6f00"
  },
  "Type_specContext": {
    "description": "A type_spec is used to specify the data type for a PL/SQL variable, parameter, or return value in a PL/SQL program. It defines the structure and behavior of the data.",
    "color": "#FEE715"
  },
  "DatatypeContext": {
    "description": "The datatype specifies the type of data that a variable or column can hold in Oracle PL/SQL. Examples of datatypes include NUMBER, VARCHAR2, DATE, BOOLEAN, etc.",
    "color": "#FF7700"
  },
  "Precision_partContext": {
    "description": "The PRECISION_PART is a node in Oracle PL/SQL that refers to the precision part of a numeric data type declaration or usage.",
    "color": "#f08080"
  },
  "Native_datatype_elementContext": {
    "description": "The Native_datatype_element is used to specify a single column of a table or the data type of a variable or parameter in Oracle PL/SQL. It represents the basic built-in data types supported by the Oracle database, such as NUMBER, VARCHAR2, DATE, etc.",
    "color": "#c792ea"
  },
  "Bind_variableContext": {
    "description": "A bind variable in Oracle PL/SQL is a placeholder for a value that can be supplied at runtime. Bind variables are used to pass values into a SQL statement or PL/SQL block without directly embedding the values in the code. They can improve performance by allowing the database to reuse the execution plan for multiple executions with different values.",
    "color": "#ff8533"
  },
  "General_elementContext": {
    "description": "The GENERAL_ELEMENT node is used to represent a general expression or element in Oracle PL/SQL. It can include literals, variables, function calls, and operators.",
    "color": "#00FF00"
  },
  "General_element_partContext": {
    "description": "In Oracle PL/SQL, the GENERAL ELEMENT PART is used to specify a segment or element in an array or collection. It is typically used in conjunction with the INDEX BY keyword to access individual elements within the array or collection.",
    "color": "#f3b476"
  },
  "Table_elementContext": {
    "description": "In Oracle PL/SQL, a table element refers to a specific column or attribute within a table. It represents a single piece of data stored in a relational database table. Table elements are accessed by specifying the table name followed by the column name.",
    "color": "#24a3db"
  },
  "Object_privilegeContext": {
    "description": "Object_privilege is a privilege that can be granted on a specific object in the Oracle database.",
    "color": "#dcdcaa"
  },
  "System_privilegeContext": {
    "description": "The SYSTEM_PRIVILEGE is a predefined privilege in Oracle PL/SQL that determines the level of access granted to a user to perform certain operations or actions within the database system. These privileges are granted using the GRANT statement and can include privileges such as CREATE TABLE, ALTER USER, and SELECT ANY TABLE. System privileges are usually granted to users who are responsible for administering and managing the database.",
    "color": "#ff9900"
  },
  "ConstantContext": {
    "description": "In Oracle PL/SQL, a constant is a named value that cannot be changed or modified during the execution of a program. It represents a fixed value, such as a number, string, or date, that remains constant throughout the program execution. Constants are typically used to store values that need to be reused multiple times and ensure their immutability.",
    "color": "#9cdcfe"
  },
  "NumericContext": {
    "description": "The 'Numeric' data type in Oracle PL/SQL is used to represent numeric values, including integers and decimal numbers. It can hold both positive and negative values.",
    "color": "#f92672"
  },
  "Numeric_negativeContext": {
    "description": "The numeric_negative node is used to represent a negative numeric value in Oracle PL/SQL.",
    "color": "#d63031"
  },
  "Quoted_stringContext": {
    "description": "A quoted string in Oracle PL/SQL is a sequence of characters enclosed in single quotation marks (''). It is used to represent textual data, such as names, addresses, or descriptions. Quoted strings are commonly used as literals in assignments, comparisons, and concatenations.",
    "color": "#e74c3c"
  },
  "IdentifierContext": {
    "description": "An identifier is a name used to identify a variable, constant, procedure, function, cursor, or other PL/SQL objects.",
    "color": "#ff00ff"
  },
  "Id_expressionContext": {
    "description": "The ID_EXPRESSION node represents an identifier used in an Oracle PL/SQL code. It could be a variable name, procedure name, function name, or any other valid identifier in the code.",
    "color": "#d4c4fb"
  },
  "Outer_join_signContext": {
    "description": "The OUTER JOIN sign (+) is used in Oracle PL/SQL to perform an outer join between two tables. It is placed on the side of the join condition that represents the table with potential missing values. This sign ensures that the query will return records from both tables, even if there is no match between the joined columns.",
    "color": "#E2A72E"
  },
  "Regular_idContext": {
    "description": "Regular_id is an identifier used to represent a regular PL/SQL variable or object. It can be used as a variable name, object name, column name, or any identifier within a PL/SQL program.",
    "color": "#ffa500"
  },
  "Non_reserved_keywords_in_12cContext": {
    "description": "Oracle PL/SQL includes a set of non-reserved keywords that can be used as identifiers in PL/SQL programs without causing any conflicts with the built-in keywords. These non-reserved keywords provide a way to enhance readability and maintainability of code by using meaningful and descriptive identifiers for variables, procedures, functions, etc.",
    "color": "#2aa198"
  },
  "String_function_nameContext": {
    "description": "The STRING_FUNCTION_NAME is used to manipulate strings in Oracle PL/SQL. It represents the name of a specific string manipulation function.",
    "color": "#7DC3FF"
  },
  "Numeric_function_nameContext": {
    "description": "The NUMERIC_FUNCTION_NAME is a placeholder for a specific function that operates on numeric values in Oracle PL/SQL. It refers to a built-in or user-defined function that performs mathematical operations or manipulations on numeric data types.",
    "color": "#E587CE"
  }
}