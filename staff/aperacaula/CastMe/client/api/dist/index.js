"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var axios = require("axios");

var castmeApi = {
  url: "NO-URL",

  /**
   *
   *
   * @param {string} email
   * @param {string} password
   * @param {object} personalData
   * @param {object} physicalData
   * @param {object} professionalData
   * @param {string} videobookLink
   * @param {array} pics
   *
   * @returns {Promise<boolean>}
   */
  registerUser: function registerUser(email, password, personalData, physicalData, professionalData, videobookLink, pics) {
    var _this = this;

    return Promise.resolve().then(function () {
      if (typeof email !== "string") throw Error("user email is not a string");

      if (!(email = email.trim()).length) throw Error("user email is empty or blank");

      if (typeof password !== "string") throw Error("user password is not a string");

      if ((password = password.trim()).length === 0) throw Error("user password is empty or blank");

      if ((typeof personalData === "undefined" ? "undefined" : _typeof(personalData)) !== "object") throw Error("personal data is not what it should be");

      if ((typeof professionalData === "undefined" ? "undefined" : _typeof(professionalData)) !== "object") throw Error("professional data is not what it should be");

      if ((typeof physicalData === "undefined" ? "undefined" : _typeof(physicalData)) !== "object") throw Error("physical data is not what it should be");

      if (typeof videobookLink !== "string") throw Error("user videobookLink is not a string");

      if ((videobookLink = videobookLink.trim()).length === 0) throw Error("user videobookLink is empty or blank");

      if (!pics instanceof Array) throw Error("pics should be an array");

      return axios.post(_this.url + "/users", {
        email: email,
        password: password,
        personalData: personalData,
        physicalData: physicalData,
        professionalData: professionalData,
        videobookLink: videobookLink,
        pics: pics
      }).then(function (_ref) {
        var status = _ref.status,
            data = _ref.data;

        if (status !== 201 || data.status !== "OK") throw Error("unexpected response status " + status + " (" + data.status + ")");

        return true;
      }).catch(function (err) {
        if (err.code === "ECONNREFUSED") throw Error("could not reach server");

        if (err.response) {
          var message = err.response.data.error;


          throw Error(message);
        } else throw err;
      });
    });
  },


  /**
   *
   * @param {string} email
   * @param {string} password
   *
   * @returns {Promise<string>}
   */
  authenticateUser: function authenticateUser(email, password) {
    var _this2 = this;

    return Promise.resolve().then(function () {
      if (typeof email !== "string") throw Error("user email is not a string");

      if (!(email = email.trim()).length) throw Error("user email is empty or blank");

      if (typeof password !== "string") throw Error("user password is not a string");

      if ((password = password.trim()).length === 0) throw Error("user password is empty or blank");

      return axios.post(_this2.url + "/auth", { email: email, password: password }).then(function (_ref2) {
        var status = _ref2.status,
            data = _ref2.data;

        if (status !== 200 || data.status !== "OK") throw Error("unexpected response status " + status + " (" + data.status + ")");

        var id = data.data.id;


        _this2.token = token;

        return id;
      }).catch(function (err) {
        if (err.code === "ECONNREFUSED") throw Error("could not reach server");

        if (err.response) {
          var message = err.response.data.error;


          throw Error(message);
        } else throw err;
      });
    });
  },


  /**
   *
   * @param {string} id
   *
   * @returns {Promise<User>}
   */
  retrieveUser: function retrieveUser(id) {
    var _this3 = this;

    return Promise.resolve().then(function () {
      if (typeof id !== "string") throw Error("user id is not a string");

      if (!(id = id.trim()).length) throw Error("user id is empty or blank");

      return axios.get(_this3.url + "/users/" + id).then(function (_ref3) {
        var status = _ref3.status,
            data = _ref3.data;

        if (status !== 200 || data.status !== "OK") throw Error("unexpected response status " + status + " (" + data.status + ")");

        return data.data;
      }).catch(function (err) {
        if (err.code === "ECONNREFUSED") throw Error("could not reach server");

        if (err.response) {
          var message = err.response.data.error;


          throw Error(message);
        } else throw err;
      });
    });
  },


  /**
   *
   * @param {string} email
   * @param {string} password
   * @param {object} personalData
   * @param {object} physicalData
   * @param {object} professionalData
   * @param {string} videobookLink
   * @param {array} pics
   * @param {string} newEmail
   * @param {string} newPassword
   *
   * @returns {Promise<boolean>}
   */
  updateUser: function updateUser(email, password, personalData, physicalData, professionalData, videobookLink, pics) {
    var _this4 = this;

    return Promise.resolve().then(function () {
      if (typeof email !== "string") throw Error("user email is not a string");

      if (!(email = email.trim()).length) throw Error("user email is empty or blank");

      if (typeof password !== "string") throw Error("user password is not a string");

      if ((password = password.trim()).length === 0) throw Error("user password is empty or blank");

      if (typeof newEmail !== "string") throw Error("user newEmail is not a string");

      if (!(newEmail = newEmail.trim()).length) throw Error("user newEmail is empty or blank");

      if (typeof newPassword !== "string") throw Error("user newPassword is not a string");

      if ((newPassword = newPassword.trim()).length === 0) throw Error("user newPassword is empty or blank");

      if (typeof videobookLink !== "string") throw Error("user videobookLink is not a string");

      if ((videobookLink = videobookLink.trim()).length === 0) throw Error("user videobookLink is empty or blank");

      if ((typeof personalData === "undefined" ? "undefined" : _typeof(personalData)) !== "object") throw Error("personal data is not what it should be");

      if ((typeof professionalData === "undefined" ? "undefined" : _typeof(professionalData)) !== "object") throw Error("professional data is not what it should be");

      if ((typeof physicalData === "undefined" ? "undefined" : _typeof(physicalData)) !== "object") throw Error("physical data is not what it should be");

      if (!pics instanceof Array) throw Error("pics should be an array");

      return axios.patch(_this4.url + "/users/" + id, {
        email: email,
        password: password,
        personalData: personalData,
        physicalData: physicalData,
        professionalData: professionalData,
        videobookLink: videobookLink,
        pics: pics
      }).then(function (_ref4) {
        var status = _ref4.status,
            data = _ref4.data;

        if (status !== 200 || data.status !== "OK") throw Error("unexpected response status " + status + " (" + data.status + ")");

        return true;
      }).catch(function (err) {
        if (err.code === "ECONNREFUSED") throw Error("could not reach server");

        if (err.response) {
          var message = err.response.data.error;


          throw Error(message);
        } else throw err;
      });
    });
  },


  /**
   *
   * @param {string} id
   * @param {string} email
   * @param {string} password
   *
   * @returns {Promise<boolean>}
   */
  unregisterUser: function unregisterUser(id, email, password) {
    var _this5 = this;

    return Promise.resolve().then(function () {
      if (typeof id !== "string") throw Error("user id is not a string");

      if (!(id = id.trim()).length) throw Error("user id is empty or blank");

      if (typeof email !== "string") throw Error("user email is not a string");

      if (!(email = email.trim()).length) throw Error("user email is empty or blank");

      if (typeof password !== "string") throw Error("user password is not a string");

      if ((password = password.trim()).length === 0) throw Error("user password is empty or blank");

      return axios.delete(_this5.url + "/users/" + id, { data: { email: email, password: password } }).then(function (_ref5) {
        var status = _ref5.status,
            data = _ref5.data;

        if (status !== 200 || data.status !== "OK") throw Error("unexpected response status " + status + " (" + data.status + ")");

        return true;
      }).catch(function (err) {
        if (err.code === "ECONNREFUSED") throw Error("could not reach server");

        if (err.response) {
          var message = err.response.data.error;


          throw Error(message);
        } else throw err;
      });
    });
  },


  /**
   *
   *
   *
   * @returns {Promise<array>}
   */
  listProjects: function listProjects() {
    var _this6 = this;

    return Promise.resolve().then(function () {
      return axios.get(_this6.url + "/projects").then(function (_ref6) {
        var status = _ref6.status,
            data = _ref6.data;

        if (status !== 200 || data.status !== "OK") throw Error("unexpected response status " + status + " (" + data.status + ")");

        return data.data;
      }).catch(function (err) {
        if (err.code === "ECONNREFUSED") throw Error("could not reach server");

        if (err.response) {
          var message = err.response.data.error;


          throw Error(message);
        } else throw err;
      });
    });
  }
};

module.exports = castmeApi;
