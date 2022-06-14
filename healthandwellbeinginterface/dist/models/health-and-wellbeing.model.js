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
exports.HealthAndWellbeing = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let HealthAndWellbeing = class HealthAndWellbeing extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], HealthAndWellbeing.prototype, "internalId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'any',
    }),
    tslib_1.__metadata("design:type", Object)
], HealthAndWellbeing.prototype, "contentType", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'any',
    }),
    tslib_1.__metadata("design:type", Object)
], HealthAndWellbeing.prototype, "language", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'any',
    }),
    tslib_1.__metadata("design:type", Object)
], HealthAndWellbeing.prototype, "data", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], HealthAndWellbeing.prototype, "url", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], HealthAndWellbeing.prototype, "size", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'any',
    }),
    tslib_1.__metadata("design:type", Object)
], HealthAndWellbeing.prototype, "hash", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], HealthAndWellbeing.prototype, "title", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'any',
    }),
    tslib_1.__metadata("design:type", Object)
], HealthAndWellbeing.prototype, "creation", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], HealthAndWellbeing.prototype, "height", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], HealthAndWellbeing.prototype, "width", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], HealthAndWellbeing.prototype, "frames", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], HealthAndWellbeing.prototype, "duration", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], HealthAndWellbeing.prototype, "pages", void 0);
HealthAndWellbeing = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], HealthAndWellbeing);
exports.HealthAndWellbeing = HealthAndWellbeing;
//# sourceMappingURL=health-and-wellbeing.model.js.map