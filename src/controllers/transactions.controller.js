import { db } from "../database/db.database.js";
import { ObjectId } from "mongodb";

export async function buyProducts (req, res) {
    const { cep, household, complement, cardNumber, type, expiration, cvc } = req.body

    try {
        await db.collection("purchased").insertOne({
            cep: cep,
            household: household,
            complement: complement,
            cardNumber: cardNumber,
            type: type,
            expiration: expiration,
            cvc: cvc,
            idUser: new ObjectId(res.locals.data)
        })

        await db.collection("products").deleteMany({ _id: { $in: res.locals.arrayProducts } })

        res.status(201).send({message: "Comprado com sucesso"})

    } catch (err) {
        res.status(500).send("Erro interno do servidor!!")
    }
}