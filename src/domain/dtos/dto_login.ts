import { IsEmail, IsNotEmpty, isNotEmpty, IsString, isString } from "class-validator";

interface ILogin{
    email:string,
    senha:string
}


export class Login implements ILogin{
   @IsString()
   @IsEmail({},{message:"tipo invalido"})
   @IsNotEmpty({ message: "O email é obrigatório" })
    email: string;

    @IsString()
    @IsNotEmpty({ message: "O senha é obrigatório" })
    senha: string;

    constructor(login:ILogin){
        this.email = login.email;
        this.senha = login.senha;
    }
}