'use strict'

const { models: { User, Park, Image, Note } } = require('social-data')

const logic = {
    /**
     * 
     * @param {string} name 
     * @param {string} email 
     * @param {string} password 
     * 
     * @returns {Promise<boolean>}
     */
    registerUser(name, email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof name !== 'string') throw Error('user name is not a string')

                if (!(name = name.trim()).length) throw Error('user name is empty or blank')

                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return User.findOne({ email })
                    .then(user => {
                        if (user) throw Error(`user with email ${email} already exists`)

                        return User.create({ name, email, password })
                            .then(() => true)
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
                if (!user) throw Error('wrong credentials')

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

                return User.findById(id).select({ _id: 0, name: 1, email: 1 })
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
     * @param {string} email 
     * @param {string} password 
     * @param {string} newEmail 
     * @param {string} newPassword 
     * @param {string} race 
     * @param {string} gender 
     * @param {string} description 
     * @param {string} photoProfile 
     * @param {string} birthdate 

     * 
     * @returns {Promise<boolean>}
     */
    updateUser(id, name, email, password, newEmail, newPassword, race, gender, description, photoProfile, birthdate) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                if (typeof name !== 'string') throw Error('user name is not a string')

                if (!(name = name.trim()).length) throw Error('user name is empty or blank')

                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                if (typeof race !== 'string') throw Error('user race is not a string')

                if ((race = race.trim()).length === 0) throw Error('user race is empty or blank')

                if (typeof gender !== 'string') throw Error('user gender is not a string')

                if ((gender = gender.trim()).length === 0) throw Error('user gender is empty or blank')

                if (typeof description !== 'string') throw Error('user description is not a string')

                if ((description = description.trim()).length === 0) throw Error('user description is empty or blank')

                if (typeof photoProfile !== 'string') throw Error('user photoProfile is not a string')

                if ((photoProfile = photoProfile.trim()).length === 0) throw Error('user photoProfile is empty or blank')

                if (typeof birthdate !== 'object') throw Error('user birthdate is not a object')


                return User.findOne({ email, password })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                if (user.id !== id) throw Error(`no user found with id ${id} for given credentials`)

                if (newEmail) {
                    return User.findOne({ email: newEmail })
                        .then(_user => {
                            if (_user && _user.id !== id) throw Error(`user with email ${newEmail} already exists`)

                            return user
                        })
                }

                return user
            })
            .then(user => {
                user.name = name
                user.email = newEmail ? newEmail : email
                user.password = newPassword ? newPassword : password
                user.race = race
                user.gender = gender
                user.description = description
                user.photoProfile = photoProfile
                user.birthdate = birthdate

                return user.save()
            })
            .then(() => true)
    },

    /**
     * 
     * @param {string} id 
     * @param {string} email 
     * @param {string} password 
     * 
     * @returns {Promise<boolean>}
     */
    unregisterUser(id, email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return User.findOne({ email, password })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                if (user.id !== id) throw Error(`no user found with id ${id} for given credentials`)

                return user.remove()
            })
            .then(() => true)
    },

    /**
     * 
     * @param {string} userId
     * @param {string} friendId 
     * 
     * @returns {Promise<string>}
     */

    addFriend(userId, friendId) {
        return Promise.resolve()
            .then(() => {

                if (typeof userId !== 'string') throw Error('user id is not a string')

                if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

                if (typeof friendId !== 'string') throw Error('friendId is not a string')

                if ((friendId = friendId.trim()).length === 0) throw Error('friendId is empty or blank')


                return User.findById(userId)
                    .then(user => {
                        if (!user) throw Error(`no user found with id ${userId}`)
                        user.friends.push(friendId)

                        return user.save()
                            .then((user) => user.friends)
                    })

            })
    },


    /**
 * 
 * @param {string} userId
 * @param {string} loverId 
 * 
 * @returns {Promise<string>}
 */

    addLove(userId, loveId) {
        return Promise.resolve()
            .then(() => {

                if (typeof userId !== 'string') throw Error('user id is not a string')

                if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

                if (typeof loveId !== 'string') throw Error('loveId is not a string')

                if ((loveId = loveId.trim()).length === 0) throw Error('loveId is empty or blank')


                return User.findById(userId)
                    .then(user => {
                        if (!user) throw Error(`no user found with id ${userId}`)
                        user.loves.push(loveId)

                        return user.save()
                            .then((user) => user.loves)
                    })

            })
    },


    // removeNote(userId, noteId) {
    //     return Promise.resolve()
    //         .then(() => {
    //             if (typeof userId !== 'string') throw Error('user id is not a string')


    //             return User.findById(userId)
    //                 .then(user => {
    //                     if (!user) throw Error(`no user found with id ${userId}`)

    //                     const note = user.notes.id(noteId)

    //                     if (!note) throw Error(`no note found with id ${noteId}`)

    //                     note.remove()

    //                     return user.save()
    //                 })
    //                 .then(() => true)
    //         })
    // },

    removeFriend(userId, friendId) {
        return Promise.resolve()
            .then(() => {
                if (typeof userId !== 'string') throw Error('user id is not a string')

                if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

                if (typeof friendId !== 'string') throw Error('friendId is not a string')

                if (!(friendId = friendId.trim())) throw Error('friendId is empty or blank')

                return User.findById(userId)
                    .then(user => {
                        if (!user) throw Error(`no user found with id ${userId}`)

                        let indexFriendToRemove;

                        for (let i = 0; i < user.friends.length; i++) {
                             if(user.friends[i].toString()===friendId) {
                                 indexFriendToRemove=i
                                 break
                             }
                        }

                        if (indexFriendToRemove>=0) user.friends.splice(indexFriendToRemove, 1)
                        
                        else throw Error(`no friend found with id ${friendId}`)


                        return user.save()
                    })
                    .then(({ friends }) => friends)
            })
    },


    removeLove(userId, loveId) {
        return Promise.resolve()
            .then(() => {
                if (typeof userId !== 'string') throw Error('user id is not a string')

                if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

                if (typeof loveId !== 'string') throw Error('loveId is not a string')

                if (!(loveId = loveId.trim())) throw Error('loveId is empty or blank')

                return User.findById(userId)
                    .then(user => {
                        if (!user) throw Error(`no user found with id ${userId}`)

                        let indexFriendToRemove;

                        for (let i = 0; i < user.loves.length; i++) {
                             if(user.loves[i].toString()===loveId) {
                                 indexFriendToRemove=i
                                 break
                             }
                        }

                        if (indexFriendToRemove>=0) user.loves.splice(indexFriendToRemove, 1)
                        
                        else throw Error(`no friend found with id ${loveId}`)


                        return user.save()
                    })
                    .then(({ loves }) => loves)
            })
    },

    createPark(name, creator,city,zip,location) {
        return Promise.resolve()
            .then(() => {
                if (typeof name !== 'string') throw Error('name is not a string')

                if (!(name = name.trim()).length) throw Error('name is empty or blank')

                if (typeof creator !== 'string') throw Error('creator is not a string')

                if (!(creator = creator.trim()).length) throw Error('creator is empty or blank')

                if (typeof city !== 'string') throw Error('city is not a string')

                if ((city = city.trim()).length === 0) throw Error('city is empty or blank')

                if (typeof zip !== 'string') throw Error('zip is not a string')

                if ((zip = zip.trim()).length === 0) throw Error('zip is empty or blank')

                if (typeof location !== 'string') throw Error('location is not a string')

                if ((location = location.trim()).length === 0) throw Error('location is empty or blank')

                return User.findOne({ name })
                    .then(park => {
                        if (park) throw Error(`park with name ${name} already exists`)

                        return Park.create({ name, creator,city,zip,location })
                            .then((park) =>{
                                park.users.push(creator)
                                return park.save()
                            }).then(()=>true)
                    })
            })

        }






    // /**
    //  * 
    //  * @param {string} userId
    //  * @param {string} text 
    //  * 
    //  * @returns {Promise<string>}
    //  */
    // addNote(userId, text) {
    //     return Promise.resolve()
    //         .then(() => {
    //             if (typeof userId !== 'string') throw Error('user id is not a string')

    //             if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

    //             if (typeof text !== 'string') throw Error('text is not a string')

    //             if ((text = text.trim()).length === 0) throw Error('text is empty or blank')

    //             // way 1 (step by step)
    //             // return User.findById(userId)
    //             //     .then(user => {
    //             //         if (!user) throw Error(`no user found with id ${userId}`)

    //             //         const note = new Note({ text })

    //             //         user.notes.push(note)

    //             //         return user.save()
    //             //             .then(() => note.id)
    //             //     })

    //             // way 2 (1 step)
    //             return User.findByIdAndUpdate(userId, { $push: { notes: { text } } }, { new: true })
    //                 .then(user => {
    //                     if (!user) throw Error(`no user found with id ${userId}`)

    //                     return user.notes[user.notes.length - 1].id
    //                 })
    //         })
    // },

    // /**
    //  * 
    //  * @param {string} userId
    //  * @param {string} noteId 
    //  * 
    //  * @returns {Promise<Note>}
    //  */
    // retrieveNote(userId, noteId) {
    //     return Promise.resolve()
    //         .then(() => {
    //             if (typeof userId !== 'string') throw Error('user id is not a string')

    //             if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

    //             if (typeof noteId !== 'string') throw Error('note id is not a string')

    //             if (!(noteId = noteId.trim())) throw Error('note id is empty or blank')

    //             return User.findById(userId)
    //                 .then(user => {
    //                     if (!user) throw Error(`no user found with id ${userId}`)

    //                     const note = user.notes.id(noteId)

    //                     if (!note) throw Error(`no note found with id ${noteId}`)

    //                     const { id, text } = note

    //                     return { id, text }
    //                 })
    //         })
    // },

    // /**
    //  * @param {string} userId
    //  * 
    //  * @returns {Promise<[Note]>}
    //  */
    // listNotes(userId) {
    //     return Promise.resolve()
    //         .then(() => {
    //             if (typeof userId !== 'string') throw Error('user id is not a string')

    //             if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

    //             return User.findById(userId)
    //                 .then(user => {
    //                     if (!user) throw Error(`no user found with id ${userId}`)

    //                     return user.notes.map(({ id, text }) => ({ id, text }))
    //                 })
    //         })
    // },

    // /**
    //  * 
    //  * @param {string} userId
    //  * @param {string} noteId 
    //  *
    //  * @returns {Promise<boolean>}
    //  */
    // removeNote(userId, noteId) {
    //     return Promise.resolve()
    //         .then(() => {
    //             if (typeof userId !== 'string') throw Error('user id is not a string')

    //             if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

    //             if (typeof noteId !== 'string') throw Error('note id is not a string')

    //             if (!(noteId = noteId.trim())) throw Error('note id is empty or blank')

    //             return User.findById(userId)
    //                 .then(user => {
    //                     if (!user) throw Error(`no user found with id ${userId}`)

    //                     const note = user.notes.id(noteId)

    //                     if (!note) throw Error(`no note found with id ${noteId}`)

    //                     note.remove()

    //                     return user.save()
    //                 })
    //                 .then(() => true)
    //         })
    // },

    // /**
    //  * 
    //  * @param {string} userId
    //  * @param {string} noteId 
    //  * @param {string} text 
    //  * 
    //  * @returns {Promise<boolean>}
    //  */
    // updateNote(userId, noteId, text) {
    //     return Promise.resolve()
    //         .then(() => {
    //             if (typeof userId !== 'string') throw Error('user id is not a string')

    //             if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

    //             if (typeof noteId !== 'string') throw Error('note id is not a string')

    //             if (!(noteId = noteId.trim())) throw Error('note id is empty or blank')

    //             if (typeof text !== 'string') throw Error('text is not a string')

    //             if ((text = text.trim()).length === 0) throw Error('text is empty or blank')

    //             return User.findById(userId)
    //                 .then(user => {
    //                     if (!user) throw Error(`no user found with id ${userId}`)

    //                     const note = user.notes.id(noteId)

    //                     if (!note) throw Error(`no note found with id ${noteId}`)

    //                     note.text = text

    //                     return user.save()
    //                 })
    //                 .then(() => true)
    //         })
    // },

    // /**
    //  * 
    //  * @param {string} userId
    //  * @param {string} text 
    //  * 
    //  * @returns {Promise<[Note]>}
    //  */
    // findNotes(userId, text) {
    //     return Promise.resolve()
    //         .then(() => {
    //             if (typeof userId !== 'string') throw Error('user id is not a string')

    //             if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

    //             if (typeof text !== 'string') throw Error('text is not a string')

    //             if (!text.length) throw Error('text is empty')

    //             return User.findById(userId)
    //                 .then(user => {
    //                     if (!user) throw Error(`no user found with id ${userId}`)

    //                     return user.notes.filter(note => note.text.includes(text)).map(({ id, text }) => ({ id, text }))
    //                 })
    //         })
    // }
}

module.exports = logic