"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class Comment
 */
var Comment = function () {
  /**
     * Create a Business profile.
     * @param {number} businessId - The id of business.
     * @param {string} date - The date of comment.
     * @param {string} commentor - The name of commentor.
     * @param {string} message - The message.
     */
  function Comment(businessId, date, commentor, message) {
    _classCallCheck(this, Comment);

    this.BusinessId = businessId;
    this.Date = date;
    this.Commentor = commentor;
    this.Message = message;
  }
  /**
      * Get the id of business.
      * @return {number} The id of business.
      */


  _createClass(Comment, [{
    key: "businessId",
    get: function get() {
      return this.BusinessId;
    }
    /** Get the date of comment.
     * @return {string} The date of comment.
     */
    ,

    /** Set the date of comment.
     * @param {number} id - the id of comment
     */
    set: function set(id) {
      this.BusinessId = id;
    }
    /** Set the date of comment.
     * @param {string} date - the date of comment
     */

  }, {
    key: "date",
    get: function get() {
      return this.Date;
    }
    /** Get the date of comment.
     * @return {string} The commentors name
     */
    ,
    set: function set(date) {
      this.Date = date;
    }
    /** Set the commentor of comment.
     * @param {string} theCommentor - the commentor
     */

  }, {
    key: "commentor",
    get: function get() {
      return this.Commentor;
    }
    /** Get the message in comment.
     * @return {string} The message
     */
    ,
    set: function set(theCommentor) {
      this.Commentor = theCommentor;
    }
    /** Set the message of comment.
     * @param {string} comment - the message
     */

  }, {
    key: "message",
    get: function get() {
      return this.Message;
    },
    set: function set(comment) {
      this.Message = comment;
    }
  }]);

  return Comment;
}();

exports.default = Comment;