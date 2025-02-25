import app from "./app";
import { setupSwagger } from "./infrastructure/config/swagger";


setupSwagger(app)
app.listen(3000,()=>{
    console.log("server is running on port 3000");
    console.log(`📄 Swagger Docs: http://localhost:3000/api-docs`);
})