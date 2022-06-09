import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'HealthAndWellbeing',
  connector: 'mongodb',
  url: process.env.DB_URL + "HealthAndWellbeing" + "?replicaSet=rs0",
  port: 27017,
  useNewUrlParser: true,
  protocol: 'mongodb+srv'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class HealthAndWellbeingDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'HealthAndWellbeing';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.HealthAndWellbeing', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
