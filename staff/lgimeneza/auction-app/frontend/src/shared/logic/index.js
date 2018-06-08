'use strict'

const auctionApi = require('api')

auctionApi.url = 'http://localhost:5000/api'

const logic = {

    listProducts(){
        return auctionApi.listProducts()
        .then(product => product)
    }
}

module.exports = logic