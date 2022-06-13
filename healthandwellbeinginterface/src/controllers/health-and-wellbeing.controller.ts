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

import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {HealthAndWellbeing} from '../models';
import {HealthAndWellbeingRepository} from '../repositories';

export class HealthAndWellbeingController {
  constructor(
    @repository(HealthAndWellbeingRepository)
    public healthAndWellbeingRepository : HealthAndWellbeingRepository,
  ) {}

  @post('/health-and-wellbeings')
  @response(200, {
    description: 'HealthAndWellbeing model instance',
    content: {'application/json': {schema: getModelSchemaRef(HealthAndWellbeing)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HealthAndWellbeing, {
            title: 'NewHealthAndWellbeing',
            exclude: ['internalID'],
          }),
        },
      },
    })
    healthAndWellbeing: Omit<HealthAndWellbeing, 'internalID'>,
  ): Promise<HealthAndWellbeing> {
    return this.healthAndWellbeingRepository.create(healthAndWellbeing);
  }

  @get('/health-and-wellbeings/count')
  @response(200, {
    description: 'HealthAndWellbeing model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(HealthAndWellbeing) where?: Where<HealthAndWellbeing>,
  ): Promise<Count> {
    return this.healthAndWellbeingRepository.count(where);
  }

  @get('/health-and-wellbeings')
  @response(200, {
    description: 'Array of HealthAndWellbeing model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(HealthAndWellbeing, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(HealthAndWellbeing) filter?: Filter<HealthAndWellbeing>,
  ): Promise<HealthAndWellbeing[]> {
    return this.healthAndWellbeingRepository.find(filter);
  }

  @patch('/health-and-wellbeings')
  @response(200, {
    description: 'HealthAndWellbeing PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HealthAndWellbeing, {partial: true}),
        },
      },
    })
    healthAndWellbeing: HealthAndWellbeing,
    @param.where(HealthAndWellbeing) where?: Where<HealthAndWellbeing>,
  ): Promise<Count> {
    return this.healthAndWellbeingRepository.updateAll(healthAndWellbeing, where);
  }

  @get('/health-and-wellbeings/{id}')
  @response(200, {
    description: 'HealthAndWellbeing model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(HealthAndWellbeing, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(HealthAndWellbeing, {exclude: 'where'}) filter?: FilterExcludingWhere<HealthAndWellbeing>
  ): Promise<HealthAndWellbeing> {
    return this.healthAndWellbeingRepository.findById(id, filter);
  }

  @patch('/health-and-wellbeings/{id}')
  @response(204, {
    description: 'HealthAndWellbeing PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HealthAndWellbeing, {partial: true}),
        },
      },
    })
    healthAndWellbeing: HealthAndWellbeing,
  ): Promise<void> {
    await this.healthAndWellbeingRepository.updateById(id, healthAndWellbeing);
  }

  @put('/health-and-wellbeings/{id}')
  @response(204, {
    description: 'HealthAndWellbeing PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() healthAndWellbeing: HealthAndWellbeing,
  ): Promise<void> {
    await this.healthAndWellbeingRepository.replaceById(id, healthAndWellbeing);
  }

  @del('/health-and-wellbeings/{id}')
  @response(204, {
    description: 'HealthAndWellbeing DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.healthAndWellbeingRepository.deleteById(id);
  }
}
