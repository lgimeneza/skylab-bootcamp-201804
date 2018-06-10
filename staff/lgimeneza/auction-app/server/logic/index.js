'use strict'

const { models: { Product, User, Bid } } = require('data')

const logic = {

    //TODO: Add error handling
    //TODO: Add documentation

    listProducts() {
        return Promise.resolve()
            .then(() => {
                return Product.find()
            })
            .then(products => {
                return products
            })
    },

    retrieveProduct(productId){
        return Promise.resolve()
            .then(() => {
                if (typeof productId !== 'string') throw Error('product id is not a string')

                if (!(productId = productId.trim()).length) throw Error('product id is empty or blank')

                return Product.findById(productId)
            })
            .then(product => {
                if (!product) throw Error(`no product found with id ${productId}`)

                return product
            })
    },

    addProduct(title, description, startDate, endDate, startPrice, closed, image) {
        return Promise.resolve()
            .then(() => {
                return Product.create({ title, description, startDate, endDate, startPrice, closed, image })
            })
            .then(() => true)
    },

    addBid(productId, userId, price) {
        //TODO: not alow lower bid
        return Promise.resolve()
            .then(() => {
                return User.findById(userId)
                    .then(user => {
                        if (!user) throw Error(`no user found with id ${userId}`)

                        const bid = new Bid({ price, date: Date.now(), user: user._id })
                        return Product.findByIdAndUpdate(productId, { $push: { bids: bid } }, { new: true })
                            .then(product => {
                                if (!product) throw Error(`no product found with id ${productId}`)
        
                                return bid._id.toString()
                            })
                    })
            })
    }


}

module.exports = logic