import { PrismaClient } from "@prisma/client";
import { IUSer } from "../../domain/dtos/DTO";
import { UserRepositories } from "../../domain/repositories/user_repositories";
import { ILogin } from "../../domain/entities/user_login_enteties";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UserRegister } from "../../domain/entities/user_register_enteties";
dotenv.config();


const prisma = new PrismaClient()
export class IUserRepositories implements UserRepositories {
   async userRegister(User: IUSer): Promise<IUSer> {
        return   await prisma.usuarios.create({
            data: {
                nome: User.nome,
                email: User.email,
                senha: User.senha

            }
        })

    }
 async   userFindEmail(email: string): Promise<any|null> {
     return await prisma.usuarios.findUnique({
        where:{
        email
     }
    })
    }


    async   userLogin(id:string): Promise<string|null> {
        const SECRET_KEY = process.env.JWT_SECRET  as string
        
        return jwt.sign(id, SECRET_KEY, {expiresIn:"1d"})


    }

}