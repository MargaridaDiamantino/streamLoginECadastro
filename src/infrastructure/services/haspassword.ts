import bcrypt from "bcrypt";
 
 class HashPassWord{
    constructor(){}
     async execute(senha: string):Promise<string>{
        return await bcrypt.hash(senha,10)

    }
 }

 class ComparePassWord{
   constructor(){}
   async execute(senha: string,hash: string):Promise<boolean>{
      return await bcrypt.compare(senha,hash)
   }
 }
 export const  ComparePassword= new  ComparePassWord
 export const hash= new HashPassWord
 