import express from "express"
import usersRouter from "./routes/signin.routes.js"
import productsRouter from "./routes/products.routes.js"
import cors from "cors"
import dotenv from "dotenv"

//Declaração do servidor
const app = express()

//Configurações do servidor
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(usersRouter)
app.use(productsRouter)

//Configure sua porta se preferir
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log("Servidor rodando na porta: " + port)
})