export class Login {
    userId:number;
    username:string;
    password:string;
    role:any;
    aurthorize:boolean
    constructor(userId?,username?,password?,role?,aurthorize?){
        this.userId=userId;
        this.username=username;
        this.password=password;
        this.role = role;
        this.aurthorize=aurthorize;
    }
}
