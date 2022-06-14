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
