export interface ILogin{
    email: string,
    senha: string
}

export class Login {
    private login:ILogin
    constructor(Login: ILogin) {
        this.login ={ ...Login};
    }
public get email(){
    return this.login.email
}
public get senha(){
    return this.login.senha
}
public set email(email:string){
    this.login.email=email
}
public set senha(senha:string){
    this.login.senha=senha
}
}