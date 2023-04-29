import { db } from "../database/db.database.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { ObjectId } from "mongodb"
import bcrypt from "bcrypt"

dotenv.config()

export async function signin(req, res) {

    try {
        const searchUser = res.locals.user
        
        const data = { id: new ObjectId(searchUser._id) }
        const key = process.env.KEY_JWT
        const exp = { expiresIn: 172800 }

        const token = jwt.sign(data, key, exp)

        await db.collection("sessions").insertOne({ token: token })

        res.status(201).send({ token: token })
    } catch (err) {
        res.status(500).send("Erro interno do servidor")
    }
}

export async function signup(req, res) {
    const { password, email, name} = req.body

    try {
        const encryptPassword = bcrypt.hashSync(password, 10)

        await db.collection("users").insertOne({ password: encryptPassword, email: email, name: name, balance: 0 })

        res.status(201).send({message: "Cadastro criado com sucesso"})

    } catch (err) {
        res.status(500).send("Erro interno do servidor!!")
    }
}