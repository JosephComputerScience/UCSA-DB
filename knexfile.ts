import { Knex } from 'knex';
import { config, ENV } from './config/config';

const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      // config based on ENV
      ...config[ENV],
    },
  },
};

export default knexConfig;
