'use strict'

const auctionApi = require('api')

auctionApi.url = 'http://localhost:5000/api'

const logic = {

    /**
     * Initializes logic's storage
     */
    init() {
        auctionApi.token = token => {
            if (token) {
                localStorage.setItem('token', token)

                return
            }

            return localStorage.getItem('token')
        }
    },

    listProducts(query){
        return auctionApi.listProducts(query)
    },

    retrieveProduct(productId){
        return auctionApi.retrieveProduct(productId)
    },

    addProductBid(productId, userId, price){
        return auctionApi.addProductBid(productId, userId, price)
    },

    login(username, password) {
        return auctionApi.authenticateUser(username, password)
            .then(user => {
                // login successful if there's a jwt token in the response
                if (user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user', JSON.stringify(user));
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
            localStorage.removeItem('user');
        })
    },

    retrieveUser(){
        const user = JSON.parse(localStorage.getItem('user'))

        if (user === null){
            return auctionApi.retrieveUser()
        }
        
        return auctionApi.retrieveUser(user._id)
    },

    register(user){},

    getAll(){},

    delete(id){},

    handleResponse(response) {
        console.log('hereee',response)
        return response.json().then(data => {
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    logout();
                    location.reload(true);
                }
    
                const error = (data && data.error) || response.statusText;
                return Promise.reject(error);
            }
    
            return data;
        });
    }

}

module.exports = logic