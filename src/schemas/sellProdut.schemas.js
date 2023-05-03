import joi from "joi";

const sellProductSchema = joi.object({
    name: joi.string(),
    value: joi.string(),
    image: joi.url()
});