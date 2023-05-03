import joi from "joi";

export const buyProductSchema = 
    joi.object({
        cep: joi.number().min(8).max(8),
        household: joi.string(),
        complement: joi.string(),
        cardNumber: joi.number().min(16).max(16),
        type: joi.string(),
        expiration: joi.number().min(4).max(4),
        cvc: joi.number().min(3).max(3),
        products: { }
    });