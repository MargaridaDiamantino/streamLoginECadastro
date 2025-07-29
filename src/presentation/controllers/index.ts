import { UserLoginUseCases, UserRegisterUseCases } from "../../application";

import { UserLoginController } from "./user_login_controller";
import { UserRegisterController } from "./user_regiter_controller";

export const UserRegisterControllers= new UserRegisterController(UserRegisterUseCases)
export const UserLoginControllers= new UserLoginController(UserLoginUseCases)