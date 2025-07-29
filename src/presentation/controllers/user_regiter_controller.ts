 
import express, { Request, Response } from "express";
import { UserRegisterUseCase } from "../../application/user_register_use_case";
 
 export class UserRegisterController{
    constructor(private User:UserRegisterUseCase){}
     async execute(request:Request,response:Response)
     {
        const {nome,email,senha} = request.body;
        try {
            const user = await this.User.execute({nome,email,senha});
            return response.status(201).json(user);
            
        } catch (error:any) {
            return response.json({message:error.message}).status(400)
            
        }
      

     }
 }