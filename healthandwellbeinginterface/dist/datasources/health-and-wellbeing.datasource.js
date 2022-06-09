"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthAndWellbeingDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'HealthAndWellbeing',
    connector: 'mongodb',
    url: 'mongodb://localhost:27017',
    host: 'localhost',
    port: 27017,
    user: '',
    password: '',
    database: '',
    useNewUrlParser: true
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