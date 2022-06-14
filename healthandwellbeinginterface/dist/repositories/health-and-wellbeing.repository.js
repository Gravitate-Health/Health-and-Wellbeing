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
exports.HealthAndWellbeingRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let HealthAndWellbeingRepository = class HealthAndWellbeingRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.HealthAndWellbeing, dataSource);
    }
};
HealthAndWellbeingRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.HealthAndWellbeing')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.HealthAndWellbeingDataSource])
], HealthAndWellbeingRepository);
exports.HealthAndWellbeingRepository = HealthAndWellbeingRepository;
//# sourceMappingURL=health-and-wellbeing.repository.js.map