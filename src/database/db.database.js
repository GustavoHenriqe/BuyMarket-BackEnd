import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const mongoClient = new MongoClient(process.env.MONGO_URL)

try {
    await mongoClient.connect()
} catch (err) {
    console.log(error)
}

export const db = mongoClient.db()

export default db