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
    constructor(userId?,bookId?,dueDate?,id?,bookName?,phoneNo?,mailId?,isActive?){
        super();
        this.userId=userId;
        this.bookId=bookId;
        this.dueDate=dueDate;
        this.id = id;
        this.bookName = bookName;
        this.phoneNo = phoneno;
        this.mailId = mailid;
        this.isActive = isActive;
    }
}
