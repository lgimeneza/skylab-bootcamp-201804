'use strict'

const { models: { Product, User, Bid, Category }, mongoose: { Types: { ObjectId } } } = require('data')

const logic = {

    //TODO: Add error handling
    //TODO: Add documentation

    /**
     * 
     * @param {string} query 
     * @param {[string]} categories 
     * @param {[number]} prices 
     */
    listProducts(query, categories, prices) {
        return Promise.resolve()
            .then(() => {
                const criteria = { $match: {} }
                const sort = { $sort: { endDate: -1 } }

                if (typeof query != 'undefined' && query.length > 0) {
                    criteria.$match.$text = { $search: query }
                    sort.score = { $meta: "textScore" }
                }

                if (categories instanceof Array && categories.length) {
                    criteria.$match.category = { $in: categories }
                }

                if (prices instanceof Array && prices.length) {
                    const [min, max] = prices

                    criteria.$match.currentPrice = {}

                    if (min) criteria.$match.currentPrice.$gte = min
                    if (max) criteria.$match.currentPrice.$lte = max
                }

                const stages = [criteria, sort]

                stages.push({
                    $project: {
                        _id: 1, title: 1, description: 1, startDate: 1, endDate: 1,
                        //startPrice: 1, closed: 1, images: 1, maxBid: { $ifNull: [{ $max: '$bids.price' }, '$startPrice'] }
                        startPrice: 1, closed: 1, images: 1, currentPrice: 1
                    }
                })

                return Product.aggregate(stages)
                    .then(products => {
                        if (!products) throw Error(`no products found`)

                        return products
                    })

            })
    },

    retrieveProduct(productId) {
        return Promise.resolve()

            .then(() => {

                return Product.aggregate([
                    { $match: { _id: ObjectId(productId), } },
                    {
                        $project: {
                            _id: 1, title: 1, description: 1, startDate: 1, endDate: 1,
                            startPrice: 1, closed: 1, images: 1, maxBid: { $ifNull: [{ $max: '$bids.price' }, '$startPrice'] }
                        }
                    },
                ])
                    .then(product => {
                        if (!product[0]) throw Error(`no product found with id ${productId}`)

                        return product[0]
                    })

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
    },

    listCategories() {
        return Promise.resolve()
            .then(() => {
                return Category.find()
                    .then(categories => {
                        if (!categories) throw Error('no categories found')

                        return categories
                    })
            })
    },

    authenticateUser(email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return User.findOne({ email, password })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                return user
            })
    },

    /**
     * @param {string} id
     * @returns {Promise<User>} 
     */
    retrieveUser(id) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                return User.findById(id) //.select({ _id: 0, name: 1, surname: 1, email: 1 })
            })
            .then(user => {
                if (!user) throw Error(`no user found with id ${id}`)

                return user
            })
    },

}

module.exports = logic