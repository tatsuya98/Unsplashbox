import pool from "../../../../../db/connection";


export const fetchImagesById = async (id: number) => {
    return await pool.query("SELECT photo_id FROM images WHERE collection_id = $1", [id]);
}

export const insertIntoImages = async (id:Number, photoId:string) => {
    return await pool.query("INSERT INTO images(photo_id, collection_id) VALUES ($1, $2)", [photoId, id])
}