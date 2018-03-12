
/**
 * @class Comment
 */
class Comment {
  /**
     * Create a Business profile.
     * @param {number} businessId - The id of business.
     * @param {string} date - The date of comment.
     * @param {string} commentor - The name of commentor.
     * @param {string} message - The message.
     */
    constructor(businessId, date, commentor, message) {
      this.BusinessId = businessId;
      this.Date = date;
      this.Commentor = commentor;
      this.Message = message;
    }
 /**
     * Get the id of business.
     * @return {number} The id of business.
     */
    get businessId() {
      return this.BusinessId;
    }
    /** Get the date of comment.
     * @return {string} The date of comment.
     */
    get date() {
      return this.Date;
    }
    /** Get the date of comment.
     * @return {string} The commentors name
     */
    get commentor() {
      return this.Commentor;
    }
    /** Get the message in comment.
     * @return {string} The message
     */
    get message() {
      return this.Message;
    }
    /** Set the date of comment.
     * @param {number} id - the id of comment
     */
    set businessId(id) {
       this.BusinessId = id;
    }
    /** Set the date of comment.
     * @param {string} date - the date of comment
     */
    set date(date) {
       this.Date = date;
    }
    /** Set the commentor of comment.
     * @param {string} theCommentor - the commentor
     */
    set commentor(theCommentor) {
      this.Commentor = theCommentor;
    }
    /** Set the message of comment.
     * @param {string} comment - the message
     */
    set message(comment) {
       this.Message = comment;
    }
  }
 export default Comment;