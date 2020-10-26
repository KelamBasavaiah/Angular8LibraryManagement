import { Login } from './login';

export class User extends Login{
    userId:number;
    bookId:string;
    dueDate:Date;
    id:number;
    bookName:string;
    phoneno:number;
    mailid:string;
    isActive:BinaryType;
    constructor(userId?,bookId?,dueDate?,id?,bookName?,phoneno?,mailid?,isActive?){
        super();
        this.userId=userId;
        this.bookId=bookId;
        this.dueDate=dueDate;
        this.id = id;
        this.bookName = bookName;
        this.phoneno = phoneno;
        this.mailid = mailid;
        this.isActive = isActive;
    }
}
