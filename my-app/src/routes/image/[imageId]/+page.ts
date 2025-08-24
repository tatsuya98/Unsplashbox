import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import {ACCESS_KEY} from "$env/static/private";


export const load:PageLoad = async ({params}) =>{
    if(params.imageId.length > 0){
        const response = await fetch(`https://api.unsplash.com/photos/${params.imageId}`,{
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": ` Client-ID ${ACCESS_KEY}`
            })
        });
        const imageData = await response.json();
        if(Object.keys(imageData).length === 1){
            return error(404, "Image not found");
        }
        return imageData;
    }
}