export interface IUSer{
    nome:string;
    senha:string;
    email:string;

}

export class UserRegister{
    private id:String
    private User:IUSer
    constructor(User:IUSer,id:string)
    {    this.id= id?? ""
        this.User={...User}
    }

 public  get nome():string {
    return this.User.nome
 }
 public get senha():string{
    return this.User.senha
 }
 public get email():string{
    return this.User.email
 }
 public set nome(nome:string){
    this.User.nome=nome
 }
 public set senha(senha:string){
    this.User.senha=senha
 }
   public set email(email:string){
    this.User.email=email
   } 
}