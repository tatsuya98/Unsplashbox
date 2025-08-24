export type collection = {
    id: number,
    title: string
}

export type Photo = {
    id: number;
    width: number;
    height: number;
    urls: {
        full: string;
        raw: string;
        regular: string;
        small: string;
        thumb: string;
    }
    color: string | null;
    user: {
        username: string;
        name: string;
    };
};

export type Collection = {
    collectionName: string,
    photoIds: string[]
}