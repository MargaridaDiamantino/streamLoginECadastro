import bcrypt from "bcrypt";
 
 class HashPassWord{
    constructor(){}
     async execute(senha: string):Promise<string>{
        return await bcrypt.hash(senha,10)

    }
 }
 export const hash= new HashPassWord
 