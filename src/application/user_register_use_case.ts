
import { IUSer } from "../domain/dtos/DTO";
import { UserRepositories } from "../domain/repositories/user_repositories";
import { hash } from "../infrastructure/services/haspassword";

export class UserRegisterUseCase {
    constructor(private UserRepositoies: UserRepositories) { }
    async execute(User: IUSer) {


        if (await this.UserRepositoies.userFindEmail(User.email)) {
            throw new Error("Email ja exists");
        }

        const senha = await hash.execute(User.senha)

        this.UserRepositoies.userRegister({ nome: User.nome, email: User.email, senha })


    }

}