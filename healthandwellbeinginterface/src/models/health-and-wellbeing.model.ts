import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class HealthAndWellbeing extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  internalId?: string;

  @property({
    type: 'any',
  })
  contentType?: any;

  @property({
    type: 'any',
  })
  language?: any;

  @property({
    type: 'any',
  })
  data?: any;

  @property({
    type: 'string',
  })
  url?: string;

  @property({
    type: 'string',
  })
  size?: string;

  @property({
    type: 'any',
  })
  hash?: any;

  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'any',
  })
  creation?: any;

  @property({
    type: 'number',
  })
  height?: number;

  @property({
    type: 'number',
  })
  width?: number;

  @property({
    type: 'number',
  })
  frames?: number;

  @property({
    type: 'string',
  })
  duration?: string;

  @property({
    type: 'number',
  })
  pages?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HealthAndWellbeing>) {
    super(data);
  }
}

export interface HealthAndWellbeingRelations {
  // describe navigational properties here
}

export type HealthAndWellbeingWithRelations = HealthAndWellbeing & HealthAndWellbeingRelations;
