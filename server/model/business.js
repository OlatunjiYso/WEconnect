
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
     * @param {string} description - The description of business.
     * @param {string} phone - The phone number of business
     * @param {string} email - The email address of business
     * @param {number} ownerId - The id of the business owner
     */
   constructor(id, title, category, location, description, phone, email, ownerId) {
     this.Id = id;
     this.Title = title;
     this.Category = category;
     this.Location = location;
     this.Description = description;
     this.Phone = phone;
     this.Email = email;
     this.OwnerId = ownerId;
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
     * Get the description of business.
     * @return {string} The description of business.
     */
    get description() {
      return this.Description;
    }
    /**
     * Get the Phone number of business.
     * @return {string} The Phone number of business.
     */
   get phone() {
    return this.Phone;
  }
  /**
     * Get the email of business.
     * @return {string} The email of business.
     */
    get email() {
      return this.Email;
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
     * Set the description of business.
     * @param{string} newDescription -The new description
     */
    set description(newDescription) {
      this.Description = newDescription;
   }
   /**
     * Set the phone number of business.
     * @param{string} newPhone -The new phone number
     */
    set phone(newPhone) {
      this.Phone = newPhone;
   }
   /**
     * Set the email of business.
     * @param{string} newEmail -The new email
     */
    set email(newEmail) {
      this.Email = newEmail;
   }
/**
     * Get the details of business.
     * @return{object} details -The details
     */
   get details() {
     const message = {
         title: this.title,
         location: this.location,
         email: this.email,
         Hotline: this.phone,
         Overview: this.description,
         comments: this.comments
     };
     return message;
   }
 }
export default Business;
