import { error } from '@sveltejs/kit';
import type { RequestHandler } from '../../../../../.svelte-kit/types/src/routes';
import {createCollection, fetchCollection} from "./model";

export const GET: RequestHandler = async () => {
    const queryResult = await fetchCollection();
    return new Response(JSON.stringify(queryResult.rows))
}

export const POST: RequestHandler = async ({request}) => {

    const {collection_name} = await request.json();
    const queryResult = await createCollection(collection_name)
    return new Response(JSON.stringify({collection_id: queryResult}))
}