import type {Collection, Photo} from "$lib/types"

interface  CollectionInterface {
    images: Photo[],
    collections: Collection[]
}
export const unsplashData = $state<CollectionInterface>({
  images: [],
  collections: []
})

export const setCollections = (collectionsData: Collection[]) => {
   unsplashData.collections = collectionsData
}