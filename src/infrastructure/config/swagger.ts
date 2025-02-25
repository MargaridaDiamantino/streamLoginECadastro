import swaggerJsDoc from "swagger-jsdoc"
import { Express } from "express";
import swaggerUi from "swagger-ui-express";


const options:swaggerJsDoc.Options={
    definition:{
        openapi: "3.0.0",
        info:{
            title: "API Documentation",
            version: "1.0.0",
            description:"Documentacao da API"
        },
        servers:[
            {
            url: "http://localhost:3000",
            description: "Server "
        }
        ]
    },
    apis:["./src/presentation/routes/*.ts"],
}

const swaggerSpec = swaggerJsDoc(options);
export const setupSwagger=(app:Express)=>{
    app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec))

}