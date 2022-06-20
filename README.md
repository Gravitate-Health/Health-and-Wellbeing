
Gravitate-Health G-Lens: Health & Wellbeing.
=================================================

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Table of contents
-----------------

- [Gravitate-Health G-Lens: Health & Wellbeing.](#gravitate-health-g-lens-health--wellbeing)
  - [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Run the application](#run-the-application)
    - [Endpoints](#endpoints)
  - [Known issues and limitations](#known-issues-and-limitations)
  - [Getting help](#getting-help)
    - [Loopback documentation](#loopback-documentation)
    - [FHIR Model](#fhir-model)
    - [Grid FS Documentation](#grid-fs-documentation)
  - [Contributing](#contributing)
  - [License](#license)
  - [Authors and history](#authors-and-history)
  - [Acknowledgments](#acknowledgments)


Introduction
------------
This repository contains the configuration and deployment files needed for the "G-Lens: Health & Wellbeing" module.
This module handles File Storage System, with an Attachment Model, following the HL7-FHIR interoperability standard.

This repository is made up of an application generated using LoopBack 4 CLI with the initial project layout (healthandwellbeinginterface),
and a File Storage System made with Express and GridFS (healthandwellbeing).

Therefore, the Health and Wellbeing module is composed of an interface (healthandwellbeinginterface) where the models 
are stored, and a backend service of this interface, which is where the files are stored (healthandwellbeing).

The usage and call to each one of the two services mentioned above must be made separately.

This readme will help the reader to deploy the system, but also to understand the configuration and be able to edit/expand it.

Installation
------------

For the correct use of this module it is necessary to install each of the services individually.

You can check the following guides for this purpose.

- [File Storage README (healthandwellbeing)](./health-and-wellbeing-file-storage/README.md).
- [Interface README (healthandwellbeinginterface)](./health-and-wellbeing-directory/README.md).

Usage
-----

At the moment the services work separately, with healthandwellbeing being the File Storage System, and healthandwellbeinginterface being 
the API that stores the [FHIR models](https://build.fhir.org/datatypes.html#attachment) associated with the files.

### Run the application

For each of the directories, perform the following step on different consoles.

Inside the directory, run the following command:

```bash
npm start
```
### Endpoints

To UPLOAD a file:

- POST request to the File Storage System, adds a new file to the G-Lens DB:
  ```bash
    https://gravitate-health.lst.tfo.upm.es/health-wellbeing/upload
  ```
- POST request to the Interface, adds a new FHIR Model to the G-Lens DB:
  ```bash
    https://gravitate-health.lst.tfo.upm.es/health-wellbeing-interface/health-and-wellbeings
  ```

To DOWNLOAD a file:

- GET request to the File Storage System, returns a single file with NAME <filename>:
  ```bash
    https://gravitate-health.lst.tfo.upm.es/health-wellbeing/fileinfo/<filename>
  ```
  ```bash
    https://gravitate-health.lst.tfo.upm.es/health-wellbeing-interface/health-and-wellbeings/<id>
  ```

Known issues and limitations
----------------------------
None are known at this time

Getting help
------------

In case you find a problem or you need extra help, please use the issues tab to report the issue.

Also you can check the following documentation

### Loopback documentation

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

### FHIR Model

Please check out the [FHIR Attachment Model](https://build.fhir.org/datatypes.html#attachment), used for the definition of Loopback Model

### Grid FS Documentation

Please check out [GridFS documentation](https://www.mongodb.com/docs/drivers/node/current/fundamentals/gridfs/) to
understand how you can continue to add features to this application.

Contributing
------------
To contribute, fork this repository and send a pull request with the changes squashed.

License
-------

This project is distributed under the terms of the [Apache License, Version 2.0 (AL2)](http://www.apache.org/licenses/LICENSE-2.0).  The license applies to this file and other files in the [GitHub repository](https://github.com/Gravitate-Health/Gateway) hosting this file.

```
Copyright 2022 Universidad Politécnica de Madrid

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

Authors and history
---------------------------
- Óscar Ansótegui ([@oansotegui](https://github.com/oansotegui))
- Álvaro Belmar ([@abelmarm](https://github.com/abelmarm))

Acknowledgments
---------------

- [GridFS documentation](https://www.mongodb.com/docs/drivers/node/current/fundamentals/gridfs/)
- [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/)

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

