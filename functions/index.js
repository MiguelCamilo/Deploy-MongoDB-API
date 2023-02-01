import functions from "firebase-functions"
import express from "express"
import cors from "cors"

import { GET_ALL, CREATE_COLLECTION } from "./src/functions.js"

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send('This Works!')
})

app.get('/get', GET_ALL)

app.post('/create', CREATE_COLLECTION)


export const api = functions.https.onRequest(app)
