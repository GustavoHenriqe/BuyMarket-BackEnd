import { Router } from "express";
import { validationToken } from "../middlewares/global.middlewares.js";
import { verificationSchema } from "../middlewares/verificationSchema.middlewares.js";
import { buyProductSchema } from "../schemas/buyProducts.schemas.js";
import { tokenSchema } from "../schemas/product.schema.js";
import { buyProducts } from "../controllers/transactions.controller.js";
import { searchProducts } from "../middlewares/transaction.middlewares.js";

const transactionRouter = Router();

transactionRouter.post("/transactions",
    validationToken,
    verificationSchema(tokenSchema, "headers"),
    verificationSchema(buyProductSchema, "body"),
    searchProducts,
    buyProducts
);