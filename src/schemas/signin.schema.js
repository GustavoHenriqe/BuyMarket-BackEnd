import joi from "joi"

export const loginSchema = joi.object({
    email: joi.string().empty().email().required(),
    password: joi.string().empty().required()
}).required()
