import { Router } from "express"
import { signin, signup } from "../controllers/users.controllers.js"
import { verificationEmail, verificationPassword } from "../middlewares/users.middlewares.js"
import { signinSchema, signupSchema } from "../schemas/users.schema.js"
import { verificationSchema } from "../middlewares/verificationSchema.middlewares.js"

const usersRouter = Router()

usersRouter.post("/sign-in", 
    verificationSchema(signinSchema, "body"), 
    verificationEmail(true), 
    verificationPassword, 
    signin
)
usersRouter.post("/sign-up", 
    verificationSchema(signupSchema, "body"), 
    verificationEmail(false),
    signup 
)

export default usersRouter