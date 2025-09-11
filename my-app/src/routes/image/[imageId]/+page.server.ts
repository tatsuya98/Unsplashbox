import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import {ACCESS_KEY, BASE_URL} from "$env/static/private";

export const load:PageServerLoad = async ({params}) =>{
    if(params.imageId.length > 0){
        const imageData = await fetchImageData(params.imageId);
        if(Object.keys(imageData).length === 1){
            return error(404, "Image not found");
        }
        const {collectionsData, imageIds} = await fetchCollectionData(params.imageId);
        const images = []
        if(imageIds.length > 0){
            for (const imageId of imageIds) {
                const data = await fetchImageData(imageId);
                images.push(data);
            }
        }
        return {collectionsData: collectionsData, fetchedImages: images, imageData: imageData};
    }
}

async function fetchImageData(imageId: string) {
    const response = await fetch(`https://api.unsplash.com/photos/${imageId}`, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": ` Client-ID ${ACCESS_KEY}`
        })
    });
    return await response.json();
}

async function fetchCollectionData(imageId: string) {
    const collectionResponse = await fetch(`${BASE_URL}/api/images/${imageId}`,{
        method:"POST",
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Client-ID ${ACCESS_KEY}`
        }),
        body: JSON.stringify({
            "imageId": imageId
        })
    });
    return await collectionResponse.json();
}