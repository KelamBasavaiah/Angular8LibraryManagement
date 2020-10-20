export class User {
    userName:string;
    bookId:string;
    dueDate:Date;
    id:number;
    constructor(userName?,bookId?,dueDate?,id?){
        this.userName=userName;
        this.bookId=bookId;
        this.dueDate=dueDate;
        this.id = id;
    }
}
