
/**
 * @class User
 */
class User {
    /**
       * Create a User.
       * @param {number} userId - The id of user.
       * @param {string} username - The username of user.
       * @param {string} password - The password.
       * @param {string} phone - The phone number.
       */
      constructor(userId, username, password, phone) {
        this.UserId = userId;
        this.Username = username;
        this.Password = password;
        this.Phone = phone;
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
      /** Get the phone of user.
       * @return {string} The phone number
       */
      get phone() {
        return this.Phone;
      }
    }
   export default User;