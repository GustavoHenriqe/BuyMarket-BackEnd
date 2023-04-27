import { Router } from "express"
import { login } from "../controllers/users.controllers.js"
import { verificationLoginSchema, verificationEmailAndPasswordInDB } from "../middlewares/user.middlewares.js"
import { loginSchema } from "../schemas/login.schema.js"

const users = Router()

users.post("/login", verificationLoginSchema(loginSchema), verificationEmailAndPasswordInDB, login)

export default users