// localhost:27017

import {MongoClient} from "mongodb"

export async function getTest(testId){
    const uri = "mongodb://localhost:27017"
    const client = new MongoClient(uri)

    try{
        await client.connect()
        return await client.db("local").collection("tests").find().toArray()
    } catch (e) {
        console.log(e)
    } finally {
        await client.close()
    }
    return undefined
}