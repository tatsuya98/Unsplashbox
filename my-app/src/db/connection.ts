import pg from 'pg'
const { Pool } = pg
import { DB_PORT, DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } from '$env/static/private'

const pool = new Pool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: Number(DB_PORT),
    database: DB_NAME,
})
async function verifyConnection(): Promise<void> {
    try {
        // Attempt to acquire a client from the pool
        const client = await pool.connect();
        console.log('✅ Connected to PostgreSQL database');
        client.release(); // Release the client back to the pool
    } catch (error) {
        console.error('❌ Error connecting to the database:', error);
    }
}

// Immediately verify connection upon module load.
verifyConnection();

export default pool;