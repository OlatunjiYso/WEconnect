
/**
 * @class User
 */
class User {
    /**
       * Create a User.
       * @param {number} userId - The id of user.
       * @param {string} username - The username of user.
       * @param {string} password - The password.
       * @param {string} email - The email.
       */
      constructor(userId, username, password, email) {
        this.UserId = userId;
        this.Username = username;
        this.Password = password;
        this.Email = email;
      }
   /**
       * Get the id of user.
       * @return {number} The id of user.
       */
      get userId() {
        return this.UserId;
      }
      /** Get the username of user.
       * @return {string} The username.
       */
      get username() {
        return this.Username;
      }
      /** Get the password of user
       * @return {string} The user passsword
       */
      get password() {
        return this.Password;
      }
      /** Get the email of user.
       * @return {string} The phone number
       */
      get email() {
        return this.Email;
      }
      /** Set the userId of comment.
     * @param {string} id - the userId
     */
    set userId(id) {
      this.User = id;
   }
   /** Set the username of user.
     * @param {string} username - the username
     */
    set username(username) {
      this.Username = username;
   }
   /** Set the password of user.
     * @param {string} password - the password
     */
    set password(password) {
      this.Password = password;
   }

   /** Set the email of user.
     * @param {string} email - the email
     */
    set email(email) {
      this.Email = email;
   }
    }
   export default User;