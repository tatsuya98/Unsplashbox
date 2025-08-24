import type { RequestHandler } from './$types';
import {deleteImageFromImages} from "./model";

export const DELETE: RequestHandler = async ({params}) => {
    const {collectionId, imageId} = params;
    await deleteImageFromImages(Number(collectionId), imageId)
    return new Response("Image deleted successfully.")
}