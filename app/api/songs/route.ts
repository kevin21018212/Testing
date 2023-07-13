
import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'database-1.cmcjo0rjrckp.us-east-2.rds.amazonaws.com',
    database: 'postgres',
    password: '12345678',
    port: 5432, // default PostgreSQL port
  });


  export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { songName, artist, album, year, rating } = req.body;
  
      try {
        const query = 'INSERT INTO songs (song_name, artist, album, year, rating) VALUES ($1, $2, $3, $4, $5)';
        const values = [songName, artist, album, year, rating];
  
        await pool.query(query, values);
  
        res.status(200).json({ message: 'Song added successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while adding the song' });
      }
    } else {
      res.setHeader('Allow', 'POST'); // Set the allowed HTTP method(s) for the endpoint
      res.status(405).end('Method Not Allowed'); // Return a 405 status code for other methods
    }
  }