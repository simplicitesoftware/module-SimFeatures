<!--
 ___ _            _ _    _ _    __
/ __(_)_ __  _ __| (_)__(_) |_ /_/
\__ \ | '  \| '_ \ | / _| |  _/ -_)
|___/_|_|_|_| .__/_|_\__|_|\__\___|
            |_| 
-->
![](https://platform.simplicite.io/logos/standard/logo250.png)
* * *

`` module definition
====================



`Action` business object definition
-----------------------------------

Custom actions

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `act_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `act_type`                                                   | enum(1) using `ACT_TYPE` list            | yes      | yes       |          | -                                                                                |
| `act_async`                                                  | enum(1) using `ASYNC_MODE` list          | yes      | yes       |          | -                                                                                |
| `act_job_depth`                                              | int(11)                                  |          | yes       |          | -                                                                                |
| `act_method`                                                 | char(50)                                 |          | yes       |          | -                                                                                |
| `act_script`                                                 | text(1000000)                            |          | yes       |          | -                                                                                |
| `act_url`                                                    | url(255)                                 |          | yes       |          | -                                                                                |
| `act_confirm`                                                | boolean                                  | yes      | yes       |          | -                                                                                |
| `act_confirm_expr`                                           | text(4000)                               |          | yes       |          | -                                                                                |
| `act_confirm_ui`                                             | text(1000000)                            |          | yes       |          | Confirm template                                                                 |
| `act_plus`                                                   | boolean                                  |          | yes       |          | -                                                                                |
| `act_comment`                                                | text(4000)                               |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `act_exec`                                                   | enum(3) using `ACT_EXEC` list            | yes      | yes       |          | -                                                                                |
| `act_count`                                                  | enum(1) using `ACTION_COUNT` list        |          | yes       |          | -                                                                                |
| `act_order`                                                  | int(5)                                   |          | yes       |          | -                                                                                |
| `act_color`                                                  | color                                    |          | yes       |          | -                                                                                |
| `act_color_bg`                                               | color                                    |          | yes       |          | -                                                                                |
| `act_image`                                                  | char(50)                                 |          | yes       |          | -                                                                                |
| `act_group_id` link to **`ActionGroup`**                     | id                                       |          | yes       |          | -                                                                                |
| _Ref. `act_group_id.acg_name`_                               | _char(100)_                              |          |           |          | -                                                                                |
| `act_queue_id` link to **`ActionQueue`**                     | id                                       |          | yes       |          | -                                                                                |
| _Ref. `act_queue_id.acq_name`_                               | _char(50)_                               |          |           |          | -                                                                                |
| _Ref. `act_queue_id.acq_type`_                               | _enum(1) using `ACQ_TYPE` list_          |          |           |          | -                                                                                |

### Lists

* `ACT_TYPE`
    - `L` Global list action
    - `F` Item action
    - `A` Global list action + item action
    - `O` Item action (on forms only)
    - `I` Item action (on list items only)
    - `B` Global list action + item action (on forms only)
    - `H` Hidden action
* `ASYNC_MODE`
    - `0` Synchrone
    - `1` Asynchronous
    - `2` Standalone asynchronous
    - `3` Isolated
* `ACT_EXEC`
    - `FRT` Front
    - `BCK` Back
    - `NUL` Aucune
* `ACTION_COUNT`
    - `0` No
    - `1` Selected
    - `2` Selected or all
* `ACQ_TYPE`
    - `T` Simple tasks
    - `B` Bulk update
    - `S` System

`ActionField` business object definition
----------------------------------------

Custom action fields

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `afd_action_id` link to **`Action`**                         | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `afd_action_id.act_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `afd_field_id` link to **`Field`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `afd_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `afd_order`                                                  | int(10)                                  | yes*     | yes       |          | -                                                                                |
| `afd_ref_field_id` link to **`Field`**                       | id                                       |          | yes       |          | -                                                                                |
| _Ref. `afd_ref_field_id.fld_name`_                           | _regexp(100)_                            |          |           |          | -                                                                                |
| `afd_ref_object_id` link to **`ObjectInternal`**             | id                                       |          | yes       |          | -                                                                                |
| _Ref. `afd_ref_object_id.obo_name`_                          | _regexp(100)_                            |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`ActionGroup` business object definition
----------------------------------------

Group of actions

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `acg_name`                                                   | char(100)                                | yes*     | yes       |          | -                                                                                |
| `acg_icon`                                                   | char(100)                                |          | yes       |          | -                                                                                |
| `acg_label`                                                  | boolean                                  |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`ActionQueue` business object definition
----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `acq_name`                                                   | char(50)                                 | yes*     | yes       |          | -                                                                                |
| `acq_type`                                                   | enum(1) using `ACQ_TYPE` list            | yes      | yes       |          | -                                                                                |
| `acq_min`                                                    | int(3)                                   | yes      | yes       |          | -                                                                                |
| `acq_max`                                                    | int(3)                                   | yes      | yes       |          | -                                                                                |
| `acq_history`                                                | text(10000000)                           |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `ACQ_TYPE`
    - `T` Simple tasks
    - `B` Bulk update
    - `S` System

`Adapter` business object definition
------------------------------------

Adapter

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `adp_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `adp_atomic`                                                 | boolean                                  | yes      | yes       |          | -                                                                                |
| `adp_type`                                                   | enum(20) using `ADP_TYPE` list           | yes      | yes       |          | -                                                                                |
| `adp_script`                                                 | text(1000000)                            | yes      | yes       |          | -                                                                                |
| `adp_class`                                                  | char(100)                                |          | yes       |          | -                                                                                |
| `adp_script_id`                                              | document                                 |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `ADP_TYPE`
    - `JAVA` Java / Script
    - `AWK` UNIX awk

### Custom actions

* `adapterScriptEdit`: 

`Agenda` business object definition
-----------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `agd_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `agd_object_id` link to **`ObjectInternal`**                 | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `agd_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `agd_opendays`                                               | multi(20) using `AGENDA_DAYS` list       | yes      | yes       |          | -                                                                                |
| `agd_min_hr`                                                 | regexp(5)                                |          | yes       |          | -                                                                                |
| `agd_max_hr`                                                 | regexp(5)                                |          | yes       |          | -                                                                                |
| `agd_start_hr`                                               | regexp(5)                                | yes      | yes       |          | -                                                                                |
| `agd_end_hr`                                                 | regexp(5)                                | yes      | yes       |          | -                                                                                |
| `agd_quantum`                                                | enum(3) using `AGENDA_QUANTUM` list      |          | yes       |          | -                                                                                |
| `agd_flying`                                                 | boolean                                  | yes      | yes       |          | -                                                                                |
| `agd_date_id` link to **`Field`**                            | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `agd_date_id.fld_name`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| `agd_enddate_id` link to **`Field`**                         | id                                       |          | yes       |          | -                                                                                |
| _Ref. `agd_enddate_id.fld_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| `agd_duration_id` link to **`Field`**                        | id                                       |          | yes       |          | -                                                                                |
| _Ref. `agd_duration_id.fld_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| `agd_group_id` link to **`Field`**                           | id                                       |          | yes       |          | -                                                                                |
| _Ref. `agd_group_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `agd_user_id` link to **`Field`**                            | id                                       |          | yes       |          | -                                                                                |
| _Ref. `agd_user_id.fld_name`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| `agd_label1_id` link to **`Field`**                          | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `agd_label1_id.fld_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `agd_label2_id` link to **`Field`**                          | id                                       |          | yes       |          | -                                                                                |
| _Ref. `agd_label2_id.fld_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `agd_label3_id` link to **`Field`**                          | id                                       |          | yes       |          | -                                                                                |
| _Ref. `agd_label3_id.fld_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `agd_label4_id` link to **`Field`**                          | id                                       |          | yes       |          | -                                                                                |
| _Ref. `agd_label4_id.fld_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `agd_label5_id` link to **`Field`**                          | id                                       |          | yes       |          | -                                                                                |
| _Ref. `agd_label5_id.fld_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `AGENDA_DAYS`
    - `1` Lundi
    - `2` Mardi
    - `3` Mercredi
    - `4` Jeudi
    - `5` Vendredi
    - `6` Samedi
    - `7` Dimanche
* `AGENDA_QUANTUM`
    - `5` 5 min
    - `10` 10 min
    - `15` 15 min
    - `20` 20 min
    - `30` 30 min
    - `60` 1 h
    - `90` 1 h 30
    - `120` 2 h
    - `180` 3 h
    - `240` 4 h
    - `480` 8 h
    - `720` 12 h

`Application` business object definition
----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `mdl_xml`                                                    | document                                 |          | yes       |          | Module file                                                                      |
| `mdl_icon`                                                   | image                                    |          | yes       |          | -                                                                                |
| `mdl_autoupd`                                                | boolean                                  |          | yes       |          | Auto-update module?                                                              |
| `mdl_lastupd`                                                | datetime                                 |          |           |          | Date of last module save                                                         |
| `mdl_lastparam_dt`                                           | datetime                                 |          |           |          | Date of last update on module                                                    |

### Custom actions

* `ModuleDiffTree`: 

`ApplicationHistoric` business object definition
------------------------------------------------

App history

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `row_ref_id` link to **`Application`**                       | id                                       | yes*     |           |          | Record row ID                                                                    |
| `row_idx`                                                    | int(11)                                  | yes*     | yes       |          | History record index                                                             |
| `created_by_hist`                                            | char(100)                                | yes*     |           |          | Created by                                                                       |
| `created_dt_hist`                                            | datetime                                 | yes*     |           |          | Created date                                                                     |
| `mdl_name`                                                   | regexp(100)                              | yes*     | yes       |          | Module name                                                                      |
| `mdl_version`                                                | char(50)                                 | yes      | yes       |          | Module version                                                                   |

`AppLogger` business object definition
--------------------------------------

Logger

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `log_date`                                                   | datetime                                 | yes*     |           |          | -                                                                                |
| `log_user`                                                   | char(100)                                | yes*     |           |          | -                                                                                |
| `log_platform`                                               | char(100)                                |          |           |          | -                                                                                |
| `log_event_id` link to **`LogEvent`**                        | id                                       |          |           |          | -                                                                                |
| _Ref. `log_event_id.lev_code`_                               | _char(20)_                               |          |           |          | -                                                                                |
| _Ref. `log_event_id.lev_level`_                              | _enum(1) using `LEV_LEVEL` list_         |          |           |          | -                                                                                |
| _Ref. `log_event_id.lev_label`_                              | _char(100)_                              |          |           |          | -                                                                                |
| `log_subject`                                                | char(100)                                |          |           |          | -                                                                                |
| `log_row_id`                                                 | int(11)                                  |          |           |          | -                                                                                |
| `log_method`                                                 | char(255)                                |          |           |          | -                                                                                |
| `log_dump1`                                                  | text(1000000)                            |          |           |          | -                                                                                |
| `log_dump2`                                                  | text(1000000)                            |          |           |          | -                                                                                |
| `log_job_id` link to **`AsyncJob`**                          | id                                       |          |           |          | -                                                                                |
| _Ref. `log_job_id.job_uid`_                                  | _char(100)_                              |          |           |          | -                                                                                |

### Lists

* `LEV_LEVEL`
    - `F` Fatal
    - `E` Erreur
    - `W` Avertissement
    - `I` Information
    - `D` Trace

### Custom actions

* `SYS_CLEAR_LOGS`: 
* `SYS_PRUNE_LOGS`: 

`AppLoggerAsync` business object definition
-------------------------------------------

Asynchronous logger

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `log_date`                                                   | datetime                                 | yes*     |           |          | -                                                                                |
| `log_user`                                                   | char(100)                                | yes*     |           |          | -                                                                                |
| `log_event_id` link to **`LogEvent`**                        | id                                       |          |           |          | -                                                                                |
| _Ref. `log_event_id.lev_code`_                               | _char(20)_                               |          |           |          | -                                                                                |
| _Ref. `log_event_id.lev_level`_                              | _enum(1) using `LEV_LEVEL` list_         |          |           |          | -                                                                                |
| _Ref. `log_event_id.lev_label`_                              | _char(100)_                              |          |           |          | -                                                                                |
| `log_subject`                                                | char(100)                                |          |           |          | -                                                                                |
| `log_row_id`                                                 | int(11)                                  |          |           |          | -                                                                                |
| `log_method`                                                 | char(255)                                |          |           |          | -                                                                                |
| `log_dump1`                                                  | text(1000000)                            |          |           |          | -                                                                                |
| `log_dump2`                                                  | text(1000000)                            |          |           |          | -                                                                                |
| `log_job_id` link to **`AsyncJob`**                          | id                                       |          |           |          | -                                                                                |
| _Ref. `log_job_id.job_uid`_                                  | _char(100)_                              |          |           |          | -                                                                                |

### Lists

* `LEV_LEVEL`
    - `F` Fatal
    - `E` Erreur
    - `W` Avertissement
    - `I` Information
    - `D` Trace

`AppLoggerMemory` business object definition
--------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `log_date`                                                   | datetime                                 | yes*     |           |          | -                                                                                |
| `log_platform`                                               | char(100)                                |          |           |          | -                                                                                |
| `log_serie1`                                                 | int(15)                                  |          |           |          | -                                                                                |
| `log_serie2`                                                 | int(15)                                  |          |           |          | -                                                                                |
| `log_serie3`                                                 | int(15)                                  |          |           |          | -                                                                                |
| `log_serie4`                                                 | int(15)                                  |          |           |          | -                                                                                |
| `log_serie5`                                                 | int(15)                                  |          |           |          | -                                                                                |
| `log_serie6`                                                 | int(15)                                  |          |           |          | -                                                                                |
| `log_method`                                                 | char(255)                                |          |           |          | -                                                                                |
| `log_dump2`                                                  | text(1000000)                            |          |           |          | -                                                                                |

### Custom actions

* `SYS_CLEAR_EXPORTDIR`: Empty the export directory
* `SYS_CLEAR_RECBIN`: Clean the recycle dbdoc directory
* `SYS_CLEAR_TEMPDIR`: Clean the temporary directory
* `SYS_RESET_CACHE`: Force a clear cache (ejb+serials)
* `SYS_FORCE_GC`: Force a garbage collection
* `rebuildObjectIndex`: Rebuild the full object index
* `LogCacheMemory`: 
* `LogDiskMemory`: 
* `LogDocMemory`: 
* `LoggerMemoryStart`: 
* `LoggerMemoryStop`: 
* `LogJDBC`: 
* `LogMemory`: 
* `LogSession`: 
* `LogSQL`: 
* `LogSystem`: 

`AsyncJob` business object definition
-------------------------------------

Asynchronous jobs

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `job_uid`                                                    | char(100)                                | yes*     |           |          | -                                                                                |
| `job_status`                                                 | enum(1) using `JOB_STATUS` list          | yes      |           |          | -                                                                                |
| `job_start_dt`                                               | datetime                                 | yes      |           |          | -                                                                                |
| `job_end_dt`                                                 | datetime                                 |          |           |          | -                                                                                |
| `job_crontab_id` link to **`CronTable`**                     | id                                       |          |           |          | Cron reference                                                                   |
| _Ref. `job_crontab_id.crn_name`_                             | _char(100)_                              |          |           |          | _Nom de la tache_                                                                |
| `job_object_inst`                                            | object                                   |          |           |          | -                                                                                |
| `job_method`                                                 | char(100)                                |          |           |          | -                                                                                |
| `job_action`                                                 | char(100)                                |          |           |          | -                                                                                |

### Lists

* `JOB_STATUS`
    - `I` Initialisé
    - `R` En cours d'éxécution
    - `T` Terminé
    - `E` Exception
    - `Z` Interruption demandée
    - `S` Stoppé
    - `P` Pause requested
    - `M` Resume requested
    - `L` Sleeping

### Custom actions

* `interruptRequest`: 
* `pauseRequest`: 
* `resumeRequest`: 
* `SYS_CLEAR_JOBS`: 
* `SYS_PRUNE_JOBS`: 

`BPMActivity` business object definition
----------------------------------------

Activité d'un processus

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `acy_process_id` link to **`BPMProcess`**                    | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `acy_process_id.pcs_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| `acy_step`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `acy_name`                                                   | regexp(100)                              | yes      | yes       |          | -                                                                                |
| `acy_comment`                                                | text(4000)                               |          | yes       |          | -                                                                                |
| `acy_type`                                                   | enum(1) using `ACY_TYPE` list            | yes      | yes       |          | -                                                                                |
| `acy_posx`                                                   | int(11)                                  |          | yes       |          | -                                                                                |
| `acy_posy`                                                   | int(11)                                  |          | yes       |          | -                                                                                |
| `acy_reversible`                                             | enum(1) using `ACY_REVERS` list          | yes      | yes       |          | -                                                                                |
| `acy_max_duration`                                           | int(11)                                  |          | yes       |          | -                                                                                |
| `acy_duration_unit`                                          | enum(1) using `PCS_UNIT` list            |          | yes       |          | -                                                                                |
| `acy_alert_id` link to **`BPMAlert`**                        | id                                       |          | yes       |          | -                                                                                |
| _Ref. `acy_alert_id.alt_name`_                               | _char(100)_                              |          |           |          | -                                                                                |
| `acy_user_dlg`                                               | boolean                                  | yes      | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `ACY_TYPE`
    - `B` Début
    - `E` Fin
    - `R` Rechercher
    - `N` Créer
    - `U` Modifier
    - `D` Supprimer
    - `S` Appel de service
    - `C` Sélectionner unique
    - `M` Sélectionner multiple
    - `P` Paralléliser
    - `J` Synchroniser
    - `I` Condition
    - `X` Page externe
    - `G` Message
    - `Z` Sub-Process
* `ACY_REVERS`
    - `N` Non reversible
    - `O` Modifiable sans impact descendant
    - `E` Modifiable avec écrasement des activités avales
* `PCS_UNIT`
    - `Y` Année
    - `M` Mois
    - `D` Jour
    - `H` Heure
    - `I` Minute
    - `S` Seconde

### Custom actions

* `ACY_TEMPLATE`: Génèrer un modèle de données pour une activité
* `ACY_TEMPLATE`: Génèrer un modèle de données pour une activité
* `deadlineActivity`: 
* `deadlockActivity`: 

`BPMActivityFile` business object definition
--------------------------------------------

Contexte d'une activité d'un processus

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `acf_activity_id` link to **`BPMActivity`**                  | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `acf_activity_id.acy_process_id`_                      | _id_                                     |          |           |          | -                                                                                |
| `acy_process_tsl`                                            | char(50)                                 |          |           |          | -                                                                                |
| _Ref. `acy_process_id.pcs_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `acf_activity_id.acy_step`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `acf_activity_id.acy_type`_                            | _enum(1) using `ACY_TYPE` list_          |          |           |          | -                                                                                |
| _Ref. `acf_activity_id.acy_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| `acf_status`                                                 | enum(1) using `ACTIVITY_STATUS` list     | yes      | yes       |          | -                                                                                |
| `acf_plan_dt`                                                | datetime                                 | yes      | yes       |          | -                                                                                |
| `acf_start_dt`                                               | datetime                                 |          | yes       |          | -                                                                                |
| `acf_deadline_dt`                                            | datetime                                 |          | yes       |          | -                                                                                |
| `acf_end_dt`                                                 | datetime                                 |          | yes       |          | -                                                                                |
| `acf_waiting`                                                | int(11)                                  |          |           |          | -                                                                                |
| `acf_pcf_id` link to **`BPMProcessFile`**                    | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `acf_pcf_id.pcf_serial`_                               | _char(20)_                               |          |           |          | -                                                                                |
| _Ref. `acf_pcf_id.pcf_process_id`_                           | _id_                                     |          |           |          | -                                                                                |
| _Ref. `pcf_process_id.pcs_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| `acf_serial`                                                 | char(15)                                 | yes*     | yes       |          | -                                                                                |
| _Ref. `acf_pcf_id.pcf_status`_                               | _enum(1) using `PROCESS_STATUS` list_    |          |           |          | -                                                                                |
| _Ref. `acf_pcf_id.pcf_start_dt`_                             | _datetime_                               |          |           |          | -                                                                                |
| _Ref. `acf_pcf_id.pcf_deadline_dt`_                          | _datetime_                               |          |           |          | -                                                                                |
| _Ref. `acf_pcf_id.pcf_end_dt`_                               | _datetime_                               |          |           |          | -                                                                                |
| _Ref. `acf_pcf_id.pcf_object`_                               | _object_                                 |          |           |          | -                                                                                |
| `acf_data`                                                   | text(1000000)                            |          | yes       |          | -                                                                                |
| `acf_owner_id` link to **`User`**                            | id                                       |          |           |          | -                                                                                |
| _Ref. `acf_owner_id.usr_login`_                              | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| _Ref. `acf_owner_id.usr_last_name`_                          | _char(50)_                               |          |           | yes      | _Last name_                                                                      |
| _Ref. `acf_owner_id.usr_first_name`_                         | _char(50)_                               |          |           | yes      | _First name_                                                                     |
| _Ref. `acf_owner_id.usr_email`_                              | _email(100)_                             |          |           | yes      | _Email address_                                                                  |
| _Ref. `acf_owner_id.usr_work_num`_                           | _phone(20)_                              |          |           | yes      | _Work phone number_                                                              |

### Lists

* `ACY_TYPE`
    - `B` Début
    - `E` Fin
    - `R` Rechercher
    - `N` Créer
    - `U` Modifier
    - `D` Supprimer
    - `S` Appel de service
    - `C` Sélectionner unique
    - `M` Sélectionner multiple
    - `P` Paralléliser
    - `J` Synchroniser
    - `I` Condition
    - `X` Page externe
    - `G` Message
    - `Z` Sub-Process
* `ACTIVITY_STATUS`
    - `P` Planifié
    - `W` En attente
    - `R` En cours
    - `D` Réalisé
    - `C` Abandonné
* `PROCESS_STATUS`
    - `S` Démarrage
    - `R` En cours
    - `D` Terminé
    - `C` Annulé

`BPMActor` business object definition
-------------------------------------

Workflow actor

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|

`BPMAlert` business object definition
-------------------------------------

Alerts on state model transitions or workflows

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `alt_name`                                                   | char(100)                                | yes*     | yes       |          | -                                                                                |
| `alt_media`                                                  | multi(20) using `ALERT_MEDIA` list       |          | yes       |          | -                                                                                |
| `alt_activ`                                                  | boolean                                  | yes      | yes       |          | -                                                                                |
| `alt_action`                                                 | multi(10) using `ALERT_ACTION` list      | yes      | yes       |          | -                                                                                |
| `alt_quantity`                                               | int(5)                                   | yes      | yes       |          | -                                                                                |
| `alt_delay`                                                  | int(11)                                  |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `ALERT_MEDIA`
    - `E` Email
    - `L` Log
    - `S` SMS
    - `P` Social post
    - `A` Slack
    - `T` Trello
    - `C` Custom
* `ALERT_ACTION`
    - `M` Envoyer un message
    - `P` Abandonner le processus
    - `A` Abandonner l'activité
    - `C` Lancer une compensation du processus

### Custom actions

* `BPMAlertTest`: Test alert

`BPMAlertContent` business object definition
--------------------------------------------

Contenu des alertes sur processus

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `atc_alert_id` link to **`BPMAlert`**                        | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `atc_alert_id.alt_name`_                               | _char(100)_                              |          |           |          | -                                                                                |
| `atc_lang`                                                   | enum(3) using `LANG` list                | yes*     | yes       |          | -                                                                                |
| `atc_subject`                                                | char(255)                                | yes      | yes       |          | -                                                                                |
| `atc_message`                                                | text(1000000)                            |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `LANG`
    - `ENU` English language
    - `FRA` French language

`BPMAlertFile` business object definition
-----------------------------------------

Alerte en cours

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `alf_pid` link to **`BPMProcessFile`**                       | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `alf_pid.pcf_process_id`_                              | _id_                                     |          |           |          | -                                                                                |
| _Ref. `pcf_process_id.pcs_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `alf_pid.pcf_serial`_                                  | _char(20)_                               |          |           |          | -                                                                                |
| `alf_aid` link to **`BPMActivityFile`**                      | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `alf_aid.acf_serial`_                                  | _char(15)_                               |          |           |          | -                                                                                |
| _Ref. `alf_aid.acf_pcf_id`_                                  | _id_                                     |          |           |          | -                                                                                |
| _Ref. `acf_pcf_id.pcf_process_id`_                           | _id_                                     |          |           |          | -                                                                                |
| _Ref. `pcf_process_id.pcs_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `acf_pcf_id.pcf_serial`_                               | _char(20)_                               |          |           |          | -                                                                                |
| `alf_iter`                                                   | int(11)                                  |          | yes       |          | -                                                                                |
| `alf_next_dt`                                                | datetime                                 |          | yes       |          | -                                                                                |

`BPMData` business object definition
------------------------------------

Données d'une activité de processus

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `dta_activity_id` link to **`BPMActivity`**                  | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `dta_activity_id.acy_process_id`_                      | _id_                                     |          |           |          | -                                                                                |
| _Ref. `acy_process_id.pcs_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `dta_activity_id.acy_step`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `dta_activity_id.acy_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| `dta_group`                                                  | regexp(20)                               | yes*     | yes       |          | -                                                                                |
| `dta_name`                                                   | char(100)                                | yes*     | yes       |          | -                                                                                |
| `dta_order`                                                  | int(11)                                  | yes      | yes       |          | -                                                                                |
| `dta_value`                                                  | char(255)                                |          | yes       |          | -                                                                                |
| `dta_field_id` link to **`Field`**                           | id                                       |          | yes       |          | -                                                                                |
| _Ref. `dta_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`BPMDataFile` business object definition
----------------------------------------

Contexte des données d'une activité

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `dtf_acf_id` link to **`BPMActivityFile`**                   | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `dtf_acf_id.acf_pcf_id`_                               | _id_                                     |          |           |          | -                                                                                |
| _Ref. `dtf_acf_id.acf_serial`_                               | _char(15)_                               |          |           |          | -                                                                                |
| _Ref. `acf_pcf_id.pcf_serial`_                               | _char(20)_                               |          |           |          | -                                                                                |
| _Ref. `acf_pcf_id.pcf_process_id`_                           | _id_                                     |          |           |          | -                                                                                |
| _Ref. `pcf_process_id.pcs_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| `dtf_data_id` link to **`BPMData`**                          | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `dtf_data_id.dta_activity_id`_                         | _id_                                     |          |           |          | -                                                                                |
| _Ref. `dta_activity_id.acy_process_id`_                      | _id_                                     |          |           |          | -                                                                                |
| _Ref. `dta_activity_id.acy_step`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `acy_process_id.pcs_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `dtf_data_id.dta_group`_                               | _regexp(20)_                             |          |           |          | -                                                                                |
| _Ref. `dtf_data_id.dta_name`_                                | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `dtf_data_id.dta_value`_                               | _char(255)_                              |          |           |          | -                                                                                |
| `dtf_order`                                                  | int(11)                                  | yes*     | yes       |          | -                                                                                |
| `dtf_value`                                                  | char(255)                                |          | yes       |          | -                                                                                |

`BPMGrantActivity` business object definition
---------------------------------------------

Droit d'accès sur une activité de processus

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `gta_group_id` link to **`Group`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `gta_group_id.grp_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `gta_activity_id` link to **`BPMActivity`**                  | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `gta_activity_id.acy_process_id`_                      | _id_                                     |          |           |          | -                                                                                |
| _Ref. `acy_process_id.pcs_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `gta_activity_id.acy_step`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `gta_activity_id.acy_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| `gta_grant`                                                  | multi(10) using `GRANT_ACT` list         | yes      | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `GRANT_ACT`
    - `R` Permettre la lecture seule de l'activité réalisée
    - `W` Autoriser la réalisation de l'activité
    - `C` Autoriser l'annulation de l'activité

`BPMGrantProcess` business object definition
--------------------------------------------

Droit d'accès au processus

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `gtp_group_id` link to **`Group`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `gtp_group_id.grp_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `gtp_process_id` link to **`BPMProcess`**                    | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `gtp_process_id.pcs_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| `gtp_grant`                                                  | multi(10) using `GRANT_PCS` list         | yes      | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `GRANT_PCS`
    - `N` Instancier le processus
    - `R` Lire uniquement le processus
    - `C` Annuler le processus

`BPMHelp` business object definition
------------------------------------

Aide en ligne d'une activité de processus

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `hlp_activity_id` link to **`BPMActivity`**                  | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `hlp_activity_id.acy_process_id`_                      | _id_                                     |          |           |          | -                                                                                |
| _Ref. `acy_process_id.pcs_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `hlp_activity_id.acy_step`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `hlp_activity_id.acy_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| `hlp_lang`                                                   | enum(3) using `LANG` list                | yes*     | yes       |          | -                                                                                |
| `hlp_abstract`                                               | html(4000)                               |          | yes       |          | -                                                                                |
| `hlp_content`                                                | html(4000)                               |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `LANG`
    - `ENU` English language
    - `FRA` French language

`BPMProcess` business object definition
---------------------------------------

Processus métier

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `pcs_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `pcs_short_name`                                             | char(20)                                 | yes      | yes       |          | -                                                                                |
| `pcs_comment`                                                | text(4000)                               |          | yes       |          | -                                                                                |
| `pcs_type`                                                   | enum(1) using `PCS_TYPE` list            | yes      | yes       |          | -                                                                                |
| `pcs_class`                                                  | char(100)                                |          | yes       |          | -                                                                                |
| `pcs_script_id`                                              | document                                 |          | yes       |          | -                                                                                |
| `pcs_max_duration`                                           | int(11)                                  |          | yes       |          | -                                                                                |
| `pcs_duration_unit`                                          | enum(1) using `PCS_UNIT` list            |          | yes       |          | -                                                                                |
| `pcs_persitant`                                              | boolean                                  |          | yes       |          | -                                                                                |
| `pcs_persist_depth`                                          | int(10)                                  |          | yes       |          | -                                                                                |
| `pcs_alert_id` link to **`BPMAlert`**                        | id                                       |          | yes       |          | -                                                                                |
| _Ref. `pcs_alert_id.alt_name`_                               | _char(100)_                              |          |           |          | -                                                                                |
| `pcs_compensate_id` link to **`BPMProcess`**                 | id                                       |          | yes       |          | -                                                                                |
| _Ref. `pcs_compensate_id.pcs_name`_                          | _regexp(100)_                            |          |           |          | -                                                                                |
| `pcs_model_id` link to **`Model`**                           | id                                       |          | yes       |          | Diagram                                                                          |
| _Ref. `pcs_model_id.mod_name`_                               | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `pcs_model_id.mod_image`_                              | _image_                                  |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `pcs_mainact_id` link to **`BPMActivity`**                   | id                                       |          | yes       |          | -                                                                                |
| _Ref. `pcs_mainact_id.acy_process_id`_                       | _id_                                     |          |           |          | -                                                                                |
| _Ref. `pcs_mainact_id.acy_step`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `pcs_mainact_id.acy_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `acy_process_id.pcs_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| `pcs_main_del`                                               | enum(1) using `DEL_CASCADE` list         |          | yes       |          | -                                                                                |

### Lists

* `PCS_TYPE`
    - `0` Suite d'écrans
    - `1` Taches humaines
* `PCS_UNIT`
    - `Y` Année
    - `M` Mois
    - `D` Jour
    - `H` Heure
    - `I` Minute
    - `S` Seconde
* `DEL_CASCADE`
    - `R` Impossible si référencé
    - `N` Mettre la référence à null
    - `C` Cascade
    - `Z` Ignore

### Custom actions

* `clearCacheProcess`: Clear process caches
* `runUnitTests`: 
* `deadlineProcess`: 
* `processScriptEdit`: 

`BPMProcessFile` business object definition
-------------------------------------------

Contexte d'un processus

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `pcf_process_id` link to **`BPMProcess`**                    | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `pcf_process_id.pcs_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| `pcf_serial`                                                 | char(20)                                 | yes*     | yes       |          | -                                                                                |
| `pcf_start_dt`                                               | datetime                                 | yes      | yes       |          | -                                                                                |
| `pcf_end_dt`                                                 | datetime                                 |          | yes       |          | -                                                                                |
| `pcf_duration`                                               | int(11)                                  |          |           |          | -                                                                                |
| `pcf_status`                                                 | enum(1) using `PROCESS_STATUS` list      | yes      | yes       |          | -                                                                                |
| `pcf_deadline_dt`                                            | datetime                                 |          | yes       |          | -                                                                                |
| `pcf_object`                                                 | object                                   |          |           |          | -                                                                                |
| `pcf_acf_id` link to **`BPMActivityFile`**                   | id                                       |          | yes       |          | -                                                                                |
| _Ref. `pcf_acf_id.acf_pcf_id`_                               | _id_                                     |          |           |          | -                                                                                |
| _Ref. `acf_pcf_id.pcf_serial`_                               | _char(20)_                               |          |           |          | -                                                                                |
| _Ref. `pcf_acf_id.acf_serial`_                               | _char(15)_                               |          |           |          | -                                                                                |
| _Ref. `acf_pcf_id.pcf_process_id`_                           | _id_                                     |          |           |          | -                                                                                |
| _Ref. `pcf_process_id.pcs_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| `pcf_owner_id` link to **`User`**                            | id                                       |          |           |          | -                                                                                |
| _Ref. `pcf_owner_id.usr_login`_                              | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| _Ref. `pcf_owner_id.usr_last_name`_                          | _char(50)_                               |          |           | yes      | _Last name_                                                                      |
| _Ref. `pcf_owner_id.usr_first_name`_                         | _char(50)_                               |          |           | yes      | _First name_                                                                     |
| _Ref. `pcf_owner_id.usr_email`_                              | _email(100)_                             |          |           | yes      | _Email address_                                                                  |
| _Ref. `pcf_owner_id.usr_work_num`_                           | _phone(20)_                              |          |           | yes      | _Work phone number_                                                              |

### Lists

* `PROCESS_STATUS`
    - `S` Démarrage
    - `R` En cours
    - `D` Terminé
    - `C` Annulé

`BPMRecipient` business object definition
-----------------------------------------

Destinataire d'alerte

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `atr_order`                                                  | int(11)                                  | yes*     | yes       |          | -                                                                                |
| `atr_alert_id` link to **`BPMAlert`**                        | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `atr_alert_id.alt_name`_                               | _char(100)_                              |          |           |          | -                                                                                |
| `atr_user_id` link to **`User`**                             | id                                       |          | yes       |          | -                                                                                |
| _Ref. `atr_user_id.usr_login`_                               | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| `atr_group_id` link to **`Group`**                           | id                                       |          | yes       |          | -                                                                                |
| _Ref. `atr_group_id.grp_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `atr_spam`                                                   | boolean                                  | yes      | yes       |          | -                                                                                |
| `atr_copy`                                                   | enum(1) using `RECIP_COPY` list          | yes      | yes       |          | -                                                                                |
| `atr_query`                                                  | text(4000)                               |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `RECIP_COPY`
    - `1` Destinataire
    - `2` Copie
    - `3` Copie cachée

`BPMState` business object definition
-------------------------------------

State models' states

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `sta_state_id` link to **`FieldListCode`**                   | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `sta_state_id.lov_list_id`_                            | _id_                                     |          |           |          | -                                                                                |
| _Ref. `lov_list_id.lov_name`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `sta_state_id.lov_code`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `sta_role`                                                   | enum(1) using `STA_ROLE` list            | yes      | yes       |          | -                                                                                |
| `sta_label`                                                  | char(100)                                | yes      | yes       |          | -                                                                                |
| `sta_activ`                                                  | boolean                                  | yes      | yes       |          | -                                                                                |
| `sta_terminal`                                               | boolean                                  |          | yes       |          | -                                                                                |
| `sta_read`                                                   | boolean                                  |          | yes       |          | -                                                                                |
| `sta_access`                                                 | boolean                                  |          | yes       |          | -                                                                                |
| `sta_timeout`                                                | int(15)                                  |          | yes       |          | -                                                                                |
| `sta_alert_id` link to **`BPMAlert`**                        | id                                       |          | yes       |          | -                                                                                |
| _Ref. `sta_alert_id.alt_name`_                               | _char(100)_                              |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `STA_ROLE`
    - `M` Milestone
    - `O` Optional
    - `E` Exception
    - `H` Hidden

### Custom actions

* `deadlineState`: 

`BPMStateTranGroup` business object definition
----------------------------------------------

Grant on state model transitions

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `stg_transition_id` link to **`BPMStateTransition`**         | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `stg_transition_id.stm_name`_                          | _char(255)_                              |          |           |          | -                                                                                |
| `stg_group_id` link to **`Group`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `stg_group_id.grp_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `stg_activ`                                                  | boolean                                  | yes      | yes       |          | -                                                                                |
| `stg_object_id` link to **`ObjectInternal`**                 | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `stg_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`BPMStateTransition` business object definition
-----------------------------------------------

State model transitions

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `stm_name`                                                   | char(255)                                | yes*     | yes       |          | -                                                                                |
| `stm_from_id` link to **`BPMState`**                         | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `stm_from_id.sta_state_id`_                            | _id_                                     |          |           |          | -                                                                                |
| _Ref. `sta_state_id.lov_list_id`_                            | _id_                                     |          |           |          | -                                                                                |
| _Ref. `lov_list_id.lov_name`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `sta_state_id.lov_code`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `stm_to_id` link to **`BPMState`**                           | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `stm_to_id.sta_state_id`_                              | _id_                                     |          |           |          | -                                                                                |
| _Ref. `sta_state_id.lov_list_id`_                            | _id_                                     |          |           |          | -                                                                                |
| _Ref. `lov_list_id.lov_name`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `sta_state_id.lov_code`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `stm_callbackscript`                                         | text(4000)                               |          | yes       |          | -                                                                                |
| `stm_callback`                                               | char(50)                                 |          | yes       |          | -                                                                                |
| `stm_condition`                                              | text(4000)                               |          | yes       |          | -                                                                                |
| `stm_activ`                                                  | boolean                                  | yes      | yes       |          | -                                                                                |
| `stm_notif_id` link to **`BPMAlert`**                        | id                                       |          | yes       |          | -                                                                                |
| _Ref. `stm_notif_id.alt_name`_                               | _char(100)_                              |          |           |          | -                                                                                |
| `stm_action_id` link to **`Action`**                         | id                                       |          | yes       |          | -                                                                                |
| _Ref. `stm_action_id.act_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`BPMTransition` business object definition
------------------------------------------

Transition entre des activités d'un processus

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `trs_process_id` link to **`BPMProcess`**                    | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `trs_process_id.pcs_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| `trs_from_id` link to **`BPMActivity`**                      | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `trs_from_id.acy_process_id`_                          | _id_                                     |          |           |          | -                                                                                |
| _Ref. `acy_process_id.pcs_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `trs_from_id.acy_step`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `trs_from_id.acy_name`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| `trs_to_id` link to **`BPMActivity`**                        | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `trs_to_id.acy_process_id`_                            | _id_                                     |          |           |          | -                                                                                |
| _Ref. `acy_process_id.pcs_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `trs_to_id.acy_step`_                                  | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `trs_to_id.acy_name`_                                  | _regexp(100)_                            |          |           |          | -                                                                                |
| `trs_name`                                                   | char(30)                                 |          | yes       |          | -                                                                                |
| `trs_action_id` link to **`Action`**                         | id                                       |          | yes       |          | -                                                                                |
| _Ref. `trs_action_id.act_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `trs_condition`                                              | text(4000)                               |          | yes       |          | -                                                                                |
| `trs_callback`                                               | char(30)                                 |          | yes       |          | -                                                                                |
| `trs_alert_id` link to **`BPMAlert`**                        | id                                       |          | yes       |          | -                                                                                |
| _Ref. `trs_alert_id.alt_name`_                               | _char(100)_                              |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`CacheInfo` business object definition
--------------------------------------

Cache information

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `cin_login`                                                  | char(20)                                 | yes*     |           |          | -                                                                                |
| `cin_session_id`                                             | char(100)                                | yes*     |           |          | -                                                                                |
| `cin_lang`                                                   | enum(3) using `LANG` list                | yes*     |           |          | -                                                                                |
| `cin_object`                                                 | char(100)                                | yes*     |           |          | -                                                                                |
| `cin_inst`                                                   | char(100)                                | yes*     |           |          | -                                                                                |
| `cin_class`                                                  | char(100)                                |          |           |          | -                                                                                |
| `cin_size`                                                   | float(11, 0)                             |          |           |          | -                                                                                |
| `cin_prct`                                                   | int(3)                                   |          |           |          | -                                                                                |

### Lists

* `LANG`
    - `ENU` English language
    - `FRA` French language

### Custom actions

* `CacheInfo-calculate`: 

`ConstraintGroup` business object definition
--------------------------------------------

Grants on constraints

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `csg_const_id` link to **`ConstraintObject`**                | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `csg_const_id.cst_name`_                               | _char(100)_                              |          |           |          | -                                                                                |
| `csg_group_id` link to **`Group`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `csg_group_id.grp_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `csg_activ`                                                  | boolean                                  | yes      | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`ConstraintImpact` business object definition
---------------------------------------------

Constraint impacts

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `csi_const_id` link to **`ConstraintObject`**                | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `csi_const_id.cst_name`_                               | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `csi_const_id.cst_object_id`_                          | _id_                                     |          |           |          | -                                                                                |
| _Ref. `cst_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `csi_const_id.cst_order`_                              | _int(5)_                                 |          |           |          | -                                                                                |
| `csi_order`                                                  | int(3)                                   | yes*     | yes       |          | -                                                                                |
| `csi_object_prop`                                            | enum(1) using `CONST_OBJ_PROP` list      |          | yes       |          | -                                                                                |
| `csi_field_prop`                                             | enum(1) using `CONST_FIELD_PROP` list    |          | yes       |          | -                                                                                |
| `csi_apply`                                                  | enum(1) using `CSI_APPLY` list           | yes      | yes       |          | -                                                                                |
| `csi_expr`                                                   | text(4000)                               | yes      | yes       |          | -                                                                                |
| `csi_target`                                                 | object                                   |          | yes       |          | -                                                                                |
| `csi_objfield_id` link to **`ObjectFieldSystem`**            | id                                       |          | yes       |          | -                                                                                |
| _Ref. `csi_objfield_id.obf_object_id`_                       | _id_                                     |          |           |          | -                                                                                |
| _Ref. `obf_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `csi_objfield_id.obf_field_id`_                        | _id_                                     |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `csi_objfield_id.obf_order`_                           | _int(5)_                                 |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `CONST_OBJ_PROP`
    - `M` Action de l'objet
    - `C` Copier
    - `E` Exporter
    - `A` Mise à jour en masse
    - `P` Paginer
    - `R` Recherche prédéfinie
    - `F` Usage du formulaire
    - `N` 
    - `U` 
    - `D` 
* `CONST_FIELD_PROP`
    - `U` Modifiable
    - `C` Copiable
    - `V` Visible
    - `S` Recherche
    - `M` Obligatoire
    - `F` Valeur du filtre
    - `D` Valeur par défaut
    - `E` Valeur du champ
    - `L` Liste de valeurs
* `CSI_APPLY`
    - `F` Field property
    - `T` Target visibility
    - `O` Object property

`ConstraintObject` business object definition
---------------------------------------------

Constraints

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `cst_name`                                                   | char(100)                                | yes*     | yes       |          | -                                                                                |
| `cst_object_id` link to **`ObjectInternal`**                 | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `cst_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `cst_order`                                                  | int(5)                                   | yes      | yes       |          | -                                                                                |
| `cst_desc`                                                   | text(4000)                               |          | yes       |          | -                                                                                |
| `cst_type`                                                   | enum(1) using `FIELD_CONST_TYPE` list    | yes      | yes       |          | -                                                                                |
| `cst_effects`                                                | multi(10) using `CONST_EFFECT` list      | yes      | yes       |          | -                                                                                |
| `cst_field_id` link to **`FieldBoolean`**                    | id                                       |          | yes       |          | -                                                                                |
| _Ref. `cst_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `cst_expr`                                                   | text(4000)                               |          | yes       |          | -                                                                                |
| `cst_method`                                                 | char(30)                                 |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `FIELD_CONST_TYPE`
    - `F` Attribut
    - `E` Expression
    - `M` Méthode
* `CONST_EFFECT`
    - `S` Static
    - `F` Front
    - `B` Back

`CronTable` business object definition
--------------------------------------

Scheduled tasks definitions

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `crn_name`                                                   | char(100)                                | yes*     | yes       |          | Nom de la tache                                                                  |
| `crn_cronexpr`                                               | char(50)                                 | yes      | yes       |          | -                                                                                |
| `crn_enabled`                                                | boolean                                  | yes      | yes       |          | -                                                                                |
| `crn_unique`                                                 | boolean                                  | yes      | yes       |          | -                                                                                |
| `crn_runas_id` link to **`User`**                            | id                                       |          | yes       |          | -                                                                                |
| _Ref. `crn_runas_id.usr_login`_                              | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| `crn_job_depth`                                              | int(11)                                  |          | yes       |          | -                                                                                |
| `crn_desc`                                                   | text(4000)                               |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `crn_function_id` link to **`Function`**                     | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `crn_function_id.fct_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `crn_function_id.fct_object_id`_                       | _id_                                     |          |           |          | -                                                                                |
| _Ref. `fct_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `crn_function_id.fct_action_id`_                       | _id_                                     |          |           |          | -                                                                                |
| _Ref. `fct_action_id.act_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `fct_action_id.act_method`_                            | _char(50)_                               |          |           |          | -                                                                                |
| `crn_queue_id` link to **`ActionQueue`**                     | id                                       |          | yes       |          | -                                                                                |
| _Ref. `crn_queue_id.acq_name`_                               | _char(50)_                               |          |           |          | -                                                                                |

### Custom actions

* `CRON_EXECUTE`: Force execution of a schedulled task
* `CheckClearCache`: 
* `ObjectDynGC`: 
* `ObjectFullGC`: 
* `CronTable-test`: 
* `DesignAudit`: 
* `reloadCrontab`: Recharge les triggers

`Crosstab` business object definition
-------------------------------------

Tableau croisé

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ctb_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `ctb_object_id` link to **`ObjectInternal`**                 | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `ctb_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `ctb_function`                                               | enum(1) using `CTB_FUNCTION` list        | yes      | yes       |          | -                                                                                |
| `ctb_visible`                                                | enum(1) using `BTN_VIS` list             | yes      | yes       |          | -                                                                                |
| `ctb_fixedcolors`                                            | boolean                                  | yes      | yes       |          | -                                                                                |
| `ctb_precision`                                              | int(5)                                   |          | yes       |          | -                                                                                |
| `ctb_subtotal`                                               | boolean                                  |          | yes       |          | -                                                                                |
| `ctb_totalcolor`                                             | color                                    |          | yes       |          | -                                                                                |
| `ctb_caption`                                                | enum(1) using `POSITION` list            |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `CTB_FUNCTION`
    - `T` Text function
    - `S` Sum function
    - `P` Product function
    - `A` Algebraic average
    - `G` Geometric average
    - `L` Minimum function
    - `H` Maximum function
    - `F` Formula fucntion
* `BTN_VIS`
    - `1` Visible
    - `0` Hidden
    - `P` Plus
* `POSITION`
    - `T` Top
    - `B` Bottom
    - `L` Left
    - `R` Right

`CrosstabAxis` business object definition
-----------------------------------------

Axes d'un tableau croisé

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `cax_crosstab_id` link to **`Crosstab`**                     | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `cax_crosstab_id.ctb_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| `cax_objfield_id` link to **`ObjectFieldSystem`**            | id                                       |          | yes       |          | -                                                                                |
| _Ref. `cax_objfield_id.obf_object_id`_                       | _id_                                     |          |           |          | -                                                                                |
| _Ref. `obf_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `cax_objfield_id.obf_order`_                           | _int(5)_                                 |          |           |          | -                                                                                |
| _Ref. `cax_objfield_id.obf_field_id`_                        | _id_                                     |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `cax_type`                                                   | enum(1) using `CTB_TYPE` list            | yes*     | yes       |          | -                                                                                |
| `cax_order`                                                  | int(11)                                  | yes*     | yes       |          | -                                                                                |
| `cax_function`                                               | enum(1) using `CTB_FUNCTION` list        |          | yes       |          | -                                                                                |
| `cax_chart`                                                  | enum(10) using `CTB_CHART_TYPE` list     |          | yes       |          | -                                                                                |
| `cax_precision`                                              | int(5)                                   |          | yes       |          | -                                                                                |
| `cax_subtotal`                                               | boolean                                  |          | yes       |          | -                                                                                |
| `cax_formula`                                                | text(4000)                               |          | yes       |          | -                                                                                |
| `cax_hidden`                                                 | boolean                                  |          | yes       |          | -                                                                                |
| _Ref. `obf_field_id.fld_type`_                               | _enum(2) using `FIELD_TYPE` list_        |          |           |          | -                                                                                |
| `cax_dategroup`                                              | enum(1) using `CAX_DATEGROUP` list       |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `cax_unitscale`                                              | float(20, 5)                             |          | yes       |          | -                                                                                |
| `cax_unitfunct`                                              | enum(5) using `CAX_UNITFUNCT` list       |          | yes       |          | -                                                                                |
| `cax_unitlabel`                                              | char(20)                                 |          | yes       |          | -                                                                                |
| `cax_yaxis`                                                  | enum(1) using `CAX_YAXIS` list           |          | yes       |          | -                                                                                |
| `cax_palette`                                                | char(30)                                 |          | yes       |          | -                                                                                |

### Lists

* `CTB_TYPE`
    - `C` Column axis
    - `L` Line axis
    - `V` Value axis
* `CTB_FUNCTION`
    - `T` Text function
    - `S` Sum function
    - `P` Product function
    - `A` Algebraic average
    - `G` Geometric average
    - `L` Minimum function
    - `H` Maximum function
    - `F` Formula fucntion
* `CTB_CHART_TYPE`
    - `bar` Bar
    - `bar_stack` Stack bar
    - `line` Line
    - `pie` Pie
    - `radar` Radar
    - `area_stack` Area stack
* `FIELD_TYPE`
    - `3` Short text < 4000
    - `13` Long text
    - `1` Integer
    - `2` Decimal
    - `26` BigDecimal
    - `4` Date
    - `5` Date and time
    - `6` Time
    - `7` Enumeration
    - `14` Multiple enumeration
    - `8` Boolean
    - `10` URL
    - `11` HTML content
    - `12` Email
    - `15` Validated text
    - `17` Document
    - `0` Internal ID
    - `24` Object
    - `9` Password
    - `19` External file
    - `20` Image
    - `21` Notepad
    - `22` Phone number
    - `23` Color
    - `25` Geographical coordinates
* `CAX_DATEGROUP`
    - `Y` Year
    - `S` Semester
    - `F` Four-months
    - `Q` Quarter
    - `M` Month
    - `W` Week
    - `D` Day
    - `H` Hour
* `CAX_UNITFUNCT`
    - `RND` Round
    - `SCA` Scale value
    - `DIV` Divide
    - `ABS` Absolute
    - `SQRT` Square root
    - `LOG` Log 10
    - `LN` Log N
* `CAX_YAXIS`
    - `L` Left
    - `R` Right

`CrosstabGroup` business object definition
------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ctg_crosstab_id` link to **`Crosstab`**                     | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `ctg_crosstab_id.ctb_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| `ctg_group_id` link to **`Group`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `ctg_group_id.grp_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `ctg_edit`                                                   | boolean                                  |          | yes       |          | Editable crosstab?                                                               |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`DataLink` business object definition
-------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `dlk_name`                                                   | char(100)                                | yes*     | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `dlk_enabled`                                                | boolean                                  |          | yes       |          | -                                                                                |
| `dlk_order`                                                  | int(10)                                  |          | yes       |          | -                                                                                |

### Custom actions

* `DATALINK-CRON`: 
* `DATALINK-PULL`: 

`DataLinkHost` business object definition
-----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `dlh_name`                                                   | char(100)                                | yes*     | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `dlh_url`                                                    | char(250)                                | yes      | yes       |          | -                                                                                |
| `dlh_user`                                                   | char(100)                                | yes      | yes       |          | -                                                                                |
| `dlh_pwd`                                                    | char(100)                                |          | yes       |          | -                                                                                |

`DataLinkHosts` business object definition
------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `dlk_link_id` link to **`DataLink`**                         | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `dlk_link_id.dlk_name`_                                | _char(100)_                              |          |           |          | -                                                                                |
| `dlk_host_id` link to **`DataLinkHost`**                     | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `dlk_host_id.dlh_name`_                                | _char(100)_                              |          |           |          | -                                                                                |
| `dlk_type`                                                   | enum(1) using `DLK_TYPE` list            | yes      | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `DLK_TYPE`
    - `M` Master
    - `S` Slave

`DataLinkObj` business object definition
----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `dlk_link_id` link to **`DataLink`**                         | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `dlk_link_id.dlk_name`_                                | _char(100)_                              |          |           |          | -                                                                                |
| `dlk_obj_id` link to **`ObjectInternal`**                    | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `dlk_obj_id.obo_name`_                                 | _regexp(100)_                            |          |           |          | -                                                                                |
| `dlk_order`                                                  | int(10)                                  |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`DataMap` business object definition
------------------------------------

Mapping entre les attributs de 2 objets

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `dtm_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `dtm_obf_id` link to **`ObjectFieldSystem`**                 | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `dtm_obf_id.obf_object_id`_                            | _id_                                     |          |           |          | -                                                                                |
| _Ref. `dtm_obf_id.obf_field_id`_                             | _id_                                     |          |           |          | -                                                                                |
| _Ref. `obf_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `dtm_obf_id.obf_order`_                                | _int(5)_                                 |          |           |          | -                                                                                |
| `dtm_type`                                                   | enum(1) using `DTM_TYPE` list            | yes      | yes       |          | -                                                                                |
| `dtm_obfmap_id` link to **`ObjectFieldSystem`**              | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `dtm_obfmap_id.obf_object_id`_                         | _id_                                     |          |           |          | -                                                                                |
| _Ref. `dtm_obfmap_id.obf_field_id`_                          | _id_                                     |          |           |          | -                                                                                |
| _Ref. `obf_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `dtm_obfmap_id.obf_order`_                             | _int(5)_                                 |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `DTM_TYPE`
    - `1` In
    - `2` Out
    - `3` In / Out

`Dataset` business object definition
------------------------------------

Data sets

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `dt_name`                                                    | char(100)                                | yes*     | yes       |          | -                                                                                |
| `dt_file`                                                    | document                                 |          | yes       |          | -                                                                                |
| `dt_desc`                                                    | text(4000)                               |          | yes       |          | -                                                                                |
| `dt_exportdate_from`                                         | date                                     |          | yes       |          | -                                                                                |
| `dt_exportdate_to`                                           | date                                     |          | yes       |          | -                                                                                |
| `dt_export_format`                                           | enum(100) using `DT_EXPORT_FORMAT` list  | yes      | yes       |          | -                                                                                |
| `dt_export_zip`                                              | boolean                                  |          | yes       |          | -                                                                                |

### Lists

* `DT_EXPORT_FORMAT`
    - `json` JSON
    - `xml` XML

### Custom actions

* `Dataset-apply`: 
* `Dataset-generateData`: 
* `Dataset-migrateOrder`: 

`DatasetObject` business object definition
------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `dto_order`                                                  | int(100)                                 |          | yes       |          | -                                                                                |
| `dto_dt_id` link to **`Dataset`**                            | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `dto_dt_id.row_module_id`_                             | _id_                                     |          |           |          | _Module_                                                                         |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| _Ref. `dto_dt_id.dt_name`_                                   | _char(100)_                              |          |           |          | -                                                                                |
| `dto_obo_id` link to **`ObjectInternal`**                    | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `dto_obo_id.obo_name`_                                 | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `dto_obo_id.row_module_id`_                            | _id_                                     |          |           |          | _Module_                                                                         |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`Disposition` business object definition
----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `dis_code`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `dis_image`                                                  | image                                    |          | yes       |          | -                                                                                |
| `dis_class`                                                  | char(100)                                |          | yes       |          | -                                                                                |
| `dis_script_id`                                              | document                                 |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Custom actions

* `clearCacheDisp`: Clear disposition caches
* `dispositionScriptEdit`: 

`DispSysParam` business object definition
-----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `dsp_disp_id` link to **`Disposition`**                      | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `dsp_disp_id.dis_code`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| `dsp_param_id` link to **`SystemParam`**                     | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `dsp_param_id.sys_code`_                               | _char(100)_                              |          |           |          | -                                                                                |
| `dsp_value`                                                  | text(4000)                               | yes      | yes       |          | -                                                                                |
| _Ref. `dsp_param_id.sys_type`_                               | _enum(3) using `SYS_TYPE` list_          |          |           |          | -                                                                                |
| _Ref. `dsp_param_id.sys_value`_                              | _text(1000000)_                          |          |           |          | -                                                                                |
| _Ref. `dsp_param_id.sys_value2`_                             | _text(4000)_                             |          |           |          | -                                                                                |
| _Ref. `dsp_param_id.sys_desc`_                               | _text(4000)_                             |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `SYS_TYPE`
    - `APP` Application
    - `LFL` Look & Feel
    - `LOG` Logger
    - `EMO` Easy mode
    - `PRV` Private
    - `RUN` Runtime

`DocGroup` business object definition
-------------------------------------

Habilitation des documents aux groupes

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `dog_doc_id` link to **`DocumentSystem`**                    | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `dog_doc_id.dbd_name`_                                 | _char(255)_                              |          |           |          | -                                                                                |
| _Ref. `dog_doc_id.dbd_path`_                                 | _text(4000)_                             |          |           |          | -                                                                                |
| `dog_group_id` link to **`Group`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `dog_group_id.grp_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `dog_grant`                                                  | multi(10) using `DOG_GRANT` list         | yes      | yes       |          | -                                                                                |

### Lists

* `DOG_GRANT`
    - `D` Télécharger
    - `U` Remplacer le document
    - `M` Modifier la fiche indexée
    - `G` Modifier les droits
    - `S` Supprimer le document

`DocIndex` business object definition
-------------------------------------

Bibliothèques

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `din_name`                                                   | char(30)                                 | yes*     | yes       |          | -                                                                                |
| `din_field_id` link to **`Field`**                           | id                                       |          | yes       |          | -                                                                                |
| _Ref. `din_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `din_path`                                                   | char(255)                                |          | yes       |          | -                                                                                |
| `din_min`                                                    | int(10)                                  |          | yes       |          | -                                                                                |
| `din_max`                                                    | int(10)                                  |          | yes       |          | -                                                                                |
| `din_grant`                                                  | boolean                                  | yes      | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`DocIndexField` business object definition
------------------------------------------

Attributs métier dans la bibliothèques

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `dfl_index_id` link to **`DocIndex`**                        | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `dfl_index_id.din_name`_                               | _char(30)_                               |          |           |          | -                                                                                |
| `dfl_order`                                                  | int(11)                                  | yes*     | yes       |          | -                                                                                |
| `dfl_field_id` link to **`Field`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `dfl_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`DocIndexMIME` business object definition
-----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `dim_docindex_id` link to **`DocIndex`**                     | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `dim_docindex_id.din_name`_                            | _char(30)_                               |          |           |          | -                                                                                |
| `dim_mime_id` link to **`DocMIME`**                          | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `dim_mime_id.dmi_name`_                                | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `dim_mime_id.dmi_ext`_                                 | _char(20)_                               |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`DocLegal` business object definition
-------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `dol_name`                                                   | char(100)                                | yes*     | yes       |          | -                                                                                |
| `dol_subject`                                                | char(100)                                | yes      | yes       |          | -                                                                                |
| `dol_doc`                                                    | document                                 | yes      | yes       |          | -                                                                                |
| `dol_date`                                                   | datetime                                 |          |           |          | -                                                                                |
| `dol_sign_date`                                              | datetime                                 |          | yes       |          | -                                                                                |
| `dol_status`                                                 | enum(10) using `DOC_LEGAL_STATUS` list   |          | yes       |          | -                                                                                |
| `dol_status_date`                                            | datetime                                 |          |           |          | -                                                                                |
| `dol_sign_doc`                                               | document                                 |          | yes       |          | -                                                                                |
| `dol_multi_doc`                                              | document                                 |          | yes       |          | -                                                                                |
| `dol_uid`                                                    | char(100)                                |          |           |          | -                                                                                |
| `dol_certif_doc`                                             | document                                 |          |           |          | -                                                                                |
| `dol_provider`                                               | enum(10) using `DOC_SIGN_PROVIDER` list  | yes      | yes       |          | -                                                                                |
| `dol_note`                                                   | text(4000)                               |          | yes       |          | -                                                                                |

### Lists

* `DOC_LEGAL_STATUS`
    - `SENT` Sent
    - `DELIVERED` Delivered
    - `FAILURE` Delivery failure
    - `SIGNED` Signed
    - `COMPLETED` Completed
    - `DECLINED` Declined
    - `CANCELED` Canceled
    - `TIMEOUT` Timeout
    - `UNKNOWN` Unknown
* `DOC_SIGN_PROVIDER`
    - `DOCUSIGN` DocuSign

### Custom actions

* `DocLegal-Cancel`: 
* `DocLegal-Send`: 

`DocLegalSigner` business object definition
-------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `dol_legal_id` link to **`DocLegal`**                        | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `dol_legal_id.dol_name`_                               | _char(100)_                              |          |           |          | -                                                                                |
| `dol_order`                                                  | int(10)                                  | yes*     | yes       |          | -                                                                                |
| `dol_internal`                                               | boolean                                  |          | yes       |          | -                                                                                |
| `dol_user_id` link to **`User`**                             | id                                       |          | yes       |          | -                                                                                |
| _Ref. `dol_user_id.usr_login`_                               | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| _Ref. `dol_user_id.usr_last_name`_                           | _char(50)_                               |          |           | yes      | _Last name_                                                                      |
| _Ref. `dol_user_id.usr_first_name`_                          | _char(50)_                               |          |           | yes      | _First name_                                                                     |
| _Ref. `dol_user_id.usr_email`_                               | _email(100)_                             |          |           | yes      | _Email address_                                                                  |
| `dol_status`                                                 | enum(10) using `DOC_LEGAL_STATUS` list   |          | yes       |          | -                                                                                |
| `dol_status_date`                                            | datetime                                 |          |           |          | -                                                                                |
| `dol_note`                                                   | text(4000)                               |          | yes       |          | -                                                                                |
| `usr_email`                                                  | email(100)                               |          | yes       | yes      | Email address                                                                    |
| `usr_first_name`                                             | char(50)                                 |          | yes       | yes      | First name                                                                       |
| `usr_last_name`                                              | char(50)                                 |          | yes       | yes      | Last name                                                                        |

### Lists

* `DOC_LEGAL_STATUS`
    - `SENT` Sent
    - `DELIVERED` Delivered
    - `FAILURE` Delivery failure
    - `SIGNED` Signed
    - `COMPLETED` Completed
    - `DECLINED` Declined
    - `CANCELED` Canceled
    - `TIMEOUT` Timeout
    - `UNKNOWN` Unknown

`DocMIME` business object definition
------------------------------------

Liste des types MIME pour la GED

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `dmi_ext`                                                    | char(20)                                 | yes*     | yes       |          | -                                                                                |
| `dmi_name`                                                   | char(100)                                | yes      | yes       |          | -                                                                                |
| `dmi_text`                                                   | boolean                                  | yes      | yes       |          | -                                                                                |
| `dmi_index`                                                  | enum(1) using `DMI_INDEX` list           | yes      | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `DMI_INDEX`
    - `0` Non, pas d'analyse du contenu
    - `1` Oui, format bureatique standard
    - `2` Oui, analyse textuelle uniquement

`DocumentSystem` business object definition
-------------------------------------------

Documents

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `dbd_name`                                                   | char(255)                                | yes      |           |          | -                                                                                |
| `dbd_vers`                                                   | int(11)                                  | yes      |           |          | -                                                                                |
| `dbd_doc_id`                                                 | document                                 |          |           |          | -                                                                                |
| `dbd_path`                                                   | text(4000)                               | yes*     |           |          | -                                                                                |
| `dbd_size`                                                   | float(11, 0)                             |          |           |          | -                                                                                |
| `dbd_mime`                                                   | char(100)                                |          |           |          | -                                                                                |
| `dbd_index_id` link to **`DocIndex`**                        | id                                       |          |           |          | -                                                                                |
| _Ref. `dbd_index_id.din_name`_                               | _char(30)_                               |          |           |          | -                                                                                |
| `dbd_object_id` link to **`ObjectInternal`**                 | id                                       |          |           |          | -                                                                                |
| _Ref. `dbd_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `dbd_resp_id` link to **`User`**                             | id                                       |          | yes       |          | -                                                                                |
| `dbd_field_id` link to **`Field`**                           | id                                       |          |           |          | -                                                                                |
| _Ref. `dbd_resp_id.usr_login`_                               | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| _Ref. `dbd_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `dbd_row_id`                                                 | id                                       |          |           |          | -                                                                                |

### Custom actions

* `ERASE_DEAD_DOC`: Purge des fichiers et liens obsolètes
* `EXPORT_BLOB`: 
* `IMPORT_BLOB`: 
* `rebuildIndex`: Rebuild the full document index

`Domain` business object definition
-----------------------------------

Domains

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `obd_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `obd_comment`                                                | text(4000)                               |          | yes       |          | -                                                                                |
| `obd_type`                                                   | char(1)                                  |          |           |          | -                                                                                |
| `obd_view_id` link to **`ViewDomain`**                       | id                                       |          | yes       |          | -                                                                                |
| _Ref. `obd_view_id.viw_name`_                                | _char(100)_                              |          |           |          | -                                                                                |
| `obd_nohome`                                                 | boolean                                  |          | yes       |          | -                                                                                |
| `obd_icon`                                                   | char(100)                                |          | yes       |          | -                                                                                |
| `obd_order`                                                  | int(10)                                  |          | yes       |          | -                                                                                |
| `obd_domain_id` link to **`Domain`**                         | id                                       |          | yes       |          | -                                                                                |
| _Ref. `obd_domain_id.obd_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`Feedback` business object definition
-------------------------------------

Feedback requests

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `fbk_screen_id`                                              | image                                    |          | yes       |          | -                                                                                |
| `fbk_date`                                                   | datetime                                 | yes*     | yes       |          | -                                                                                |
| `fbk_type`                                                   | enum(1) using `FEEDBACK_TYPE` list       |          | yes       |          | -                                                                                |
| `fbk_user`                                                   | char(50)                                 | yes*     | yes       |          | -                                                                                |
| `fbk_email`                                                  | email(50)                                |          | yes       |          | -                                                                                |
| `fbk_app_name`                                               | char(50)                                 | yes*     | yes       |          | -                                                                                |
| `fbk_app_version`                                            | char(20)                                 |          | yes       |          | -                                                                                |
| `fbk_lang`                                                   | enum(3) using `LANG` list                |          | yes       |          | -                                                                                |
| `fbk_resp`                                                   | text(4000)                               |          | yes       |          | -                                                                                |
| `fbk_desc`                                                   | text(4000)                               |          | yes       |          | -                                                                                |
| `fbk_user_agent`                                             | char(255)                                |          | yes       |          | -                                                                                |
| `fbk_platform_name`                                          | char(30)                                 |          | yes       |          | -                                                                                |
| `fbk_platform_version`                                       | char(20)                                 |          | yes       |          | -                                                                                |
| `fbk_platform_build`                                         | date                                     |          | yes       |          | -                                                                                |
| `fbk_encoding`                                               | char(20)                                 |          | yes       |          | -                                                                                |
| `fbk_java_vendor`                                            | char(50)                                 |          | yes       |          | -                                                                                |
| `fbk_java_version`                                           | char(20)                                 |          | yes       |          | -                                                                                |
| `fbk_server_vendor`                                          | char(50)                                 |          | yes       |          | -                                                                                |
| `fbk_server_version`                                         | char(20)                                 |          | yes       |          | -                                                                                |
| `fbk_db_driver`                                              | char(255)                                |          | yes       |          | -                                                                                |
| `fbk_os_name`                                                | char(100)                                |          | yes       |          | -                                                                                |
| `fbk_os_version`                                             | char(50)                                 |          | yes       |          | -                                                                                |
| `fbk_os_archi`                                               | char(50)                                 |          | yes       |          | -                                                                                |

### Lists

* `FEEDBACK_TYPE`
    - `Q` Question
    - `R` Change request
    - `D` Defect
    - `F` Fatal error
* `LANG`
    - `ENU` English language
    - `FRA` French language

`Field` business object definition
----------------------------------

Fields

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `fld_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `fld_dbname`                                                 | char(100)                                |          | yes       |          | -                                                                                |
| `fld_visible`                                                | enum(1) using `FIELD_VISIBLE` list       | yes      | yes       |          | -                                                                                |
| `fld_updatable`                                              | multi(10) using `FIELD_UPDATABLE` list   | yes      | yes       |          | -                                                                                |
| `fld_required`                                               | boolean                                  | yes      | yes       |          | -                                                                                |
| `fld_fonctid`                                                | boolean                                  | yes      | yes       |          | -                                                                                |
| `fld_research`                                               | enum(1) using `FIELD_RESEARCH` list      |          | yes       |          | -                                                                                |
| `fld_researchreq`                                            | enum(1) using `FIELD_RESEARCHREQ` list   |          | yes       |          | -                                                                                |
| `fld_sort`                                                   | enum(1) using `FIELD_SORT` list          |          | yes       |          | -                                                                                |
| `fld_more`                                                   | boolean                                  | yes      | yes       |          | -                                                                                |
| `fld_listmore`                                               | boolean                                  | yes      | yes       |          | -                                                                                |
| `fld_listsum`                                                | enum(1) using `FIELD_LISTSUM` list       |          | yes       |          | -                                                                                |
| `fld_exportable`                                             | boolean                                  |          | yes       |          | -                                                                                |
| `fld_tray`                                                   | multi(10) using `FLD_TRAY` list          |          | yes       |          | -                                                                                |
| `fld_type`                                                   | enum(2) using `FIELD_TYPE` list          | yes      | yes       |          | -                                                                                |
| `fld_clipboard`                                              | boolean                                  |          | yes       |          | -                                                                                |
| `fld_type_id` link to **`FieldType`**                        | id                                       |          | yes       |          | -                                                                                |
| _Ref. `fld_type_id.flt_code`_                                | _regexp(30)_                             |          |           |          | -                                                                                |
| `fld_list_id` link to **`FieldList`**                        | id                                       |          | yes       |          | -                                                                                |
| _Ref. `fld_list_id.lov_name`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| `fld_copy`                                                   | boolean                                  | yes      | yes       |          | -                                                                                |
| `fld_size`                                                   | int(11)                                  | yes      | yes       |          | -                                                                                |
| `fld_minsize`                                                | int(11)                                  |          | yes       |          | -                                                                                |
| `fld_precision`                                              | char(50)                                 |          | yes       |          | -                                                                                |
| `fld_fromdate_id` link to **`Field`**                        | id                                       |          | yes       |          | -                                                                                |
| _Ref. `fld_fromdate_id.fld_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| `fld_dfault`                                                 | text(4000)                               |          | yes       |          | -                                                                                |
| `fld_indexable`                                              | boolean                                  |          | yes       |          | -                                                                                |
| `fld_autocomp`                                               | enum(1) using `FLD_AUTOCOMP` list        | yes      | yes       |          | -                                                                                |
| `fld_groupby`                                                | boolean                                  |          | yes       |          | -                                                                                |
| `fld_updall`                                                 | boolean                                  |          | yes       |          | -                                                                                |
| `fld_case`                                                   | enum(1) using `FIELD_CASE` list          |          | yes       |          | -                                                                                |
| `fld_righttoleft`                                            | boolean                                  |          | yes       |          | -                                                                                |
| `fld_rendering`                                              | enum(5) using `FIELD_RENDERING_ENUM` list |          | yes       |          | -                                                                                |
| `fld_speech`                                                 | multi(10) using `FLD_SPEECH` list        |          | yes       |          | -                                                                                |
| `fld_calc`                                                   | text(4000)                               |          | yes       |          | -                                                                                |
| `fld_objlist`                                                | text(4000)                               |          | yes       |          | -                                                                                |
| `fld_settings`                                               | text(1000000)                            |          | yes       |          | -                                                                                |
| `fld_comment`                                                | text(4000)                               |          | yes       |          | -                                                                                |
| `fld_classification`                                         | multi(100) using `FLD_CLASSIFICATION` list |          | yes       |          | Field classification                                                             |
| `fld_anon`                                                   | enum(1) using `FIELD_ANON` list          |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `fld_incrementsyntax`                                        | regexp(100)                              |          | yes       |          | -                                                                                |

### Lists

* `FIELD_VISIBLE`
    - `4` Forbidden
    - `0` Hidden
    - `1` On list only
    - `2` On form only
    - `3` On form and list
* `FIELD_UPDATABLE`
    - `1` Always updatable (deprecated)
    - `0` Read only
    - `3` Updatable in edit list
    - `2` Updatable in form
    - `C` Editable by list cell
* `FIELD_RESEARCH`
    - `0` Pas de recherche
    - `1` Recherche simple
    - `2` Cases à cocher
    - `3` Liste à choix multiple
* `FIELD_RESEARCHREQ`
    - `0` Non obligatoire
    - `1` Semi-obligatoire
    - `2` Obligatoire
    - `3` Etendu
* `FIELD_SORT`
    - `0` None
    - `C` Code
    - `V` Label
    - `L` Code order
* `FIELD_LISTSUM`
    - `0` No
    - `1` Sum
    - `2` Avg
    - `3` Min
    - `4` Max
    - `5` Calcul
* `FLD_TRAY`
    - `1` Trays
    - `2` Lists
    - `3` Referenced lists
* `FIELD_TYPE`
    - `3` Short text < 4000
    - `13` Long text
    - `1` Integer
    - `2` Decimal
    - `26` BigDecimal
    - `4` Date
    - `5` Date and time
    - `6` Time
    - `7` Enumeration
    - `14` Multiple enumeration
    - `8` Boolean
    - `10` URL
    - `11` HTML content
    - `12` Email
    - `15` Validated text
    - `17` Document
    - `0` Internal ID
    - `24` Object
    - `9` Password
    - `19` External file
    - `20` Image
    - `21` Notepad
    - `22` Phone number
    - `23` Color
    - `25` Geographical coordinates
* `FLD_AUTOCOMP`
    - `0` No
    - `1` Yes
    - `2` Auto
* `FIELD_CASE`
    - `U` Majuscule
    - `L` Minuscule
    - `C` Initiale en capitale
* `FIELD_RENDERING_ENUM`
    - `SB` Liste simple ou multiple
    - `HCB` Horizontal check/radio
    - `VCB` Vertical check/radio
    - `PB` Pillbox
* `FLD_SPEECH`
    - `R` Recognition
    - `S` Speak
* `FLD_CLASSIFICATION`
    - `PERSONAL` Personal data
    - `CONFIDENTIAL` Confidential data
    - `INTIMATE` Intimate data
    - `CRYPTED` Crypted data into DB
* `FIELD_ANON`
    - `1` Null
    - `2` Random

### Custom actions

* `FIELD_CALC`: Apply calculation on objects containing the calculated field
* `FIELD_DFLT`: Apply default value to null column
* `FIELD_THUMBNAILS`: Rebuild all thumbnails of image field

`FieldBoolean` business object definition
-----------------------------------------

Boolean fields

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `fld_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `fld_dbname`                                                 | char(100)                                |          | yes       |          | -                                                                                |
| `fld_updatable`                                              | multi(10) using `FIELD_UPDATABLE` list   | yes      | yes       |          | -                                                                                |
| `fld_type`                                                   | enum(2) using `FIELD_TYPE` list          | yes      | yes       |          | -                                                                                |

### Lists

* `FIELD_UPDATABLE`
    - `1` Always updatable (deprecated)
    - `0` Read only
    - `3` Updatable in edit list
    - `2` Updatable in form
    - `C` Editable by list cell
* `FIELD_TYPE`
    - `3` Short text < 4000
    - `13` Long text
    - `1` Integer
    - `2` Decimal
    - `26` BigDecimal
    - `4` Date
    - `5` Date and time
    - `6` Time
    - `7` Enumeration
    - `14` Multiple enumeration
    - `8` Boolean
    - `10` URL
    - `11` HTML content
    - `12` Email
    - `15` Validated text
    - `17` Document
    - `0` Internal ID
    - `24` Object
    - `9` Password
    - `19` External file
    - `20` Image
    - `21` Notepad
    - `22` Phone number
    - `23` Color
    - `25` Geographical coordinates

`FieldHistoric` business object definition
------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `row_ref_id` link to **`Field`**                             | id                                       | yes*     |           |          | Record row ID                                                                    |
| `row_idx`                                                    | int(11)                                  | yes*     | yes       |          | History record index                                                             |
| `created_by_hist`                                            | char(100)                                | yes*     |           |          | Created by                                                                       |
| `created_dt_hist`                                            | datetime                                 | yes*     |           |          | Created date                                                                     |
| `fld_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `fld_dbname`                                                 | char(100)                                |          | yes       |          | -                                                                                |

`FieldList` business object definition
--------------------------------------

Lists of values

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `lov_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `lov_navbar`                                                 | enum(10) using `LOV_NAVBAR` list         |          | yes       |          | -                                                                                |
| `lov_navbar_opt`                                             | multi(100) using `LOV_NAVBAR_OPT` list   |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `lov_model_id` link to **`Model`**                           | id                                       |          | yes       |          | -                                                                                |
| _Ref. `lov_model_id.mod_name`_                               | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `lov_model_id.mod_image`_                              | _image_                                  |          |           |          | -                                                                                |

### Lists

* `LOV_NAVBAR`
    - `BREAD` Breadcrumb
    - `ARROW` Top arrows
    - `METRO` Metro line
* `LOV_NAVBAR_OPT`
    - `COUNT` Counter
    - `DATE` Date
    - `USER` User

### Custom actions

* `LovToObject`: 

`FieldListCode` business object definition
------------------------------------------

Lists of values' codes

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `lov_list_id` link to **`FieldList`**                        | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `lov_list_id.lov_name`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| `lov_code`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `lov_order_by`                                               | int(11)                                  | yes      | yes       |          | -                                                                                |
| `lov_label`                                                  | char(100)                                |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `lov_color`                                                  | color                                    |          | yes       |          | -                                                                                |
| `lov_color_bg`                                               | color                                    |          | yes       |          | -                                                                                |
| `lov_icon`                                                   | char(100)                                |          | yes       |          | -                                                                                |
| `lov_display`                                                | multi(10) using `LOV_SHOW` list          |          | yes       |          | -                                                                                |

### Lists

* `LOV_SHOW`
    - `I` Icon
    - `L` Label
    - `T` Tag

`FieldListLink` business object definition
------------------------------------------

Links between Lists of values

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `fll_objfield_id` link to **`ObjectFieldSystem`**            | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `fll_objfield_id.obf_object_id`_                       | _id_                                     |          |           |          | -                                                                                |
| _Ref. `obf_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `fll_objfield_id.obf_field_id`_                        | _id_                                     |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `fll_objfield_id.obf_order`_                           | _int(5)_                                 |          |           |          | -                                                                                |
| `fll_code_id` link to **`FieldListCode`**                    | id                                       | *        | yes       |          | -                                                                                |
| _Ref. `fll_code_id.lov_list_id`_                             | _id_                                     |          |           |          | -                                                                                |
| _Ref. `lov_list_id.lov_name`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `fll_code_id.lov_code`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `fll_code_id.lov_label`_                               | _char(100)_                              |          |           |          | -                                                                                |
| `fll_linked_id` link to **`ObjectFieldSystem`**              | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `fll_linked_id.obf_object_id`_                         | _id_                                     |          |           |          | -                                                                                |
| _Ref. `obf_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `fll_linked_id.obf_field_id`_                          | _id_                                     |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_type`_                               | _enum(2) using `FIELD_TYPE` list_        |          |           |          | -                                                                                |
| _Ref. `fll_linked_id.obf_order`_                             | _int(5)_                                 |          |           |          | -                                                                                |
| `fll_list_id` link to **`FieldList`**                        | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `fll_list_id.lov_name`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `FIELD_TYPE`
    - `3` Short text < 4000
    - `13` Long text
    - `1` Integer
    - `2` Decimal
    - `26` BigDecimal
    - `4` Date
    - `5` Date and time
    - `6` Time
    - `7` Enumeration
    - `14` Multiple enumeration
    - `8` Boolean
    - `10` URL
    - `11` HTML content
    - `12` Email
    - `15` Validated text
    - `17` Document
    - `0` Internal ID
    - `24` Object
    - `9` Password
    - `19` External file
    - `20` Image
    - `21` Notepad
    - `22` Phone number
    - `23` Color
    - `25` Geographical coordinates

`FieldListValue` business object definition
-------------------------------------------

Lists of values' translated values

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `lov_code_id` link to **`FieldListCode`**                    | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `lov_code_id.lov_list_id`_                             | _id_                                     |          |           |          | -                                                                                |
| _Ref. `lov_list_id.lov_name`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `lov_code_id.lov_code`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `lov_code_id.lov_order_by`_                            | _int(11)_                                |          |           |          | -                                                                                |
| `lov_lang`                                                   | enum(3) using `LANG_ALL` list            | yes*     | yes       |          | -                                                                                |
| `lov_value`                                                  | text(1000000)                            | yes      | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `LANG_ALL`
    - `ANY` All languages
    - `ENU` English language
    - `FRA` French language

`FieldStyle` business object definition
---------------------------------------

Field styles

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `sty_object`                                                 | char(100)                                | yes*     | yes       |          | -                                                                                |
| `sty_field`                                                  | char(100)                                | yes*     | yes       |          | -                                                                                |
| `sty_value`                                                  | char(50)                                 | yes*     | yes       |          | -                                                                                |
| `sty_vmin`                                                   | float(10, 2)                             |          | yes       |          | -                                                                                |
| `sty_vmax`                                                   | float(10, 2)                             |          | yes       |          | -                                                                                |
| `sty_style`                                                  | char(255)                                |          | yes       |          | -                                                                                |
| `sty_image`                                                  | char(255)                                |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`FieldType` business object definition
--------------------------------------

Field types

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `flt_code`                                                   | regexp(30)                               | yes*     | yes       |          | -                                                                                |
| `flt_method`                                                 | char(50)                                 |          | yes       |          | -                                                                                |
| `flt_regexp`                                                 | text(4000)                               |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`FtActions` business object definition
--------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftActCode`                                                  | char(100)                                | yes*     |           |          | -                                                                                |
| `ftActDate`                                                  | date                                     |          | yes       |          | -                                                                                |
| `ftActDocument`                                              | document                                 |          | yes       |          | -                                                                                |
| `ftActImage`                                                 | image                                    |          | yes       |          | -                                                                                |
| `ftActState`                                                 | enum(1) using `FT_ACT_STATE` list        | yes      | yes       |          | -                                                                                |

### Lists

* `FT_ACT_STATE`
    - `A` Step A
    - `B` Step B

### Custom actions

* `ActAskFields`: 
* `ActAsync`: 
* `ActConfirmFields`: 

`FtAttributes` business object definition
-----------------------------------------

Object showcasing all the possible attributes

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftAttrCode`                                                 | char(10)                                 | yes*     | yes       |          | -                                                                                |
| `ftAttrShortText`                                            | char(255)                                |          | yes       |          | -                                                                                |
| `ftAttrValidatedText`                                        | regexp(250)                              |          | yes       |          | -                                                                                |
| `ftAttrLongText`                                             | text(4000)                               |          | yes       |          | -                                                                                |
| `ftAttrLongTextEditor`                                       | text(4000)                               |          | yes       |          | -                                                                                |
| `ftAttrLongTextMarkdown`                                     | text(4000)                               |          | yes       |          | -                                                                                |
| `ftAttrLongTextGrid`                                         | text(4000)                               |          | yes       |          | -                                                                                |
| `ftAttrLongTextGridSource`                                   | text(4000)                               |          |           |          | -                                                                                |
| `ftAttrHtml`                                                 | html(100000)                             |          | yes       |          | -                                                                                |
| `ftAttrInteger`                                              | int(5)                                   |          | yes       |          | -                                                                                |
| `ftAttrIntegerMonetary`                                      | int(5)                                   |          | yes       |          | -                                                                                |
| `ftAttrIntegerPercentage`                                    | int(3)                                   |          | yes       |          | -                                                                                |
| `ftAttrIntegerEuro`                                          | int(5)                                   |          | yes       |          | -                                                                                |
| `ftAttrIntegerProgressBar`                                   | int(5)                                   |          | yes       |          | -                                                                                |
| `ftAttrIntegerStars`                                         | int(1)                                   |          | yes       |          | -                                                                                |
| `ftAttrIntegerSlider`                                        | int(2)                                   |          | yes       |          | -                                                                                |
| `ftAttrDecimal`                                              | float(10, 2)                             |          | yes       |          | -                                                                                |
| `ftAttrDecimalMonetary`                                      | float(10, 2)                             |          | yes       |          | -                                                                                |
| `ftAttrDecimalPercentage`                                    | float(6, 4)                              |          | yes       |          | -                                                                                |
| `ftAttrDecimalEuro`                                          | float(10, 2)                             |          | yes       |          | -                                                                                |
| `ftAttrDecimalProgressBar`                                   | float(15, 4)                             |          | yes       |          | -                                                                                |
| `ftAttrDecimalCalculator`                                    | float(10, 2)                             |          | yes       |          | -                                                                                |
| `ftAttrDate`                                                 | date                                     |          | yes       |          | -                                                                                |
| `ftAttrDateToMonth`                                          | date                                     |          | yes       |          | -                                                                                |
| `ftAttrDateToYear`                                           | date                                     |          | yes       |          | -                                                                                |
| `ftAttrTime`                                                 | time                                     |          | yes       |          | -                                                                                |
| `ftAttrTimeToMinute`                                         | time                                     |          | yes       |          | -                                                                                |
| `ftAttrTimeToHour`                                           | time                                     |          | yes       |          | -                                                                                |
| `ftAttrDateTime`                                             | datetime                                 |          | yes       |          | -                                                                                |
| `ftAttrDateTimeToMinute`                                     | datetime                                 |          | yes       |          | -                                                                                |
| `ftAttrDateTimeToHour`                                       | datetime                                 |          | yes       |          | -                                                                                |
| `ftAttrDateTimeToDay`                                        | datetime                                 |          | yes       |          | -                                                                                |
| `ftAttrDateTimeToMonth`                                      | datetime                                 |          | yes       |          | -                                                                                |
| `ftAttrDateTimeToYear`                                       | datetime                                 |          | yes       |          | -                                                                                |
| `ftAttrEnum`                                                 | enum(10) using `FTATTRENUM` list         |          | yes       |          | -                                                                                |
| `ftAttrEnumRadioHorizontal`                                  | enum(3) using `FTATTRENUMRADIOHORIZONTAL` list |          | yes       |          | -                                                                                |
| `ftAttrEnumCheckboxHorizontal`                               | enum(3) using `FTATTRENUMCHECKBOXHORIZONTAL` list |          | yes       |          | -                                                                                |
| `ftAttrEnumCheckboxVertical`                                 | enum(3) using `FTATTRENUMCHECKBOXVERTICAL` list |          | yes       |          | -                                                                                |
| `ftAttrEnumRadioVertical`                                    | enum(3) using `FTATTRENUMRADIOVERTICAL` list |          | yes       |          | -                                                                                |
| `ftAttrEnumPillbox`                                          | enum(100) using `FTATTRENUMPILLBOX` list |          | yes       |          | -                                                                                |
| `ftAttrEnumMulti`                                            | multi(100) using `FTATTRENUMMULTI` list  |          | yes       |          | -                                                                                |
| `ftAttrEnumMultiCheckboxHorizontal`                          | multi(5) using `FTATTRENUMMULTICHECKBOXHORIZONTAL` list |          | yes       |          | -                                                                                |
| `ftAttrEnumMultiCheckboxVertical`                            | enum(100) using `FTATTRENUMMULTICHECKBOXVERTICAL` list |          | yes       |          | -                                                                                |
| `ftAttrEnumMultiRadioHorizontal`                             | multi(5) using `FTATTRENUMMULTIRADIOHORIZONTAL` list |          | yes       |          | -                                                                                |
| `ftAttrEnumMultiRadioVertical`                               | enum(3) using `FTATTRENUMMULTIRADIOVERTICAL` list |          | yes       |          | -                                                                                |
| `ftAttrEnumMultiPillbox`                                     | multi(5) using `FTATTRENUMMULTIPILLBOX` list |          | yes       |          | -                                                                                |
| `ftAttrBoolean`                                              | boolean                                  |          | yes       |          | -                                                                                |
| `ftAttrBooleanCheckbox`                                      | boolean                                  |          | yes       |          | -                                                                                |
| `ftAttrBooleanCombobox`                                      | boolean                                  |          | yes       |          | -                                                                                |
| `ftAttrBooleanSlide`                                         | boolean                                  |          | yes       |          | -                                                                                |
| `ftAttrDocument`                                             | document                                 |          | yes       |          | -                                                                                |
| `ftAttrDocumentName`                                         | document                                 |          | yes       |          | -                                                                                |
| `ftAttrDocumentMultiBox`                                     | document                                 |          | yes       |          | -                                                                                |
| `ftAttrDocumentMultiList`                                    | document                                 |          | yes       |          | -                                                                                |
| `ftAttrExternalFile`                                         | extfile(100)                             |          | yes       |          | -                                                                                |
| `ftAttrImage`                                                | image                                    |          | yes       |          | -                                                                                |
| `ftAttrUrl`                                                  | url(500)                                 |          | yes       |          | -                                                                                |
| `ftAttrEmail`                                                | email(255)                               |          | yes       |          | -                                                                                |
| `ftAttrPassword`                                             | password(100)                            |          | yes       |          | -                                                                                |
| `ftAttrPhoneNumber`                                          | phone(100)                               |          | yes       |          | -                                                                                |
| `ftAttrColor`                                                | color                                    |          | yes       |          | -                                                                                |
| `ftAttrGeographicalCoordinates`                              | geocoords                                |          | yes       |          | -                                                                                |
| `ftAttrNotepad`                                              | notepad(2147483647)                      |          | yes       |          | -                                                                                |
| `ftAttrNotepadUserActivities`                                | notepad(2147483647)                      |          | yes       |          | -                                                                                |
| `ftAttrDateStart`                                            | date                                     |          | yes       |          | -                                                                                |
| `ftAttrDateEnd`                                              | date                                     |          | yes       |          | -                                                                                |
| `ftAttrHtmlReadOnly`                                         | html(100000)                             |          |           |          | -                                                                                |
| `ftAttrSignaturePad`                                         | image                                    |          | yes       |          | -                                                                                |

### Lists

* `FTATTRENUM`
    - `A` code A
    - `B` code B
    - `C` code C
* `FTATTRENUMRADIOHORIZONTAL`
    - `A` code A
    - `B` code B
    - `C` code C
* `FTATTRENUMCHECKBOXHORIZONTAL`
    - `A` code A
    - `B` code B
    - `C` code C
* `FTATTRENUMCHECKBOXVERTICAL`
    - `A` code A
    - `B` code B
    - `C` code C
* `FTATTRENUMRADIOVERTICAL`
    - `A` code A
    - `B` code B
    - `C` code C
* `FTATTRENUMPILLBOX`
    - `A` code A
    - `B` code B
    - `C` code C
* `FTATTRENUMMULTI`
    - `A` code A
    - `B` code B
    - `C` code C
* `FTATTRENUMMULTICHECKBOXHORIZONTAL`
    - `A` code A
    - `B` code B
    - `C` code C
* `FTATTRENUMMULTICHECKBOXVERTICAL`
    - `A` code A
    - `B` code B
    - `C` code C
* `FTATTRENUMMULTIRADIOHORIZONTAL`
    - `A` code A
    - `B` code B
    - `C` code C
* `FTATTRENUMMULTIRADIOVERTICAL`
    - `A` code A
    - `B` code B
    - `C` code C
* `FTATTRENUMMULTIPILLBOX`
    - `A` code A
    - `B` code B
    - `C` code C

`FtCustomUser` business object definition
-----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftUsrType`                                                  | enum(10) using `FTUSRTYPE` list          | yes      | yes       |          | -                                                                                |

### Lists

* `FTUSRTYPE`
    - `FT_ADMIN` SimFeatures Admin
    - `FT_READ` SimFeatures Reader

`FtListItem` business object definition
---------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftLstCode`                                                  | char(100)                                | yes*     |           |          | -                                                                                |
| `ftLstOrder`                                                 | int(10)                                  |          | yes       |          | -                                                                                |
| `ftLstType`                                                  | enum(10) using `FT_LST_TYPE` list        |          | yes       |          | -                                                                                |
| `ftLstDescription`                                           | html(5000)                               |          | yes       |          | -                                                                                |
| `ftLstImage`                                                 | image                                    |          | yes       |          | -                                                                                |

### Lists

* `FT_LST_TYPE`
    - `A` code A
    - `B` code B
    - `C` code C

`FtM2m` business object definition
----------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftM2mId` link to **`FtRelationshipM2m`**                    | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `ftM2mId.ftM2mCode`_                                   | _char(100)_                              |          |           |          | -                                                                                |
| `ftM2mcId` link to **`FtM2mChild`**                          | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `ftM2mcId.ftM2mcCode`_                                 | _char(100)_                              |          |           |          | -                                                                                |

`FtM2mChild` business object definition
---------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftM2mcCode`                                                 | char(100)                                | yes*     | yes       |          | -                                                                                |

`FtNotification` business object definition
-------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftNtfCode`                                                  | char(100)                                | yes*     |           |          | -                                                                                |

`FtO2mChild` business object definition
---------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftO2mcCode`                                                 | char(20)                                 | yes*     | yes       |          | -                                                                                |
| `ftO2mcO2mId` link to **`FtRelationshipO2m`**                | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `ftO2mcO2mId.ftO2mCode`_                               | _char(30)_                               |          |           |          | -                                                                                |
| _Ref. `ftO2mcO2mId.ftO2mDescription`_                        | _char(100)_                              |          |           |          | -                                                                                |

`FtPublications` business object definition
-------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftPubCode`                                                  | char(100)                                | *        |           |          | -                                                                                |
| `ftPubHtml`                                                  | text(4000)                               |          | yes       |          | -                                                                                |
| `ftPubFile`                                                  | document                                 |          | yes       |          | -                                                                                |

`FtReflexiveMany` business object definition
--------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftRxmCode`                                                  | char(100)                                | yes*     | yes       |          | -                                                                                |
| `ftRxmId` link to **`FtReflexiveMany`**                      | id                                       |          | yes       |          | -                                                                                |

`FtRelationshipM2m` business object definition
----------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftM2mCode`                                                  | char(100)                                | yes*     | yes       |          | -                                                                                |

`FtRelationshipO2m` business object definition
----------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftO2mCode`                                                  | char(30)                                 | yes*     |           |          | -                                                                                |
| `ftO2mDescription`                                           | char(100)                                |          | yes       |          | -                                                                                |

`FtRxmLink` business object definition
--------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftRxlRxm1` link to **`FtReflexiveMany`**                    | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `ftRxlRxm1.ftRxmCode`_                                 | _char(100)_                              |          |           |          | -                                                                                |
| `ftRxlRxm2` link to **`FtReflexiveMany`**                    | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `ftRxlRxm2.ftRxmCode`_                                 | _char(100)_                              |          |           |          | -                                                                                |

`FtSearch` business object definition
-------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftSchCode`                                                  | char(20)                                 | yes*     | yes       |          | -                                                                                |
| `ftSchDate`                                                  | date                                     |          | yes       |          | -                                                                                |
| `ftSchCoordinates`                                           | geocoords                                |          | yes       |          | -                                                                                |
| `ftSchSrfId` link to **`FtSearchReference`**                 | id                                       |          | yes       |          | -                                                                                |
| _Ref. `ftSchSrfId.ftSrfCode`_                                | _char(100)_                              |          |           |          | -                                                                                |
| `ftSchFormField`                                             | char(100)                                |          | yes       |          | -                                                                                |

`FtSearchReference` business object definition
----------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftSrfCode`                                                  | char(100)                                | yes*     | yes       |          | -                                                                                |

`FtSelectObject` business object definition
-------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftSlcField1`                                                | char(255)                                | yes      | yes       |          | -                                                                                |
| `ftSlcField2`                                                | char(255)                                |          | yes       |          | -                                                                                |
| `ftSlcFieldDt`                                               | date                                     |          | yes       |          | -                                                                                |

`FtStates` business object definition
-------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftStOrder`                                                  | int(11)                                  | yes      | yes       |          | -                                                                                |
| `ftStCode`                                                   | char(100)                                | yes*     |           |          | -                                                                                |
| `ftStState`                                                  | enum(10) using `FT_ST_STATE` list        | yes      | yes       |          | -                                                                                |

### Lists

* `FT_ST_STATE`
    - `INITIAL` Initial State
    - `A` State A
    - `OPTIONAL` Optional State
    - `B` State B
    - `EXCEPTION` Exceptional State
    - `FINAL` Final State

`FtStatesHistoric` business object definition
---------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `row_ref_id` link to **`FtStates`**                          | id                                       | yes*     |           |          | Record row ID                                                                    |
| _Ref. `row_ref_id.ftStCode`_                                 | _char(100)_                              |          |           |          | -                                                                                |
| `row_idx`                                                    | int(11)                                  | yes*     | yes       |          | History record index                                                             |
| `created_by_hist`                                            | char(100)                                | yes*     |           |          | Created by                                                                       |
| `created_dt_hist`                                            | datetime                                 | yes*     |           |          | Created date                                                                     |
| `ftStCode`                                                   | char(100)                                | yes*     |           |          | -                                                                                |
| `ftStState`                                                  | enum(10) using `FT_ST_STATE` list        | yes      | yes       |          | -                                                                                |

### Lists

* `FT_ST_STATE`
    - `INITIAL` Initial State
    - `A` State A
    - `OPTIONAL` Optional State
    - `B` State B
    - `EXCEPTION` Exceptional State
    - `FINAL` Final State

`FtTag` business object definition
----------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftTagName`                                                  | char(50)                                 | yes*     | yes       |          | -                                                                                |

`FtTaggedObject` business object definition
-------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftTgoCode`                                                  | char(100)                                | yes*     | yes       |          | -                                                                                |
| `ftTgoStatus`                                                | char(10)                                 |          | yes       |          | -                                                                                |

`FtTgoTag` business object definition
-------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftTgotagTgoId` link to **`FtTaggedObject`**                 | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `ftTgotagTgoId.ftTgoCode`_                             | _char(100)_                              |          |           |          | -                                                                                |
| `ftTgotagTagId` link to **`FtTag`**                          | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `ftTgotagTagId.ftTagName`_                             | _char(50)_                               |          |           |          | -                                                                                |

`Function` business object definition
-------------------------------------

Functions

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `fct_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `fct_object_id` link to **`ObjectInternal`**                 | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `fct_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `fct_object_id.obo_type`_                              | _char(1)_                                |          |           |          | -                                                                                |
| `fct_function`                                               | enum(5) using `FUNCTION` list            | yes      | yes       |          | -                                                                                |
| `fct_action_id` link to **`Action`**                         | id                                       |          | yes       |          | -                                                                                |
| _Ref. `fct_action_id.act_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `fct_view_id` link to **`ViewObject`**                       | id                                       |          | yes       |          | -                                                                                |
| _Ref. `fct_view_id.viw_name`_                                | _char(100)_                              |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `FUNCTION`
    - `L` Lecture seule
    - `C` Lecture et création
    - `M` Lecture et modification
    - `S` Lecture et suppression
    - `CM` Lecture, création et modification
    - `CS` Lecture, création et suppression
    - `MS` Lecture, modification et suppression
    - `CMS` Lecture, création, modification et suppression
    - `A` Action
    - `V` Vue

`FunctionVisibility` business object definition
-----------------------------------------------

Function visibilities

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `fcv_function_id` link to **`Function`**                     | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `fcv_function_id.fct_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| `fcv_name`                                                   | regexp(50)                               | yes*     | yes       |          | -                                                                                |
| `fcv_type`                                                   | enum(1) using `FCT_VISIBILITY_TYPE` list | yes      | yes       |          | -                                                                                |
| `fcv_owner`                                                  | boolean                                  |          | yes       |          | -                                                                                |
| `fcv_group`                                                  | boolean                                  |          | yes       |          | -                                                                                |
| `fcv_org_id` link to **`Group`**                             | id                                       |          | yes       |          | -                                                                                |
| _Ref. `fcv_org_id.grp_name`_                                 | _regexp(100)_                            |          |           |          | -                                                                                |
| `fcv_sql`                                                    | text(1000000)                            |          | yes       |          | -                                                                                |
| `fcv_bsh`                                                    | text(1000000)                            |          | yes       |          | -                                                                                |
| `fcv_method`                                                 | char(50)                                 |          | yes       |          | -                                                                                |
| `fcv_desc`                                                   | text(4000)                               |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `FCT_VISIBILITY_TYPE`
    - `L` Lecture
    - `C` 
    - `M` Modification
    - `S` Suppression
    - `A` Action

`Grant` business object definition
----------------------------------

Grants on functions

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `grt_group_id` link to **`Group`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `grt_group_id.grp_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `grt_function_id` link to **`Function`**                     | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `grt_function_id.fct_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `grt_function_id.fct_object_id`_                       | _id_                                     |          |           |          | -                                                                                |
| _Ref. `fct_object_id.obo_type`_                              | _char(1)_                                |          |           |          | -                                                                                |
| _Ref. `fct_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `grt_function_id.fct_action_id`_                       | _id_                                     |          |           |          | -                                                                                |
| _Ref. `fct_action_id.act_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `grt_function_id.fct_function`_                        | _enum(5) using `FUNCTION` list_          |          |           |          | -                                                                                |
| `grt_activ`                                                  | boolean                                  | yes      | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `FUNCTION`
    - `L` Lecture seule
    - `C` Lecture et création
    - `M` Lecture et modification
    - `S` Lecture et suppression
    - `CM` Lecture, création et modification
    - `CS` Lecture, création et suppression
    - `MS` Lecture, modification et suppression
    - `CMS` Lecture, création, modification et suppression
    - `A` Action
    - `V` Vue

`Group` business object definition
----------------------------------

Groups of rights

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `grp_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `grp_comment`                                                | text(4000)                               |          | yes       |          | -                                                                                |
| `grp_type`                                                   | multi(100) using `GROUP_TYPE` list       | yes      | yes       |          | -                                                                                |
| `grp_parent_id` link to **`Group`**                          | id                                       |          | yes       |          | -                                                                                |
| _Ref. `grp_parent_id.grp_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `grp_home_id` link to **`ViewHome`**                         | id                                       |          | yes       |          | -                                                                                |
| _Ref. `grp_home_id.viw_name`_                                | _char(100)_                              |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `GROUP_TYPE`
    - `G` Groupe de droits
    - `D` Groupe documentaire
    - `W` Groupe workflow
    - `R` Service à souscrire
    - `N` Notification
    - `B` Dashboard sharing

`Guide` business object definition
----------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `gde_name`                                                   | char(100)                                | yes*     | yes       |          | -                                                                                |
| `gde_target`                                                 | object                                   | yes      | yes       |          | -                                                                                |
| `gde_order`                                                  | int(11)                                  |          | yes       |          | -                                                                                |
| `gde_from_dt`                                                | date                                     |          | yes       |          | -                                                                                |
| `gde_to_dt`                                                  | date                                     |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `gde_tour`                                                   | text(10000000)                           |          | yes       |          | -                                                                                |
| `gde_launch`                                                 | boolean                                  |          | yes       |          | -                                                                                |

`GuideUsage` business object definition
---------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `gdu_date`                                                   | datetime                                 | yes*     | yes       |          | -                                                                                |
| `gdu_guide_id` link to **`Guide`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `gdu_guide_id.gde_name`_                               | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `gdu_guide_id.gde_target`_                             | _object_                                 |          |           |          | -                                                                                |
| `gdu_last_step`                                              | char(100)                                |          | yes       |          | -                                                                                |
| `gdu_user_id` link to **`User`**                             | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `gdu_user_id.usr_login`_                               | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| _Ref. `gdu_user_id.usr_last_name`_                           | _char(50)_                               |          |           | yes      | _Last name_                                                                      |
| _Ref. `gdu_user_id.usr_first_name`_                          | _char(50)_                               |          |           | yes      | _First name_                                                                     |

`LicenseKey` business object definition
---------------------------------------

License keys

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `lky_type`                                                   | enum(1) using `LKEY_TYPE` list           | yes      | yes       |          | -                                                                                |
| `lky_editor`                                                 | char(50)                                 | yes      |           |          | -                                                                                |
| `lky_product`                                                | char(50)                                 | yes      | yes       |          | -                                                                                |
| `lky_version`                                                | char(10)                                 | yes      | yes       |          | -                                                                                |
| `lky_owner_name`                                             | char(50)                                 | yes      | yes       |          | -                                                                                |
| `lky_sys_name`                                               | char(50)                                 | yes      | yes       |          | -                                                                                |
| `lky_ip`                                                     | char(255)                                |          | yes       |          | -                                                                                |
| `lky_activ_dt`                                               | date                                     | yes*     | yes       |          | -                                                                                |
| `lky_expir_dt`                                               | date                                     |          | yes       |          | -                                                                                |
| `lky_max_user`                                               | int(10)                                  |          | yes       |          | -                                                                                |
| `lky_nb_user`                                                | int(10)                                  |          |           |          | -                                                                                |
| `lky_max_obj`                                                | int(11)                                  |          | yes       |          | -                                                                                |
| `lky_nb_obj`                                                 | int(11)                                  |          |           |          | -                                                                                |
| `lky_key`                                                    | char(50)                                 | yes      | yes       |          | -                                                                                |

### Lists

* `LKEY_TYPE`
    - `A` Serveur et utilisateur
    - `U` Utilisateur uniquement
    - `S` Serveur uniquement
    - `F` Floating license

### Custom actions

* `LicenseKeyImport`: 
* `LicenseReminder`: 

`Link` business object definition
---------------------------------

Links between business objects

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `obf_ref_object_id` link to **`ObjectInternal`**             | id                                       |          | yes       |          | -                                                                                |
| _Ref. `obf_ref_object_id.obo_name`_                          | _regexp(100)_                            |          |           |          | -                                                                                |
| `obf_order`                                                  | int(5)                                   | yes*     | yes       |          | -                                                                                |
| `obf_ref_order`                                              | int(5)                                   |          | yes       |          | -                                                                                |
| `obf_object_id` link to **`ObjectSystem`**                   | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `obf_object_id.obj_name`_                              | _regexp(50)_                             |          |           |          | -                                                                                |
| `obf_field_id` link to **`Field`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `obf_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_dbname`_                             | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_updatable`_                          | _multi(10) using `FIELD_UPDATABLE` list_ |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_required`_                           | _boolean_                                |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_fonctid`_                            | _boolean_                                |          |           |          | -                                                                                |
| `obf_cascad`                                                 | enum(1) using `DEL_CASCADE` list         |          | yes       |          | -                                                                                |
| `obf_anon`                                                   | boolean                                  |          | yes       |          | -                                                                                |
| `obf_card`                                                   | char(10)                                 | yes      | yes       |          | -                                                                                |
| `obf_query`                                                  | text(4000)                               |          | yes       |          | -                                                                                |
| `obf_filters`                                                | text(1000000)                            |          | yes       |          | -                                                                                |
| `obf_visible`                                                | boolean                                  | yes      | yes       |          | -                                                                                |
| `obf_ref_export`                                             | boolean                                  | yes      | yes       |          | -                                                                                |
| `obf_copy`                                                   | boolean                                  | yes      | yes       |          | -                                                                                |
| `obf_associate`                                              | enum(1) using `BTN_VIS` list             |          | yes       |          | -                                                                                |
| `obf_inline`                                                 | boolean                                  |          | yes       |          | -                                                                                |
| `obf_rendering`                                              | enum(1) using `LINK_RENDERING` list      |          | yes       |          | -                                                                                |
| `obf_treedepth`                                              | int(10)                                  |          | yes       |          | -                                                                                |
| `obf_redolog`                                                | multi(10) using `LINK_HISTORY` list      |          | yes       |          | -                                                                                |
| `obf_area_id` link to **`ObjectFieldArea`**                  | id                                       |          | yes       |          | -                                                                                |
| _Ref. `obf_area_id.ofa_name`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `obf_area_id.ofa_position`_                            | _int(3)_                                 |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `FIELD_UPDATABLE`
    - `1` Always updatable (deprecated)
    - `0` Read only
    - `3` Updatable in edit list
    - `2` Updatable in form
    - `C` Editable by list cell
* `DEL_CASCADE`
    - `R` Impossible si référencé
    - `N` Mettre la référence à null
    - `C` Cascade
    - `Z` Ignore
* `BTN_VIS`
    - `1` Visible
    - `0` Hidden
    - `P` Plus
* `LINK_RENDERING`
    - `L` List
    - `P` Pillbox
    - `C` Pillbox with creation
* `LINK_HISTORY`
    - `1` Redolog
    - `2` History

`LinkMap` business object definition
------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `lmp_link_id` link to **`Link`**                             | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `lmp_link_id.obf_ref_object_id`_                       | _id_                                     |          |           |          | -                                                                                |
| _Ref. `obf_ref_object_id.obo_name`_                          | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `lmp_link_id.obf_object_id`_                           | _id_                                     |          |           |          | -                                                                                |
| _Ref. `obf_object_id.obj_name`_                              | _regexp(50)_                             |          |           |          | -                                                                                |
| _Ref. `lmp_link_id.obf_field_id`_                            | _id_                                     |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `lmp_link_id.obf_order`_                               | _int(5)_                                 |          |           |          | -                                                                                |
| `lmp_obf_id` link to **`ObjectFieldSystem`**                 | id                                       |          | yes       |          | -                                                                                |
| _Ref. `lmp_obf_id.obf_object_id`_                            | _id_                                     |          |           |          | -                                                                                |
| _Ref. `obf_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `lmp_obf_id.obf_field_id`_                             | _id_                                     |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `lmp_obf_id.obf_order`_                                | _int(5)_                                 |          |           |          | -                                                                                |
| `lmp_value`                                                  | char(50)                                 |          | yes       |          | -                                                                                |
| `lmp_type`                                                   | enum(1) using `LDTM_TYPE` list           | yes      | yes       |          | -                                                                                |
| `lmp_obfmap_id` link to **`ObjectFieldSystem`**              | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `lmp_obfmap_id.obf_object_id`_                         | _id_                                     |          |           |          | -                                                                                |
| _Ref. `obf_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `lmp_obfmap_id.obf_field_id`_                          | _id_                                     |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `lmp_obfmap_id.obf_order`_                             | _int(5)_                                 |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `LDTM_TYPE`
    - `1` Entrant

`ListOfValue` business object definition
----------------------------------------

Static texts

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `lov_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `lov_code`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `lov_lang`                                                   | enum(3) using `LANG_ALL` list            | yes*     | yes       |          | -                                                                                |
| `lov_value`                                                  | text(1000000)                            | yes      | yes       |          | -                                                                                |
| `lov_order_by`                                               | int(11)                                  | yes      | yes       |          | -                                                                                |
| `lov_event_id` link to **`LogEvent`**                        | id                                       |          | yes       |          | -                                                                                |
| _Ref. `lov_event_id.lev_code`_                               | _char(20)_                               |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `LANG_ALL`
    - `ANY` All languages
    - `ENU` English language
    - `FRA` French language

`LogEvent` business object definition
-------------------------------------

Log events

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `lev_code`                                                   | char(20)                                 | yes*     | yes       |          | -                                                                                |
| `lev_type`                                                   | enum(1) using `LEV_TYPE` list            | yes      | yes       |          | -                                                                                |
| `lev_level`                                                  | enum(1) using `LEV_LEVEL` list           | yes      | yes       |          | -                                                                                |
| `lev_canal`                                                  | multi(10) using `LEV_CANAL` list         | yes      | yes       |          | Canaux de sortie de l'évenement                                                  |
| `lev_label`                                                  | char(100)                                |          | yes       |          | -                                                                                |
| `lev_enabled`                                                | boolean                                  | yes      | yes       |          | -                                                                                |
| `lev_depth`                                                  | int(11)                                  |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `LEV_TYPE`
    - `M` Message
    - `S` Session
    - `D` Document
    - `R` Référentiel
    - `Q` Requête SQL système
    - `U` Requête SQL métier
* `LEV_LEVEL`
    - `F` Fatal
    - `E` Erreur
    - `W` Avertissement
    - `I` Information
    - `D` Trace
* `LEV_CANAL`
    - `L` Log4j serveur
    - `D` Base de données

### Custom actions

* `reloadLogEvent`: Recharge la liste des événements de log

`LogEventText` business object definition
-----------------------------------------

Log events texts

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `lov_name_text`                                              | regexp(30)                               | *        |           |          | -                                                                                |
| `lov_code`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `lov_lang`                                                   | enum(3) using `LANG_ALL` list            | yes*     | yes       |          | -                                                                                |
| `lov_value`                                                  | text(1000000)                            | yes      | yes       |          | -                                                                                |
| `lov_order_by`                                               | int(11)                                  | yes      | yes       |          | -                                                                                |
| `lov_event_id` link to **`LogEvent`**                        | id                                       |          | yes       |          | -                                                                                |
| _Ref. `lov_event_id.lev_code`_                               | _char(20)_                               |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `LANG_ALL`
    - `ANY` All languages
    - `ENU` English language
    - `FRA` French language

`Map` business object definition
--------------------------------

Menu principal

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `map_domain_id` link to **`Domain`**                         | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `map_domain_id.obd_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `map_object`                                                 | object                                   | *        | yes       |          | -                                                                                |
| `map_order`                                                  | int(11)                                  | yes*     | yes       |          | -                                                                                |
| `map_ext`                                                    | boolean                                  |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`Model` business object definition
----------------------------------

Data model

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `mod_name`                                                   | char(100)                                | yes*     | yes       |          | -                                                                                |
| `mod_template_id` link to **`ModelTemplate`**                | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `mod_template_id.mtp_name`_                            | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `mod_template_id.mtp_type`_                            | _enum(1) using `MOD_TYPE` list_          |          |           |          | -                                                                                |
| `mod_json`                                                   | text(1000000)                            |          | yes       |          | -                                                                                |
| `mod_doc`                                                    | document                                 |          | yes       |          | -                                                                                |
| `mod_image`                                                  | image                                    |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `MOD_TYPE`
    - `M` Model
    - `D` Data
    - `H` Physical
    - `R` Rights
    - `S` States
    - `P` Process

### Custom actions

* `ModelDerivate`: 
* `ModelDerivate`: 

`ModelData` business object definition
--------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|

`ModelItem` business object definition
--------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `mdi_model_id` link to **`Model`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `mdi_model_id.mod_name`_                               | _char(100)_                              |          |           |          | -                                                                                |
| `mdi_target`                                                 | object                                   | yes*     | yes       |          | -                                                                                |
| `mdi_type`                                                   | enum(1) using `MODEL_ITEM_TYPE` list     | yes      | yes       |          | -                                                                                |

### Lists

* `MODEL_ITEM_TYPE`
    - `N` Node
    - `C` Container
    - `I` Content
    - `L` Link

`ModelLinkMeta` business object definition
------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `obf_object_id`                                              | id                                       | yes*     | yes       |          | -                                                                                |
| `obj_name`                                                   | regexp(50)                               | yes*     | yes       |          | -                                                                                |
| `obf_ref_object_id`                                          | id                                       |          | yes       |          | -                                                                                |
| `obo_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |

`ModelTemplate` business object definition
------------------------------------------

Template de modèle

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `mtp_name`                                                   | char(100)                                | yes*     | yes       |          | -                                                                                |
| `mtp_type`                                                   | enum(1) using `MOD_TYPE` list            | yes      | yes       |          | -                                                                                |
| `mtp_class`                                                  | char(128)                                |          | yes       |          | -                                                                                |
| `mtp_script_id`                                              | document                                 |          | yes       |          | Model template implementation                                                    |
| `mtp_use_grid`                                               | boolean                                  | yes      | yes       |          | -                                                                                |
| `mtp_use_title`                                              | boolean                                  | yes      | yes       |          | -                                                                                |
| `mtp_use_note`                                               | boolean                                  | yes      | yes       |          | -                                                                                |
| `mtp_use_bkg`                                                | boolean                                  | yes      | yes       |          | -                                                                                |
| `mtp_use_ctn`                                                | boolean                                  | yes      | yes       |          | -                                                                                |
| `mtp_use_tree`                                               | boolean                                  | yes      | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `MOD_TYPE`
    - `M` Model
    - `D` Data
    - `H` Physical
    - `R` Rights
    - `S` States
    - `P` Process

`ModelTemplateContent` business object definition
-------------------------------------------------

Contenu

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `mtc_name`                                                   | char(100)                                | yes*     | yes       |          | -                                                                                |
| `mtc_tpl_object_id` link to **`ModelTemplateObject`**        | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `mtc_tpl_object_id.mto_name`_                          | _char(100)_                              |          |           |          | -                                                                                |
| `mtc_order`                                                  | int(11)                                  | yes      | yes       |          | -                                                                                |
| _Ref. `mtc_tpl_object_id.mto_template_id`_                   | _id_                                     |          |           |          | -                                                                                |
| _Ref. `mto_template_id.mtp_name`_                            | _char(100)_                              |          |           |          | -                                                                                |
| `mtc_parentfield_id` link to **`Field`**                     | id                                       |          | yes       |          | -                                                                                |
| _Ref. `mtc_parentfield_id.fld_name`_                         | _regexp(100)_                            |          |           |          | -                                                                                |
| `mtc_content_id` link to **`ObjectInternal`**                | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `mtc_content_id.obo_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| `mtc_confield_id` link to **`Field`**                        | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `mtc_confield_id.fld_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| `mtc_relation_id` link to **`ObjectInternal`**               | id                                       |          | yes       |          | -                                                                                |
| _Ref. `mtc_relation_id.obo_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| `mtc_rel_parfield_id` link to **`Field`**                    | id                                       |          | yes       |          | -                                                                                |
| _Ref. `mtc_rel_parfield_id.fld_name`_                        | _regexp(100)_                            |          |           |          | -                                                                                |
| `mtc_rel_confield_id` link to **`Field`**                    | id                                       |          | yes       |          | -                                                                                |
| _Ref. `mtc_rel_confield_id.fld_name`_                        | _regexp(100)_                            |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`ModelTemplateGroup` business object definition
-----------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `mtg_template_id` link to **`ModelTemplate`**                | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `mtg_template_id.mtp_name`_                            | _char(100)_                              |          |           |          | -                                                                                |
| `mtg_group_id` link to **`Group`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `mtg_group_id.grp_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`ModelTemplateLink` business object definition
----------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `mtl_template_id` link to **`ModelTemplate`**                | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `mtl_template_id.mtp_name`_                            | _char(100)_                              |          |           |          | -                                                                                |
| `mtl_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `mtl_type`                                                   | enum(1) using `MODEL_LINK_TYPE` list     | yes      | yes       |          | -                                                                                |
| `mtl_cc_type`                                                | boolean                                  |          | yes       |          | -                                                                                |
| `mtl_fromobj_id` link to **`ObjectInternal`**                | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `mtl_fromobj_id.obo_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| `mtl_fromfield_id` link to **`Field`**                       | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `mtl_fromfield_id.fld_name`_                           | _regexp(100)_                            |          |           |          | -                                                                                |
| `mtl_toobj_id` link to **`ObjectInternal`**                  | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `mtl_toobj_id.obo_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `mtl_tofield_id` link to **`Field`**                         | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `mtl_tofield_id.fld_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| `mtl_link_id` link to **`ObjectInternal`**                   | id                                       |          | yes       |          | -                                                                                |
| _Ref. `mtl_link_id.obo_name`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| `mtl_linkfrom_id` link to **`Field`**                        | id                                       |          | yes       |          | -                                                                                |
| _Ref. `mtl_linkfrom_id.fld_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| `mtl_linkto_id` link to **`Field`**                          | id                                       |          | yes       |          | -                                                                                |
| _Ref. `mtl_linkto_id.fld_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `mtl_showlabel`                                              | boolean                                  |          | yes       |          | -                                                                                |
| `mtl_cc_label`                                               | boolean                                  |          | yes       |          | -                                                                                |
| `mtl_curved`                                                 | boolean                                  |          | yes       |          | -                                                                                |
| `mtl_cc_curved`                                              | boolean                                  |          | yes       |          | -                                                                                |
| `mtl_bridge`                                                 | boolean                                  |          | yes       |          | -                                                                                |
| `mtl_cc_bridge`                                              | boolean                                  |          | yes       |          | -                                                                                |
| `mtl_render`                                                 | enum(2) using `MODEL_LINK_RENDER` list   |          | yes       |          | -                                                                                |
| `mtl_cc_render`                                              | boolean                                  |          | yes       |          | -                                                                                |
| `mtl_thickness`                                              | float(7, 2) using `ACTIVITY_STATUS` list |          | yes       |          | -                                                                                |
| `mtl_cc_thick`                                               | boolean                                  |          | yes       |          | -                                                                                |
| `mtl_color`                                                  | color                                    |          | yes       |          | -                                                                                |
| `mtl_cc_color`                                               | boolean                                  |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `MODEL_LINK_TYPE`
    - `0` Trait - Lien simple
    - `1` Flèche - Référence
    - `2` Triangle - Héritage
    - `3` Losange noir - Composition
    - `4` Losange blanc - Agrégation
    - `5` Flèche hachurée - Lien virtuel
    - `6` Patte d'oie - Relation
* `MODEL_LINK_RENDER`
    - `0` Free
    - `1` Auto
    - `2` Top / Bottom
    - `3` Left / Right
    - `4` Vert / Horiz
    - `5` Horiz / Vert

`ModelTemplateObject` business object definition
------------------------------------------------

Objet du modèle

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `mto_name`                                                   | char(100)                                | yes*     | yes       |          | -                                                                                |
| `mto_template_id` link to **`ModelTemplate`**                | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `mto_template_id.mtp_name`_                            | _char(100)_                              |          |           |          | -                                                                                |
| `mto_object_id` link to **`ObjectInternal`**                 | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `mto_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `mto_type`                                                   | enum(1) using `MDL_OBJ_TYPE` list        | yes      | yes       |          | -                                                                                |
| `mto_show_field`                                             | enum(1) using `MODEL_SHOW_FIELD` list    |          | yes       |          | -                                                                                |
| `mto_color`                                                  | color                                    |          | yes       |          | -                                                                                |
| `mto_radius`                                                 | int(2)                                   |          | yes       |          | -                                                                                |
| `mto_shadow`                                                 | boolean                                  |          | yes       |          | -                                                                                |
| `mto_cps_field`                                              | boolean                                  |          | yes       |          | -                                                                                |
| `mto_cps_cont`                                               | boolean                                  |          | yes       |          | -                                                                                |
| `mto_resizable`                                              | boolean                                  |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `MDL_OBJ_TYPE`
    - `O` Objet
    - `C` Conteneur
* `MODEL_SHOW_FIELD`
    - `0` Aucun
    - `1` Résumé
    - `2` Tous

`Module` business object definition
-----------------------------------

Modules

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `mdl_name`                                                   | regexp(100)                              | yes*     | yes       |          | Module name                                                                      |
| `mdl_prefix`                                                 | char(25)                                 |          | yes       |          | -                                                                                |
| `mdl_version`                                                | char(50)                                 | yes      | yes       |          | Module version                                                                   |
| `mdl_type`                                                   | enum(1) using `MDL_TYPE` list            |          | yes       |          | -                                                                                |
| `mdl_xml`                                                    | document                                 |          | yes       |          | Module file                                                                      |
| `mdl_icon`                                                   | image                                    |          | yes       |          | -                                                                                |
| `mdl_url`                                                    | text(4000)                               |          | yes       |          | Module settings                                                                  |
| `mdl_comment`                                                | text(4000)                               |          | yes       |          | Module comments                                                                  |
| `mdl_autoupd`                                                | boolean                                  |          | yes       |          | Auto-update module?                                                              |
| `mdl_lastupd`                                                | datetime                                 |          |           |          | Date of last module save                                                         |
| `mdl_lastparam_dt`                                           | datetime                                 |          |           |          | Date of last update on module                                                    |
| `mdl_parent_vk` link to **`Module`**                         | id                                       |          |           |          | Module dependency                                                                |

### Lists

* `MDL_TYPE`
    - `S` System
    - `X` Addon
    - `A` Application
    - `C` Application component
    - `M` Common
    - `T` Tools
    - `W` Services
    - `D` Data

### Custom actions

* `BUILD_SQL`: SQL generation
* `BUILD_SQL`: SQL generation
* `ModuleExportJSONArchive`: 
* `ModuleExportJSONArchiveExpl`: 
* `Module-importFromGit`: Create a module from a Git repository
* `ModuleAutoUpdate`: 
* `ModuleDiffApply`: 
* `ModuleDiffPatch`: 
* `ModuleDiffTree`: 
* `ModuleExportData`: 
* `ModuleExportData`: 
* `ModuleExportJSON`: 
* `ModuleExportJSON`: 
* `ModuleExportXML`: 
* `ModuleExportXML`: 
* `ModuleExportXMLArchive`: 
* `ModuleExportXMLArchive`: 
* `ModuleExportXMLArchiveExpl`: 
* `ModuleGenarateMDDocument-A`: 
* `ModuleHistoricDB`: 
* `ModuleImport`: 

`ModuleCommit` business object definition
-----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `mdl_git_id`                                                 | char(100)                                | yes*     | yes       |          | -                                                                                |
| `mdl_git_msg`                                                | text(200)                                |          | yes       |          | -                                                                                |
| `mdl_git_date`                                               | datetime                                 | yes*     | yes       |          | -                                                                                |
| `mdl_git_user`                                               | text(250)                                | yes*     | yes       |          | -                                                                                |
| `mdl_git_changes`                                            | html(10000000)                           |          |           |          | -                                                                                |

### Custom actions

* `Module-commit`: 
* `Module-deleteGit`: 
* `Module-pull`: 
* `Module-push`: 
* `Module-tag`: 

`ModuleHistoric` business object definition
-------------------------------------------

Modules' history

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `row_ref_id` link to **`Module`**                            | id                                       | yes*     |           |          | Record row ID                                                                    |
| `row_idx`                                                    | int(11)                                  | yes*     | yes       |          | History record index                                                             |
| `created_by_hist`                                            | char(100)                                | yes*     |           |          | Created by                                                                       |
| `created_dt_hist`                                            | datetime                                 | yes*     |           |          | Created date                                                                     |
| `mdl_name`                                                   | regexp(100)                              | yes*     | yes       |          | Module name                                                                      |
| `mdl_version`                                                | char(50)                                 | yes      | yes       |          | Module version                                                                   |
| `mdl_xml`                                                    | document                                 |          | yes       |          | Module file                                                                      |

`ModuleLink` business object definition
---------------------------------------

Links between modules

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `mdk_parent_id` link to **`Module`**                         | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `mdk_parent_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `mdk_cascad`                                                 | enum(1) using `DEL_CASCADE` list         | yes      | yes       |          | -                                                                                |
| `mdk_order`                                                  | int(11)                                  |          | yes       |          | -                                                                                |

### Lists

* `DEL_CASCADE`
    - `R` Impossible si référencé
    - `N` Mettre la référence à null
    - `C` Cascade
    - `Z` Ignore

`NotiConfChan` business object definition
-----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `notiConfchanConfId` link to **`NotiConfig`**                | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `notiConfchanConfId.notiConfName`_                     | _char(100)_                              |          |           |          | -                                                                                |
| `notiConfchanChanId` link to **`NotiRefChannel`**            | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `notiConfchanChanId.notiChanType`_                     | _enum(100) using `NOTICHANTYPE` list_    |          |           |          | -                                                                                |
| `notiConfchanMandatory`                                      | boolean                                  | yes      | yes       |          | -                                                                                |
| `notiConfchanMethod`                                         | char(100)                                |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `NOTICHANTYPE`
    - `INT` Interne
    - `MAIL` Mail
    - `FIREBASE` Firebase
    - `SPEC` Spécifique
    - `WEBPUSH` WebPush

`NotiConfig` business object definition
---------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `notiConfName`                                               | char(100)                                | yes*     | yes       |          | -                                                                                |
| `notiConfAction`                                             | enum(100) using `NOTICONFACTION` list    | yes      | yes       |          | -                                                                                |
| `notiConfObjectinternalId` link to **`ObjectInternal`**      | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `notiConfObjectinternalId.obo_name`_                   | _regexp(100)_                            |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `notiConfExpression`                                         | text(4000)                               |          | yes       |          | -                                                                                |

### Lists

* `NOTICONFACTION`
    - `3` Creation
    - `5` Update
    - `6` Delete

### Custom actions

* `NotiGenerateVapidKeys`: 

`NotiConfigContent` business object definition
----------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `tsl_lang`                                                   | enum(3) using `LANG_ALL` list            | yes*     | yes       |          | -                                                                                |
| `notiContContent`                                            | text(1000000)                            |          | yes       |          | -                                                                                |
| `notiContConfId` link to **`NotiConfig`**                    | id                                       | *        | yes       |          | -                                                                                |
| _Ref. `notiContConfId.notiConfName`_                         | _char(100)_                              |          |           |          | -                                                                                |
| `notiContConfchanId` link to **`NotiConfChan`**              | id                                       | *        | yes       |          | -                                                                                |
| _Ref. `notiContConfchanId.notiConfchanConfId`_               | _id_                                     |          |           |          | -                                                                                |
| _Ref. `notiConfchanConfId.notiConfName`_                     | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `notiContConfchanId.notiConfchanChanId`_               | _id_                                     |          |           |          | -                                                                                |
| _Ref. `notiConfchanChanId.notiChanType`_                     | _enum(100) using `NOTICHANTYPE` list_    |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `notiContSubject`                                            | char(100)                                |          | yes       |          | -                                                                                |

### Lists

* `LANG_ALL`
    - `ANY` All languages
    - `ENU` English language
    - `FRA` French language
* `NOTICHANTYPE`
    - `INT` Interne
    - `MAIL` Mail
    - `FIREBASE` Firebase
    - `SPEC` Spécifique
    - `WEBPUSH` WebPush

`NotiConfigDest` business object definition
-------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `notiCdOrder`                                                | int(100)                                 | yes*     | yes       |          | -                                                                                |
| `notiCdConfigId` link to **`NotiConfig`**                    | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `notiCdConfigId.notiConfName`_                         | _char(100)_                              |          |           |          | -                                                                                |
| `notiCdGroupId` link to **`Group`**                          | id                                       |          | yes       |          | -                                                                                |
| _Ref. `notiCdGroupId.grp_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `notiCdQuery`                                                | text(4000)                               |          | yes       |          | -                                                                                |
| `notiCdUserId` link to **`User`**                            | id                                       |          | yes       |          | -                                                                                |
| _Ref. `notiCdUserId.usr_login`_                              | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `notiCdType`                                                 | enum(100) using `NOTICDTYPE` list        |          | yes       |          | -                                                                                |

### Lists

* `NOTICDTYPE`
    - `GRP` Group
    - `USER` User
    - `SQL` Query

`NotiEvent` business object definition
--------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `notiEvtDate`                                                | datetime                                 |          |           |          | -                                                                                |
| `notiEvtBusinessObject`                                      | object                                   | yes*     | yes       |          | -                                                                                |
| `notiEvtUuid`                                                | char(100)                                | yes*     |           |          | -                                                                                |
| `notiEvtConfId` link to **`NotiConfig`**                     | id                                       |          | yes       |          | -                                                                                |
| _Ref. `notiEvtConfId.notiConfName`_                          | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `notiEvtConfId.notiConfAction`_                        | _enum(100) using `NOTICONFACTION` list_  |          |           |          | -                                                                                |

### Lists

* `NOTICONFACTION`
    - `3` Creation
    - `5` Update
    - `6` Delete

`NotiEvtMsg` business object definition
---------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `notiMsgEvtId` link to **`NotiEvent`**                       | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `notiMsgEvtId.notiEvtBusinessObject`_                  | _object_                                 |          |           |          | -                                                                                |
| _Ref. `notiMsgEvtId.notiEvtUuid`_                            | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `notiMsgEvtId.notiEvtConfId`_                          | _id_                                     |          |           |          | -                                                                                |
| `tsl_lang`                                                   | enum(3) using `LANG_ALL` list            | yes*     | yes       |          | -                                                                                |
| `notiMsgGroupId` link to **`Group`**                         | id                                       | *        | yes       |          | -                                                                                |
| _Ref. `notiMsgGroupId.grp_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| `notiMsgUserId` link to **`User`**                           | id                                       | *        | yes       |          | -                                                                                |
| _Ref. `notiMsgUserId.usr_login`_                             | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| `notiMsgContent`                                             | html(1000000)                            | yes      |           |          | -                                                                                |

### Lists

* `LANG_ALL`
    - `ANY` All languages
    - `ENU` English language
    - `FRA` French language

`NotiEvtUser` business object definition
----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `notiUsrDate`                                                | datetime                                 |          |           |          | -                                                                                |
| `notiUsrRead`                                                | boolean                                  |          | yes       |          | -                                                                                |
| `notiUsrMsgId` link to **`NotiEvtMsg`**                      | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `notiUsrMsgId.notiMsgEvtId`_                           | _id_                                     |          |           |          | -                                                                                |
| _Ref. `notiMsgEvtId.notiEvtBusinessObject`_                  | _object_                                 |          |           |          | -                                                                                |
| _Ref. `notiMsgEvtId.notiEvtUuid`_                            | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `notiUsrMsgId.notiMsgContent`_                         | _html(1000000)_                          |          |           |          | -                                                                                |
| _Ref. `notiUsrMsgId.tsl_lang`_                               | _enum(3) using `LANG_ALL` list_          |          |           |          | -                                                                                |
| _Ref. `notiUsrMsgId.notiMsgUserId`_                          | _id_                                     |          |           |          | -                                                                                |
| _Ref. `notiUsrMsgId.notiMsgGroupId`_                         | _id_                                     |          |           |          | -                                                                                |
| _Ref. `notiMsgUserId.usr_login`_                             | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| _Ref. `notiMsgGroupId.grp_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| `notiUsrUserId` link to **`User`**                           | id                                       | *        | yes       |          | -                                                                                |
| _Ref. `notiUsrUserId.usr_login`_                             | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |

### Lists

* `LANG_ALL`
    - `ANY` All languages
    - `ENU` English language
    - `FRA` French language

### Custom actions

* `NotiMarkAllAsRead`: 
* `NotiMarkAsRead`: 
* `NotiMarkUnread`: 

`NotiGroupChannels` business object definition
----------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `notiGcCdId` link to **`NotiConfigDest`**                    | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `notiGcCdId.notiCdOrder`_                              | _int(100)_                               |          |           |          | -                                                                                |
| _Ref. `notiGcCdId.notiCdConfigId`_                           | _id_                                     |          |           |          | -                                                                                |
| _Ref. `notiCdConfigId.notiConfName`_                         | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `notiGcCdId.notiCdGroupId`_                            | _id_                                     |          |           |          | -                                                                                |
| _Ref. `notiGcCdId.notiCdUserId`_                             | _id_                                     |          |           |          | -                                                                                |
| _Ref. `notiCdGroupId.grp_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `notiCdUserId.usr_login`_                              | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| _Ref. `notiGcCdId.notiCdType`_                               | _enum(100) using `NOTICDTYPE` list_      |          |           |          | -                                                                                |
| `notiGcConfchanId` link to **`NotiConfChan`**                | id                                       | *        | yes       |          | -                                                                                |
| _Ref. `notiGcConfchanId.notiConfchanConfId`_                 | _id_                                     |          |           |          | -                                                                                |
| _Ref. `notiConfchanConfId.notiConfName`_                     | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `notiGcConfchanId.notiConfchanChanId`_                 | _id_                                     |          |           |          | -                                                                                |
| _Ref. `notiGcConfchanId.notiConfchanMethod`_                 | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `notiConfchanChanId.notiChanType`_                     | _enum(100) using `NOTICHANTYPE` list_    |          |           |          | -                                                                                |
| `notiGcSubscribed`                                           | boolean                                  | yes      | yes       |          | -                                                                                |
| _Ref. `notiGcConfchanId.notiConfchanMandatory`_              | _boolean_                                |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `NOTICDTYPE`
    - `GRP` Group
    - `USER` User
    - `SQL` Query
* `NOTICHANTYPE`
    - `INT` Interne
    - `MAIL` Mail
    - `FIREBASE` Firebase
    - `SPEC` Spécifique
    - `WEBPUSH` WebPush

`NotiRefChannel` business object definition
-------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `notiChanType`                                               | enum(100) using `NOTICHANTYPE` list      | yes*     | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `NOTICHANTYPE`
    - `INT` Interne
    - `MAIL` Mail
    - `FIREBASE` Firebase
    - `SPEC` Spécifique
    - `WEBPUSH` WebPush

`NotiUsrNotiConfig` business object definition
----------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `notiUncSubscribed`                                          | boolean                                  | yes      | yes       |          | -                                                                                |
| `notiUncUserId` link to **`User`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `notiUncUserId.usr_login`_                             | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| _Ref. `notiUncUserId.usr_first_name`_                        | _char(50)_                               |          |           | yes      | _First name_                                                                     |
| _Ref. `notiUncUserId.usr_last_name`_                         | _char(50)_                               |          |           | yes      | _Last name_                                                                      |
| `notiUncGcId` link to **`NotiGroupChannels`**                | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `notiUncGcId.notiGcCdId`_                              | _id_                                     |          |           |          | -                                                                                |
| _Ref. `notiGcCdId.notiCdOrder`_                              | _int(100)_                               |          |           |          | -                                                                                |
| _Ref. `notiGcCdId.notiCdConfigId`_                           | _id_                                     |          |           |          | -                                                                                |
| _Ref. `notiCdConfigId.notiConfName`_                         | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `notiGcCdId.notiCdGroupId`_                            | _id_                                     |          |           |          | -                                                                                |
| _Ref. `notiGcCdId.notiCdUserId`_                             | _id_                                     |          |           |          | -                                                                                |
| _Ref. `notiCdGroupId.grp_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `notiCdUserId.usr_login`_                              | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| _Ref. `notiUncGcId.notiGcConfchanId`_                        | _id_                                     |          |           |          | -                                                                                |
| _Ref. `notiGcConfchanId.notiConfchanConfId`_                 | _id_                                     |          |           |          | -                                                                                |
| _Ref. `notiGcConfchanId.notiConfchanChanId`_                 | _id_                                     |          |           |          | -                                                                                |
| _Ref. `notiUncGcId.notiGcSubscribed`_                        | _boolean_                                |          |           |          | -                                                                                |
| _Ref. `notiConfchanConfId.notiConfName`_                     | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `notiConfchanChanId.notiChanType`_                     | _enum(100) using `NOTICHANTYPE` list_    |          |           |          | -                                                                                |

### Lists

* `NOTICHANTYPE`
    - `INT` Interne
    - `MAIL` Mail
    - `FIREBASE` Firebase
    - `SPEC` Spécifique
    - `WEBPUSH` WebPush

### Custom actions

* `NotiSubscribe`: 
* `NotiUnsubscribe`: 

`ObjectCtxHelp` business object definition
------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `och_object_id` link to **`ObjectInternal`**                 | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `och_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `och_context`                                                | multi(20) using `OBJECT_CONTEXT` list    | yes*     | yes       |          | -                                                                                |
| `och_lang`                                                   | enum(3) using `LANG` list                | yes*     | yes       |          | -                                                                                |
| `och_help`                                                   | html(50000)                              | yes      | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `OBJECT_CONTEXT`
    - `S` Recherche
    - `L` Liste
    - `C` Formulaire de création
    - `U` Formulaire de mise à jour
    - `D` Formulaire de suppression
    - `R` Formulaire en lecture seule
    - `X` Sélection de référence
    - `M` Mapping
    - `P` Liste liée
    - `A` Mise à jour en masse
* `LANG`
    - `ENU` English language
    - `FRA` French language

`ObjectExternal` business object definition
-------------------------------------------

External objects

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `obe_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `obe_type`                                                   | char(1)                                  |          |           |          | -                                                                                |
| `obe_nature`                                                 | enum(100) using `OBE_NATURE` list        |          | yes       |          | -                                                                                |
| `obe_url`                                                    | url(255)                                 |          | yes       |          | -                                                                                |
| `obe_settings`                                               | text(4000)                               |          | yes       |          | -                                                                                |
| `obe_comment`                                                | text(4000)                               |          | yes       |          | -                                                                                |
| `obe_help`                                                   | url(255)                                 |          | yes       |          | -                                                                                |
| `obe_class`                                                  | char(100)                                |          | yes       |          | -                                                                                |
| `obe_script_id`                                              | document                                 |          | yes       |          | Script implementation                                                            |
| `obe_icon`                                                   | char(100)                                |          | yes       |          | -                                                                                |
| `obe_permalink`                                              | char(500)                                |          | yes       |          | -                                                                                |
| `obe_widget`                                                 | boolean                                  |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `OBE_NATURE`
    - `com_simplicite_util_ExternalObject` Basic
    - `com_simplicite_webapp_web_ResponsiveExternalObject` UI page or component
    - `com_simplicite_webapp_web_WebPageExternalObject` Simple page
    - `com_simplicite_webapp_web_JQueryWebPageExternalObject` Page with JQuery
    - `com_simplicite_webapp_web_StaticSiteExternalObject` Static web-site
    - `com_simplicite_webapp_services_RESTServiceExternalObject` Web-service REST
    - `com_simplicite_webapp_services_RESTMappedObjectsExternalObject` Mapped Web-service REST
    - `com_simplicite_webapp_services_GraphQLExternalObject` GraphQL Web-service
    - `com_simplicite_webapp_documents_PDFDocumentExternalObject` PDF
    - `com_simplicite_webapp_documents_ExcelDocumentExternalObject` Excel

### Custom actions

* `externalObjectScriptEdit`: 
* `clearCacheObject`: Clear object caches
* `createResources`: Create required resources
* `runUnitTests`: 

`ObjectExternalField` business object definition
------------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `obf_object_id` link to **`ObjectExternal`**                 | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `obf_object_id.obe_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `obf_order`                                                  | int(5)                                   | yes*     | yes       |          | -                                                                                |
| `obf_field_id` link to **`Field`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `obf_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `obf_ref_field_id` link to **`Field`**                       | id                                       |          | yes       |          | -                                                                                |
| _Ref. `obf_ref_field_id.fld_name`_                           | _regexp(100)_                            |          |           |          | -                                                                                |
| `obf_ref_object_id` link to **`ObjectInternal`**             | id                                       |          | yes       |          | -                                                                                |
| _Ref. `obf_ref_object_id.obo_name`_                          | _regexp(100)_                            |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`ObjectFieldArea` business object definition
--------------------------------------------

Field areas

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ofa_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `ofa_position`                                               | int(3)                                   | yes      | yes       |          | -                                                                                |
| `ofa_title`                                                  | boolean                                  | yes      | yes       |          | -                                                                                |
| `ofa_ui`                                                     | text(1000000)                            |          | yes       |          | Area template for UI                                                             |
| `ofa_icon`                                                   | char(100)                                |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`ObjectFieldModel` business object definition
---------------------------------------------

Attributs des objets pour affichage graphique

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `obf_object_id` link to **`ObjectInternal`**                 | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `obf_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `obf_field_id` link to **`Field`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `obf_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_dbname`_                             | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_required`_                           | _boolean_                                |          |           |          | -                                                                                |
| `obf_order`                                                  | int(5)                                   | yes*     | yes       |          | -                                                                                |
| `obf_dfault_order`                                           | int(2)                                   |          | yes       |          | -                                                                                |
| `obf_cascad`                                                 | enum(1) using `DEL_CASCADE` list         |          | yes       |          | -                                                                                |
| `obf_area_id` link to **`ObjectFieldArea`**                  | id                                       |          | yes       |          | -                                                                                |
| _Ref. `obf_area_id.ofa_name`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| `obf_ref_object_id` link to **`ObjectInternal`**             | id                                       |          | yes       |          | -                                                                                |
| _Ref. `obf_ref_object_id.obo_name`_                          | _regexp(100)_                            |          |           |          | -                                                                                |
| `obf_ref_field_id` link to **`Field`**                       | id                                       |          | yes       |          | -                                                                                |
| _Ref. `obf_ref_field_id.fld_name`_                           | _regexp(100)_                            |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `DEL_CASCADE`
    - `R` Impossible si référencé
    - `N` Mettre la référence à null
    - `C` Cascade
    - `Z` Ignore

`ObjectFieldPhysical` business object definition
------------------------------------------------

Colonnes des objets pour affichage graphique

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `obf_object_id` link to **`ObjectInternal`**                 | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `obf_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `obf_object_id.obo_dbtable`_                           | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `obf_object_id.obo_rowid_id`_                          | _id_                                     |          |           |          | -                                                                                |
| _Ref. `obo_rowid_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `obf_field_id` link to **`Field`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `obf_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_dbname`_                             | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_required`_                           | _boolean_                                |          |           |          | -                                                                                |
| `obf_order`                                                  | int(5)                                   | yes*     | yes       |          | -                                                                                |
| `obf_dfault_order`                                           | int(2)                                   |          | yes       |          | -                                                                                |
| `obf_cascad`                                                 | enum(1) using `DEL_CASCADE` list         |          | yes       |          | -                                                                                |
| `obf_ref_object_id` link to **`ObjectInternal`**             | id                                       |          | yes       |          | -                                                                                |
| _Ref. `obf_ref_object_id.obo_name`_                          | _regexp(100)_                            |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `DEL_CASCADE`
    - `R` Impossible si référencé
    - `N` Mettre la référence à null
    - `C` Cascade
    - `Z` Ignore

`ObjectFieldRef` business object definition
-------------------------------------------

Recherche d'une référence

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `obf_object_id` link to **`ObjectInternal`**                 | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `obf_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `obf_field_id` link to **`Field`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `obf_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `obf_ref`                                                    | char(75)                                 |          |           |          | -                                                                                |
| `obf_ref_object_id` link to **`ObjectSystem`**               | id                                       |          | yes       |          | -                                                                                |
| _Ref. `obf_ref_object_id.obj_name`_                          | _regexp(50)_                             |          |           |          | -                                                                                |

`ObjectFieldSystem` business object definition
----------------------------------------------

Business objects' fields)

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `obf_object_id` link to **`ObjectInternal`**                 | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `obf_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `obf_object_id.obo_dbtable`_                           | _char(100)_                              |          |           |          | -                                                                                |
| `obf_field_id` link to **`Field`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `obf_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_dbname`_                             | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_type`_                               | _enum(2) using `FIELD_TYPE` list_        |          |           |          | -                                                                                |
| `obf_order`                                                  | int(5)                                   | yes*     | yes       |          | -                                                                                |
| `obf_group_by`                                               | int(2)                                   |          | yes       |          | -                                                                                |
| `obf_dfault_order`                                           | int(2)                                   |          | yes       |          | -                                                                                |
| `obf_reorder`                                                | multi(10) using `FLD_REORDER` list       |          | yes       |          | -                                                                                |
| `obf_input`                                                  | regexp(100)                              |          | yes       |          | -                                                                                |
| `obf_ref_field_id` link to **`Field`**                       | id                                       |          | yes       |          | -                                                                                |
| _Ref. `obf_ref_field_id.fld_name`_                           | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_updatable`_                          | _multi(10) using `FIELD_UPDATABLE` list_ |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_required`_                           | _boolean_                                |          |           |          | -                                                                                |
| `obf_ref_object_id` link to **`ObjectInternal`**             | id                                       |          | yes       |          | -                                                                                |
| _Ref. `obf_ref_object_id.obo_name`_                          | _regexp(100)_                            |          |           |          | -                                                                                |
| `obf_cascad`                                                 | enum(1) using `DEL_CASCADE` list         |          | yes       |          | -                                                                                |
| `obf_card`                                                   | char(10)                                 | yes      | yes       |          | -                                                                                |
| `obf_visible`                                                | boolean                                  | yes      | yes       |          | -                                                                                |
| `obf_ref_export`                                             | boolean                                  | yes      | yes       |          | -                                                                                |
| `obf_copy`                                                   | boolean                                  | yes      | yes       |          | -                                                                                |
| `obf_ref_order`                                              | int(5)                                   |          | yes       |          | -                                                                                |
| `obf_fld_visible`                                            | enum(1) using `FIELD_VISIBLE` list       |          | yes       |          | -                                                                                |
| _Ref. `obf_field_id.fld_visible`_                            | _enum(1) using `FIELD_VISIBLE` list_     |          |           |          | -                                                                                |
| `obf_fld_required`                                           | enum(1) using `BOOL` list                |          | yes       |          | -                                                                                |
| `obf_fld_updatable`                                          | multi(10) using `FIELD_UPDATABLE` list   |          | yes       |          | -                                                                                |
| `obf_fld_research`                                           | enum(1) using `FIELD_RESEARCH` list      |          | yes       |          | -                                                                                |
| _Ref. `obf_field_id.fld_research`_                           | _enum(1) using `FIELD_RESEARCH` list_    |          |           |          | -                                                                                |
| `obf_fld_more`                                               | enum(1) using `BOOL` list                |          | yes       |          | -                                                                                |
| _Ref. `obf_field_id.fld_more`_                               | _boolean_                                |          |           |          | -                                                                                |
| `obf_fld_listmore`                                           | enum(1) using `BOOL` list                |          | yes       |          | -                                                                                |
| _Ref. `obf_field_id.fld_listmore`_                           | _boolean_                                |          |           |          | -                                                                                |
| `obf_fld_researchreq`                                        | enum(1) using `FIELD_RESEARCHREQ` list   |          | yes       |          | -                                                                                |
| _Ref. `obf_field_id.fld_researchreq`_                        | _enum(1) using `FIELD_RESEARCHREQ` list_ |          |           |          | -                                                                                |
| `obf_fld_dfault`                                             | text(4000)                               |          | yes       |          | -                                                                                |
| _Ref. `obf_field_id.fld_dfault`_                             | _text(4000)_                             |          |           |          | -                                                                                |
| `obf_fld_exportable`                                         | enum(1) using `BOOL` list                |          | yes       |          | -                                                                                |
| _Ref. `obf_field_id.fld_exportable`_                         | _boolean_                                |          |           |          | -                                                                                |
| `obf_fld_uk`                                                 | enum(1) using `BOOL` list                |          | yes       |          | -                                                                                |
| _Ref. `obf_field_id.fld_fonctid`_                            | _boolean_                                |          |           |          | -                                                                                |
| `obf_area_id` link to **`ObjectFieldArea`**                  | id                                       |          | yes       |          | -                                                                                |
| _Ref. `obf_area_id.ofa_name`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `obf_area_id.ofa_position`_                            | _int(3)_                                 |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `obf_joined_id` link to **`ObjectFieldSystem`**              | id                                       |          | yes       |          | -                                                                                |
| _Ref. `obf_joined_id.obf_object_id`_                         | _id_                                     |          |           |          | -                                                                                |
| _Ref. `obf_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `obf_joined_id.obf_field_id`_                          | _id_                                     |          |           |          | -                                                                                |
| _Ref. `obf_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `obf_joined_id.obf_order`_                             | _int(5)_                                 |          |           |          | -                                                                                |

### Lists

* `FIELD_TYPE`
    - `3` Short text < 4000
    - `13` Long text
    - `1` Integer
    - `2` Decimal
    - `26` BigDecimal
    - `4` Date
    - `5` Date and time
    - `6` Time
    - `7` Enumeration
    - `14` Multiple enumeration
    - `8` Boolean
    - `10` URL
    - `11` HTML content
    - `12` Email
    - `15` Validated text
    - `17` Document
    - `0` Internal ID
    - `24` Object
    - `9` Password
    - `19` External file
    - `20` Image
    - `21` Notepad
    - `22` Phone number
    - `23` Color
    - `25` Geographical coordinates
* `FLD_REORDER`
    - `R` Reorder rows on list
    - `B` Bulk reodering
    - `U` Reorder on update
* `FIELD_UPDATABLE`
    - `1` Always updatable (deprecated)
    - `0` Read only
    - `3` Updatable in edit list
    - `2` Updatable in form
    - `C` Editable by list cell
* `DEL_CASCADE`
    - `R` Impossible si référencé
    - `N` Mettre la référence à null
    - `C` Cascade
    - `Z` Ignore
* `FIELD_VISIBLE`
    - `4` Forbidden
    - `0` Hidden
    - `1` On list only
    - `2` On form only
    - `3` On form and list
* `BOOL`
    - `0` Non
    - `1` Oui
* `FIELD_RESEARCH`
    - `0` Pas de recherche
    - `1` Recherche simple
    - `2` Cases à cocher
    - `3` Liste à choix multiple
* `FIELD_RESEARCHREQ`
    - `0` Non obligatoire
    - `1` Semi-obligatoire
    - `2` Obligatoire
    - `3` Etendu

### Custom actions

* `ObjFieldGenerateObject`: 
* `ObjFieldGenerateObjectApply`: 
* `ObjFieldGenerateObjectOpen`: 

`ObjectIndex` business object definition
----------------------------------------

Index for fulltext searches

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `idx_object`                                                 | char(100)                                | yes*     | yes       |          | -                                                                                |
| `idx_row_id`                                                 | id                                       | yes*     | yes       |          | -                                                                                |
| `idx_ukey`                                                   | char(255)                                |          | yes       |          | -                                                                                |
| `idx_all`                                                    | text(1000000)                            |          | yes       |          | -                                                                                |

### Custom actions

* `rebuildObjectIndex`: Rebuild the full object index

`ObjectInternal` business object definition
-------------------------------------------

Business object

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `obo_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `obo_dbtable`                                                | char(100)                                | yes      | yes       |          | -                                                                                |
| `obo_role`                                                   | enum(3) using `OBJ_ROLE` list            |          | yes       |          | -                                                                                |
| `obo_class`                                                  | char(100)                                |          | yes       |          | -                                                                                |
| `obo_script_id`                                              | document                                 |          | yes       |          | Script implementation                                                            |
| `obo_usets`                                                  | enum(1) using `OBJ_TIMESTAMP` list       | yes      | yes       |          | -                                                                                |
| `obo_nosearch`                                               | enum(1) using `OBJ_SEARCH` list          |          | yes       |          | -                                                                                |
| `obo_comment`                                                | text(4000)                               |          | yes       |          | -                                                                                |
| `obo_type`                                                   | char(1)                                  |          |           |          | -                                                                                |
| `obo_searchspec`                                             | text(4000)                               |          | yes       |          | -                                                                                |
| `obo_exportorder`                                            | int(5)                                   |          |           |          | -                                                                                |
| `obo_distinct`                                               | boolean                                  | yes      | yes       |          | -                                                                                |
| `obo_indexable`                                              | boolean                                  | yes      | yes       |          | -                                                                                |
| `obo_groupby`                                                | boolean                                  |          | yes       |          | -                                                                                |
| `obo_dfltref`                                                | char(100)                                |          | yes       |          | -                                                                                |
| `obo_template_id` link to **`Template`**                     | id                                       |          | yes       |          | -                                                                                |
| _Ref. `obo_template_id.tpl_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| `obo_tpl_list_id` link to **`Template`**                     | id                                       |          | yes       |          | -                                                                                |
| _Ref. `obo_tpl_list_id.tpl_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `obo_tpl_list_id.tpl_context`_                         | _multi(10) using `TPL_CONTEXT` list_     |          |           |          | -                                                                                |
| `obo_copy`                                                   | boolean                                  | yes      | yes       |          | -                                                                                |
| `obo_export`                                                 | multi(30) using `OBJ_EXPORT` list        |          | yes       |          | -                                                                                |
| `obo_pagine`                                                 | boolean                                  | yes      | yes       |          | -                                                                                |
| `obo_srh_predef`                                             | multi(10) using `FIELD_PREDEF_SEARCH` list | yes      | yes       |          | -                                                                                |
| `obo_selrow`                                                 | boolean                                  | yes      | yes       |          | -                                                                                |
| `obo_updall`                                                 | boolean                                  | yes      | yes       |          | -                                                                                |
| `obo_delall`                                                 | boolean                                  | yes      | yes       |          | -                                                                                |
| `obo_listsearch`                                             | boolean                                  | yes      | yes       |          | -                                                                                |
| `obo_list_edit`                                              | multi(10) using `OBJ_EDIT_LIST` list     |          | yes       |          | -                                                                                |
| `obo_useform`                                                | boolean                                  | yes      | yes       |          | -                                                                                |
| `obo_title`                                                  | char(100)                                |          | yes       |          | -                                                                                |
| `obo_icon`                                                   | char(100)                                |          | yes       |          | -                                                                                |
| `obo_refcount`                                               | boolean                                  |          | yes       |          | -                                                                                |
| `obo_tree`                                                   | boolean                                  |          | yes       |          | -                                                                                |
| `obo_viewmode`                                               | enum(1) using `OBO_VIEWMODE` list        |          | yes       |          | -                                                                                |
| `obo_historic`                                               | multi(10) using `OBJ_HISTORIC` list      |          | yes       |          | -                                                                                |
| `obo_printable`                                              | boolean                                  |          | yes       |          | -                                                                                |
| `obo_followlink`                                             | boolean                                  |          | yes       |          | -                                                                                |
| `obo_mergeable`                                              | boolean                                  |          | yes       |          | -                                                                                |
| `obo_social`                                                 | multi(10) using `FIELD_SOCIAL` list      |          | yes       |          | -                                                                                |
| `obo_rowid_id` link to **`Field`**                           | id                                       |          | yes       |          | -                                                                                |
| _Ref. `obo_rowid_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `obo_extend_id` link to **`ObjectSystem`**                   | id                                       |          | yes       |          | -                                                                                |
| _Ref. `obo_extend_id.obj_name`_                              | _regexp(50)_                             |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `obo_btn_reload`                                             | enum(1) using `BTN_VIS` list             |          | yes       |          | -                                                                                |
| `obo_btn_prefs`                                              | enum(1) using `BTN_VIS` list             |          | yes       |          | -                                                                                |
| `obo_btn_bookmark`                                           | enum(1) using `BTN_VIS_LIST` list        |          | yes       |          | -                                                                                |
| `obo_btn_del`                                                | enum(1) using `BTN_VIS` list             |          | yes       |          | -                                                                                |
| `obo_btn_copy`                                               | enum(1) using `BTN_VIS` list             |          | yes       |          | -                                                                                |
| `obo_btn_export`                                             | enum(1) using `BTN_VIS` list             |          | yes       |          | -                                                                                |
| `obo_btn_listadd`                                            | enum(1) using `BTN_VIS` list             |          | yes       |          | -                                                                                |
| `obo_btn_listedit`                                           | enum(1) using `BTN_VIS` list             |          | yes       |          | -                                                                                |
| `obo_btn_listupsert`                                         | enum(1) using `BTN_VIS` list             |          | yes       |          | -                                                                                |
| `obo_btn_updall`                                             | enum(1) using `BTN_VIS` list             |          | yes       |          | -                                                                                |
| `obo_btn_delall`                                             | enum(1) using `BTN_VIS` list             |          | yes       |          | -                                                                                |
| `obo_btn_merge`                                              | enum(1) using `BTN_VIS` list             |          | yes       |          | -                                                                                |
| `obo_btn_save`                                               | boolean                                  |          | yes       |          | -                                                                                |
| `obo_btn_saveclose`                                          | boolean                                  |          | yes       |          | -                                                                                |
| `obo_btn_savenew`                                            | boolean                                  |          | yes       |          | -                                                                                |
| `obo_btn_savecopy`                                           | boolean                                  |          | yes       |          | -                                                                                |
| `obo_btn_close`                                              | boolean                                  |          | yes       |          | -                                                                                |
| `obo_tray`                                                   | boolean                                  |          | yes       |          | -                                                                                |
| `obo_dashboard`                                              | multi(10) using `OBJ_DASHBOARD` list     |          | yes       |          | -                                                                                |
| `obo_prefix`                                                 | char(25)                                 |          | yes       |          | -                                                                                |
| `obo_search_ts`                                              | multi(10) using `OBO_SEARCH_TS` list     |          | yes       |          | -                                                                                |
| `obo_minrows`                                                | int(10)                                  |          | yes       |          | -                                                                                |
| `obo_maxrows`                                                | int(10)                                  |          | yes       |          | -                                                                                |
| `obo_sortable`                                               | boolean                                  |          | yes       |          | -                                                                                |
| `obo_list_areas`                                             | boolean                                  |          | yes       |          | -                                                                                |
| `obo_minifiable`                                             | enum(1) using `LIST_MINIFIABLE` list     |          | yes       |          | -                                                                                |
| `obo_minified`                                               | boolean                                  |          | yes       |          | -                                                                                |
| `obo_permalink`                                              | char(500)                                |          | yes       |          | -                                                                                |
| `obo_btn_searchform`                                         | boolean                                  |          | yes       |          | -                                                                                |
| `obo_search_index`                                           | enum(1) using `OBJ_SEARCH_INDEX` list    |          | yes       |          | -                                                                                |
| `obo_search_column`                                          | enum(1) using `SEARCH_COLS` list         |          | yes       |          | -                                                                                |
| `obo_search_dialog`                                          | boolean                                  |          | yes       |          | -                                                                                |
| `obo_search_docked`                                          | boolean                                  |          | yes       |          | -                                                                                |
| `obo_indexed_fields`                                         | html(100000)                             |          |           |          | -                                                                                |
| `obo_tpl_search_id` link to **`Template`**                   | id                                       |          | yes       |          | -                                                                                |
| _Ref. `obo_tpl_search_id.tpl_name`_                          | _regexp(100)_                            |          |           |          | -                                                                                |
| `obo_tpl_search_pos`                                         | enum(1) using `POSITION` list            |          | yes       |          | -                                                                                |

### Lists

* `OBJ_ROLE`
    - `OBJ` Business object
    - `REF` Reference data
    - `TLG` Tooling
    - `MDL` Module
    - `SYS` System
* `OBJ_TIMESTAMP`
    - `0` None
    - `1` Optimistic
    - `2` Non-blocking
    - `3` Lock
* `OBJ_SEARCH`
    - `1` hide
    - `0` column
    - `2` docked
    - `3` popup
* `TPL_CONTEXT`
    - `M` Main
    - `P` Panel
    - `R` Reference
    - `D` Datamap
* `OBJ_EXPORT`
    - `1` All
    - `C` CSV
    - `X` Excel
    - `P` PDF
    - `Z` ZIP
* `FIELD_PREDEF_SEARCH`
    - `1` Edit and use
    - `2` Use only
    - `3` Access on list
* `OBJ_EDIT_LIST`
    - `N` New form
    - `L` New list
    - `I` Insert list
    - `E` Edit list
    - `U` Upsert
* `OBO_VIEWMODE`
    - `T` Tabbed
    - `C` Collapsed
    - `E` Expanded
    - `A` Accordion
    - `V` Vertical
* `OBJ_HISTORIC`
    - `1` History table
    - `2` Social post
    - `3` Redo log
    - `4` Redo log full
* `FIELD_SOCIAL`
    - `1` Popup
    - `2` Inline
    - `S` Share
* `BTN_VIS`
    - `1` Visible
    - `0` Hidden
    - `P` Plus
* `BTN_VIS_LIST`
    - `1` Visible form only
    - `L` Visible form + rows
    - `0` Hidden
    - `P` Plus
* `OBJ_DASHBOARD`
    - `1` States model
    - `2` Dashboard usage
* `OBO_SEARCH_TS`
    - `N` created
    - `C` created by
    - `S` updated
    - `U` updated by
* `LIST_MINIFIABLE`
    - `N` No
    - `M` Masonry
    - `A` Article
    - `F` Float
    - `I` Inline
* `OBJ_SEARCH_INDEX`
    - `0` None
    - `1` Fulltext
    - `2` Completion
* `SEARCH_COLS`
    - `0` false
    - `1` visible
    - `C` collapsed
* `POSITION`
    - `T` Top
    - `B` Bottom
    - `L` Left
    - `R` Right

### Custom actions

* `generateAllIndexes`: Generate index statements for all objects
* `generateIndexes`: Generate index statements for one object
* `internalObjectScriptEdit`: 
* `LOAD_TABLE`: Génération des attributs à partir de la base
* `OBJ_ADD_RES`: 
* `OBJ_CHECK_DUPLICATES`: Detect database duplicates vs the functional key
* `ObjectHistoric`: 
* `ObjectInternal-addMissingRefs`: 
* `clearCacheObject`: Clear object caches
* `ObjectInternal-reOrderObjectFields`: 
* `runUnitTests`: 

`ObjectInternalHistoric` business object definition
---------------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `row_ref_id` link to **`ObjectInternal`**                    | id                                       | yes*     |           |          | Record row ID                                                                    |
| `row_idx`                                                    | int(11)                                  | yes*     | yes       |          | History record index                                                             |
| `created_by_hist`                                            | char(100)                                | yes*     |           |          | Created by                                                                       |
| `created_dt_hist`                                            | datetime                                 | yes*     |           |          | Created date                                                                     |
| `obo_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `obo_dbtable`                                                | char(100)                                | yes      | yes       |          | -                                                                                |

`ObjectSystem` business object definition
-----------------------------------------

Domains or business objects or esternal objects

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `obj_name`                                                   | regexp(50)                               | yes*     | yes       |          | -                                                                                |
| `obj_type`                                                   | enum(1) using `OBJECT_TYPE` list         | yes      | yes       |          | -                                                                                |
| `obj_dbtable`                                                | char(100)                                |          | yes       |          | -                                                                                |
| `obj_usets`                                                  | boolean                                  | yes      | yes       |          | -                                                                                |
| `obj_searchspec`                                             | char(255)                                |          | yes       |          | -                                                                                |
| `obj_nosearch`                                               | boolean                                  | yes      | yes       |          | -                                                                                |
| `obj_help`                                                   | url(255)                                 |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `OBJECT_TYPE`
    - `O` Objet
    - `D` Domaine
    - `E` Externe

`ObjectUsage` business object definition
----------------------------------------

Usages by business/external objects

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `obu_date`                                                   | datetime                                 | yes      | yes       |          | -                                                                                |
| `obu_user_id` link to **`User`**                             | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `obu_user_id.usr_login`_                               | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| `obu_session`                                                | char(100)                                | yes*     | yes       |          | -                                                                                |
| `obu_object`                                                 | object                                   | yes*     | yes       |          | -                                                                                |
| `obu_write`                                                  | boolean                                  | yes      | yes       |          | -                                                                                |

### Custom actions

* `ObjectUsage-deadlock`: Unlock dead records

`PermGroup` business object definition
--------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `pmg_group_id` link to **`Group`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `pmg_group_id.grp_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `pmg_perm_id` link to **`Permission`**                       | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `pmg_perm_id.prm_group_id`_                            | _id_                                     |          |           |          | -                                                                                |
| _Ref. `prm_group_id.grp_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `pmg_perm_id.prm_object`_                              | _object_                                 |          |           |          | -                                                                                |
| _Ref. `pmg_perm_id.prm_perm`_                                | _boolean_                                |          |           |          | -                                                                                |
| _Ref. `pmg_perm_id.prm_upd`_                                 | _boolean_                                |          |           |          | -                                                                                |
| _Ref. `pmg_perm_id.prm_req`_                                 | _boolean_                                |          |           |          | -                                                                                |
| _Ref. `pmg_perm_id.prm_prop`_                                | _object_                                 |          |           |          | -                                                                                |
| _Ref. `pmg_perm_id.prm_value`_                               | _char(250)_                              |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`Permission` business object definition
---------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `prm_group_id` link to **`Group`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `prm_group_id.grp_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `prm_object`                                                 | object                                   | yes*     | yes       |          | -                                                                                |
| `prm_perm`                                                   | boolean                                  |          | yes       |          | -                                                                                |
| `prm_upd`                                                    | boolean                                  |          | yes       |          | -                                                                                |
| `prm_req`                                                    | boolean                                  |          | yes       |          | -                                                                                |
| `prm_prop`                                                   | object                                   | *        | yes       |          | -                                                                                |
| `prm_value`                                                  | char(250)                                |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Custom actions

* `Permission-Merge`: 

`PlaceMap` business object definition
-------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `pcm_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `pcm_object_id` link to **`ObjectInternal`**                 | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `pcm_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `pcm_address_id` link to **`Field`**                         | id                                       |          | yes       |          | -                                                                                |
| _Ref. `pcm_address_id.fld_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| `pcm_coords_id` link to **`Field`**                          | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `pcm_coords_id.fld_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `pcm_label1_id` link to **`Field`**                          | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `pcm_label1_id.fld_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `pcm_label2_id` link to **`Field`**                          | id                                       |          | yes       |          | -                                                                                |
| _Ref. `pcm_label2_id.fld_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `pcm_label3_id` link to **`Field`**                          | id                                       |          | yes       |          | -                                                                                |
| _Ref. `pcm_label3_id.fld_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`PlatformNode` business object definition
-----------------------------------------

Platform node

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ptf_endpoint`                                               | char(100)                                | yes*     | yes       |          | -                                                                                |

### Custom actions

* `SYS_CLEAR_NODES`: Purge nodes

`PrintTemplate` business object definition
------------------------------------------

Print templates for objets

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `prt_object_id` link to **`ObjectInternal`**                 | id                                       | yes      | yes       |          | -                                                                                |
| _Ref. `prt_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `prt_name`                                                   | char(100)                                | yes*     | yes       |          | -                                                                                |
| `prt_usage`                                                  | enum(10) using `PRT_USAGE` list          | yes      | yes       |          | -                                                                                |
| `prt_visible`                                                | enum(1) using `BTN_VIS` list             | yes      | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `prt_lang`                                                   | enum(3) using `LANG_ALL` list            | yes*     | yes       |          | -                                                                                |
| `prt_translation`                                            | char(100)                                | yes      | yes       |          | -                                                                                |
| `prt_filename`                                               | char(255)                                |          | yes       |          | -                                                                                |
| `prt_mimetype`                                               | enum(10) using `PRT_FORCEDTYPE` list     |          | yes       |          | -                                                                                |
| `prt_type`                                                   | enum(10) using `PRT_TYPE` list           | yes      | yes       |          | -                                                                                |
| `prt_method`                                                 | regexp(50)                               |          | yes       |          | -                                                                                |
| `prt_file`                                                   | document                                 |          | yes       |          | -                                                                                |
| `prt_template_id` link to **`Template`**                     | id                                       |          | yes       |          | -                                                                                |
| _Ref. `prt_template_id.tpl_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| `prt_syntax`                                                 | enum(20) using `PRT_SYNTAX` list         | yes      | yes       |          | -                                                                                |

### Lists

* `PRT_USAGE`
    - `OLM` Partout
    - `O` Sur l'objet uniquement
    - `L` Sur les listes
    - `M` Pour publipostage
    - `OL` Sur l'objet et la liste
    - `OM` Sur l'objet et pour publipostage
    - `LM` Sur la liste et pour publipostage
    - `E` Export
    - `X` Autre utilisation
* `BTN_VIS`
    - `1` Visible
    - `0` Hidden
    - `P` Plus
* `LANG_ALL`
    - `ANY` All languages
    - `ENU` English language
    - `FRA` French language
* `PRT_FORCEDTYPE`
    - `html` HTML
    - `xlsx` Microsoft Excel(R)
    - `docx` Microsoft Word(R)
    - `txt` Texte
    - `pdf` PDF
    - `xml` XML
    - `json` JSON
    - `yml` YAML
    - `md` Markdown
    - `zip` ZIP archive
    - `xls` Legacy Microsoft Excel97(R)
    - `doc` Legacy Microsoft Word97(R)
* `PRT_TYPE`
    - `DEFAULT` Par défaut
    - `METH` Méthode
    - `FILE` Fichier
    - `TMPL` Template
* `PRT_SYNTAX`
    - `DEFAULT` Default
    - `MUSTACHE` Mustache

### Custom actions

* `printtemplateEdit`: 

`PrintTemplateGroup` business object definition
-----------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ptg_printtmpl_id` link to **`PrintTemplate`**               | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `ptg_printtmpl_id.prt_name`_                           | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `ptg_printtmpl_id.prt_lang`_                           | _enum(3) using `LANG_ALL` list_          |          |           |          | -                                                                                |
| `ptg_group_id` link to **`Group`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `ptg_group_id.grp_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `LANG_ALL`
    - `ANY` All languages
    - `ENU` English language
    - `FRA` French language

`Profile` business object definition
------------------------------------

Groups profiles

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `prf_profile_id` link to **`Group`**                         | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `prf_profile_id.grp_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| `prf_group_id` link to **`Group`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `prf_group_id.grp_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`RedoLog` business object definition
------------------------------------

Redo log records

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `rlg_index`                                                  | int(11)                                  | yes*     |           |          | -                                                                                |
| `rlg_session_id` link to **`Session`**                       | id                                       | yes      |           |          | -                                                                                |
| _Ref. `rlg_session_id.ses_index`_                            | _int(11)_                                |          |           |          | -                                                                                |
| _Ref. `rlg_session_id.ses_login`_                            | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `rlg_session_id.ses_logon_dt`_                         | _datetime_                               |          |           |          | -                                                                                |
| _Ref. `rlg_session_id.ses_first_name`_                       | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `rlg_session_id.ses_last_name`_                        | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `rlg_session_id.ses_user_id`_                          | _id_                                     |          |           |          | -                                                                                |
| `rlg_date`                                                   | datetime                                 | yes*     |           |          | -                                                                                |
| `rlg_object`                                                 | object                                   |          |           |          | -                                                                                |
| `rlg_data`                                                   | text(1000000)                            |          |           |          | -                                                                                |
| `rlg_action`                                                 | enum(1) using `RLG_ACTION` list          |          |           |          | -                                                                                |
| `rlg_html`                                                   | html(1000000)                            |          |           |          | -                                                                                |
| `rlg_primary`                                                | char(100)                                |          |           |          | -                                                                                |

### Lists

* `RLG_ACTION`
    - `I` Insert
    - `U` Update
    - `D` Delete
    - `P` Upsert
    - `A` Action

### Custom actions

* `RedoLog-Prune`: 

`Research` business object definition
-------------------------------------

Requête prédéfinie

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `rch_object_id` link to **`ObjectInternal`**                 | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `rch_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `rch_user_id` link to **`User`**                             | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `rch_user_id.usr_login`_                               | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| `rch_name`                                                   | char(500)                                | yes*     | yes       |          | -                                                                                |
| `rch_public`                                                 | boolean                                  | yes      | yes       |          | -                                                                                |
| `rch_request`                                                | text(1000000)                            | yes      | yes       |          | -                                                                                |
| `rch_permalink`                                              | char(200)                                |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`Resource` business object definition
-------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `res_object`                                                 | object                                   | yes*     | yes       |          | -                                                                                |
| `res_type`                                                   | enum(10) using `RESOURCE_TYPE` list      | yes      | yes       |          | -                                                                                |
| `res_lang`                                                   | enum(3) using `LANG_ALL` list            | yes*     | yes       |          | -                                                                                |
| `res_code`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `res_cached`                                                 | boolean                                  | yes      | yes       |          | -                                                                                |
| `res_file`                                                   | document                                 |          | yes       |          | -                                                                                |
| `res_file_compiled`                                          | document                                 |          |           |          | -                                                                                |
| `res_image`                                                  | image                                    |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `RESOURCE_TYPE`
    - `IMG` Image
    - `CSS` Style CSS
    - `ICO` Object icon
    - `JS` Javascript
    - `HTML` HTML
    - `MD` Markdown
    - `PDF` PDF
    - `SET` File set
    - `FONT` Font
    - `XML` XML
    - `JSON` JSON
    - `OTHER` Other
* `LANG_ALL`
    - `ANY` All languages
    - `ENU` English language
    - `FRA` French language

### Custom actions

* `resourceEdit`: 

`RespDelegate` business object definition
-----------------------------------------

Delegation of reponsibilities

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `rsd_usr_id` link to **`User`**                              | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `rsd_usr_id.usr_login`_                                | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| `rsd_resp_id` link to **`Responsability`**                   | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `rsd_resp_id.rsp_login_id`_                            | _id_                                     |          |           |          | -                                                                                |
| _Ref. `rsp_login_id.usr_login`_                              | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| _Ref. `rsd_resp_id.rsp_group_id`_                            | _id_                                     |          |           |          | -                                                                                |
| _Ref. `rsp_group_id.grp_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `rsd_start_dt`                                               | date                                     | yes*     | yes       |          | -                                                                                |
| `rsd_end_dt`                                                 | date                                     |          | yes       |          | -                                                                                |
| _Ref. `rsd_resp_id.rsp_start_dt`_                            | _date_                                   |          |           |          | -                                                                                |

`Responsability` business object definition
-------------------------------------------

Users responsibilities on groups

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `rsp_login_id` link to **`User`**                            | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `rsp_login_id.usr_login`_                              | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| `rsp_group_id` link to **`Group`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `rsp_group_id.grp_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `rsp_start_dt`                                               | date                                     | yes*     | yes       |          | -                                                                                |
| `rsp_end_dt`                                                 | date                                     |          | yes       |          | -                                                                                |
| `rsp_activ`                                                  | boolean                                  | yes      | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`RowId` business object definition
----------------------------------

Row identifiers

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `rid_table`                                                  | char(100)                                | yes*     | yes       |          | Table or sequence name                                                           |
| `rid_curval`                                                 | int(11)                                  | yes      | yes       |          | -                                                                                |

### Custom actions

* `SYS_REBUILD_SEQ`: 
* `SYS_REBUILD_SEQS`: 

`RSSChannel` business object definition
---------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `rsc_name`                                                   | char(100)                                | yes*     | yes       |          | -                                                                                |
| `rsc_description`                                            | char(255)                                | yes      | yes       |          | -                                                                                |
| `rsc_link`                                                   | url(255)                                 |          | yes       |          | -                                                                                |
| `rsc_ttl`                                                    | int(11)                                  | yes      | yes       |          | -                                                                                |

`RSSItem` business object definition
------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `rsi_channel_id` link to **`RSSChannel`**                    | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `rsi_channel_id.rsc_name`_                             | _char(100)_                              |          |           |          | -                                                                                |
| `rsi_name`                                                   | char(100)                                | yes*     | yes       |          | -                                                                                |
| `rsi_description`                                            | char(255)                                | yes      | yes       |          | -                                                                                |
| `rsi_link`                                                   | url(255)                                 |          | yes       |          | -                                                                                |

`Script` business object definition
-----------------------------------

Shared codes

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `scr_code`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `scr_file`                                                   | document                                 |          | yes       |          | -                                                                                |
| `scr_type`                                                   | enum(3) using `SCRIPT_TYPE` list         | yes      | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `SCRIPT_TYPE`
    - `JSR` Server code (Java or Rhino)
    - `TST` Server unit tests code (Java or Rhino)
    - `LIB` Java lib
    - `SQL` Script SQL
    - `XML` XML patch
    - `OTH` Other

### Custom actions

* `runUnitTests`: 
* `ScriptApplySQL`: 
* `ScriptApplyXML`: 
* `CodeCompile`: (Re)compile all code
* `scriptEdit`: 
* `scriptRunTestClass`: Run test class

`Session` business object definition
------------------------------------

Sessions

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ses_index`                                                  | int(11)                                  | yes*     |           |          | -                                                                                |
| `ses_origin`                                                 | enum(3) using `SES_ORIGIN` list          |          |           |          | -                                                                                |
| `ses_login`                                                  | char(100)                                | yes*     |           |          | -                                                                                |
| `ses_first_name`                                             | char(100)                                |          |           |          | -                                                                                |
| `ses_last_name`                                              | char(100)                                |          |           |          | -                                                                                |
| `ses_email`                                                  | email(100)                               |          |           |          | -                                                                                |
| `ses_logon_dt`                                               | datetime                                 | yes*     |           |          | -                                                                                |
| `ses_logout_dt`                                              | datetime                                 |          |           |          | -                                                                                |
| `ses_duration`                                               | int(100)                                 |          |           |          | -                                                                                |
| `ses_time`                                                   | char(50)                                 |          |           |          | -                                                                                |
| `ses_scope`                                                  | char(50)                                 |          |           |          | -                                                                                |
| `ses_groups`                                                 | text(4000)                               |          |           |          | -                                                                                |
| `ses_useragent`                                              | text(4000)                               |          |           |          | -                                                                                |
| `ses_user_id` link to **`User`**                             | id                                       |          | yes       |          | -                                                                                |
| _Ref. `ses_user_id.usr_login`_                               | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| `ses_primary`                                                | char(100)                                |          |           |          | -                                                                                |

### Lists

* `SES_ORIGIN`
    - `0` System
    - `1` UI
    - `2` UI public
    - `4` API
    - `5` IO
    - `6` GIT
    - `7` Cron

### Custom actions

* `Session-Prune`: 

`ShortCut` business object definition
-------------------------------------

Table des raccourcis

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `shc_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `shc_url`                                                    | url(255)                                 | yes      | yes       |          | -                                                                                |
| `shc_target`                                                 | char(50)                                 | yes      | yes       |          | -                                                                                |
| `shc_order`                                                  | int(11)                                  | yes      | yes       |          | -                                                                                |
| `shc_visible`                                                | multi(20) using `SHC_VIS` list           | yes      | yes       |          | -                                                                                |
| `shc_icon`                                                   | char(100)                                |          | yes       |          | -                                                                                |
| `shc_keys`                                                   | char(20)                                 |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `SHC_VIS`
    - `P` Shortcut menu
    - `B` Header button
    - `H` Home button

`ShortCutGroup` business object definition
------------------------------------------

Habilitation des raccourcis

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `shg_shortcut_id` link to **`ShortCut`**                     | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `shg_shortcut_id.shc_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| `shg_group_id` link to **`Group`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `shg_group_id.grp_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `shg_activ`                                                  | boolean                                  | yes      | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`SimpleUser` business object definition
---------------------------------------

Simple users without rights nor template to be inherited for specific usage/rendering

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `usr_image_id`                                               | image                                    |          | yes       | yes      | Picture                                                                          |
| `usr_login`                                                  | regexp(100)                              | yes*     | yes       | yes      | Login                                                                            |
| `usr_first_name`                                             | char(50)                                 |          | yes       | yes      | First name                                                                       |
| `usr_last_name`                                              | char(50)                                 |          | yes       | yes      | Last name                                                                        |
| `usr_lang`                                                   | enum(3) using `LANG` list                | yes      | yes       | yes      | Language                                                                         |
| `usr_email`                                                  | email(100)                               |          | yes       | yes      | Email address                                                                    |
| `usr_cell_num`                                               | phone(20)                                |          | yes       | yes      | Mobile/cellular phone number                                                     |
| `usr_active`                                                 | enum(1) using `USER_STATUS` list         |          | yes       |          | -                                                                                |
| `usr_home_id` link to **`ViewHome`**                         | id                                       |          | yes       |          | -                                                                                |
| _Ref. `usr_home_id.viw_name`_                                | _char(100)_                              |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `LANG`
    - `ENU` English language
    - `FRA` French language
* `USER_STATUS`
    - `0` Disabled
    - `1` Enabled
    - `2` Pending
    - `3` Web services only

`SocialFollow` business object definition
-----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `flwFollowerId` link to **`User`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `flwFollowerId.usr_login`_                             | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| _Ref. `flwFollowerId.usr_first_name`_                        | _char(50)_                               |          |           | yes      | _First name_                                                                     |
| _Ref. `flwFollowerId.usr_last_name`_                         | _char(50)_                               |          |           | yes      | _Last name_                                                                      |
| _Ref. `flwFollowerId.usr_email`_                             | _email(100)_                             |          |           | yes      | _Email address_                                                                  |
| _Ref. `flwFollowerId.usr_image_id`_                          | _image_                                  |          |           | yes      | _Picture_                                                                        |
| `flwFollowedId` link to **`User`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `flwFollowedId.usr_login`_                             | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| _Ref. `flwFollowedId.usr_first_name`_                        | _char(50)_                               |          |           | yes      | _First name_                                                                     |
| _Ref. `flwFollowedId.usr_last_name`_                         | _char(50)_                               |          |           | yes      | _Last name_                                                                      |
| _Ref. `flwFollowedId.usr_email`_                             | _email(100)_                             |          |           | yes      | _Email address_                                                                  |
| _Ref. `flwFollowedId.usr_image_id`_                          | _image_                                  |          |           | yes      | _Picture_                                                                        |
| `flwStatus`                                                  | enum(1) using `SOCIAL_FLW_STATUS` list   | yes      | yes       |          | -                                                                                |

### Lists

* `SOCIAL_FLW_STATUS`
    - `R` Code R
    - `A` Code A
    - `D` Code D

`SocialFollowHistoric` business object definition
-------------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `row_ref_id` link to **`SocialFollow`**                      | id                                       | yes*     |           |          | Record row ID                                                                    |
| `row_idx`                                                    | int(11)                                  | yes*     | yes       |          | History record index                                                             |
| `created_by_hist`                                            | char(100)                                | yes*     |           |          | Created by                                                                       |
| `created_dt_hist`                                            | datetime                                 | yes*     |           |          | Created date                                                                     |
| `flwStatus`                                                  | enum(1) using `SOCIAL_FLW_STATUS` list   | yes      | yes       |          | -                                                                                |

### Lists

* `SOCIAL_FLW_STATUS`
    - `R` Code R
    - `A` Code A
    - `D` Code D

`SocialLike` business object definition
---------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `likPostId` link to **`SocialPost`**                         | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `likPostId.pstDate`_                                   | _datetime_                               |          |           |          | -                                                                                |
| _Ref. `likPostId.pstMessage`_                                | _text(4000)_                             |          |           |          | -                                                                                |
| _Ref. `likPostId.pstUserId`_                                 | _id_                                     |          |           |          | -                                                                                |
| _Ref. `pstUserId.usr_login`_                                 | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| `likUserId` link to **`User`**                               | id                                       | yes*     |           |          | -                                                                                |
| _Ref. `likUserId.usr_login`_                                 | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| `likDate`                                                    | datetime                                 |          |           |          | -                                                                                |

`SocialPost` business object definition
---------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `pstUserId` link to **`User`**                               | id                                       | yes*     |           |          | -                                                                                |
| _Ref. `pstUserId.usr_login`_                                 | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| _Ref. `pstUserId.usr_first_name`_                            | _char(50)_                               |          |           | yes      | _First name_                                                                     |
| _Ref. `pstUserId.usr_last_name`_                             | _char(50)_                               |          |           | yes      | _Last name_                                                                      |
| _Ref. `pstUserId.usr_email`_                                 | _email(100)_                             |          |           | yes      | _Email address_                                                                  |
| _Ref. `pstUserId.usr_image_id`_                              | _image_                                  |          |           | yes      | _Picture_                                                                        |
| `pstDate`                                                    | datetime                                 | yes*     |           |          | -                                                                                |
| `pstMessage`                                                 | text(4000)                               | yes*     |           |          | -                                                                                |
| `pstFollowersOnly`                                           | boolean                                  | yes      |           |          | -                                                                                |
| `pstStatus`                                                  | enum(1) using `POST_STATUS` list         |          |           |          | -                                                                                |
| `pstLevel`                                                   | enum(1) using `POST_LEVEL` list          |          |           |          | -                                                                                |
| `pstObject`                                                  | object                                   |          |           |          | -                                                                                |

### Lists

* `POST_STATUS`
    - `C` Closed
    - `O` Opened
* `POST_LEVEL`
    - `E` Error
    - `I` Info
    - `W` Warning

`SystemParam` business object definition
----------------------------------------

System parameters

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `sys_code`                                                   | char(100)                                | yes*     | yes       |          | -                                                                                |
| `sys_value`                                                  | text(1000000)                            | yes      | yes       |          | -                                                                                |
| `sys_value2`                                                 | text(4000)                               |          | yes       |          | -                                                                                |
| `sys_type`                                                   | enum(3) using `SYS_TYPE` list            |          | yes       |          | -                                                                                |
| `sys_event`                                                  | boolean                                  |          | yes       |          | -                                                                                |
| `sys_desc`                                                   | text(4000)                               |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `SYS_TYPE`
    - `APP` Application
    - `LFL` Look & Feel
    - `LOG` Logger
    - `EMO` Easy mode
    - `PRV` Private
    - `RUN` Runtime

### Custom actions

* `clearCache`: Clear server side cache
* `getVersion`: Platform and application versions

`Template` business object definition
-------------------------------------

UI templates for forms, publications, ...

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `tpl_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `tpl_ui`                                                     | text(1000000)                            |          | yes       |          | -                                                                                |
| `tpl_min`                                                    | text(1000000)                            |          | yes       |          | -                                                                                |
| `tpl_image`                                                  | image                                    |          | yes       |          | -                                                                                |
| `tpl_grid`                                                   | text(1000000)                            |          | yes       |          | -                                                                                |
| `tpl_context`                                                | multi(10) using `TPL_CONTEXT` list       |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `TPL_CONTEXT`
    - `M` Main
    - `P` Panel
    - `R` Reference
    - `D` Datamap

`Theme` business object definition
----------------------------------

Theme

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `thm_name`                                                   | regexp(100)                              | yes*     | yes       |          | -                                                                                |
| `thm_logo_id`                                                | image                                    |          | yes       |          | -                                                                                |
| `thm_logo_invert`                                            | boolean                                  |          | yes       |          | -                                                                                |
| `thm_logo2_id`                                               | image                                    |          | yes       |          | -                                                                                |
| `thm_favicon_id`                                             | image                                    |          | yes       |          | -                                                                                |
| `thm_color1`                                                 | color                                    |          | yes       |          | -                                                                                |
| `thm_color2`                                                 | color                                    |          | yes       |          | -                                                                                |
| `thm_text2`                                                  | color                                    |          | yes       |          | -                                                                                |
| `thm_color3`                                                 | color                                    |          | yes       |          | -                                                                                |
| `thm_text3`                                                  | color                                    |          | yes       |          | -                                                                                |
| `thm_base`                                                   | enum(20) using `THEME_BASE` list         | yes      | yes       |          | -                                                                                |
| `thm_css_doc`                                                | document                                 |          |           |          | -                                                                                |
| `thm_addon`                                                  | document                                 |          | yes       |          | -                                                                                |
| `thm_searchbox`                                              | color                                    |          | yes       |          | -                                                                                |
| `thm_active`                                                 | color                                    |          | yes       |          | -                                                                                |
| `thm_font`                                                   | char(100)                                |          | yes       |          | -                                                                                |
| `thm_font_mono`                                              | char(100)                                |          | yes       |          | -                                                                                |
| `thm_iconset`                                                | char(20)                                 |          | yes       |          | -                                                                                |
| `thm_code_editor_theme`                                      | char(50)                                 |          | yes       |          | -                                                                                |
| `thm_html_editor_theme`                                      | enum(10) using `HTML_EDITOR_THEME` list  | yes      | yes       |          | -                                                                                |
| `thm_menu_dom_c`                                             | color                                    |          | yes       |          | -                                                                                |
| `thm_menu_dom_t`                                             | color                                    |          | yes       |          | -                                                                                |
| `thm_menu_dact_c`                                            | color                                    |          | yes       |          | -                                                                                |
| `thm_menu_dact_t`                                            | color                                    |          | yes       |          | -                                                                                |
| `thm_menu_sub_c`                                             | color                                    |          | yes       |          | -                                                                                |
| `thm_menu_sub_t`                                             | color                                    |          | yes       |          | -                                                                                |
| `thm_menu_sact_c`                                            | color                                    |          | yes       |          | -                                                                                |
| `thm_menu_sact_t`                                            | color                                    |          | yes       |          | -                                                                                |
| `thm_menu_sta_c`                                             | color                                    |          | yes       |          | -                                                                                |
| `thm_menu_sta_t`                                             | color                                    |          | yes       |          | -                                                                                |
| `thm_compact`                                                | boolean                                  |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `thm_const`                                                  | document                                 |          | yes       |          | -                                                                                |
| `thm_parent_id` link to **`Theme`**                          | id                                       |          | yes       |          | -                                                                                |
| _Ref. `thm_parent_id.thm_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |

### Lists

* `THEME_BASE`
    - `dark` Dark base
    - `light` Light base
* `HTML_EDITOR_THEME`
    - `LIGHT` 
    - `DARK` 

### Custom actions

* `ThemeCompile`: 

`Timesheet` business object definition
--------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `tsh_name`                                                   | char(100)                                | yes*     | yes       |          | -                                                                                |
| `tsh_type`                                                   | enum(1) using `ASSIGN_TYPE` list         | yes      | yes       |          | -                                                                                |
| `tsh_assign_id` link to **`ObjectInternal`**                 | id                                       | yes      | yes       |          | Assignment object                                                                |
| _Ref. `tsh_assign_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `tsh_backward`                                               | boolean                                  | yes      | yes       |          | Allow backward input                                                             |
| `tsh_flying`                                                 | boolean                                  | yes      | yes       |          | Flying display                                                                   |
| `tsh_gantt`                                                  | enum(1) using `GANTT_TYPE` list          |          | yes       |          | -                                                                                |
| `tsh_gantt_x`                                                | boolean                                  |          | yes       |          | -                                                                                |
| `tsh_gantt_y`                                                | boolean                                  |          | yes       |          | -                                                                                |
| `tsh_gantt_r`                                                | boolean                                  |          | yes       |          | -                                                                                |
| `tsh_chart_gantt`                                            | boolean                                  |          | yes       |          | -                                                                                |
| `tsh_chart_res`                                              | boolean                                  |          | yes       |          | -                                                                                |
| `tsh_res1_id` link to **`Field`**                            | id                                       | yes      | yes       |          | Resource field                                                                   |
| _Ref. `tsh_res1_id.fld_name`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| `tsh_res2_id` link to **`Field`**                            | id                                       | yes      | yes       |          | Resource 2 field                                                                 |
| _Ref. `tsh_res2_id.fld_name`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| `tsh_workload_id` link to **`Field`**                        | id                                       |          | yes       |          | Workload field                                                                   |
| _Ref. `tsh_workload_id.fld_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| `tsh_begindt_id` link to **`Field`**                         | id                                       |          | yes       |          | Begin date field                                                                 |
| _Ref. `tsh_begindt_id.fld_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| `tsh_enddt_id` link to **`Field`**                           | id                                       |          | yes       |          | End date field                                                                   |
| _Ref. `tsh_enddt_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `tsh_status_id` link to **`Field`**                          | id                                       |          | yes       |          | Status field                                                                     |
| _Ref. `tsh_status_id.fld_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `tsh_input1_id` link to **`Field`**                          | id                                       | yes      | yes       |          | Input field                                                                      |
| _Ref. `tsh_input1_id.fld_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `tsh_input1_id.fld_type`_                              | _enum(2) using `FIELD_TYPE` list_        |          |           |          | -                                                                                |
| `tsh_input2_id` link to **`Field`**                          | id                                       |          | yes       |          | Input field 2                                                                    |
| _Ref. `tsh_input2_id.fld_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `tsh_input2_id.fld_type`_                              | _enum(2) using `FIELD_TYPE` list_        |          |           |          | -                                                                                |
| `tsh_input3_id` link to **`Field`**                          | id                                       |          | yes       |          | Input field 3                                                                    |
| _Ref. `tsh_input3_id.fld_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `tsh_input3_id.fld_type`_                              | _enum(2) using `FIELD_TYPE` list_        |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `ASSIGN_TYPE`
    - `D` Day
    - `W` Week
    - `M` Month
* `GANTT_TYPE`
    - `0` Hidden
    - `1` Inlined
    - `2` Redirect
* `FIELD_TYPE`
    - `3` Short text < 4000
    - `13` Long text
    - `1` Integer
    - `2` Decimal
    - `26` BigDecimal
    - `4` Date
    - `5` Date and time
    - `6` Time
    - `7` Enumeration
    - `14` Multiple enumeration
    - `8` Boolean
    - `10` URL
    - `11` HTML content
    - `12` Email
    - `15` Validated text
    - `17` Document
    - `0` Internal ID
    - `24` Object
    - `9` Password
    - `19` External file
    - `20` Image
    - `21` Notepad
    - `22` Phone number
    - `23` Color
    - `25` Geographical coordinates

### Custom actions

* `TSHEET_GEN`: Generate timesheet object

`Translate` business object definition
--------------------------------------

All translations

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `tsl_object`                                                 | object                                   | yes*     | yes       |          | -                                                                                |
| `tsl_lang`                                                   | enum(3) using `LANG_ALL` list            | yes*     | yes       |          | -                                                                                |
| `tsl_value`                                                  | char(100)                                | yes      | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `LANG_ALL`
    - `ANY` All languages
    - `ENU` English language
    - `FRA` French language

`TranslateAction` business object definition
--------------------------------------------

Action translations

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `tsl_simplehelp`                                             | html(50000)                              |          | yes       |          | -                                                                                |

`TranslateActionGroup` business object definition
-------------------------------------------------

Action group translations

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|

`TranslateActivity` business object definition
----------------------------------------------

Traduction des activités

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|

`TranslateCrosstab` business object definition
----------------------------------------------

Traduction des tableaux croisés

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|

`TranslateCrosstabAxis` business object definition
--------------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|

`TranslateDocIndex` business object definition
----------------------------------------------

Traduction des attributs documentaires métier

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|

`TranslateDomain` business object definition
--------------------------------------------

Domain translations

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `tsl_help`                                                   | html(50000)                              |          | yes       |          | -                                                                                |

`TranslateExternal` business object definition
----------------------------------------------

External object translations

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `tsl_help`                                                   | html(50000)                              |          | yes       |          | -                                                                                |

`TranslateField` business object definition
-------------------------------------------

Field translations

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `tsl_simplehelp`                                             | html(50000)                              |          | yes       |          | -                                                                                |
| `tsl_short_value`                                            | char(50)                                 |          | yes       |          | -                                                                                |
| `tsl_placeholder`                                            | char(255)                                |          | yes       |          | -                                                                                |
| `tsl_listhelp`                                               | html(50000)                              |          | yes       |          | -                                                                                |
| `tsl_tooltip`                                                | html(4000)                               |          | yes       |          | -                                                                                |

`TranslateFieldArea` business object definition
-----------------------------------------------

Field area translations

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|

`TranslateFieldType` business object definition
-----------------------------------------------

Field type translations

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|

`TranslateGroup` business object definition
-------------------------------------------

Group translations

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `tsl_simplehelp`                                             | html(50000)                              |          | yes       |          | -                                                                                |

`TranslateGuide` business object definition
-------------------------------------------

Guide translations

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|

`TranslateLink` business object definition
------------------------------------------

Link translations

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `tsl_simplehelp`                                             | html(50000)                              |          | yes       |          | -                                                                                |

`TranslateObject` business object definition
--------------------------------------------

Business object translations

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `tsl_help`                                                   | html(50000)                              |          | yes       |          | -                                                                                |

`TranslateObjectExternalField` business object definition
---------------------------------------------------------

Object external field translations

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `tsl_simplehelp`                                             | html(50000)                              |          | yes       |          | -                                                                                |

`TranslateObjectField` business object definition
-------------------------------------------------

Object field translations

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `tsl_simplehelp`                                             | html(50000)                              |          | yes       |          | -                                                                                |
| `tsl_short_value`                                            | char(50)                                 |          | yes       |          | -                                                                                |
| `tsl_listhelp`                                               | html(50000)                              |          | yes       |          | -                                                                                |
| `tsl_placeholder`                                            | char(255)                                |          | yes       |          | -                                                                                |

`TranslateProcess` business object definition
---------------------------------------------

Traduction des procesus

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|

`TranslateResearch` business object definition
----------------------------------------------

Traduction des recherches

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|

`TranslateShortcut` business object definition
----------------------------------------------

Traduction des raccourcis

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `tsl_tooltip`                                                | html(4000)                               |          | yes       |          | -                                                                                |

`TranslateTreeView` business object definition
----------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `tsl_help`                                                   | html(50000)                              |          | yes       |          | -                                                                                |

`TranslateView` business object definition
------------------------------------------

Traduction des vues

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `tsl_help`                                                   | html(50000)                              |          | yes       |          | -                                                                                |

`TranslateViewItem` business object definition
----------------------------------------------

View item translations

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `tsl_simplehelp`                                             | html(50000)                              |          | yes       |          | -                                                                                |

`TreeView` business object definition
-------------------------------------

Object tree view

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `trv_name`                                                   | regexp(100)                              | yes*     | yes       |          | Tree view name                                                                   |
| `trv_autosearch`                                             | enum(1) using `TRV_AUTOSEARCH` list      | yes      | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `trv_layout`                                                 | enum(50) using `TRV_LAYOUT` list         | yes      | yes       |          | -                                                                                |

### Lists

* `TRV_AUTOSEARCH`
    - `0` Manual
    - `1` All
    - `2` Links
* `TRV_LAYOUT`
    - `layout-chevron` Chevron
    - `layout-connected` Connected

`TreeViewObject` business object definition
-------------------------------------------

Tree view object

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `trv_tree_id` link to **`TreeView`**                         | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `trv_tree_id.trv_name`_                                | _regexp(100)_                            |          |           |          | _Tree view name_                                                                 |
| `trv_level`                                                  | regexp(30)                               | yes*     | yes       |          | -                                                                                |
| `trv_object_id` link to **`ObjectInternal`**                 | id                                       |          | yes       |          | -                                                                                |
| _Ref. `trv_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `trv_field_id` link to **`Field`**                           | id                                       |          | yes       |          | -                                                                                |
| _Ref. `trv_field_id.fld_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `trv_action`                                                 | multi(10) using `TRV_ACTION` list        |          | yes       |          | -                                                                                |
| `trv_external_id` link to **`ObjectExternal`**               | id                                       |          | yes       |          | -                                                                                |
| _Ref. `trv_external_id.obe_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| `trv_action_id` link to **`Action`**                         | id                                       |          | yes       |          | -                                                                                |
| _Ref. `trv_action_id.act_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| `trv_shortcut_id` link to **`ShortCut`**                     | id                                       |          | yes       |          | -                                                                                |
| _Ref. `trv_shortcut_id.shc_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| `trv_process_id` link to **`BPMProcess`**                    | id                                       |          | yes       |          | -                                                                                |
| _Ref. `trv_process_id.pcs_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| `trv_subtree_id` link to **`TreeView`**                      | id                                       |          | yes       |          | -                                                                                |
| _Ref. `trv_subtree_id.trv_name`_                             | _regexp(100)_                            |          |           |          | _Tree view name_                                                                 |
| `trv_open`                                                   | boolean                                  | yes      | yes       |          | -                                                                                |
| `trv_nolist`                                                 | boolean                                  |          | yes       |          | -                                                                                |
| `trv_pagine`                                                 | boolean                                  | yes      | yes       |          | -                                                                                |
| `trv_onclick`                                                | text(4000)                               |          | yes       |          | Specific onclick Javascript                                                      |
| `trv_parent_id` link to **`TreeViewObject`**                 | id                                       |          | yes       |          | -                                                                                |
| _Ref. `trv_parent_id.trv_tree_id`_                           | _id_                                     |          |           |          | -                                                                                |
| _Ref. `trv_tree_id.trv_name`_                                | _regexp(100)_                            |          |           |          | _Tree view name_                                                                 |
| _Ref. `trv_parent_id.trv_level`_                             | _regexp(30)_                             |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `TRV_ACTION`
    - `M` Add tree to main menu
    - `D` Dock tree on left side
    - `P` Plus action
    - `L` Access by list items
    - `F` Access by form

`User` business object definition
---------------------------------

Users

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `usr_login`                                                  | regexp(100)                              | yes*     | yes       | yes      | Login                                                                            |
| `usr_lang`                                                   | enum(3) using `LANG` list                | yes      | yes       | yes      | Language                                                                         |
| `usr_image_id`                                               | image                                    |          | yes       | yes      | Picture                                                                          |
| `usr_timezone`                                               | char(50)                                 |          | yes       | yes      | Time zone                                                                        |
| `usr_minrows`                                                | int(11)                                  |          | yes       |          | -                                                                                |
| `usr_maxrows`                                                | int(11)                                  |          | yes       |          | -                                                                                |
| `usr_active`                                                 | enum(1) using `USER_STATUS` list         |          | yes       |          | -                                                                                |
| `usr_title`                                                  | enum(5) using `USER_TITLE` list          |          | yes       | yes      | Title                                                                            |
| `usr_last_name`                                              | char(50)                                 |          | yes       | yes      | Last name                                                                        |
| `usr_first_name`                                             | char(50)                                 |          | yes       | yes      | First name                                                                       |
| `usr_email`                                                  | email(100)                               |          | yes       | yes      | Email address                                                                    |
| `usr_home_id` link to **`ViewHome`**                         | id                                       |          | yes       |          | -                                                                                |
| _Ref. `usr_home_id.viw_name`_                                | _char(100)_                              |          |           |          | -                                                                                |
| `usr_work_num`                                               | phone(20)                                |          | yes       | yes      | Work phone number                                                                |
| `usr_home_num`                                               | phone(20)                                |          | yes       |          | -                                                                                |
| `usr_cell_num`                                               | phone(20)                                |          | yes       | yes      | Mobile/cellular phone number                                                     |
| `usr_address1`                                               | char(100)                                |          | yes       | yes      | Address line 1                                                                   |
| `usr_address2`                                               | char(100)                                |          | yes       | yes      | Address line 2                                                                   |
| `usr_zipcode`                                                | char(10)                                 |          | yes       | yes      | Postal/ZIP code                                                                  |
| `usr_city`                                                   | char(50)                                 |          | yes       | yes      | City                                                                             |
| `usr_state`                                                  | char(50)                                 |          | yes       | yes      | State                                                                            |
| `usr_country`                                                | enum(20) using `COUNTRY` list            |          | yes       | yes      | Country                                                                          |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `usr_menu`                                                   | boolean                                  |          | yes       |          | -                                                                                |
| `usr_menu_defcollapsed`                                      | boolean                                  |          | yes       |          | -                                                                                |
| `usr_menu_defdomain_id` link to **`Domain`**                 | id                                       |          | yes       |          | -                                                                                |
| _Ref. `usr_menu_defdomain_id.obd_name`_                      | _regexp(100)_                            |          |           |          | -                                                                                |
| `usr_last_logon`                                             | datetime                                 |          |           |          | -                                                                                |
| `usr_dateformat`                                             | enum(3) using `DATE_FORMAT` list         |          | yes       |          | -                                                                                |
| `usr_numformat`                                              | enum(2) using `NUM_FORMAT` list          |          | yes       |          | -                                                                                |
| `usr_lang_pref`                                              | enum(3) using `LANG` list                |          | yes       |          | Preferred language                                                               |
| `usr_mfa_method`                                             | enum(10) using `USR_MFA_METHOD` list     |          | yes       | yes      | Second authentication factor method                                              |
| `usr_mfa_settings`                                           | text(4000)                               |          | yes       | yes      | Second authentication factor settings                                            |

### Lists

* `LANG`
    - `ENU` English language
    - `FRA` French language
* `USER_STATUS`
    - `0` Disabled
    - `1` Enabled
    - `2` Pending
    - `3` Web services only
* `USER_TITLE`
    - `MR` 
    - `MRS` 
    - `MS` 
* `COUNTRY`
    - `FR` France
    - `UK` United Kingdom
    - `ES` Spain
    - `DE` Germany
    - `BE` Belgium
    - `CH` Switzerland
    - `IE` Ireland
    - `IT` Italy
    - `PT` Portugal
    - `NL` Netherlands
    - `CZ` Czech Republic
    - `AT` Austria
    - `CA` Canada
    - `US` United States of America
    - `AU` Australia
* `DATE_FORMAT`
    - `YMD` 2019-12-31
    - `DMY` 31/12/2019
    - `MDY` 12/31/2019
    - `CHF` 31.12.2019
* `NUM_FORMAT`
    - `SC` Space Comma
    - `CD` Comma Dot
    - `DC` Dot Comma
* `USR_MFA_METHOD`
    - `EMAIL` E-mail
    - `SMS` SMS
    - `TOTP` Time-based OTP
    - `CUSTOM` Custom

### Custom actions

* `resetPassword`: 
* `UserAnonymize`: 
* `UserDeletePrefs`: 
* `UserTOTPQRCode`: Generate a TOTP QRCode
* `USR_EMAIL`: 

`UserFilters` business object definition
----------------------------------------

This object contains all the user's filters 
to display plublic fields on UI.

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `uft_user_id` link to **`User`**                             | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `uft_user_id.usr_login`_                               | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| `uft_start_dt`                                               | date                                     |          | yes       |          | -                                                                                |
| `uft_end_dt`                                                 | date                                     |          | yes       |          | -                                                                                |

`UserPwd` business object definition
------------------------------------

Changement de mot de passe

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `usr_login_read`                                             | regexp(100)                              | yes*     |           | yes      | Login                                                                            |

`UserSession` business object definition
----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `usr_login`                                                  | regexp(100)                              | yes*     | yes       | yes      | Login                                                                            |
| `usr_last_name`                                              | char(50)                                 |          | yes       | yes      | Last name                                                                        |
| `usr_first_name`                                             | char(50)                                 |          | yes       | yes      | First name                                                                       |
| `usr_email`                                                  | email(100)                               |          | yes       | yes      | Email address                                                                    |
| `usr_lang`                                                   | enum(3) using `LANG` list                | yes      | yes       | yes      | Language                                                                         |
| `usr_resp_list`                                              | text(4000)                               |          |           |          | -                                                                                |
| `usr_session_id`                                             | char(100)                                | yes*     |           |          | -                                                                                |
| `usr_session_creation`                                       | datetime                                 |          |           |          | -                                                                                |
| `usr_session_lasttime`                                       | datetime                                 |          |           |          | -                                                                                |
| `usr_session_duration`                                       | char(20)                                 |          |           |          | -                                                                                |
| `usr_session_timeout`                                        | char(50)                                 |          |           |          | Timeout                                                                          |
| `usr_session_remote_addr`                                    | char(50)                                 |          |           |          | Remote address                                                                   |
| `usr_session_user_agent`                                     | char(255)                                |          |           |          | User agent                                                                       |

### Lists

* `LANG`
    - `ENU` English language
    - `FRA` French language

### Custom actions

* `ClearSessions`: Purge expired or empty sessions
* `InvalidateExpiredSessions`: Invalidate all **expired** sessions
* `InvalidateSession`: Invalidate **specified** session
* `InvalidateSessions`: Invalidate **all** sessions

`UserSysParam` business object definition
-----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `usp_user_id` link to **`User`**                             | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `usp_user_id.usr_login`_                               | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| `usp_param_id` link to **`SystemParam`**                     | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `usp_param_id.sys_code`_                               | _char(100)_                              |          |           |          | -                                                                                |
| `usp_value`                                                  | text(1000000)                            |          | yes       |          | -                                                                                |
| _Ref. `usp_param_id.sys_type`_                               | _enum(3) using `SYS_TYPE` list_          |          |           |          | -                                                                                |
| _Ref. `usp_param_id.sys_value`_                              | _text(1000000)_                          |          |           |          | -                                                                                |
| _Ref. `usp_param_id.sys_value2`_                             | _text(4000)_                             |          |           |          | -                                                                                |
| _Ref. `usp_param_id.sys_desc`_                               | _text(4000)_                             |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `SYS_TYPE`
    - `APP` Application
    - `LFL` Look & Feel
    - `LOG` Logger
    - `EMO` Easy mode
    - `PRV` Private
    - `RUN` Runtime

`UserToken` business object definition
--------------------------------------

User tokens

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `utk_usr_id` link to **`User`**                              | id                                       | yes*     |           |          | -                                                                                |
| _Ref. `utk_usr_id.usr_login`_                                | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| `utk_token`                                                  | text(4000)                               | yes*     |           |          | -                                                                                |
| `utk_refreshtoken`                                           | text(4000)                               |          |           |          | -                                                                                |
| `utk_type`                                                   | enum(5) using `UTK_TYPE` list            | yes      |           |          | Type                                                                             |
| `utk_provider`                                               | char(50)                                 | yes*     |           |          | -                                                                                |
| `utk_clientid`                                               | char(50)                                 |          |           |          | -                                                                                |
| `utk_creationdate`                                           | datetime                                 | yes      | yes       |          | -                                                                                |
| `utk_expirydate`                                             | datetime                                 | yes      | yes       |          | -                                                                                |
| `utk_data`                                                   | text(4000)                               |          |           |          | Other data asociated to token                                                    |

### Lists

* `UTK_TYPE`
    - `UI` UI
    - `API` API

### Custom actions

* `ClearUserTokens`: Clear expired user tokens

`View` business object definition
---------------------------------

Views: home pages, ...

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `viw_name`                                                   | char(100)                                | yes*     | yes       |          | -                                                                                |
| `viw_type`                                                   | enum(1) using `VIW_TYPE` list            | yes      | yes       |          | -                                                                                |
| `viw_permalink`                                              | char(100)                                |          | yes       |          | -                                                                                |
| `viw_ui`                                                     | text(1000000)                            |          | yes       |          | -                                                                                |
| `viw_order`                                                  | int(5)                                   | yes      | yes       |          | -                                                                                |
| `viw_icon`                                                   | char(100)                                |          | yes       |          | -                                                                                |
| `viw_disp_id` link to **`Disposition`**                      | id                                       |          | yes       |          | -                                                                                |
| _Ref. `viw_disp_id.dis_code`_                                | _regexp(100)_                            |          |           |          | -                                                                                |
| `viw_scope`                                                  | char(100)                                |          | yes       |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |
| `viw_theme_id` link to **`Theme`**                           | id                                       |          | yes       |          | -                                                                                |
| _Ref. `viw_theme_id.thm_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| `viw_lang`                                                   | multi(100) using `LANG` list             |          | yes       |          | -                                                                                |

### Lists

* `VIW_TYPE`
    - `V` Simple view
    - `O` Object panel
    - `D` Domain page
    - `H` Home page
    - `B` Dashboard
* `LANG`
    - `ENU` English language
    - `FRA` French language

`ViewDashboard` business object definition
------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `viw_owner_id` link to **`User`**                            | id                                       |          | yes       |          | -                                                                                |
| _Ref. `viw_owner_id.usr_login`_                              | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |

`ViewDomain` business object definition
---------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|

`ViewGroup` business object definition
--------------------------------------

Grants on views

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `vig_view_id` link to **`ViewHome`**                         | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `vig_view_id.viw_name`_                                | _char(100)_                              |          |           |          | -                                                                                |
| `vig_group_id` link to **`Group`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `vig_group_id.grp_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `vig_group_id.grp_comment`_                            | _text(4000)_                             |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`ViewHome` business object definition
-------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|

`ViewItem` business object definition
-------------------------------------

Zone d'une vue

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `vwi_view_id` link to **`View`**                             | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `vwi_view_id.viw_name`_                                | _char(100)_                              |          |           |          | -                                                                                |
| `vwi_position`                                               | int(11)                                  | yes*     | yes       |          | -                                                                                |
| `vwi_type`                                                   | enum(1) using `VIEW_TYPE` list           | yes      | yes       |          | -                                                                                |
| `vwi_title`                                                  | boolean                                  | yes      | yes       |          | -                                                                                |
| `vwi_research_id` link to **`Research`**                     | id                                       |          | yes       |          | -                                                                                |
| _Ref. `vwi_research_id.rch_name`_                            | _char(500)_                              |          |           |          | -                                                                                |
| _Ref. `vwi_research_id.rch_object_id`_                       | _id_                                     |          |           |          | -                                                                                |
| _Ref. `rch_object_id.obo_name`_                              | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `vwi_research_id.rch_user_id`_                         | _id_                                     |          |           |          | -                                                                                |
| _Ref. `rch_user_id.usr_login`_                               | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| `vwi_search_spec`                                            | text(4000)                               |          | yes       |          | -                                                                                |
| `vwi_lov_code`                                               | char(30)                                 |          | yes       |          | -                                                                                |
| `vwi_show`                                                   | char(100)                                |          | yes       |          | -                                                                                |
| `vwi_url`                                                    | text(4000)                               |          | yes       |          | -                                                                                |
| `vwi_image`                                                  | url(255)                                 |          | yes       |          | -                                                                                |
| `vwi_subview_id` link to **`View`**                          | id                                       |          | yes       |          | -                                                                                |
| _Ref. `vwi_subview_id.viw_name`_                             | _char(100)_                              |          |           |          | -                                                                                |
| `vwi_treeview_id` link to **`TreeView`**                     | id                                       |          | yes       |          | -                                                                                |
| _Ref. `vwi_treeview_id.trv_name`_                            | _regexp(100)_                            |          |           |          | _Tree view name_                                                                 |
| `vwi_crosstab_id` link to **`Crosstab`**                     | id                                       |          | yes       |          | -                                                                                |
| _Ref. `vwi_crosstab_id.ctb_name`_                            | _regexp(100)_                            |          |           |          | -                                                                                |
| `vwi_printtmpl_id` link to **`PrintTemplate`**               | id                                       |          | yes       |          | -                                                                                |
| _Ref. `vwi_printtmpl_id.prt_name`_                           | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `vwi_printtmpl_id.prt_lang`_                           | _enum(3) using `LANG_ALL` list_          |          |           |          | -                                                                                |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

### Lists

* `VIEW_TYPE`
    - `L` Login
    - `D` Date
    - `T` Time
    - `S` Search
    - `C` Text
    - `I` Image
    - `F` Filters
    - `P` List
    - `X` Pivot table
    - `Z` Publication template
    - `N` Index search
    - `E` External page
    - `W` News
    - `U` Shortcuts
    - `V` Treeview
    - `B` Sub view
* `LANG_ALL`
    - `ANY` All languages
    - `ENU` English language
    - `FRA` French language

`ViewObject` business object definition
---------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `viw_permalink`                                              | char(100)                                |          | yes       |          | -                                                                                |

`ViewSimple` business object definition
---------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|

`WebNews` business object definition
------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `nws_date`                                                   | datetime                                 | yes*     | yes       |          | -                                                                                |
| `nws_expdate`                                                | datetime                                 |          | yes       |          | -                                                                                |
| `nws_title`                                                  | char(100)                                | yes*     | yes       |          | -                                                                                |
| `nws_lang`                                                   | enum(3) using `LANG_ALL` list            | yes*     | yes       |          | -                                                                                |
| `nws_image`                                                  | image                                    |          | yes       |          | -                                                                                |
| `nws_description`                                            | text(4000)                               |          | yes       |          | -                                                                                |
| `nws_display`                                                | multi(10) using `NEWS_DISPLAY` list      |          | yes       |          | -                                                                                |

### Lists

* `LANG_ALL`
    - `ANY` All languages
    - `ENU` English language
    - `FRA` French language
* `NEWS_DISPLAY`
    - `A` Article
    - `T` Ticker
    - `P` Popup

### Custom actions

* `WebNewsPush`: 

`WebNewsGroup` business object definition
-----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `wng_webnews_id` link to **`WebNews`**                       | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `wng_webnews_id.nws_date`_                             | _datetime_                               |          |           |          | -                                                                                |
| _Ref. `wng_webnews_id.nws_title`_                            | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `wng_webnews_id.nws_lang`_                             | _enum(3) using `LANG_ALL` list_          |          |           |          | -                                                                                |
| `wng_group_id` link to **`Group`**                           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `wng_group_id.grp_name`_                               | _regexp(100)_                            |          |           |          | -                                                                                |

### Lists

* `LANG_ALL`
    - `ANY` All languages
    - `ENU` English language
    - `FRA` French language

`XMLSupervisor` business object definition
------------------------------------------

Imports supervisions

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `xsp_status`                                                 | enum(1) using `XSP_STATUS` list          | yes      | yes       |          | -                                                                                |
| `xsp_user_id` link to **`User`**                             | id                                       | yes*     |           |          | -                                                                                |
| _Ref. `xsp_user_id.usr_login`_                               | _regexp(100)_                            |          |           | yes      | _Login_                                                                          |
| `xsp_origin`                                                 | text(4000)                               |          |           |          | -                                                                                |
| `xsp_created_dt`                                             | datetime                                 | *        |           |          | -                                                                                |
| `xsp_effect_dt`                                              | datetime                                 |          | yes       |          | -                                                                                |
| `xsp_run_dt`                                                 | datetime                                 |          |           |          | -                                                                                |
| `xsp_duration`                                               | float(12, 3)                             |          |           |          | -                                                                                |
| `xsp_src_id`                                                 | document                                 | *        |           |          | -                                                                                |
| `xsp_file_id`                                                | document                                 |          |           |          | -                                                                                |
| `xsp_log_id`                                                 | document                                 |          |           |          | -                                                                                |
| `xsp_err_id`                                                 | document                                 |          |           |          | -                                                                                |
| `xsp_adapter_id` link to **`Adapter`**                       | id                                       |          | yes       |          | -                                                                                |
| _Ref. `xsp_adapter_id.adp_name`_                             | _regexp(100)_                            |          |           |          | -                                                                                |
| _Ref. `xsp_adapter_id.adp_type`_                             | _enum(20) using `ADP_TYPE` list_         |          |           |          | -                                                                                |

### Lists

* `XSP_STATUS`
    - `L` Chargé en erreur
    - `I` A importer
    - `R` En cours d'import
    - `T` Traité sans erreur
    - `E` Traité avec erreur
    - `C` Annulé
* `ADP_TYPE`
    - `JAVA` Java / Script
    - `AWK` UNIX awk

### Custom actions

* `SYS_CLEAR_SUPERV`: 
* `manageImport`: Lance les imports XML à effet différé

`MDDocument` business object definition
---------------------------------------

Markdown document

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `mdDocCode`                                                  | regexp(50)                               | yes*     | yes       |          | Document code                                                                    |
| `mdDocURL`                                                   | url(100)                                 |          |           |          | Document URL                                                                     |
| `mdDocTitle`                                                 | char(100)                                | yes      | yes       |          | Document title                                                                   |
| `mdDocFile`                                                  | document                                 |          | yes       |          | Markdown file                                                                    |
| `mdDocPublished`                                             | boolean                                  |          | yes       |          | Is document published?                                                           |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`MDDocumentHistoric` business object definition
-----------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `row_ref_id` link to **`MDDocument`**                        | id                                       | yes*     |           |          | Record row ID                                                                    |
| `row_idx`                                                    | int(11)                                  | yes*     | yes       |          | History record index                                                             |
| `created_by_hist`                                            | char(100)                                | yes*     |           |          | Created by                                                                       |
| `created_dt_hist`                                            | datetime                                 | yes*     |           |          | Created date                                                                     |
| `mdDocCode`                                                  | regexp(50)                               | yes*     | yes       |          | Document code                                                                    |
| `mdDocTitle`                                                 | char(100)                                | yes      | yes       |          | Document title                                                                   |
| `mdDocFile`                                                  | document                                 |          | yes       |          | Markdown file                                                                    |

### Custom actions

* `MDDocDiff`: 

`MDImage` business object definition
------------------------------------

Markdown image

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `mdImgCode`                                                  | regexp(50)                               | yes*     | yes       |          | Markdown image code                                                              |
| `mdImgFile`                                                  | image                                    | yes      | yes       |          | Image                                                                            |
| `row_module_id` link to **`Module`**                         | id                                       | yes      | yes       |          | Module                                                                           |
| _Ref. `row_module_id.mdl_name`_                              | _regexp(100)_                            |          |           |          | _Module name_                                                                    |

`CreateActivity` business process definition
--------------------------------------------



### Activities

* `Begin`: 
* `Data`: 
* `End`: 
* `Permission`: 
* `NewActivity`: 
* `Transition`: 
* `Translation`: 

`CreateModule` business process definition
------------------------------------------



### Activities

* `Begin`: 
* `NewDomain`: 
* `End`: 
* `NewGroup`: 
* `GrantDomain`: 
* `NewModule`: 
* `NewScope`: 
* `TranslateDomain`: 

`CreateObject` business process definition
------------------------------------------



### Activities

* `Begin`: 
* `SelectDomain`: 
* `End`: 
* `AddGrants`: 
* `SelectMap`: 
* `NewObject`: 
* `TranslateAreas`: 

`CreateObjectField` business process definition
-----------------------------------------------



### Activities

* `Begin`: 
* `End`: 
* `NewField`: 
* `CreateLov`: 
* `SelectModule`: 
* `NewObjectField`: 
* `SelectObject`: 
* `TranslateField`: 

`CreateObjectLink` business process definition
----------------------------------------------



### Activities

* `Begin`: 
* `End`: 
* `SelectFields`: 
* `UpdateLink`: 
* `SelectModule`: 
* `SelectObject`: 
* `SelectReference`: 
* `SearchReference`: 
* `TranslateFields`: 

`CreateStateModel` business process definition
----------------------------------------------



### Activities

* `Begin`: 
* `End`: 
* `SelectEnumField`: 
* `Grant`: 
* `SelectModule`: 
* `SelectObject`: 
* `Transition`: 
* `Translation`: 

`CreateUser` business process definition
----------------------------------------



### Activities

* `Begin`: 
* `AddGroupChoice`: 
* `End`: 
* `NewUserStep`: 
* `GroupSelection`: 
* `NewRespStep`: 

`AuditIssues` external object definition
----------------------------------------




`BPMDashboard` external object definition
-----------------------------------------




`DBAccess` external object definition
-------------------------------------




`DBDocAccess` external object definition
----------------------------------------




`DocumentSearch` external object definition
-------------------------------------------




`DocumentUpload` external object definition
-------------------------------------------




`GrantCounters` external object definition
------------------------------------------

Users and group counters


`GuideRecord` external object definition
----------------------------------------




`HomeModels` external object definition
---------------------------------------




`ImportCSV` external object definition
--------------------------------------




`ImportXML` external object definition
--------------------------------------




`LogsAccess` external object definition
---------------------------------------




`MDDiff` external object definition
-----------------------------------

Diff between markdown documents


`MDViewer` external object definition
-------------------------------------

Markdown documentation viewer


`ModuleGIT` external object definition
--------------------------------------




`Monitoring` external object definition
---------------------------------------




`NotiAllNoti` external object definition
----------------------------------------




`NotiUnreadNoti` external object definition
-------------------------------------------




`OnboardingContent` external object definition
----------------------------------------------




`SocialNotification` external object definition
-----------------------------------------------




`StoStore` external object definition
-------------------------------------

Custom page for adding/removing modules from the stores


`SystemAddField` external object definition
-------------------------------------------




`SystemCache` external object definition
----------------------------------------




`SystemInfo` external object definition
---------------------------------------




`UIObjectCounter` external object definition
--------------------------------------------

Counter widget based on a business object field (with list calculation)


