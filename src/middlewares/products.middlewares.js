import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export function verificationToken(req, res, next) {
    const { token } = req.headers

    try {
        const removedBearer = token.replace("Bearer ", "")

        const key = process.env.KEY_JWT

        const data = jwt.verify(removedBearer, key)

        res.locals.data = data

        next()
    } catch (err) {
        res.status(401).send({message: "Login experirado"})
    }
}