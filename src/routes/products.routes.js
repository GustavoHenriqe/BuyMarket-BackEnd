import { Router } from "express"
import { procutSchema, tokenSchema } from "../schemas/product.schema.js"
import { verificationSchema } from "../middlewares/verificationSchema.middlewares.js"
import { verificationToken } from "../middlewares/products.middlewares.js"
import { insertProduct } from "../controllers/products.controllers.js"

const productsRouter = Router()

productsRouter.post("/product", 
    verificationSchema(procutSchema, "body"), 
    verificationSchema(tokenSchema, "headers"),
    verificationToken,
    insertProduct
)

export default productsRouter