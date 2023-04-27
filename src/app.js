import express from "express"
import users from "./routes/users.routes.js"
import cors from "cors"

//Declaração do servidor
const app = express()

//Configurações do servidor
app.use(cors())
app.use(express.json())
app.use(users)

//Configure sua porta se preferir
const PORT_SERVER = 5000

app.listen(PORT_SERVER, () => {
    console.log("Servidor rodando na porta: " + PORT_SERVER)
})