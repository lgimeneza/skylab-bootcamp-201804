'use strict';

var axios = require('axios');

var clientApi = {
    url: 'NO-URL',

    // token: 'NO-TOKEN',

    token: function token(_token) {
        if (_token) {
            this._token = _token;

            return;
        }
        return this._token;
    },


    /**
     * 
     * @param {string} username
     * @param {string} email 
     * @param {string} password 
     * @param {string} reapeatEmail 
     * 
     * @returns {Promise<boolean>}
     */
    registerUser: function registerUser(username, email, password, repeatPassword) {
        var _this = this;

        return Promise.resolve().then(function () {
            if (typeof username !== 'string') throw Error('username is not a string');

            if (!(username = username.trim()).length) throw Error('username is empty or blank');

            if (typeof email !== 'string') throw Error('email is not a string');

            if (!(email = email.trim()).length) throw Error('email is empty or blank');

            if (typeof password !== 'string') throw Error('password is not a string');

            if ((password = password.trim()).length === 0) throw Error('password is empty or blank');

            if (typeof repeatPassword !== 'string') throw Error('repeatPassword is not a string');

            if ((repeatPassword = repeatPassword.trim()).length === 0) throw Error('repeatPassword is empty or blank');

            return axios.post(_this.url + '/users', { username: username, email: email, password: password, repeatPassword: repeatPassword }).then(function (_ref) {
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
            if (typeof email !== 'string') throw Error('email is not a string');

            if (!(email = email.trim()).length) throw Error('email is empty or blank');

            if (typeof password !== 'string') throw Error('password is not a string');

            if ((password = password.trim()).length === 0) throw Error('password is empty or blank');

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
    retrieveUser: function retrieveUser(userId) {
        var _this3 = this;

        return Promise.resolve().then(function () {
            if (typeof userId !== 'string') throw Error('userId is not a string');

            if (!(userId = userId.trim()).length) throw Error('userId is empty or blank');

            return axios.get(_this3.url + '/users/' + userId, { headers: { authorization: 'Bearer ' + _this3.token() } }).then(function (_ref3) {
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
     * @param {string} email 
     * @param {string} password 
     * @param {string} newEmail 
     * @param {string} newPassword 
     * 
     * @returns {Promise<boolean>}
     */
    // updateUser(id, name, surname, email, password, newEmail, newPassword) {
    //     return Promise.resolve()
    //         .then(() => {
    //             if (typeof id !== 'string') throw Error('id is not a string')

    //             if (!(id = id.trim()).length) throw Error('id is empty or blank')

    //             if (typeof name !== 'string') throw Error('name is not a string')

    //             if (!(name = name.trim()).length) throw Error('name is empty or blank')

    //             if (typeof surname !== 'string') throw Error('surname is not a string')

    //             if ((surname = surname.trim()).length === 0) throw Error('surname is empty or blank')

    //             if (typeof email !== 'string') throw Error('email is not a string')

    //             if (!(email = email.trim()).length) throw Error('email is empty or blank')

    //             if (typeof password !== 'string') throw Error('password is not a string')

    //             if ((password = password.trim()).length === 0) throw Error('password is empty or blank')

    //             return axios.patch(`${this.url}/users/${id}`, { name, surname, email, password, newEmail, newPassword }, { headers: { authorization: `Bearer ${this.token()}` } })
    //                 .then(({ status, data }) => {
    //                     if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

    //                     return true
    //                 })
    //                 .catch(err => {
    //                     if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

    //                     if (err.response) {
    //                         const { response: { data: { error: message } } } = err

    //                         throw Error(message)
    //                     } else throw err
    //                 })
    //         })
    // },

    // /**
    //  * 
    //  * @param {string} id 
    //  * @param {string} email 
    //  * @param {string} password 
    //  * 
    //  * @returns {Promise<boolean>}
    //  */
    // unregisterUser(id, email, password) {
    //     return Promise.resolve()
    //         .then(() => {
    //             if (typeof id !== 'string') throw Error('id is not a string')

    //             if (!(id = id.trim()).length) throw Error('id is empty or blank')

    //             if (typeof email !== 'string') throw Error('email is not a string')

    //             if (!(email = email.trim()).length) throw Error('email is empty or blank')

    //             if (typeof password !== 'string') throw Error('password is not a string')

    //             if ((password = password.trim()).length === 0) throw Error('password is empty or blank')

    //             return axios.delete(`${this.url}/users/${id}`, { headers: { authorization: `Bearer ${this.token}` }, data: { email, password } })
    //                 .then(({ status, data }) => {
    //                     if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

    //                     return true
    //                 })
    //                 .catch(err => {
    //                     if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

    //                     if (err.response) {
    //                         const { response: { data: { error: message } } } = err

    //                         throw Error(message)
    //                     } else throw err
    //                 })
    //         })
    // },

    /**
    * 
    * @param {string} userId
    * @param {string} text 
    * 
    * @returns {Promise<string>}
    */

    listParentsCategory: function listParentsCategory() {
        var _this4 = this;

        return Promise.resolve().then(function () {

            return axios.get(_this4.url + '/parentsCategory').then(function (_ref4) {
                var status = _ref4.status,
                    data = _ref4.data;

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
    * @param {string} userId
    * @param {string} text 
    * 
    * @returns {Promise<string>}
    */

    listSubcategories: function listSubcategories(categoryId) {
        var _this5 = this;

        return Promise.resolve().then(function () {

            if (typeof categoryId !== 'string') throw Error('user categoryId is not a string');
            if (!(categoryId = categoryId.trim()).length) throw Error('user categoryId is empty or blank');

            return axios.get(_this5.url + '/subcategories/' + categoryId).then(function (_ref5) {
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
    * @param {string} userId
    * @param {string} text 
    * 
    * @returns {Promise<string>}
    */

    listProductsByCategory: function listProductsByCategory(categoryId) {
        var _this6 = this;

        return Promise.resolve().then(function () {

            if (typeof categoryId !== 'string') throw Error('user categoryId is not a string');
            if (!(categoryId = categoryId.trim()).length) throw Error('user categoryId is empty or blank');

            return axios.get(_this6.url + '/productsByCategory/' + categoryId).then(function (_ref6) {
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
    },


    /**
     * 
     * @param {string} userId
     * @param {string} text 
     * 
     * @returns {Promise<string>}
     */
    listProducts: function listProducts() {
        var _this7 = this;

        return Promise.resolve().then(function () {

            return axios.get(_this7.url + '/products').then(function (_ref7) {
                var status = _ref7.status,
                    data = _ref7.data;

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

module.exports = clientApi;
