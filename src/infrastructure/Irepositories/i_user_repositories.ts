import { PrismaClient } from "@prisma/client";
import { IUSer } from "../../domain/dtos/DTO";
import { UserRepositories } from "../../domain/repositories/user_repositories";

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
}