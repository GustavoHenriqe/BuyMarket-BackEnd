import joi from "joi";

export const buyProductSchema =  joi.object({
    cep: joi.number().min(8).max(8).required(),
    household: joi.string().required(),
    complement: joi.string().required(),
    cardNumber: joi.number().min(16).max(16).required(),
    type: joi.string().required(),
    expiration: joi.number().min(4).max(4).required(),
    cvc: joi.number().min(3).max(3).required(),
    products: joi.array().items(joi.string()).required()
});