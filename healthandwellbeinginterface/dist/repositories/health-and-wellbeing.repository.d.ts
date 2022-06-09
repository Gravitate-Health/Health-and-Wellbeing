import { DefaultCrudRepository } from '@loopback/repository';
import { HealthAndWellbeingDataSource } from '../datasources';
import { HealthAndWellbeing, HealthAndWellbeingRelations } from '../models';
export declare class HealthAndWellbeingRepository extends DefaultCrudRepository<HealthAndWellbeing, typeof HealthAndWellbeing.prototype.internalId, HealthAndWellbeingRelations> {
    constructor(dataSource: HealthAndWellbeingDataSource);
}
