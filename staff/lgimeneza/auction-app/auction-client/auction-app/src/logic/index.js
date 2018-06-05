'use strict'

const auctionApi = require('../api')

auctionApi.url = 'http://localhost:5000/api'

const logic = {

    listAuctions(){
        return auctionApi.listAuctions()
        .then(auction => auction)
    }
}

module.exports = logic