// pages/api/db.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: '12345678',
  host: 'database-1.cmcjo0rjrckp.us-east-2.rds.amazonaws.com',
  port: '5432',
  database: 'posgres',
});


export default pool;
