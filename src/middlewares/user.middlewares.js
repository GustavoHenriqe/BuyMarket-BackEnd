import bcrypt from "bcrypt"
import { db } from "../database/db.database.js"

export function verificationLoginSchema(schema) {
    return (req, res, next) => {
        const validate = schema.validate(req.body, { abortEarly: false })

        if (validate.error) {
            const errors = validate.error.details.map(detail => detail.message)
            return res.status(422).send({ message: "Não foi possivel processar a requisição!!", errors: errors })
        }
        next()
    }
}

export async function verificationEmailAndPasswordInDB(req, res, next) {
    const { email, password } = req.body

    try {
        const searchUser = await db.collection("users").findOne({ email: email })

        if (searchUser === null) {
            return res.status(404).send({ message: "Não conseguimos encontrar o email" })
        }

        const verificationPassword = bcrypt.compare(password, searchUser.password)

        if (verificationPassword === false) {
            return res.status(401).send({ message: "Senha inválida" })
        }

        res.locals.user = searchUser

        next()
    } catch (err) {
        res.status(500).send("Erro interno do servidor")
    }
}