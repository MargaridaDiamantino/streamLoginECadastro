import { UserRegisterUseCases } from "../../application";
import { UserRegisterController } from "./user_regiter_controller";

export const UserRegisterControllers= new UserRegisterController(UserRegisterUseCases)