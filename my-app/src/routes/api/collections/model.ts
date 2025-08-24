import type {collection} from "$lib/types";
import pool from "../../../db/connection";

export const fetchCollection  = async ():Promise<collection[]> =>{
    const queryResult = await pool.query("SELECT * FROM collections")
    return  queryResult.rows;
}

export const createCollection = async (collection_name:string):Promise<Number> =>{
    const queryResult = await pool.query("INSERT INTO collections(collection_name) VALUES ($1) RETURNING id;", [collection_name])
    return queryResult.rows[0].id;
}