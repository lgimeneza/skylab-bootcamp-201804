'use strict'

const { models: { Auction, Bid } } = require('auction-data')

const logic = {

    listAuctions() {
        return Promise.resolve()
            .then(() => {
                return Auction.find()
                    .then(auction => {
                        return auction
                    })
            })
    },

    addAuction(title, description, startDate, endDate, startPrice, closed, image) {
        return Promise.resolve()
            .then(() => {
                return Auction.create({ title, description, startDate, endDate, startPrice, closed, image })
                .then(() => true)
            })
    },

}

module.exports = logic