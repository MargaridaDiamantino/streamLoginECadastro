import { promises } from "dns";
import { IUSer } from "../dtos/DTO";

export abstract class UserRepositories{
    abstract userRegister(User:IUSer):Promise<IUSer>;
    abstract userFindEmail(email:string):Promise<IUSer|null>
}