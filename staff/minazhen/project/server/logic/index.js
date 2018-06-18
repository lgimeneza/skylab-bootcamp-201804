"use strict"

const { mongoose, models: { User, Country, Photo } } = require("data")
const no = "N•_©h€©K!"

const logic = {

    registerUser(username, password, location) {
        return Promise.resolve()
            .then(() => {
                this._userErrors(no, username, location, password)

                return User.findOne({ username })
            })
            .then((user) => {
                if (user) throw Error(`User named ${username} already exists`)

                return User.create({ username, password, location })
                    .then(() => true)
            })

    },

    authenticateUser(username, password) {
        return Promise.resolve()
            .then(() => {
                this._userErrors(no, username, no, password)

                return User.findOne({ username, password })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                return user.id
            })
    },

    retrieveUser(userId) {
        return Promise.resolve()
            .then(() => {
                this._userErrors(userId, no, no, no)

                return User.findById(userId).select({ _id: 0, username: 1, location: 1, countries: 1 }).populate({ path: 'countries', select: 'name' })
            })
            .then(user => {
                if (!user) throw Error(`no user found with id ${userId}`)

                return user
            })
    },

    unregisterUser(userId, username, password) {
        return Promise.resolve()
            .then(() => {
                this._userErrors(userId, username, no, password)

                return User.findOne({ username, password })
            })
            .then((user) => {
                if (!user) throw Error('wrong credentials')

                if (user.id !== userId) throw Error(`no user found with id ${userId} for given credentials`)
                
                return Country.deleteMany({ user: userId })
                .then(() => {
                    return user.remove()
                        .then(() => true)
                })
            })

    },

    listVisitedCountries(userId) {
        return Promise.resolve()
            .then(() => {
                this._checkErrors(userId, no, no, no, no)

                return User.findById(userId).populate({ path: 'countries', select: 'name' })
                    .then(user => {
                        if (!user) throw Error(`no user found with id ${userId}`)

                        let countries = user.countries.map((v) => v.name)
                        return countries.sort()
                    })
            })
    },

    retrieveCountry(userId, countryName) {
        return Promise.resolve()
            .then(() => {
                this._checkErrors(userId, countryName, no, no, no)

                return User.findById(userId).populate({ path: 'countries', match: { name: { $eq: countryName } } })
            })
            .then(user => {
                if (!user) throw Error(`no user found with id ${userId}`)

                const { countries: [country] } = user

                return country
            })
    },

    addPhoto(userId, name, url) {
        return Promise.resolve()
            .then(() => {
                this._checkErrors(userId, name, no, no, url)

                return User.findById(userId)
            })
            .then(user => {
                if (!user) throw Error(`no user found with id ${userId}`)

                return Country.findOne({ user: userId, name })
                    .then(country => {
                        if (!country) {
                            return Country.create({ user: user._id, name })
                                .then(country => {
                                    user.countries.push(country._id)

                                    return user.save()
                                        .then(() => country)
                                })

                        }
                        return country
                    })
                    .then(country => {
                        if (!country) throw Error('something went wrong')

                        const photo = new Photo({ url })

                        country.photos.push(photo)

                        return country.save()
                            .then(res => {
                                return photo.id
                            })
                    })
            })


    },

    retrievePhoto(userId, countryName, photoId) {
        return Promise.resolve()
            .then(() => {
                this._checkErrors(userId, countryName, no, photoId, no)
                return User.findById(userId).populate({ path: 'countries', match: { name: { $eq: countryName } } })
            })
            .then(user => {
                
                if (!user) throw Error(`no user found with id ${userId}`)

                if (!user.countries.length) throw Error(`no country named ${countryName}, in user ${userId}`)

                const { countries: [country] } = user

                if (!country.photos) throw Error(`no photos found in user ${userId}`)

                const photo = country.photos.id(photoId)

                if (!photo) throw Error(`no photo found with ${photoId} id, in user ${userId}`)

                return photo
            })
    },

    updatePhoto(userId, countryName, photoId, url) {
        return Promise.resolve()
            .then(() => {
                this._checkErrors(userId, countryName, no, photoId, url)
                return User.findById(userId).populate({ path: 'countries', match: { name: { $eq: countryName } } })
            })
            .then(user => {
                if (!user) throw Error(`no user found with id ${userId}`)
                if (!user.countries.length) throw Error(`no country named ${countryName}, in user ${userId}`)

                const { countries: [country] } = user
                if (!country.photos) throw Error(`no photos found in user ${userId}`)

                const photo = country.photos.id(photoId)
                if (!photo) throw Error(`no photo found with ${photoId} id, in user ${userId}`)

                photo.url = url
                return country.save()

                    .then((res) => {
                        return true
                    }) 
            })
    },

    removePhoto(userId, countryName, photoId) {
        return Promise.resolve()
            .then(() => {
                this._checkErrors(userId, countryName, no, photoId, no)
                return User.findById(userId).populate({ path: 'countries', match: { name: { $eq: countryName } } })
            })
            .then(user => {
                if (!user) throw Error(`no user found with id ${userId}`)
                if (!user.countries.length) throw Error(`no country named ${countryName}, in user ${userId}`)

                const { countries: [country] } = user
                
                if (!country.photos) throw Error(`no photos found in user ${userId}`)

                const photo = country.photos.id(photoId)
                if (!photo) throw Error(`no photo found with ${photoId} id, in user ${userId}`)

                return Country.findByIdAndUpdate(country.id, { $pull: { photos: { _id: photoId } } }, { new: true })
                    .then((res) => {
                        if (!res) throw Error(`no photo found with ${photoId} id, in ${countryName}`)

                        if (res.photos.length === 0) {
                            return User.findById(userId)
                            .then(user => {
                                const idxC = (user.countries.indexOf(country.id))
                                user.countries.splice(idxC, 1)
                                return user.save()
                                    .then(() => { 
                                        return res.remove() 
                                        .then(() => true)
                                    })
                            })
                        }
                        return true
                    })
                    

            })
    },


    _userErrors(userId, username, password, location) {
        if (userId !== no) {
            if (typeof userId !== 'string') throw Error('User id is not a string')
            if (!(userId = userId.trim()).length) throw Error('User id is empty or blank')
            if (userId.length !== 24) throw Error('User id has a wrong format')
        }
        if (username !== no) {
            if (typeof username !== "string") throw Error("User name is not a string")
            if (!(username = username.trim()).length) throw Error("User name is empty or blank")
        }
        if (password !== no) {
            if (typeof password !== "string") throw Error("User password is not a string")
            if (!(password.trim()).length) throw Error("User password is empty or blank")
        }
        if (location !== no) {
            if (typeof location !== "string") throw Error("User location is not a string")
            if (!(location.trim()).length) throw Error("User location is empty or blank")
        }
    },

    _checkErrors(userId, countryName, countryId, photoId, url) {
        if (userId !== no) {
            if (typeof userId !== 'string') throw Error('User id is not a string')
            if (!(userId = userId.trim()).length) throw Error('User id is empty or blank')
            if (userId.length !== 24) throw Error('User id has a wrong format')
        }
        if (countryName !== no) {
            if (typeof countryName !== "string") throw Error("Country name is not a string")
            if (!(countryName = countryName.trim()).length) throw Error("Country name is empty or blank")
        }
        if (countryId !== no) {
            if (typeof countryId !== 'string') throw Error('Country id is not a string')
            if (!(countryId = countryId.trim()).length) throw Error('Country id is empty or blank')
            if (countryId.length !== 24) throw Error('Country id has a wrong format')
        }
        if (photoId !== no) {
            if (typeof photoId !== 'string') throw Error('Photo id is not a string')
            if (!(photoId = photoId.trim()).length) throw Error('Photo id is empty or blank')
            if (photoId.length !== 24) throw Error('Photo id has a wrong format')
        }
        if (url !== no) {
            if (typeof url !== "string") throw Error("Url is not a string")
            if (!(url.trim()).length) throw Error("Url is empty or blank")
            const rex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
            if (!rex.test(url)) throw Error("Url is not a valid direction")
        }
    }
}
module.exports = logic