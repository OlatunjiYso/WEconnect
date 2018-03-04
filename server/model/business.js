import Comments from '../tables/comments';
/**
 * @class Business
 */
 class Business {
   /**
     * Create a Business profile.
     * @param {number} id - The id of profile.
     * @param {string} title - The title of business.
     * @param {string} category - The category of business.
     * @param {string} location - The location.
     */
   constructor(id, title, category, location) {
     this.Id = id;
     this.Title = title;
     this.Category = category;
     this.Location = location;
   }
    /**
     * Get the id of business.
     * @return {number} The id of business.
     */
    get id() {
     return this.Id;
   }
   /**
     * Get the title of business.
     * @return {string} The id title business.
     */
   get title() {
     return this.Title;
   }
   /**
     * Get the category of business.
     * @return {string} The category business.
     */
   get category() {
     return this.Category;
   }
   /**
     * Get the location of business.
     * @return {string} The location of business.
     */
   get location() {
     return this.Location;
   }
   /**
     * Set the title of business.
     * @param{string} newTitle -The new title
     */
   set title(newTitle) {
      this.Title = newTitle;
   }
   /**
     * Set the title of business.
     * @param{string} category -The new category
     */
   set category(category) {
      this.Category = category;
   }
   /**
     * Set the title of business.
     * @param{string} location -The new location
     */
   set location(location) {
      this.Location = location;
   }
/**
     * Get the details of business.
     * @return{object} details -The details
     */
   get details() {
     const message = {
         title: this.Title,
         category: this.Category,
         location: this.Location,
         comments: this.Comments
     };
     return message;
   }
   /**
     * Get the comments of a business.
     * @return{array} category -The array of comments
     */
   get comments() {
     const myComments = [];
     const myId = this.Id;
    Comments.map((eachComment) => {
      return eachComment.id === myId;
    });
     return myComments;
   }
 }
export default Business;
