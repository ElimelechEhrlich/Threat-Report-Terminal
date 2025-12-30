import { config } from "dotenv"
import { MongoClient, Db } from "mongodb"
config()

const client = new MongoClient(process.env.DB_CONNECTION)

/**
 * @type {Db || null}
 */
let db = null
/**
 * @returns {Promise<Db>}
 */
async function getConnect() {
    try {
        if (!db) {
            await client.connect();
            db = client.db("start_mongo");
            console.log("DB Connected");
        }
        return db
    } catch (error) {
        console.error(error)
    }
}

const connect = await getConnect()

// // const result = await db.collection("users").insertOne({username: "beni"})
// // const result = await db.collection("users").findOne({ _id: new ObjectId("69538a26766a56780d39b54e") })
// // const result = await db.collection("users").find({}).toArray()
// // const result2 = await db.collection("users").insertOne({username: "ben", age: 20})
// // const result2 = await db.collection("users").deleteOne({username: "ben", age: 20})
// const result2 = await db.collection("users").findOneAndUpdate({username: "beni"}, {username: "Beni"})
// // console.log(result);
// console.log(result2);

export default connect;