import type { RequestHandler } from '../../../.svelte-kit/types/src/routes';
import {fetchImagesById, insertIntoImages} from "./model";

export const GET: RequestHandler = async ({url}) => {
    const id = Number(url.searchParams.get('id'))
    return new Response(JSON.stringify(await fetchImagesById(id)))
}


export const POST: RequestHandler = async ({params, request}) => {

    const {photoId} = await request.json()
    const collectionId = Number(params.collectionId)
    await insertIntoImages(collectionId, photoId);
    return new Response("Image added to collection");
}