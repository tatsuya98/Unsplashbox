import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import {ACCESS_KEY} from "$env/static/private";


export const load:PageServerLoad = async ({params}) =>{
    if(params.imageId.length > 0){
        const imageData = await fetchImageData(params.imageId);
        if(Object.keys(imageData).length === 1){
            return error(404, "Image not found");
        }
       const collectionData = await fetchCollectionData(params.imageId);
        const images = []
        const imageIdsFromCollection = collectionData[1]
        for (const imageId of imageIdsFromCollection) {
            const data = await fetchImageData(imageId);
            images.push(data);
        }
        return {data:{collectionData: collectionData, fetchedImages: images, imageData}};
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
    const collectionResponse = await fetch(`/api/images/${imageId}`,{
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