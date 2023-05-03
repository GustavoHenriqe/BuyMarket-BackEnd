import { db } from "../database/db.database.js"
import { ObjectId } from "mongodb"

export async function searchProducts (req, res, next) {
    const { products } = req.body

    const convertAllObjcetId = products.map(id => new ObjectId(id))

    try {
        const arrayOfProducts = await db.collection("products").find({ _id: { $in: convertAllObjcetId }}).toArray()

        if ( products.length !== arrayOfProducts.length ) {
            return res.status(404).send({ message: "Algum produto que você queira comprar não existe" })
        }

        res.locals.arrayProducts = convertAllObjcetId

        next()
    } catch (err) {
        res.status(500).send("Erro interno do servidor!!")
    }
}