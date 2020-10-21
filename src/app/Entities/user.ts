export class User {
    userId:number;
    bookId:string;
    dueDate:Date;
    id:number;
    constructor(userId?,bookId?,dueDate?,id?){
        this.userId=userId;
        this.bookId=bookId;
        this.dueDate=dueDate;
        this.id = id;
    }
}
