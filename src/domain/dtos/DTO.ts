import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export interface IUSer {
    nome: string;
    senha: string;
    email: string;
 
   

}

export class Users implements IUSer{
    @IsString()
    @IsNotEmpty({ message: "O nome é obrigatório" })
    nome: string;

    @IsEmail({},{message:"Email invalido"})
    @IsNotEmpty()
    email: string;


    @IsNotEmpty({ message: "O nome é obrigatório" })
    senha: string;

    constructor(User:IUSer){
        this.nome = User.nome
        this.email = User.email;
        this.senha = User.senha;
    }
}