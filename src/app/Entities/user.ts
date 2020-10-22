export class User {
    userId:number;
    bookId:string;
    dueDate:Date;
    id:number;
    bookName:string;
    constructor(userId?,bookId?,dueDate?,id?,bookName?){
        this.userId=userId;
        this.bookId=bookId;
        this.dueDate=dueDate;
        this.id = id;
        this.bookName = bookName;
    }
}
