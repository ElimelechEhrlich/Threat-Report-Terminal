import connect from "../dbConnect.js"
import {ObjectId} from "mongodb"

let users = connect.collection("users")

export async function getData() {
    const result = await users.find({}).toArray()
    return result
}

export async function insertData(data = {}) {
    
    const result = await users.insertOne(data)
    return result.insertedId
}

export async function updateDataById(id, data = {}) {
    const result = users.updateOne({_id: new ObjectId(id)}, {$set: data})
    return result
}

export async function replaseDataById(id, data = {}) {
    const result = users.replaceOne({_id: new ObjectId(id)}, data)
    return result
}

export async function deleteDataById(id) {
    const result = users.deleteOne({_id: new ObjectId(id)})
    return result
}



