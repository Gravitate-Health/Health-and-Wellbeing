"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthAndWellbeingController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let HealthAndWellbeingController = class HealthAndWellbeingController {
    constructor(healthAndWellbeingRepository) {
        this.healthAndWellbeingRepository = healthAndWellbeingRepository;
    }
    async create(healthAndWellbeing) {
        return this.healthAndWellbeingRepository.create(healthAndWellbeing);
    }
    async count(where) {
        return this.healthAndWellbeingRepository.count(where);
    }
    async find(filter) {
        return this.healthAndWellbeingRepository.find(filter);
    }
    async updateAll(healthAndWellbeing, where) {
        return this.healthAndWellbeingRepository.updateAll(healthAndWellbeing, where);
    }
    async findById(id, filter) {
        return this.healthAndWellbeingRepository.findById(id, filter);
    }
    async updateById(id, healthAndWellbeing) {
        await this.healthAndWellbeingRepository.updateById(id, healthAndWellbeing);
    }
    async replaceById(id, healthAndWellbeing) {
        await this.healthAndWellbeingRepository.replaceById(id, healthAndWellbeing);
    }
    async deleteById(id) {
        await this.healthAndWellbeingRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/health-and-wellbeings'),
    (0, rest_1.response)(200, {
        description: 'HealthAndWellbeing model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.HealthAndWellbeing) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.HealthAndWellbeing, {
                    title: 'NewHealthAndWellbeing',
                    exclude: ['internalID'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HealthAndWellbeingController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/health-and-wellbeings/count'),
    (0, rest_1.response)(200, {
        description: 'HealthAndWellbeing model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.HealthAndWellbeing)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HealthAndWellbeingController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/health-and-wellbeings'),
    (0, rest_1.response)(200, {
        description: 'Array of HealthAndWellbeing model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.HealthAndWellbeing, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.HealthAndWellbeing)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HealthAndWellbeingController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/health-and-wellbeings'),
    (0, rest_1.response)(200, {
        description: 'HealthAndWellbeing PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.HealthAndWellbeing, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.HealthAndWellbeing)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.HealthAndWellbeing, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HealthAndWellbeingController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/health-and-wellbeings/{id}'),
    (0, rest_1.response)(200, {
        description: 'HealthAndWellbeing model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.HealthAndWellbeing, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.HealthAndWellbeing, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HealthAndWellbeingController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/health-and-wellbeings/{id}'),
    (0, rest_1.response)(204, {
        description: 'HealthAndWellbeing PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.HealthAndWellbeing, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.HealthAndWellbeing]),
    tslib_1.__metadata("design:returntype", Promise)
], HealthAndWellbeingController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/health-and-wellbeings/{id}'),
    (0, rest_1.response)(204, {
        description: 'HealthAndWellbeing PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.HealthAndWellbeing]),
    tslib_1.__metadata("design:returntype", Promise)
], HealthAndWellbeingController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/health-and-wellbeings/{id}'),
    (0, rest_1.response)(204, {
        description: 'HealthAndWellbeing DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], HealthAndWellbeingController.prototype, "deleteById", null);
HealthAndWellbeingController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.HealthAndWellbeingRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.HealthAndWellbeingRepository])
], HealthAndWellbeingController);
exports.HealthAndWellbeingController = HealthAndWellbeingController;
//# sourceMappingURL=health-and-wellbeing.controller.js.map