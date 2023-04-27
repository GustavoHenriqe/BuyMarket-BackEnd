import { Router } from "express"
import { login } from "../controllers/users.controllers.js"
import { verificationLoginSchema, verificationEmailAndPasswordInDB } from "../middlewares/signin.middlewares.js"
import { loginSchema } from "../schemas/signin.schema.js"

const usersRouter = Router()

usersRouter.post("/sign-in", verificationLoginSchema(loginSchema), verificationEmailAndPasswordInDB, login)
usersRouter.post("/sign-up")

export default usersRouter