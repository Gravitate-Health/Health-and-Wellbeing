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
