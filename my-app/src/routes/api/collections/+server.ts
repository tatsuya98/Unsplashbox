import type { RequestHandler } from '../../../../../.svelte-kit/types/src/routes';
import {createCollection, fetchCollection} from "./model";
import {json} from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
    const queryResult = await fetchCollection();
    return json({collections: queryResult.rows})
}

export const POST: RequestHandler = async ({request}) => {

    const {collection_name} = await request.json();
    const queryResult = await createCollection(collection_name)
    return json({collection_id: queryResult})
}