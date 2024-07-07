export const config: any = {
  local: {
    database: process.env.DB || 'ucsa-db',
    host: process.env.DB_HOST || 'localhost',
    password: process.env.DB_PW || 'password',
    port: parseInt(process.env.PORT || '') || 5432,
    user: process.env.DB_USER || 'ucsa',
  },
};

export const ENV = process.env.ENV || 'local';
