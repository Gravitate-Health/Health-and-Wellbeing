"use strict";
// Copyright 2022 Universidad Politécnica de Madrid
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthAndWellbeingDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
/* const config = {
  name: 'HealthAndWellbeing',
  connector: 'mongodb',
  url: process.env.DB_URL + "HealthAndWellbeing" + "?replicaSet=rs0",
  host: process.env.DB_HOST || 'localhost',
  port: 27017,
  user: "",
  password: "",
  database: "MedInformation",
  useNewUrlParser: true,
  protocol: 'mongodb+srv'
}; */
const config = {
    name: 'HealthAndWellbeing',
    connector: 'mongodb',
    url: "mongodb://localhost:27017",
    host: 'localhost',
    port: 27017,
    user: "",
    password: "",
    database: "HealthAndWellbeing",
    useNewUrlParser: true,
    protocol: 'mongodb'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let HealthAndWellbeingDataSource = class HealthAndWellbeingDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
HealthAndWellbeingDataSource.dataSourceName = 'HealthAndWellbeing';
HealthAndWellbeingDataSource.defaultConfig = config;
HealthAndWellbeingDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.HealthAndWellbeing', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], HealthAndWellbeingDataSource);
exports.HealthAndWellbeingDataSource = HealthAndWellbeingDataSource;
//# sourceMappingURL=health-and-wellbeing.datasource.js.map