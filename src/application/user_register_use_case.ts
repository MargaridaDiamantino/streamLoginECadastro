
import { plainToInstance } from "class-transformer";
import { IUSer, Users } from "../domain/dtos/DTO";
import { UserRepositories } from "../domain/repositories/user_repositories";
import { hash } from "../infrastructure/services/haspassword";
import { validate } from "class-validator";

export class UserRegisterUseCase {
    constructor(private UserRepositoies: UserRepositories) { }
    async execute(User: IUSer) {


        if (await this.UserRepositoies.userFindEmail(User.email)) {
            throw new Error("Email ja exists");
        }


        const userInstance = plainToInstance(Users,User);

     
        const errors = await validate(userInstance);

        if (errors.length > 0) {
            console.log("Erros de validação:", errors);
            throw new Error("Dados inválidos");
        }
        const senha = await hash.execute(User.senha)

     return this.UserRepositoies.userRegister({ nome: User.nome, email: User.email, senha })


    }

}