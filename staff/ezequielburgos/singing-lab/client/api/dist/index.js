'use strict';

var axios = require('axios');

var singinLabApi = {
    url: 'NO-URL',

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
     * @param {string} address
     * @param {string} email 
     * @param {string} password 
     * 
     * @returns {Promise<boolean>}
     */
    registerUser: function registerUser(name, surname, address, email, password) {
        var _this = this;

        return Promise.resolve().then(function () {
            if (typeof name !== 'string') throw Error('user name is not a string');

            if (!(name = name.trim()).length) throw Error('user name is empty or blank');

            if (typeof surname !== 'string') throw Error('user surname is not a string');

            if ((surname = surname.trim()).length === 0) throw Error('user surname is empty or blank');

            if (typeof address !== 'string') throw Error('user address is not a string');

            if ((address = address.trim()).length === 0) throw Error('user address is empty or blank');

            if (typeof email !== 'string') throw Error('user email is not a string');

            if (!(email = email.trim()).length) throw Error('user email is empty or blank');

            if (typeof password !== 'string') throw Error('user password is not a string');

            if ((password = password.trim()).length === 0) throw Error('user password is empty or blank');

            return axios.post(_this.url + '/register', { name: name, surname: surname, address: address, email: email, password: password }).then(function (_ref) {
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
    * @param {string} email 
    * @param {string} password 
    * 
    * @returns {Promise<string>}
    */
    authenticateUser: function authenticateUser(email, password) {
        var _this2 = this;

        return Promise.resolve().then(function () {
            if (typeof email !== 'string') throw Error('user email is not a string');

            if (!(email = email.trim()).length) throw Error('user email is empty or blank');

            if (typeof password !== 'string') throw Error('user password is not a string');

            if ((password = password.trim()).length === 0) throw Error('user password is empty or blank');

            return axios.post(_this2.url + '/auth', { email: email, password: password }).then(function (_ref2) {
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
     * @param {string} address 
     * @param {string} email 
     * @param {string} password 
     * @param {string} newEmail 
     * @param {string} newPassword 
     * 
     * @returns {Promise<boolean>}
     */
    updateUser: function updateUser(id, name, surname, phone, address, email, password, newEmail, newPassword) {
        var _this4 = this;

        return Promise.resolve().then(function () {
            if (typeof id !== 'string') throw Error('user id is not a string');

            if (!(id = id.trim()).length) throw Error('user id is empty or blank');

            if (typeof name !== 'string') throw Error('user name is not a string');

            if (!(name = name.trim()).length) throw Error('user name is empty or blank');

            if (typeof surname !== 'string') throw Error('user surname is not a string');

            if ((surname = surname.trim()).length === 0) throw Error('user surname is empty or blank');

            if (typeof phone !== 'string') throw Error('user phone is not a string');

            if ((phone = phone.trim()).length === 0) throw Error('user phone is empty or blank');

            if (typeof address !== 'string') throw Error('user address is not a string');

            if ((address = address.trim()).length === 0) throw Error('user address is empty or blank');

            if (typeof email !== 'string') throw Error('user email is not a string');

            if (!(email = email.trim()).length) throw Error('user email is empty or blank');

            if (typeof password !== 'string') throw Error('user password is not a string');

            if ((password = password.trim()).length === 0) throw Error('user password is empty or blank');

            return axios.patch(_this4.url + '/users/' + id, { name: name, surname: surname, phone: phone, address: address, email: email, password: password, newEmail: newEmail, newPassword: newPassword }, { headers: { authorization: 'Bearer ' + _this4.token() } }).then(function (_ref4) {
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
     * @param {string} id 
     * @param {string} email 
     * @param {string} password 
     * 
     * @returns {Promise<boolean>}
     */
    unregisterUser: function unregisterUser(id, email, password) {
        var _this5 = this;

        return Promise.resolve().then(function () {
            if (typeof id !== 'string') throw Error('user id is not a string');

            if (!(id = id.trim()).length) throw Error('user id is empty or blank');

            if (typeof email !== 'string') throw Error('user email is not a string');

            if (!(email = email.trim()).length) throw Error('user email is empty or blank');

            if (typeof password !== 'string') throw Error('user password is not a string');

            if ((password = password.trim()).length === 0) throw Error('user password is empty or blank');

            return axios.delete(_this5.url + '/users/' + id, { headers: { authorization: 'Bearer ' + _this5.token() }, data: { email: email, password: password } }).then(function (_ref5) {
                var status = _ref5.status,
                    data = _ref5.data;

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
    * @returns {Promise<User>} 
    */
    listCategories: function listCategories() {
        var _this6 = this;

        return Promise.resolve().then(function () {

            return axios.get(_this6.url + '/categories').then(function (_ref6) {
                var status = _ref6.status,
                    data = _ref6.data;

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
    }
};

module.exports = singinLabApi;
