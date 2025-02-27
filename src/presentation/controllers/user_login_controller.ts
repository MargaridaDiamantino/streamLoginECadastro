import { UserLoginUseCase } from "../../application/user_login_use_case";
import express, { Request, Response } from "express";
export class UserLoginController{
    constructor(private User:UserLoginUseCase){}
    async execute(request:Request,response:Response){
        const {email, senha} = request.body;
        try {
            const user = await this.User.execute({email, senha});
            response.status(200).json({message:"sucesso",data:user})
        } catch (error:any) {
            response.status(400).json({message:"algo falhou",data:error.message})
        }

    }
}