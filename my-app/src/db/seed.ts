import db from "./connection";


const seed = () => {
    return db.query('DROP TABLE IF EXISTS collections;')
        .then(() => {
            return db.query('DROP TABLE IF EXISTS images;')
        })
        .then(() => {
            return db.query("DROP TABLE IF EXISTS user_sessions")
        })
        .then(() => {
            return db.query("CREATE TABLE collections (" +
                "id SERIAL PRIMARY KEY," +
                "collection_name VARCHAR(255) NOT NULL);")
        })
        .then(() => {
            return db.query("CREATE TABLE images (" +
                "id SERIAL PRIMARY KEY," +
                "photo_id VARCHAR NOT NULL," +
                "collection_id INTEGER REFERENCES collections(id));")

        })
}


export default  seed;