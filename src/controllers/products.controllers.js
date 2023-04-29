import { db } from "../database/db.database.js"
import { ObjectId } from "mongodb"

export async function insertProduct(req, res) {
    const { title, price, url } = req.body

    const data = res.locals.data

    try {
        await db.collection("products").insertOne({ 
            title: title, 
            price: price, 
            url: url, 
            idUser: new ObjectId(data._id) 
        })

        res.status(201).send({ message: "Produto postado com sucesso" })

    } catch (err) {
        res.status(500).send("Erro interno do servidor!!")
    }
}