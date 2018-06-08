'use strict'

const { models: { Product } } = require('auction-data')

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


}

module.exports = logic