import connect from "../dbConnect.js"
import {ObjectId} from "mongodb"

const intel_reports = connect.collection("intel_reports")

export async function getData() {
    try {
        const result = await intel_reports.find({}).toArray()
        return result
    } catch (error) {
        return {error}    
    }
}

export async function insertData(data) {
    try {
        const result = await intel_reports.insertOne(data)
        return result.insertedId
    } catch (error) {
        return error     
    }
}

export async function updateDataById(id, data = {}) {
    try {
        const result = intel_reports.updateOne({_id: new ObjectId(id)}, {$set: data})
        return result
    } catch (error) {
        return error 
    }
}

export async function replaseDataById(id, data = {}) {
    try {
        const result = intel_reports.replaceOne({_id: new ObjectId(id)}, data)
        return result
    } catch (error) {
        return error 
    }
}

export async function deleteDataById(id) {
    try {
        const result = intel_reports.deleteOne({_id: new ObjectId(id)})
        return result
    } catch (error) {
        return error    
    }
}

export async function getHighThreatLevel(highThreatLevel) {
    try {
        const result = await intel_reports.find({ threatLevel: {$gte: highThreatLevel} }).toArray()
        return result
    } catch (error) {
        return {error}    
    }
}
