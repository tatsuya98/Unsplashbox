import {createApi} from "unsplash-js";
import {ACCESS_KEY} from "$env/static/private";

export const unsplashApi = createApi({
    accessKey: ACCESS_KEY,
});