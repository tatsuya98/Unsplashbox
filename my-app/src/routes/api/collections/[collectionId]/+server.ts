import type { RequestHandler } from '../../.svelte-kit/types/src/routes';
import {fetchCollectionById} from "./model";

export const GET: RequestHandler = async ( {params}) => {
    const {collectionId} = params
    const queryResult = await fetchCollectionById(Number(collectionId))
    return new Response(JSON.stringify(queryResult.rows[0]))
}