'use strict'

const { models: { User, Order, Product, Category, Subcategory } } = require('data')

const logic = {

    /**
     * 
     * @param {string} username
     * @param {string} email 
     * @param {string} password
     * @param {string} repeatPassword 
     * 
     * @returns {Promise<boolean>}
     */

    registerUser(username, email, password, repeatPassword) {
        return Promise.resolve()
            .then(() => {

                if (typeof username !== 'string') throw Error('username is not a string')

                if (!(username = username.trim()).length) throw Error('username is empty or blank')

                if (typeof email !== 'string') throw Error('email is not a string')

                if (!(email = email.trim())) throw Error('email is empty or blank')

                if (typeof password !== 'string') throw Error('password is not a string')

                if ((password = password.trim()).length === 0) throw Error('password is empty or blank')

                if (typeof repeatPassword !== 'string') throw Error('repeatPassword is not a string')

                if ((repeatPassword = repeatPassword.trim()).length === 0) throw Error('repeatPassword is empty or blank')

                if (password !== repeatPassword) throw Error('the fields password not match')


                return User.findOne({ username })
                    .then(user => {
                        if (user) throw Error(`user with username ${username} already exists`)

                        return User.findOne({ email })
                            .then(user => {
                                if (user) throw Error(`user with email ${email} already exists`)

                                return User.create({ username, email, password, repeatPassword })
                                    .then(() => true)
                            })
                    })
            })
    },

    /**
     * 
     * @param {string} email
     * @param {string} password 
     * 
     * @returns {Promise<string>}
     */
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
                if (!user) throw Error('Email o password incorrectos')

                return user.id
            })
    },

    /**
     * 
     * @param {string} id
     * 
     * @returns {Promise<User>} 
     */
    retrieveUser(id) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                return User.findById(id).select({ _id: 0, name: 1, surname: 1, username: 1, email: 1, address: 1, telephone: 1, phone: 1 })
            })
            .then(user => {
                if (!user) throw Error(`no user found with id ${id}`)

                return user
            })
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
 
    listAllCategories() {
        return Promise.resolve()
            .then(() => {

                return Category.find({ })
                        .then(categories => {
                            const normalizedCategories = categories.map(({ _id, image, name, parent }) => ({ id: _id.toString(), image, name, parentId: parent ? parent.toString() : undefined }))
    
                            return Promise.all(categories.map(category => Category.find({ parent: category._id })))
                                 .then(res => {
                                   res.forEach((categories, index) => normalizedCategories[index].hasChildren = !!categories.length)
    
                            return normalizedCategories
                        })
                  })
            })
},

    /**
    * Lists root categories
    * 
    * @returns {Promise<[Category]>}
    */
    listRootCategories() {
        return Promise.resolve()
            .then(() => {

                return Category.find({ parent: undefined })
            })
            .then(rootCategories => {
                const normalizedRootCategories = rootCategories.map(({ _id, name }) => ({ id: _id.toString(), name }))

                return Promise.all(rootCategories.map(category => Category.find({ parent: category._id })))
                    .then(res => {
                        res.forEach((categories, index) => normalizedRootCategories[index].hasChildren = !!categories.length)

                        return normalizedRootCategories
                    })
            })
    },

    /**
    * Lists products
    * 
    * @param {String} categoryId The category id
    * 
    * @returns {Promise<[Product]>}
    */
    listSubcategories(categoryId) {
        if (typeof categoryId !== 'string') throw Error('user categoryId is not a string')

        if (!(categoryId = categoryId.trim()).length) throw Error('user categoryId is empty or blank')

        return Promise.resolve()
            .then(() => {

                return Category.find({ parent: categoryId.toString() })
            })
                    .then(subcategories => {
                        
                        const normalizedSubcategories = subcategories.map(({ _id: id, image,  name, parent }) => ({ id, image, name, parentId: parent ? parent.toString() : undefined }))

                        return Promise.all(subcategories.map(subcategory => Category.find({ parent: subcategory._id })))
                            .then(res => {
                                res.forEach((subcategory, index) => normalizedSubcategories[index].hasChildren = !!subcategory.length)

                                return normalizedSubcategories
                            })
                    })
        },

    /**
     * Lists products
     * 
     * @param {String} categoryId The category id
     * 
     * @returns {Promise<[Product]>}
     */
    listProductsByCategory(categoryId) {
        return Promise.resolve()
            .then(() => {
                if (typeof categoryId !== 'string') throw Error('user categoryId is not a string')

                if (!(categoryId = categoryId.trim()).length) throw Error('user categoryId is empty or blank')

                return Product.find({ category: categoryId.toString() })
                    .then(res => {
                        const products = res.map(({ _id: id, name, description, image, price, discount, category }) => ({ id, name, description, image, price, discount, categoryId: category ? category.toString() : undefined }))
                        return products
                    })
            })
    },

    /**
     * Lists products
     * 
     * @param {String} categoryId The category id
     * 
     * @returns {Promise<[Product]>}
     */
    listProducts() {
        return Promise.resolve()
            .then(() => {

                return Product.find({})
                    .then(res => {
                        const products = res.map(({ _id: id, name, description, image, price, discount, category }) => ({ id, name, description, image, price, discount, categoryId: category ? category.toString() : undefined }))
                        return products
                    })
            })
    },

    productDetails(productId) {
        return Promise.resolve()
            .then(() => {
                if (typeof productId !== 'string') throw Error('user productId is not a string')

                if (!(productId = productId.trim()).length) throw Error('user productId is empty or blank')

                return Product.find({ _id: productId })
                    .then(res => res)
            })
    },


    listProductsByIds(ids) {

        const arrayIds = ids.split(',')

        return Promise.resolve()
            .then(() => {

                return Product.find({_id: { $in: arrayIds}})
                    .then(res => {
                        if(!res) throw Error ('No products')
                        const products = res.map(({ _id: id, name, description, image, price, discount, category }) => ({ id, name, description, image, price, discount, categoryId: category ? category.toString() : undefined }))
                        return products
                    })
            })
    },

    createOrder(userId, deliveryAddress, orderDate, orderProducts, paymentMethod, status) {
        
        return Promise.resolve()
        .then(()=> {

                    if (typeof userId !== 'string') throw Error('user userId is not a string')

                    if (!(userId = userId.trim()).length) throw Error('user userId is empty or blank')

                    if(deliveryAddress !== undefined) {

                        if (typeof deliveryAddress !== 'string') throw Error('deliveryAddress is not a string')
                        if (!(deliveryAddress = deliveryAddress.trim()).length) throw Error('deliveryAddress is empty or blank')
                    }

                    if(orderDate !== undefined) {
                    if (typeof orderDate !== 'string') throw Error('orderDate is not a string')
                    if (!(orderDate = orderDate.trim()).length) throw Error('orderDate is empty or blank')
                    }

                    if (!Array.isArray(orderProducts)) throw Error('orderProducts is not an array')
                    if (!orderProducts.length) throw Error('orderProducts is empty or blank')

                    if (typeof paymentMethod !== 'string') throw Error('paymentMethod is not a string')
                    if ((paymentMethod = paymentMethod.trim()).length === 0) throw Error('paymentMethod is empty or blank')

                    if (typeof status !== 'string') throw Error('status is not a string')
                    if ((status = status.trim()).length === 0) throw Error('status is empty or blank')

                    return Order.create({userId, deliveryAddress, orderDate, orderProducts, paymentMethod, status })
                        .then(order => {
                            
                            return User.findByIdAndUpdate(userId, {$push: { orders: order }})
                                .then(() => order.id)
                        })
                })

    },



}

module.exports = logic