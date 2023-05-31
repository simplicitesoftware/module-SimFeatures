<!--
 ___ _            _ _    _ _    __
/ __(_)_ __  _ __| (_)__(_) |_ /_/
\__ \ | '  \| '_ \ | / _| |  _/ -_)
|___/_|_|_|_| .__/_|_\__|_|\__\___|
            |_| 
-->
![](https://docs.simplicite.io//logos/logo250.png)
* * *

`SimFeatures` module definition
===============================

This modules is:
- a reference of all Simplicité Features
- a testing bench for those same features

`FtAttributes` business object definition
-----------------------------------------

Object showcasing all the possible attributes

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftAttrCode`                                                 | char(10)                                 | yes*     | yes       |          | -                                                                                |
| `ftAttrShortText`                                            | char(255)                                |          | yes       |          | -                                                                                |
| `ftAttrValidatedText`                                        | regexp(250)                              |          | yes       |          | -                                                                                |
| `ftAttrLongText`                                             | text(1000)                               |          | yes       |          | -                                                                                |
| `ftAttrLongTextEditor`                                       | text(1500)                               |          | yes       |          | -                                                                                |
| `ftAttrLongTextMarkdown`                                     | text(1500)                               |          | yes       |          | -                                                                                |
| `ftAttrLongTextGrid`                                         | text(1500)                               |          | yes       |          | -                                                                                |
| `ftAttrLongTextGridSource`                                   | text(1500)                               |          |           |          | -                                                                                |
| `ftAttrHtml`                                                 | html(1500)                               |          | yes       |          | -                                                                                |
| `ftAttrInteger`                                              | int(5)                                   |          | yes       |          | -                                                                                |
| `ftAttrIntegerMonetary`                                      | int(5)                                   |          | yes       |          | -                                                                                |
| `ftAttrIntegerPercentage`                                    | int(3)                                   |          | yes       |          | -                                                                                |
| `ftAttrIntegerEuro`                                          | int(5)                                   |          | yes       |          | -                                                                                |
| `ftAttrIntegerProgressBar`                                   | int(5)                                   |          | yes       |          | -                                                                                |
| `ftAttrIntegerStars`                                         | int(1)                                   |          | yes       |          | -                                                                                |
| `ftAttrIntegerSlider`                                        | int(2)                                   |          | yes       |          | -                                                                                |
| `ftAttrDecimal`                                              | float(10, 2)                             |          | yes       |          | -                                                                                |
| `ftAttrDecimalMonetary`                                      | float(10, 2)                             |          | yes       |          | -                                                                                |
| `ftAttrDecimalPercentage`                                    | float(5, 2)                              |          | yes       |          | -                                                                                |
| `ftAttrDecimalEuro`                                          | float(10, 2)                             |          | yes       |          | -                                                                                |
| `ftAttrDecimalProgressBar`                                   | float(100, 2)                            |          | yes       |          | -                                                                                |
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
| `ftAttrEnumMultiCheckboxHorizontal`                          | multi(3) using `FTATTRENUMMULTICHECKBOXHORIZONTAL` list |          | yes       |          | -                                                                                |
| `ftAttrEnumMultiCheckboxVertical`                            | enum(100) using `FTATTRENUMMULTICHECKBOXVERTICAL` list |          | yes       |          | -                                                                                |
| `ftAttrEnumMultiRadioHorizontal`                             | multi(3) using `FTATTRENUMMULTIRADIOHORIZONTAL` list |          | yes       |          | -                                                                                |
| `ftAttrEnumMultiRadioVertical`                               | enum(3) using `FTATTRENUMMULTIRADIOVERTICAL` list |          | yes       |          | -                                                                                |
| `ftAttrEnumMultiPillbox`                                     | multi(3) using `FTATTRENUMMULTIPILLBOX` list |          | yes       |          | -                                                                                |
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
| `ftAttrNotepad`                                              | notepad(100)                             |          | yes       |          | -                                                                                |
| `ftAttrNotepadUserActivities`                                | notepad(10000)                           |          | yes       |          | -                                                                                |

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

`FtReflexiveMany` business object definition
--------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftRxmCode`                                                  | char(100)                                | yes*     | yes       |          | -                                                                                |

`FtRxmLink` business object definition
--------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      |
|--------------------------------------------------------------|------------------------------------------|----------|-----------|----------|----------------------------------------------------------------------------------|
| `ftRxlRxm1` link to **`FtReflexiveMany`**                    | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `ftRxlRxm1.ftRxmCode`_                                 | _char(100)_                              |          |           |          | -                                                                                |
| `ftRxlRxm2` link to **`FtReflexiveMany`**                    | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `ftRxlRxm2.ftRxmCode`_                                 | _char(100)_                              |          |           |          | -                                                                                |

