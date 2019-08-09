require('dotenv').config();

const {
  POSTGRES_DATABASE,
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_PORT,
} = process.env;

module.exports = {
  username: POSTGRES_USERNAME,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE,
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  dialect: 'postgres',
  logging: process.env.DB_LOGGING || false,
};
