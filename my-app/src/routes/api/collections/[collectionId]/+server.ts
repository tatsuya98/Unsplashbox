import type { RequestHandler } from '../../.svelte-kit/types/src/routes';
import {fetchCollectionById} from "./model";
import {json} from "@sveltejs/kit";

export const GET: RequestHandler = async ( {params}) => {
    const {collectionId} = params
    const queryResult = await fetchCollectionById(Number(collectionId))
    return json({collection: queryResult.rows[0]})
}