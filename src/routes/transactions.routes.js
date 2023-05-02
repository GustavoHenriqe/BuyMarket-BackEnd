import { Router } from "express";
import { validationToken } from "../middlewares/transaction.middlewares";
import { verificationSchema } from "../middlewares/verificationSchema.middlewares";
import buyProductSchema from "../schemas/buyProducts.schemas";
import { tokenSchema } from "../schemas/product.schema";
import { buyProducts } from "../controllers/transactions.controller";



const transactionRouter = Router();

transactionRouter.post("/transactions",
    validationToken,
    verificationSchema(tokenSchema, "headers"),
    verificationSchema(buyProductSchema, "body"),
    buyProducts
);