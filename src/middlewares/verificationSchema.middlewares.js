export function verificationSchema(schema, type) {
    return (req, res, next) => {
        const typeReq = type === "body" ? req.body : req.headers.token

        const validate = schema.validate(typeReq, { abortEarly: false })

        if (validate.error) {
            const errors = validate.error.details.map(detail => detail.message)
            return res.status(422).send({ message: "Não foi possivel processar a requisição!!", errors: errors })
        }
        next()
    }
}