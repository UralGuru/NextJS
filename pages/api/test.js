// localhost:27017

import {MongoClient} from "mongodb"

export default async function handler(req, res){
    const uri = "mongodb://localhost:27017"
    const client = new MongoClient(uri)
    let test;

    try{
        await client.connect()
        const result = await client.db("TestDB").collection("test").find().toArray()
        test = result
    } catch (e) {
        console.log(e)
    } finally {
        await client.close()
    }
    res.status(200).json(await getTest(1))
}

export async function getTest(testId){
    const uri = "mongodb://localhost:27017"
    const client = new MongoClient(uri)
    let test;

    try{
        await client.connect()
        const result = await client.db("TestDB").collection("test").find().toArray()
        return result
    } catch (e) {
        console.log(e)
    } finally {
        await client.close()
    }
    return undefined
}