import joi from "joi"

export const signinSchema = joi.object({
    email: joi.string().empty().email().required(),
    password: joi.string().empty().required()
}).required()

export const signupSchema = joi.object({
    email: joi.string().empty().email().required(),
    password: joi.string().empty().required(),
    name: joi.string().required()
}).required()