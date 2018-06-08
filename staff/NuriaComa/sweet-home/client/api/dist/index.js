'use strict';

var axios = require('axios');

var shApi = {
    url: 'NOWHERE',

    token: function token(_token) {
        if (_token) {
            this._token = _token;

            return;
        }

        return this._token;
    },


    /**
     * 
     * @param {string} name 
     * @param {string} surname 
     * @param {string} phone
     * @param {string} dni
     * @param {string} password 
     * 
     * @returns {Promise<boolean>}
     */

    registerUser: function registerUser(name, surname, phone, dni, password) {
        var _this = this;

        return Promise.resolve().then(function () {

            if (typeof name !== 'string') throw Error('name is not a string');

            if (!(name = name.trim()).length) throw Error('name is empty or blank');

            if (typeof surname !== 'string') throw Error('surname is not a string');

            if (!(surname = surname.trim())) throw Error('surname is empty or blank');

            if (typeof phone !== 'string') throw Error('phone is not a string');

            if ((phone = phone.trim()).length === 0) throw Error('phone is empty or blank');

            if (typeof dni !== 'string') throw Error('dni is not a string');

            if ((dni = dni.trim()).length === 0) throw Error('dni is empty or blank');

            if (typeof password !== 'string') throw Error('password is not a string');

            if ((password = password.trim()).length === 0) throw Error('password is empty or blank');

            return axios.post(_this.url + '/register', { name: name, surname: surname, phone: phone, dni: dni, password: password }).then(function (_ref) {
                var status = _ref.status,
                    data = _ref.data;

                if (status !== 201 || data.status !== 'OK') throw Error('unexpected response status ' + status + ' (' + data.status + ')');

                return true;
            }).catch(function (err) {
                if (err.code === 'ECONNREFUSED') throw Error('could not reach server');

                if (err.response) {
                    var message = err.response.data.error;


                    throw Error(message);
                } else throw err;
            });
        });
    },


    /**
     * 
     * @param {string} dni
     * @param {string} password 
     * 
     * @returns {Promise<string>}
     */
    authenticateUser: function authenticateUser(dni, password) {
        var _this2 = this;

        return Promise.resolve().then(function () {

            if (typeof dni !== 'string') throw Error('user dni is not a string');

            if (!(dni = dni.trim()).length) throw Error('user dni is empty or blank');

            if (typeof password !== 'string') throw Error('user password is not a string');

            if ((password = password.trim()).length === 0) throw Error('user password is empty or blank');

            return axios.post(_this2.url + '/auth', { dni: dni, password: password }).then(function (_ref2) {
                var status = _ref2.status,
                    data = _ref2.data;

                if (status !== 200 || data.status !== 'OK') throw Error('unexpected response status ' + status + ' (' + data.status + ')');

                var _data$data = data.data,
                    id = _data$data.id,
                    token = _data$data.token;


                _this2.token(token);

                return id;
            }).catch(function (err) {
                if (err.code === 'ECONNREFUSED') throw Error('could not reach server');

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
            if (typeof id !== 'string') throw Error('user id is not a string');

            if (!(id = id.trim()).length) throw Error('user id is empty or blank');

            debugger;

            return axios.get(_this3.url + '/users/' + id, { headers: { authorization: 'Bearer ' + _this3.token() } }).then(function (_ref3) {
                var status = _ref3.status,
                    data = _ref3.data;

                if (status !== 200 || data.status !== 'OK') throw Error('unexpected response status ' + status + ' (' + data.status + ')');

                return data.data;
            }).catch(function (err) {
                if (err.code === 'ECONNREFUSED') throw Error('could not reach server');

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
    * @param {string} name 
    * @param {string} surname 
    * @param {string} phone
    * @param {string} dni
    * @param {string} password 
    * @param {string} newPhone
    * @param {string} newPassword 
    * 
    * @returns {Promise<boolean>}
    */
    updateUser: function updateUser(id, name, surname, phone, dni, password, newPassword) {
        var _this4 = this;

        return Promise.resolve().then(function () {
            if (typeof id !== 'string') throw Error('user id is not a string');

            if (!(id = id.trim()).length) throw Error('user id is empty or blank');

            if (typeof name !== 'string') throw Error('user name is not a string');

            if (!(name = name.trim()).length) throw Error('user name is empty or blank');

            if (typeof surname !== 'string') throw Error('user surname is not a string');

            if ((surname = surname.trim()).length === 0) throw Error('user surname is empty or blank');

            if (typeof phone !== 'string') throw Error('user phone is not a string');

            if (!(phone = phone.trim()).length) throw Error('user phone is empty or blank');

            if (typeof dni !== 'string') throw Error('user dni is not a string');

            if (!(dni = dni.trim()).length) throw Error('user dni is empty or blank');

            if (typeof password !== 'string') throw Error('user password is not a string');

            if ((password = password.trim()).length === 0) throw Error('user password is empty or blank');

            return axios.patch(_this4.url + '/users/' + id, { name: name, surname: surname, phone: phone, dni: dni, password: password, newPassword: newPassword }, { headers: { authorization: 'Bearer ' + _this4.token() } }).then(function (_ref4) {
                var status = _ref4.status,
                    data = _ref4.data;


                if (status !== 200 || data.status !== 'OK') throw Error('unexpected response status ' + status + ' (' + data.status + ')');

                return true;
            }).catch(function (err) {

                if (err.code === 'ECONNREFUSED') throw Error('could not reach server');

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
    * @returns {Promise<User>} 
    */
    listUsers: function listUsers() {
        var _this5 = this;

        return Promise.resolve().then(function () {

            return axios.get(_this5.url + '/list', { headers: { authorization: 'Bearer ' + _this5.token() } }).then(function (_ref5) {
                var status = _ref5.status,
                    data = _ref5.data;

                if (status !== 200 || data.status !== 'OK') throw Error('unexpected response status ' + status + ' (' + data.status + ')');

                return data.data;
            }).catch(function (err) {
                if (err.code === 'ECONNREFUSED') throw Error('could not reach server');

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
     * @param {string} dni
     * @param {string} password 
     * 
     * @returns {Promise<boolean>}
     */
    unregisterUser: function unregisterUser(id, dni, password) {
        var _this6 = this;

        return Promise.resolve().then(function () {

            if (typeof id !== 'string') throw Error('user id is not a string');

            if (!(id = id.trim()).length) throw Error('user id is empty or blank');

            if (typeof dni !== 'string') throw Error('user dni is not a string');

            if (!(dni = dni.trim()).length) throw Error('user dni is empty or blank');

            if (typeof password !== 'string') throw Error('user password is not a string');

            if ((password = password.trim()).length === 0) throw Error('user password is empty or blank');

            return axios.delete(_this6.url + '/users/' + id, { headers: { authorization: 'Bearer ' + _this6.token() }, data: { dni: dni, password: password } }).then(function (_ref6) {
                var status = _ref6.status,
                    data = _ref6.data;


                if (status !== 200 || data.status !== 'OK') throw Error('unexpected response status ' + status + ' (' + data.status + ')');

                return true;
            }).catch(function (err) {

                if (err.code === 'ECONNREFUSED') throw Error('could not reach server');

                if (err.response) {
                    var message = err.response.data.error;


                    throw Error(message);
                } else throw err;
            });
        });
    }
};

module.exports = shApi;
