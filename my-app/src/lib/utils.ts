import type {Photo} from "$lib/types";

export const convertToPhoto = (objectToConvert: { id: any; width: any; height: any; urls: any; color: any; user: any; }):Photo => {
    return {
        id: Number(objectToConvert.id),
        width: Number(objectToConvert.width),
        height: Number(objectToConvert.height),
        urls: objectToConvert.urls,
        color: objectToConvert.color,
        user: objectToConvert.user,
    }
}