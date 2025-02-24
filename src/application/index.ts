import { UserRepositories } from "../domain/repositories/user_repositories";
import { IUserRepositories } from "../infrastructure/Irepositories/i_user_repositories";
import { UserRegisterUseCase } from "./user_register_use_case";
const IUserRepositorie= new IUserRepositories
export const UserRegisterUseCases = new UserRegisterUseCase(IUserRepositorie)