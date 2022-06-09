import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {HealthAndWellbeingDataSource} from '../datasources';
import {HealthAndWellbeing, HealthAndWellbeingRelations} from '../models';

export class HealthAndWellbeingRepository extends DefaultCrudRepository<
  HealthAndWellbeing,
  typeof HealthAndWellbeing.prototype.internalId,
  HealthAndWellbeingRelations
> {
  constructor(
    @inject('datasources.HealthAndWellbeing') dataSource: HealthAndWellbeingDataSource,
  ) {
    super(HealthAndWellbeing, dataSource);
  }
}
