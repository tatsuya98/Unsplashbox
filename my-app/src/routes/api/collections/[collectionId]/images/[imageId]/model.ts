import pool from "../../../../../../db/connection";

export const deleteImageFromImages = async (collectionId: number, imageId: string) => {
    await pool.query("DELETE FROM images WHERE photo_id = $1 AND collection_id = $2", [imageId, collectionId]);
}

