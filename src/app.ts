
import cors from "cors";
import express from "express";
import { setupSwagger } from "./infrastructure/config/swagger";
import routes from "./presentation/routes/router";
const app= express()

app.use(cors()) //permite requisicoes de diferents fontes
app.use(express.json())// formato de resposta padrao json

app.use("/api",routes) 
setupSwagger(app)

export default app