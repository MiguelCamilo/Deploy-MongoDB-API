import { MONGO_CREDENTIALS } from "../secrets.js";
import { dbConnect } from "./dbConnect.js";

const collectionName = MONGO_CREDENTIALS.collection_name

export const GET_ALL = async (req, res) => {
    const db = dbConnect()

    const collection = await db.collection(collectionName).find({}).limit(10).toArray()
    console.table(collection)
    res.send(collection)
}

export const CREATE_COLLECTION = async (req, res) => {
    const db = dbConnect()
    
    const NEW_DOC = req.body
    await db.collection(collectionName).insertOne(NEW_DOC)

    .catch(err => { // responds with status code if err
        res.status(500).send(err)
        return
    })
    
    res.status(201).send( {message: 'New Doc Inserted'})
}