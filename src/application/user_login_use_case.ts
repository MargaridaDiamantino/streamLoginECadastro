import { ILogin } from "../domain/entities/user_login_enteties";
import { UserRepositories } from "../domain/repositories/user_repositories";
import { ComparePassword } from "../infrastructure/services/haspassword";

export class UserLoginUseCase {
    constructor(private UserRepositoies: UserRepositories) { }
    async execute(user: ILogin) {
        const userExist = await this.UserRepositoies.userFindEmail(user.email)

        if (user.email != userExist?.email) {
            throw new Error("Dados invalidos")
        }


        if (!(await ComparePassword.execute(user.senha, userExist?.senha))) {
            throw new Error("Dados invalidos")
        }

        const token = await this.UserRepositoies.userLogin(userExist.id)
        return {
            token: token,
            nome: userExist.nome,
            email: userExist.email
        }

    }
}