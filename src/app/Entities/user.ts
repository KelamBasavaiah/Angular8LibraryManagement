export class User {
    userName:string;
    bookId:string;
    dueDate:Date;
    constructor(userName?,bookId?,dueDate?){
        this.userName=userName;
        this.bookId=bookId;
        this.dueDate=dueDate;
    }
}
