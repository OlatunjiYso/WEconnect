
/**
 * @class Comment
 */
class Comment {
    constructor(businessId, date, commentor, message){
      this._businessId = businessId;
      this._date = date;
      this._commentor = commentor;
      this._message = message;
    }
 
    get businessId(){
      return this._businessId;
    }
    get date() {
      return this._date;
    }
    get commentor(){
      return this._commentor
    }
    get message(){
      return this._message
    }
 
    set businessId(id){
       this._businessId = id;
    }
    set date(date) {
       this._date = date;
    }
    set commentor(theCommentor){
      this._commentor = theCommentor;
    }
    set message(comment){
       this._message = comment;
    }
  }
 export default Comment;
 