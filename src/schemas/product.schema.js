import joi from "joi"

export const procutSchema = joi.object({
    price: joi.number().positive().integer().required(),
    url: joi.string().uri().required(),
    title: joi.string().empty().max(20).required()
})

export const tokenSchema = joi.string().regex(/^Bearer\s/).required()
