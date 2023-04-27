import { Router } from "express"
import { signin, signup } from "../controllers/users.controllers.js"
import { verificationSchema, verificationEmail, verificationPassword } from "../middlewares/users.middlewares.js"
import { signinSchema, signupSchema } from "../schemas/users.schema.js"

const usersRouter = Router()

usersRouter.post("/sign-in", 
    verificationSchema(signinSchema), 
    verificationEmail(true), 
    verificationPassword, 
    signin
)
usersRouter.post("/sign-up", 
    verificationSchema(signupSchema), 
    verificationEmail(false),
    signup 
)

export default usersRouter