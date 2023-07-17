// pages/api/fetchData.js

import pool from './db';

export default async function handler(req, res) {
  const client = await pool.connect();

  try {
    const result = await client.query('SELECT * FROM your_table');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    client.release();
  }
}
