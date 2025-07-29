import { promises } from "dns";
import { IUSer } from "../dtos/DTO";
import { ILogin } from "../entities/user_login_enteties";
import { usuarios } from "@prisma/client";

export abstract class UserRepositories{
    abstract userRegister(User:IUSer):Promise<IUSer>;
    abstract userFindEmail(email:string):Promise<usuarios|null>
    abstract userLogin(id:string):Promise<string|null>
}