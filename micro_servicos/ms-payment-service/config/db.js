const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'payments',
  password: 'password',
  port: 5432,
});

module.exports = pool;
