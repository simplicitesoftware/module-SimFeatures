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
| `ftAttrShortText`                                            | char(255)                                | yes*     | yes       |          | -                                                                                |
| `ftAttrLongText`                                             | text(1000)                               |          | yes       |          | -                                                                                |
| `ftAttrInteger`                                              | int(5)                                   |          | yes       |          | -                                                                                |
| `ftAttrDecimal`                                              | float(10, 2)                             |          | yes       |          | -                                                                                |
| `ftAttrDate`                                                 | date                                     |          | yes       |          | -                                                                                |
| `ftAttrDateTime`                                             | datetime                                 |          | yes       |          | -                                                                                |
| `ftAttrTime`                                                 | time                                     |          | yes       |          | -                                                                                |
| `ftAttrEnum`                                                 | enum(10) using `FTATTRENUM` list         |          | yes       |          | -                                                                                |
| `ftAttrEnumMulti`                                            | multi(100) using `FTATTRENUMMULTI` list  |          | yes       |          | -                                                                                |
| `ftAttrBoolean`                                              | boolean                                  |          | yes       |          | -                                                                                |
| `ftAttrUrl`                                                  | url(500)                                 |          | yes       |          | -                                                                                |
| `ftAttrHtml`                                                 | html(1500)                               |          | yes       |          | -                                                                                |
| `ftAttrEmail`                                                | email(255)                               |          | yes       |          | -                                                                                |
| `ftAttrDocument`                                             | document                                 |          | yes       |          | -                                                                                |
| `ftAttrPassword`                                             | password(100)                            |          | yes       |          | -                                                                                |
| `ftAttrExternalFile`                                         | extfile(100)                             |          | yes       |          | -                                                                                |
| `ftAttrImage`                                                | image                                    |          | yes       |          | -                                                                                |
| `ftAttrNotepad`                                              | notepad(100)                             |          | yes       |          | -                                                                                |
| `ftAttrPhoneNumber`                                          | phone(100)                               |          | yes       |          | -                                                                                |
| `ftAttrColor`                                                | color                                    |          | yes       |          | -                                                                                |
| `ftAttrGeographicalCoordinates`                              | geocoords                                |          | yes       |          | -                                                                                |

### Lists

* `FTATTRENUM`
    - `A` code A
    - `B` code B
    - `C` code C
* `FTATTRENUMMULTI`
    - `A` code A
    - `B` code B
    - `C` code C

