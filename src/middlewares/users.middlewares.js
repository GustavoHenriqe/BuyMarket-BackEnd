import bcrypt from "bcrypt"
import { db } from "../database/db.database.js"

export function verificationEmail(required) {
    return async (req, res, next) => {
        const { email } = req.body

        try {
            const searchUser = await db.collection("users").findOne({ email: email })
    
            if (searchUser === null && required === true ) {
                return res.status(404).send({ message: "Não conseguimos encontrar o email" })

            } else if (searchUser !== null && required === false) {
                return res.status(409).send({ message: "Já existe um email cadastrado" })
            }

            res.locals.user = searchUser

            next()
        }
        catch (err) {
            res.status(500).send("Erro interno do servidor")
        }
    }
}

export function verificationPassword (req, res, next) {
    const { password } = req.body

    const searchUser = res.locals.user

    const verificationPassword = bcrypt.compareSync(password, searchUser.password)

    if (verificationPassword === false) {
        return res.status(401).send({ message: "Senha inválida" })
    }

    next()
}