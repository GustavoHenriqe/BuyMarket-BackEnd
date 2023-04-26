import express from "express"
import mongoClient from "./database/db.database.js"

const app = express()

export const db = mongoClient.db()

const PORT_SERVER = 5005

app.listen(PORT_SERVER, () => {
    console.log("Servidor rodando na porta: " + PORT_SERVER)
})