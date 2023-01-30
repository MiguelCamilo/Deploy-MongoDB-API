import { MongoClient } from "mongodb";
import { MONGO_CREDENTIALS } from "../secrets.js";

export const dbConnect = () => {
    const client = new MongoClient(MONGO_CREDENTIALS.uri)
    return client.db(MONGO_CREDENTIALS.db)
}