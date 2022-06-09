"use strict";
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