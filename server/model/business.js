import Comments from '../tables/comments';
/**
 * @class Business
 */
 class Business {
   constructor(id, title, category, location) {
     this._id = id;
     this._title = title;
     this._category = category;
     this._location = location;
   }
   get id() {
     return this._id;
   }
   get title(){
     return this._title;
   }
   get category(){
     return this._category;
   }
   get location(){
     return this._location;
   }
   set title(newTitle){
      this.title = newTitle;
   }
   set category (category) {
      this.category = category;
   }
   set location(location){
      this.location = location;
   }

   get details() {
     let message = {
         'title': this.title,
         'category': this.category,
         'location': this.location,
         'comments': this.comments
     }
   }
   get comments(){
     let myComments = [];
     let myId = this._id;
     for(let i of commentsTable){
       if(i.businessId === myId) {
         myComments.push(i)
       }
     }
     return myComments;
   }
 }
export default Business;
