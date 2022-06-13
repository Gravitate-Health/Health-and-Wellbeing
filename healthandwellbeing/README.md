
Gravitate-Health G-Lens: Health And Wellbeing File Storage System.
=================================================

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)


Table of contents
-----------------

* [Introduction](#introduction)
* [Installation](#installation)
    - [Local installation](#local-installation)
    - [Kubernetes deployment](#kubernetes-deployment)
* [Usage](#usage)
* [Known issues and limitations](#known-issues-and-limitations)
* [Getting help](#getting-help)
* [Contributing](#contributing)
* [License](#license)
* [Authors and history](#authors-and-history)
* [Acknowledgments](#acknowledgments)


Introduction
------------
This repository contains the configuration and deployment files needed for the File Storage System of the "G-Lens: Health And Wellbeing" module.

This application is generated using Express, Multer and GridFS.

This readme will help the reader to deploy the system, but also to understand the configuration and be able to edit/expand it.

Installation
------------
### Local installation

#### Step 1: Clone the workspace

It is necessary to have previously cloned the parent repository.

```bash
git clone https://github.com/Gravitate-Health/Health-and-Wellbeing.git
```
#### Step 2: Install all the dependencies

```bash
cd Health-and-Wellbeing
cd healthandwellbeininterface
```

By default, dependencies were installed when this application was generated.
Whenever dependencies in package.json are changed, run the following command:

```bash
npm install
```

To only install resolved dependencies in package-lock.json:
```bash
npm ci
```

### Kubernetes deployment

Usage
-----
### Step 1: Run the application
Inside the directory, run the following command:
```bash
npm start
```
### Step 2: Access through the browser
As this service itself has no interface, you can test the different endpoints in a program such as Postman or similar.

### Step 3:  Different endpoints


POST request, adds a new file to the G-Lens DB: 

    https://gravitate-health.lst.tfo.upm.es/health-wellbeing/upload

    You should receive output to the above request as: File uploaded successfully

GET request, returns a single file with NAME <filename>: 

    https://gravitate-health.lst.tfo.upm.es/health-wellbeing/fileinfo/<filename>

    The output should be the file you are calling.


Known issues and limitations
----------------------------
None are known at this time

Getting help
------------

In case you find a problem or you need extra help, please use the issues tab to report the issue.

Also you can check the following documentation

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

Acknowledgments
---------------
- [GridFS documentation](https://www.mongodb.com/docs/drivers/node/current/fundamentals/gridfs/)