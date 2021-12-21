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
| `ftAttrLongTextEditor`                                       | text(1500)                               |          | yes       |          | -                                                                                |
| `ftAttrLongTextMarkdown`                                     | text(1500)                               |          | yes       |          | -                                                                                |
| `ftAttrLongTextGrid`                                         | text(1500)                               |          | yes       |          | -                                                                                |
| `ftAttrLongTextGridSource`                                   | text(1500)                               |          |           |          | -                                                                                |
| `ftAttrHtml`                                                 | html(1500)                               |          | yes       |          | -                                                                                |
| `ftAttrInteger`                                              | int(5)                                   |          | yes       |          | -                                                                                |
| `ftAttrIntegerMonetary`                                      | int(5)                                   |          | yes       |          | -                                                                                |
| `ftAttrIntegerProgressBar`                                   | int(5)                                   |          | yes       |          | -                                                                                |
| `ftAttrIntegerPercentage`                                    | int(3)                                   |          | yes       |          | -                                                                                |
| `ftAttrIntegerStars`                                         | int(1)                                   |          | yes       |          | -                                                                                |
| `ftAttrIntegerSlider`                                        | int(2)                                   |          | yes       |          | -                                                                                |
| `ftAttrIntegerEuro`                                          | int(5)                                   |          | yes       |          | -                                                                                |
| `ftAttrDecimal`                                              | float(10, 2)                             |          | yes       |          | -                                                                                |
| `ftAttrDate`                                                 | date                                     |          | yes       |          | -                                                                                |
| `ftAttrDateTime`                                             | datetime                                 |          | yes       |          | -                                                                                |
| `ftAttrTime`                                                 | time                                     |          | yes       |          | -                                                                                |
| `ftAttrEnum`                                                 | enum(10) using `FTATTRENUM` list         |          | yes       |          | -                                                                                |
| `ftAttrEnumMulti`                                            | multi(100) using `FTATTRENUMMULTI` list  |          | yes       |          | -                                                                                |
| `ftAttrBoolean`                                              | boolean                                  |          | yes       |          | -                                                                                |
| `ftAttrDocument`                                             | document                                 |          | yes       |          | -                                                                                |
| `ftAttrExternalFile`                                         | extfile(100)                             |          | yes       |          | -                                                                                |
| `ftAttrImage`                                                | image                                    |          | yes       |          | -                                                                                |
| `ftAttrUrl`                                                  | url(500)                                 |          | yes       |          | -                                                                                |
| `ftAttrEmail`                                                | email(255)                               |          | yes       |          | -                                                                                |
| `ftAttrPassword`                                             | password(100)                            |          | yes       |          | -                                                                                |
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

