"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class Business
 */
var Business = function () {
  /**
    * Create a Business profile.
    * @param {number} id - The id of profile.
    * @param {string} title - The title of business.
    * @param {string} category - The category of business.
    * @param {string} location - The location.
    */
  function Business(id, title, category, location) {
    _classCallCheck(this, Business);

    this.Id = id;
    this.Title = title;
    this.Category = category;
    this.Location = location;
  }
  /**
   * Get the id of business.
   * @return {number} The id of business.
   */


  _createClass(Business, [{
    key: "id",
    get: function get() {
      return this.Id;
    }
    /**
      * Get the title of business.
      * @return {string} The id title business.
      */

  }, {
    key: "title",
    get: function get() {
      return this.Title;
    }
    /**
      * Get the category of business.
      * @return {string} The category business.
      */
    ,

    /**
      * Set the title of business.
      * @param{string} newTitle -The new title
      */
    set: function set(newTitle) {
      this.Title = newTitle;
    }
    /**
      * Set the title of business.
      * @param{string} category -The new category
      */

  }, {
    key: "category",
    get: function get() {
      return this.Category;
    }
    /**
      * Get the location of business.
      * @return {string} The location of business.
      */
    ,
    set: function set(category) {
      this.Category = category;
    }
    /**
      * Set the title of business.
      * @param{string} location -The new location
      */

  }, {
    key: "location",
    get: function get() {
      return this.Location;
    },
    set: function set(location) {
      this.Location = location;
    }
    /**
         * Get the details of business.
         * @return{object} details -The details
         */

  }, {
    key: "details",
    get: function get() {
      var message = {
        title: this.title,
        category: this.category,
        location: this.location,
        comments: this.comments
      };
      return message;
    }
  }]);

  return Business;
}();

exports.default = Business;