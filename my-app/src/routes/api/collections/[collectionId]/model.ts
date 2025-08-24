import type {QueryResult} from "pg";
import pool from "../../../../db/connection";

export const fetchCollectionById = async (id: number):Promise<QueryResult<any>> => {
    return await pool.query(`SELECT * FROM collections WHERE id = $1`, [id])
}

export const insertIntoCollectionById = async (id: number, photo_id: string) => {
    return await pool.query(`INSERT INTO images (photo_id) VALUES ($1)`,[photo_id]);
}