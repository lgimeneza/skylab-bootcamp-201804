'use strict'

const auctionApi = require('api')

//auctionApi.url = 'http://localhost:5000/api'
auctionApi.url = 'https://mysterious-basin-61944.herokuapp.com/api'

const logic = {

    user(user) {
        if (user) {
            this._user = user

            return
        }

        return this._user
    },

    listProducts(query, categories, prices){
        return auctionApi.listProducts(query, categories, prices)
    },

    listUserProducts(){
        const user = this.user()

        if (user === null){
            return auctionApi.retrieveUser()
        }

        return auctionApi.listUserProducts(user._id)
    },

    retrieveProduct(productId){
        return auctionApi.retrieveProduct(productId)
    },

    addProductBid(productId, userId, price){
        return auctionApi.addProductBid(productId, userId, price)
    },

    listCategories(){
        return auctionApi.listCategories()
    },

    login(username, password) {
        return auctionApi.authenticateUser(username, password)
            .then(user => {
                // login successful if there's a jwt token in the response
                if (user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.user(user)
                    //localStorage.setItem('user', JSON.stringify(user));
                }

                return user;
            })
            .catch(error => {
                this.logout();
                return Promise.reject(error);
            })
    },

    logout(){
        return Promise.resolve()
        .then(()=> {
            this.user(null)
        })
    },

    retrieveUser(){
        //const user = JSON.parse(localStorage.getItem('user'))
        const user = this.user()

        if (user === null){
            return auctionApi.retrieveUser()
        }
        
        return auctionApi.retrieveUser(user._id)
    },

    register(name, surname, email,  password){
        return auctionApi.registerUser(name, surname, email,  password)
            .then(() => {
                return true;
            })
            .catch(error => {
                return Promise.reject(error);
            })
    },

    handleResponse(response) {
        return response.json().then(data => {
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    logout()
                    location.reload(true)
                }
    
                const error = (data && data.error) || response.statusText;
                return Promise.reject(error)
            }
    
            return data;
        })
    }

}

module.exports = logic