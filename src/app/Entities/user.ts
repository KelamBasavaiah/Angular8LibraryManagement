import { Login } from './login';

export class User extends Login{
    userId:number;
    bookId:string;
    dueDate:Date;
    id:number;
    bookName:string;
    phoneNo:number;
    mailId:string;
    isActive:BinaryType;
    checked:boolean;
    constructor(userId?,bookId?,dueDate?,id?,bookName?,phoneNo?,mailId?,isActive?){
        super();
        this.userId=userId;
        this.bookId=bookId;
        this.dueDate=dueDate;
        this.id = id;
        this.bookName = bookName;
        this.phoneNo = phoneNo;
        this.mailId = mailId;
        this.isActive = isActive;
    }
}
