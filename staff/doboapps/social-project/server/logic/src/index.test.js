'use strict'

require('dotenv').config()

const { mongoose, models: { User, Park } } = require('data')
const { expect } = require('chai')
const logic = require('.')
//const _ = require('lodash')

const { env: { DB_URL } } = process

describe('logic social', () => {
    const birthdateUser = new Date()
    const dummyUserId = '123456781234567812345678'
    const dummyUserId2 = '223456781234567812345678'
    const dummyNoteId = '123456781234567812345678'
    const userData = { name: 'John', email: 'jd@mail.com', password: '123', city: "Barcelona" }
    const otherUserData = { name: 'Jack', email: 'jw@mail.com', password: '456', city: "Barcelona" }
    const parkData = { name: 'mypark', creator: dummyUserId, city: 'mycity', zip: "12345", location: "12314434-342342432" }
    const parkData2 = { name: 'mypark2', creator: dummyUserId2, city: 'mycity', zip: "12345", location: "12314434-342342432" }
    const indexes = []


    before(() => mongoose.connect(DB_URL))

    beforeEach(() => {
        let count = 10 + Math.floor(Math.random() * 10)
        indexes.length = 0
        while (count--) indexes.push(count)

        return Promise.all([User.remove()/*, Note.deleteMany()*/])
    })

    describe('save image', () => {
        it('should succeed on correct dada', () =>
            logic.saveImage('id123','data:image/jpeg;base64,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YWJvb2wBAAAAAFBnUHNlbnVtAAAAAFBnUHMAAAAAUGdQQwAAAABMZWZ0VW50RiNSbHQAAAAAAAAAAAAAAABUb3AgVW50RiNSbHQAAAAAAAAAAAAAAABTY2wgVW50RiNQcmNAWQAAAAAAAAAAABBjcm9wV2hlblByaW50aW5nYm9vbAAAAAAOY3JvcFJlY3RCb3R0b21sb25nAAAAAAAAAAxjcm9wUmVjdExlZnRsb25nAAAAAAAAAA1jcm9wUmVjdFJpZ2h0bG9uZwAAAAAAAAALY3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABAASAAAAAEAAgBIAAAAAQACOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNA/IAAAAAAAoAAP///////wAAOEJJTQQNAAAAAAAEAAAAeDhCSU0EGQAAAAAABAAAAB44QklNA/MAAAAAAAkAAAAAAAAAAAEAOEJJTScQAAAAAAAKAAEAAAAAAAAAAjhCSU0D9QAAAAAASAAvZmYAAQBsZmYABgAAAAAAAQAvZmYAAQChmZoABgAAAAAAAQAyAAAAAQBaAAAABgAAAAAAAQA1AAAAAQAtAAAABgAAAAAAAThCSU0D+AAAAAAAcAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAA4QklNBAAAAAAAAAIAAThCSU0EAgAAAAAACgAAAAAAAAAAAAA4QklNBDAAAAAAAAUBAQEBAQA4QklNBC0AAAAAAAYAAQAAAAU4QklNBAgAAAAAABAAAAABAAACQAAAAkAAAAAAOEJJTQQeAAAAAAAEAAAAADhCSU0EGgAAAAADQQAAAAYAAAAAAAAAAAAAAx0AAAZAAAAABgBwAGUAcgByAG8AcwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAGQAAAAx0AAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAG51bGwAAAACAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAx0AAAAAUmdodGxvbmcAAAZAAAAABnNsaWNlc1ZsTHMAAAABT2JqYwAAAAEAAAAAAAVzbGljZQAAABIAAAAHc2xpY2VJRGxvbmcAAAAAAAAAB2dyb3VwSURsb25nAAAAAAAAAAZvcmlna…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' )
                .then(res => expect(res).to.be.true)
        )
    })

    // describe('register user', () => {
    //     it('should succeed on correct dada', () =>
    //         logic.registerUser('John', 'jd@mail.com', '123', "Barcelona")
    //             .then(res => expect(res).to.be.true)
    //     )

    //     it('should fail on already registered user', () =>
    //         User.create(userData)
    //             .then(() => {
    //                 const { name, email, password, city } = userData

    //                 return logic.registerUser(name, email, password, city)
    //             })
    //             .catch(({ message }) => {
    //                 expect(message).to.equal(`user with email ${userData.email} already exists`)
    //             })
    //     )

    //     it('should fail on no user name', () =>
    //         logic.registerUser()
    //             .catch(({ message }) => expect(message).to.equal('user name is not a string'))
    //     )

    //     it('should fail on empty user name', () =>
    //         logic.registerUser('')
    //             .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
    //     )

    //     it('should fail on blank user name', () =>
    //         logic.registerUser('     ')
    //             .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
    //     )

    //     it('should fail on no user email', () =>
    //         logic.registerUser(userData.name)
    //             .catch(({ message }) => expect(message).to.equal('user email is not a string'))
    //     )

    //     it('should fail on empty user email', () =>
    //         logic.registerUser(userData.name, '')
    //             .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
    //     )

    //     it('should fail on blank user email', () =>
    //         logic.registerUser(userData.name, '     ')
    //             .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
    //     )

    //     it('should fail on no user password', () =>
    //         logic.registerUser(userData.name, userData.email)
    //             .catch(({ message }) => expect(message).to.equal('user password is not a string'))
    //     )

    //     it('should fail on empty user password', () =>
    //         logic.registerUser(userData.name, userData.email, '')
    //             .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
    //     )

    //     it('should fail on blank user password', () =>
    //         logic.registerUser(userData.name, userData.email, '     ')
    //             .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
    //     )

    //     it('should fail on no user city', () =>
    //         logic.registerUser(userData.name, userData.email,userData.city)
    //             .catch(({ message }) => expect(message).to.equal('user city is not a string'))
    //     )

    //     it('should fail on empty user city', () =>
    //         logic.registerUser(userData.name, userData.email,userData.city, '')
    //             .catch(({ message }) => expect(message).to.equal('user city is empty or blank'))
    //     )

    //     it('should fail on blank user city', () =>
    //         logic.registerUser(userData.name, userData.email,userData.city, '     ')
    //             .catch(({ message }) => expect(message).to.equal('user city is empty or blank'))
    //     )
    // })

    // describe('authenticate user', () => {
    //     it('should succeed on correct data', () =>
    //         User.create(userData)
    //             .then(() =>
    //                 logic.authenticateUser('jd@mail.com', '123')
    //                     .then(id => expect(id).to.exist)
    //             )
    //     )

    //     it('should fail on no user email', () =>
    //         logic.authenticateUser()
    //             .catch(({ message }) => expect(message).to.equal('user email is not a string'))
    //     )

    //     it('should fail on empty user email', () =>
    //         logic.authenticateUser('')
    //             .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
    //     )

    //     it('should fail on blank user email', () =>
    //         logic.authenticateUser('     ')
    //             .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
    //     )

    //     it('should fail on no user password', () =>
    //         logic.authenticateUser(userData.email)
    //             .catch(({ message }) => expect(message).to.equal('user password is not a string'))
    //     )

    //     it('should fail on empty user password', () =>
    //         logic.authenticateUser(userData.email, '')
    //             .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
    //     )

    //     it('should fail on blank user password', () =>
    //         logic.authenticateUser(userData.email, '     ')
    //             .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
    //     )
    // })

    // describe('retrieve user', () => {
    //     it('should succeed on correct data', () =>
    //         User.create(userData)
    //             .then(({ id }) => {
    //                 return logic.retrieveUser(id)
    //             })
    //             .then(user => {
    //                 expect(user).to.exist

    //                 const { name, email, _id, password } = user

    //                 expect(name).to.equal('John')
    //                 expect(email).to.equal('jd@mail.com')

    //                 expect(_id).to.be.undefined
    //                 expect(password).to.be.undefined
    //             })
    //     )

    //     it('should fail on no user id', () =>
    //         logic.retrieveUser()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         logic.retrieveUser('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         logic.retrieveUser('     ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )
    // })

    // describe('udpate user', () => {

    //     it('should succeed on correct data', () =>
    //         User.create(userData)
    //             .then(({ id }) => {

    //                 return logic.updateUser(id, 'Jack', 'jd@mail.com', '123', 'jck@mail.com', '456', "pug", "female", "a dog", "/images", birthdateUser, "barcelona", "08016")
    //                     .then(res => {
    //                         expect(res).to.be.true

    //                         return User.findById(id)
    //                     })
    //                     .then(user => {
    //                         expect(user).to.exist

    //                         const { name, email, password, race, gender, description, photoProfile, birthdate, city, zip, } = user

    //                         expect(user.id).to.equal(id)
    //                         expect(name).to.equal('Jack')
    //                         expect(email).to.equal('jck@mail.com')
    //                         expect(password).to.equal('456')
    //                         expect(race).to.equal('pug')
    //                         expect(gender).to.equal('female')
    //                         expect(description).to.equal('a dog')
    //                         expect(photoProfile).to.equal('/images')
    //                         expect(birthdate.toString()).to.equal(birthdateUser.toString())
    //                         expect(city).to.equal('barcelona')
    //                         expect(zip).to.equal('08016')

    //                     })
    //             })
    //     )

    //     it('should fail on changing email to an already existing user\'s email', () =>
    //         Promise.all([
    //             User.create(userData),
    //             User.create(otherUserData)
    //         ])
    //             .then(([{ id: id1 }, { id: id2 }]) => {
    //                 const { name, email, password } = userData

    //                 return logic.updateUser(id1, name, email, password, otherUserData.email, "456", "pug", "male", "a dog", "/images", birthdateUser, "madrid", "91279")
    //             })
    //             .catch(({ message }) => expect(message).to.equal(`user with email ${otherUserData.email} already exists`))
    //     )

    //     it('should fail on no user id', () =>
    //         logic.updateUser()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         logic.updateUser('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         logic.updateUser('     ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on no user name', () =>
    //         logic.updateUser(dummyUserId)
    //             .catch(({ message }) => expect(message).to.equal('user name is not a string'))
    //     )

    //     it('should fail on empty user name', () =>
    //         logic.updateUser(dummyUserId, '')
    //             .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
    //     )

    //     it('should fail on blank user name', () =>
    //         logic.updateUser(dummyUserId, '     ')
    //             .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
    //     )


    //     it('should fail on no user email', () =>
    //         logic.updateUser(dummyUserId, userData.name)
    //             .catch(({ message }) => expect(message).to.equal('user email is not a string'))
    //     )

    //     it('should fail on empty user email', () =>
    //         logic.updateUser(dummyUserId, userData.name, '')
    //             .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
    //     )

    //     it('should fail on blank user email', () =>
    //         logic.updateUser(dummyUserId, userData.name, '     ')
    //             .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
    //     )

    //     it('should fail on no user password', () =>
    //         logic.updateUser(dummyUserId, userData.name, userData.email)
    //             .catch(({ message }) => expect(message).to.equal('user password is not a string'))
    //     )

    //     it('should fail on empty user password', () =>
    //         logic.updateUser(dummyUserId, userData.name, userData.email, '')
    //             .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
    //     )

    //     it('should fail on blank user password', () =>
    //         logic.updateUser(dummyUserId, userData.name, userData.email, '     ')
    //             .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
    //     )

    //     it('should fail on no user race', () =>
    //         logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456')
    //             .catch(({ message }) => expect(message).to.equal('user race is not a string'))
    //     )

    //     it('should fail on empty user race', () =>

    //         logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "")
    //             .catch(({ message }) => expect(message).to.equal('user race is empty or blank'))
    //     )

    //     it('should fail on blank user race', () =>
    //         logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "       ")
    //             .catch(({ message }) => expect(message).to.equal('user race is empty or blank'))
    //     )

    //     it('should fail on no user gender', () =>
    //         logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug")
    //             .catch(({ message }) => expect(message).to.equal('user gender is not a string'))
    //     )

    //     it('should fail on empty user gender', () =>

    //         logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "")
    //             .catch(({ message }) => expect(message).to.equal('user gender is empty or blank'))
    //     )

    //     it('should fail on blank user gender', () =>
    //         logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "       ")
    //             .catch(({ message }) => expect(message).to.equal('user gender is empty or blank'))
    //     )

    //     it('should fail on no user description', () =>
    //         logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "male")
    //             .catch(({ message }) => expect(message).to.equal('user description is not a string'))
    //     )

    //     it('should fail on empty user description', () =>

    //         logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "male", "")
    //             .catch(({ message }) => expect(message).to.equal('user description is empty or blank'))
    //     )

    //     it('should fail on blank user description', () =>
    //         logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "male", "       ")
    //             .catch(({ message }) => expect(message).to.equal('user description is empty or blank'))
    //     )


    //     it('should fail on no user photoProfile', () =>
    //         logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "male", "the description")
    //             .catch(({ message }) => expect(message).to.equal('user photoProfile is not a string'))
    //     )

    //     it('should fail on empty user photoProfile', () =>

    //         logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "male", "the description", "")
    //             .catch(({ message }) => expect(message).to.equal('user photoProfile is empty or blank'))
    //     )

    //     it('should fail on blank user photoProfile', () =>
    //         logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "male", "the description", "       ")
    //             .catch(({ message }) => expect(message).to.equal('user photoProfile is empty or blank'))
    //     )


    //     it('should fail on no user birthdate', () =>
    //         logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "male", "the description", "/image")
    //             .catch(({ message }) => expect(message).to.equal('user birthdate is not a object'))
    //     )

    //     it('should fail on no user city', () =>
    //         logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "male", "the description", "/image", birthdateUser)
    //             .catch(({ message }) => expect(message).to.equal('user city is not a string'))
    //     )

    //     it('should fail on empty user city', () =>

    //         logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "male", "the description", "/image", birthdateUser, "")
    //             .catch(({ message }) => expect(message).to.equal('user city is empty or blank'))
    //     )

    //     it('should fail on blank user city', () =>
    //         logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "male", "the description", "/image", birthdateUser, "       ")
    //             .catch(({ message }) => expect(message).to.equal('user city is empty or blank'))
    //     )


    //     it('should fail on no user zip', () =>
    //         logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "male", "the description", "/image", birthdateUser, "barcelona")
    //             .catch(({ message }) => expect(message).to.equal('user zip is not a string'))
    //     )

    //     it('should fail on empty user zip', () =>

    //         logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "male", "the description", "/image", birthdateUser, "barcelona", "")
    //             .catch(({ message }) => expect(message).to.equal('user zip is empty or blank'))
    //     )

    //     it('should fail on blank user zip', () =>
    //         logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "male", "the description", "/image", birthdateUser, "barcelona", "       ")
    //             .catch(({ message }) => expect(message).to.equal('user zip is empty or blank'))
    //     )
    // })


    // describe('filter users', function () {
    //     this.timeout(3000);

    //     it('should succeed on correct data', () => {
    //         let users = []

    //         users.push(new User({ name: 'John', email: 'johndoe@mail.com', password: '123', race: "pug", gender: "male", description: "a dog", photoProfile: "/image", birthdateUser, city: "barcelona", zip: "08016" }).save())
    //         users.push(new User({ name: 'pepe', email: 'pepe@mail.com', password: '123', race: "bulldog", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser, city: "madrid", zip: "912829" }).save())
    //         users.push(new User({ name: 'toby', email: 'toby@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser, city: "barcelona", zip: "08013" }).save())

    //         return Promise.all(users)
    //             .then((users) => {

    //                 let filters = []
    //                 filters.push(logic.filterUsers('John', undefined, undefined, undefined)) //name race gender city
    //                 filters.push(logic.filterUsers(undefined, "pug", undefined, undefined)) //name race gender city
    //                 filters.push(logic.filterUsers(undefined, undefined, "female", undefined)) //name race gender city
    //                 filters.push(logic.filterUsers(undefined, "pug", undefined, "barcelona")) //name race gender city

    //                 return Promise.all(filters).then(res => {

    //                     expect(res[0].length).to.equal(1)
    //                     expect(res[1].length).to.equal(2)
    //                     expect(res[2].length).to.equal(2)
    //                     expect(res[3].length).to.equal(2)

    //                 })
    //             })
    //     })


    //     it('should fail on no user name', () =>
    //         logic.filterUsers(1)
    //             .catch(({ message }) => expect(message).to.equal('user name is not a string or undefined'))
    //     )

    //     it('should fail on no user race', () =>
    //         logic.filterUsers("", 1)
    //             .catch(({ message }) => expect(message).to.equal('user race is not a string or undefined'))
    //     )

    //     it('should fail on no user gender', () =>
    //         logic.filterUsers("", "", 1)
    //             .catch(({ message }) => expect(message).to.equal('user gender is not a string or undefined'))
    //     )

    //     it('should fail on no user city', () =>
    //         logic.filterUsers(undefined, undefined, undefined, 1)
    //             .catch(({ message }) => expect(message).to.equal('user city is not a string or undefined'))
    //     )
    // })


    // describe('filter parks', function () {
    //     this.timeout(3000);

    //     it('should succeed on correct data', () => {
    //         let parks = []

    //         parks.push(new Park({ name: 'mypark1', creator: dummyUserId, city: 'barcelona', zip: "08013", location: "12314434-342342432" }).save())
    //         parks.push(new Park({ name: 'mypark2', creator: dummyUserId, city: 'madrid', zip: "12345", location: "12314434-342342432" }).save())
    //         parks.push(new Park({ name: 'mypark3', creator: dummyUserId, city: 'barcelona', zip: "08016", location: "12314434-342342432" }).save())

    //         return Promise.all(parks)
    //             .then((parks) => {

    //                 let filters = []
    //                 filters.push(logic.filterParks('mypark2', undefined, undefined, )) //name city zip
    //                 filters.push(logic.filterParks(undefined, "barcelona", undefined, )) //name city zip
    //                 filters.push(logic.filterParks(undefined, undefined, "12345", )) //name city zip
    //                 filters.push(logic.filterParks(undefined, "barcelona", "08016")) //name city zip

    //                 return Promise.all(filters).then(res => {

    //                     expect(res[0].length).to.equal(1)
    //                     expect(res[1].length).to.equal(2)
    //                     expect(res[2].length).to.equal(1)
    //                     expect(res[3].length).to.equal(1)

    //                 })
    //             })
    //     })


    //     it('should fail on no park name', () =>
    //         logic.filterParks(1)
    //             .catch(({ message }) => expect(message).to.equal('park name is not a string or undefined'))
    //     )

    //     it('should fail on no park city', () =>
    //         logic.filterParks("", 1)
    //             .catch(({ message }) => expect(message).to.equal('park city is not a string or undefined'))
    //     )

    //     it('should fail on no park zip', () =>
    //         logic.filterParks("", "", 1)
    //             .catch(({ message }) => expect(message).to.equal('park zip is not a string or undefined'))
    //     )


    // })

    // describe('add notifications', () => {

    //     it('should succeed on correct data', () =>
    //         User.create(userData)
    //             .then(({ id }) => {

    //                 return logic.addNotification(id, "one notification")
    //                     .then((notifications) => {
    //                         expect(notifications).to.exist
    //                         expect(notifications[0]).to.equal('one notification')
    //                     })
    //             })
    //     )

    //     it('should fail on no user id', () =>
    //         logic.addNotification()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         logic.addNotification('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         logic.addNotification('     ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on no user notification', () =>
    //         logic.addNotification(dummyUserId)
    //             .catch(({ message }) => expect(message).to.equal('notification is not a string'))
    //     )

    //     it('should fail on empty user notification', () =>
    //         logic.addNotification(dummyUserId, '')
    //             .catch(({ message }) => expect(message).to.equal('notification is empty or blank'))
    //     )

    //     it('should fail on blank user notification', () =>
    //         logic.addNotification(dummyUserId, '     ')
    //             .catch(({ message }) => expect(message).to.equal('notification is empty or blank'))
    //     )


    // })


    // describe('delete notifications', () => {

    //     it('should succeed on correct data', () =>
    //         User.create({ name: 'John', email: 'jd@mail.com', password: '123', notifications: ["notification1", "notification2", "notification3"] })
    //             .then(({ id }) => {

    //                 return logic.deleteNotifications(id)
    //                     .then((res) => {
    //                         expect(res).to.be.true
    //                     })
    //             })
    //     )

    //     it('should fail on no user id', () =>
    //         logic.deleteNotifications()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         logic.deleteNotifications('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         logic.deleteNotifications('     ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )


    // })

    // describe('unregister user', () => {
    //     it('should succeed on correct data', () =>
    //         User.create(userData)
    //             .then(({ id }) => {
    //                 return logic.unregisterUser(id, 'jd@mail.com', '123')
    //                     .then(res => {
    //                         expect(res).to.be.true

    //                         return User.findById(id)
    //                     })
    //                     .then(user => {
    //                         expect(user).to.be.null
    //                     })
    //             })
    //     )

    //     it('should fail on no user id', () =>
    //         logic.unregisterUser()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         logic.unregisterUser('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         logic.unregisterUser('     ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on no user email', () =>
    //         logic.unregisterUser(dummyUserId)
    //             .catch(({ message }) => expect(message).to.equal('user email is not a string'))
    //     )

    //     it('should fail on empty user email', () =>
    //         logic.unregisterUser(dummyUserId, '')
    //             .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
    //     )

    //     it('should fail on blank user email', () =>
    //         logic.unregisterUser(dummyUserId, '     ')
    //             .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
    //     )

    //     it('should fail on no user password', () =>
    //         logic.unregisterUser(dummyUserId, userData.email)
    //             .catch(({ message }) => expect(message).to.equal('user password is not a string'))
    //     )

    //     it('should fail on empty user password', () =>
    //         logic.unregisterUser(dummyUserId, userData.email, '')
    //             .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
    //     )

    //     it('should fail on blank user password', () =>
    //         logic.unregisterUser(dummyUserId, userData.email, '     ')
    //             .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
    //     )
    // })

    // describe('add friend', () => {

    //     it('should succeed on correct data', () => {
    //         let users = []
    //         let userId

    //         users.push(new User({ name: 'John', email: 'johndoe@mail.com', password: '123', race: "pug", gender: "male", description: "a dog", photoProfile: "/image", birthdateUser }).save())
    //         users.push(new User({ name: 'pepe', email: 'pepe@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())
    //         users.push(new User({ name: 'toby', email: 'toby@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())

    //         return Promise.all(users)
    //             .then((users) => {
    //                 userId = users[1].id
    //                 return logic.addFriend(users[0].id, users[1].id)
    //             })
    //             .then(idFriend => {
    //                 expect(idFriend).to.exist
    //                 expect(idFriend.length).to.equals(1)
    //                 expect(idFriend[0].toString()).to.equal(userId)
    //             })
    //     })

    //     it('should throw error by repeated user', () => {
    //         let users = [];

    //         users.push(new User({ name: 'John', email: 'johndoe@mail.com', password: '123', race: "pug", gender: "male", description: "a dog", photoProfile: "/image", birthdateUser }).save())
    //         users.push(new User({ name: 'pepe', email: 'pepe@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())

    //         return Promise.all(users)
    //             .then(users => {
    //                 return logic.addFriend(users[0].id, users[1].id)
    //                     .then((res) => {
    //                         return logic.addFriend(users[0].id, users[1].id)
    //                     })
    //                     .catch(({ message }) => {
    //                         expect(message).to.equal(`this user already exists`)
    //                     })

    //             })
    //     })

    //     it('should fail on wrong user id', () => {
    //         return logic.addFriend(dummyUserId, dummyUserId)
    //             .catch(({ message }) => expect(message).to.equal(`no user found with id ${dummyUserId}`))
    //     })


    //     it('should fail on no user id', () =>
    //         logic.addFriend()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         logic.addFriend('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         logic.addFriend('     ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on no friendId', () => {
    //         logic.addFriend(dummyUserId)
    //             .catch(({ message }) => expect(message).to.equal('friendId is not a string'))
    //     })

    //     it('should fail on empty friendId', () =>
    //         logic.addFriend(dummyUserId, '')
    //             .catch(({ message }) => expect(message).to.equal('friendId is empty or blank'))
    //     )

    //     it('should fail on blank friendId', () =>
    //         logic.addFriend(dummyUserId, '   ')
    //             .catch(({ message }) => expect(message).to.equal('friendId is empty or blank'))
    //     )


    // })


    // describe('remove friend', () => {

    //     it('should succeed on correct data', () => {
    //         let users = [];

    //         users.push(new User({ name: 'John', email: 'johndoe@mail.com', password: '123', race: "pug", gender: "male", description: "a dog", photoProfile: "/image", birthdateUser }).save())
    //         users.push(new User({ name: 'pepe', email: 'pepe@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())
    //         users.push(new User({ name: 'toby', email: 'toby@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())

    //         return Promise.all(users).then()
    //             .then((users) => {

    //                 users[0].friends.push(users[1].id)
    //                 users[0].friends.push(users[2].id)

    //                 return users[0].save()
    //                     .then(({ id }) => {

    //                         return logic.removeFriend(id, users[1].id)

    //                     }).then(loves => {
    //                         expect(loves).to.exist
    //                         expect(loves.length).to.equals(1)
    //                         expect(loves[0].toString()).to.equals(users[2].id)

    //                     })
    //             })
    //     })

    //     //  it('should throw error by repeated user', () => {
    //     //     let users = [];

    //     //     users.push(new User({ name: 'John', email: 'johndoe@mail.com', password: '123', race: "pug", gender: "male", description: "a dog", photoProfile: "/image", birthdateUser }).save())
    //     //     users.push(new User({ name: 'pepe', email: 'pepe@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())

    //     //     return Promise.all(users)
    //     //         .then(users => {
    //     //             return logic.removeFriend(users[0].id, users[1].id)
    //     //                 .then((res) => {
    //     //                     return logic.removeFriend(users[0].id, users[1].id)
    //     //                 })
    //     //                 .catch(({ message }) => {
    //     //                     expect(message).to.equal(`this user already exists`)
    //     //                 })

    //     //         })
    //     // })



    //     it('no friend found', () => {

    //         const user = new User(userData)
    //         user.friends.push(dummyUserId)

    //         return user.save()
    //             .then(({ id: userId }) => {

    //                 logic.removeFriend(userId, dummyUserId2)
    //                     .catch(({ message }) => expect(message).to.equal(`no friend found with id ${dummyUserId2}`))
    //             })
    //     })

    //     it('should fail on non user id', () =>
    //         logic.removeFriend()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         logic.removeFriend('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         logic.removeFriend('      ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on wrong user id', () => {
    //         const user = new User(userData)

    //         user.friends.push(dummyUserId)

    //         return user.save()
    //             .then(({ friends }) => {
    //                 return logic.removeFriend(dummyUserId, dummyUserId)
    //                     .catch(({ message }) => expect(message).to.equal(`no user found with id ${dummyUserId}`))
    //             })
    //     })

    //     it('should fail on no friendId', () =>
    //         logic.removeFriend(dummyUserId)
    //             .catch(({ message }) => expect(message).to.equal('friendId is not a string'))
    //     )

    //     it('should fail on empty friendId', () =>
    //         logic.removeFriend(dummyUserId, '')
    //             .catch(({ message }) => expect(message).to.equal('friendId is empty or blank'))
    //     )

    //     it('should fail on blank friendId', () =>
    //         logic.removeFriend(dummyUserId, '       ')
    //             .catch(({ message }) => expect(message).to.equal('friendId is empty or blank'))
    //     )

    // })




    // describe('add lover', () => {
    //     it('should succeed on correct data', () => {
    //         let users = [];

    //         users.push(new User({ name: 'John', email: 'johndoe@mail.com', password: '123', race: "pug", gender: "male", description: "a dog", photoProfile: "/image", birthdateUser }).save())
    //         users.push(new User({ name: 'pepe', email: 'pepe@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())
    //         users.push(new User({ name: 'toby', email: 'toby@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())

    //         return Promise.all(users).then()
    //             .then((users) => {
    //                 let addLoves = []
    //                 addLoves.push(logic.addLove(users[0].id, users[1].id))
    //                 addLoves.push(logic.addLove(users[0].id, users[2].id))

    //                 return Promise.all(addLoves)
    //                     .then(idLove => {
    //                         expect(idLove).to.exist
    //                         expect(idLove.length).to.equals(2)
    //                         expect(idLove[0].toString()).to.equal(users[1].id)
    //                         expect(idLove[1].toString()).to.equal(users[2].id)
    //                     })
    //             })
    //     })

    //     it('should throw error by repeated user', () => {
    //         let users = [];

    //         users.push(new User({ name: 'John', email: 'johndoe@mail.com', password: '123', race: "pug", gender: "male", description: "a dog", photoProfile: "/image", birthdateUser }).save())
    //         users.push(new User({ name: 'pepe', email: 'pepe@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())

    //         return Promise.all(users)
    //             .then(users => {
    //                 return logic.addLove(users[0].id, users[1].id)
    //                     .then((res) => {
    //                         return logic.addLove(users[0].id, users[1].id)
    //                     })
    //                     .catch(({ message }) => {
    //                         expect(message).to.equal(`this user already exists`)
    //                     })

    //             })
    //     })


    //     it('no love found', () => {

    //         const user = new User(userData)
    //         user.loves.push(dummyUserId)

    //         return user.save()
    //             .then(({ id: userId }) => {

    //                 logic.removeLove(userId, dummyUserId2)
    //                     .catch(({ message }) => expect(message).to.equal(`no love found with id ${dummyUserId2}`))
    //             })
    //     })


    //     it('should fail on wrong user id', () => {
    //         return logic.addLove(dummyUserId, dummyUserId)
    //             .catch(({ message }) => expect(message).to.equal(`no user found with id ${dummyUserId}`))
    //     })


    //     it('should fail on no user id', () =>
    //         logic.addLove()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         logic.addLove('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         logic.addLove('     ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on no friendId', () => {
    //         logic.addLove(dummyUserId)
    //             .catch(({ message }) => expect(message).to.equal('loveId is not a string'))
    //     })

    //     it('should fail on empty friendId', () =>
    //         logic.addLove(dummyUserId, '')
    //             .catch(({ message }) => expect(message).to.equal('loveId is empty or blank'))
    //     )

    //     it('should fail on blank friendId', () =>
    //         logic.addLove(dummyUserId, '   ')
    //             .catch(({ message }) => expect(message).to.equal('loveId is empty or blank'))
    //     )

    // })


    // describe('remove love', () => {
    //     it('should succeed on correct data', () => {
    //         let users = [];

    //         users.push(new User({ name: 'John', email: 'johndoe@mail.com', password: '123', race: "pug", gender: "male", description: "a dog", photoProfile: "/image", birthdateUser }).save())
    //         users.push(new User({ name: 'pepe', email: 'pepe@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())
    //         users.push(new User({ name: 'toby', email: 'toby@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())

    //         return Promise.all(users).then()
    //             .then((users) => {

    //                 users[0].loves.push(users[1].id)
    //                 users[0].loves.push(users[2].id)

    //                 return users[0].save()
    //                     .then(({ id }) => {

    //                         return logic.removeLove(id, users[1].id)

    //                     }).then(loves => {
    //                         expect(loves).to.exist
    //                         expect(loves.length).to.equals(1)
    //                         expect(loves[0].toString()).to.equals(users[2].id)

    //                     })
    //             })
    //     })


    //     it('should fail on non user id', () =>
    //         logic.removeLove()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         logic.removeLove('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         logic.removeLove('      ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on wrong user id', () => {
    //         const user = new User(userData)

    //         user.loves.push(dummyUserId)

    //         return user.save()
    //             .then(({ loves }) => {
    //                 return logic.removeLove(dummyUserId, dummyUserId)
    //                     .catch(({ message }) => expect(message).to.equal(`no user found with id ${dummyUserId}`))
    //             })
    //     })

    //     it('should fail on no friendId', () =>
    //         logic.removeLove(dummyUserId)
    //             .catch(({ message }) => expect(message).to.equal('loveId is not a string'))
    //     )

    //     it('should fail on empty loveId', () =>
    //         logic.removeLove(dummyUserId, '')
    //             .catch(({ message }) => expect(message).to.equal('loveId is empty or blank'))
    //     )

    //     it('should fail on blank loveId', () =>
    //         logic.removeLove(dummyUserId, '       ')
    //             .catch(({ message }) => expect(message).to.equal('loveId is empty or blank'))
    //     )

    // })



    // describe('create park', () => {
    //     it('should succeed on correct dada', () => {

    //         return User.create(userData)
    //             .then(({ id: idCreator }) => {

    //                 return logic.createPark('central park', idCreator, "New York", "08013", "789098776-099762121", dummyUserId)
    //                     .then(res => expect(res).to.be.true
    //                     )
    //             })

    //     })

    //     it('park with name x already exists', () => {

    //         const park = new Park(parkData)
    //         return park.save()
    //             .then((park) => {

    //                 const { name, creator, city, zip, location } = parkData
    //                 logic.createPark(name, creator, city, zip, location)
    //                     .catch(({ message }) => expect(message).to.equal(`park with name ${parkData.name} already exists`))
    //             })

    //     }
    //     )



    //     it('should fail on no name', () =>
    //         logic.createPark()
    //             .catch(({ message }) => expect(message).to.equal('name is not a string'))
    //     )

    //     it('should fail on empty name', () =>
    //         logic.createPark('')
    //             .catch(({ message }) => expect(message).to.equal('name is empty or blank'))
    //     )

    //     it('should fail on blank name', () =>
    //         logic.createPark('     ')
    //             .catch(({ message }) => expect(message).to.equal('name is empty or blank'))
    //     )



    //     it('should fail on no creator', () =>
    //         logic.createPark("name")
    //             .catch(({ message }) => expect(message).to.equal('creator is not a string'))
    //     )

    //     it('should fail on empty creator', () =>
    //         logic.createPark("name", '')
    //             .catch(({ message }) => expect(message).to.equal('creator is empty or blank'))
    //     )

    //     it('should fail on blank creator', () =>
    //         logic.createPark("name", '     ')
    //             .catch(({ message }) => expect(message).to.equal('creator is empty or blank'))
    //     )


    //     it('should fail on no city', () =>
    //         logic.createPark("name", "creator")
    //             .catch(({ message }) => expect(message).to.equal('city is not a string'))
    //     )

    //     it('should fail on empty city', () =>
    //         logic.createPark("name", "creator", '')
    //             .catch(({ message }) => expect(message).to.equal('city is empty or blank'))
    //     )

    //     it('should fail on blank city', () =>
    //         logic.createPark("name", "creator", '     ')
    //             .catch(({ message }) => expect(message).to.equal('city is empty or blank'))
    //     )

    //     it('should fail on no zip', () =>
    //         logic.createPark("name", "creator", "mycity")
    //             .catch(({ message }) => expect(message).to.equal('zip is not a string'))
    //     )

    //     it('should fail on empty zip', () =>
    //         logic.createPark("name", "creator", "mycity", '')
    //             .catch(({ message }) => expect(message).to.equal('zip is empty or blank'))
    //     )

    //     it('should fail on blank zip', () =>
    //         logic.createPark("name", "creator", "mycity", '     ')
    //             .catch(({ message }) => expect(message).to.equal('zip is empty or blank'))
    //     )

    //     it('should fail on no location', () =>
    //         logic.createPark("name", "creator", "mycity", "123zip", )
    //             .catch(({ message }) => expect(message).to.equal('location is not a string'))
    //     )

    //     it('should fail on empty location', () =>
    //         logic.createPark("name", "creator", "mycity", "123zip", '')
    //             .catch(({ message }) => expect(message).to.equal('location is empty or blank'))
    //     )

    //     it('should fail on blank location', () =>
    //         logic.createPark("name", "creator", "mycity", "123zip", '     ')
    //             .catch(({ message }) => expect(message).to.equal('location is empty or blank'))
    //     )




    // })


    // describe('retrieve park', () => {
    //     it('should succeed on correct dada', () => {

    //         let createParks = []
    //         createParks.push(Park.create(parkData))
    //         createParks.push(Park.create(parkData2))

    //         Promise.all(createParks)
    //             .then((parks) => {

    //                 logic.retrivePark(parks[1].id)
    //                     .then(park => {
    //                         expect(park).to.exist
    //                         expect(park.id.toString()).to.equals(parks[1].id)
    //                     })

    //             })

    //     })

    //     it('should fail becose idPark no exists', () =>
    //         logic.retrivePark("123456781234560000000000")
    //             .catch(({ message }) => expect(message).to.equal(`park with idPark 123456781234560000000000 already exists`))
    //     )

    //     it('should fail on no idPark', () =>
    //         logic.retrivePark()
    //             .catch(({ message }) => expect(message).to.equal('idPark is not a string'))
    //     )

    //     it('should fail on empty idPark', () =>
    //         logic.retrivePark('')
    //             .catch(({ message }) => expect(message).to.equal('idPark is empty or blank'))
    //     )

    //     it('should fail on blank idPark', () =>
    //         logic.retrivePark('     ')
    //             .catch(({ message }) => expect(message).to.equal('idPark is empty or blank'))
    //     )

    // })




    // describe('remove park', () => {
    //     it('should succeed on correct dada', () => {

    //         let createParks = []
    //         createParks.push(Park.create(parkData))
    //         createParks.push(Park.create(parkData2))

    //         Promise.all(createParks)
    //             .then((parks) => {

    //                 logic.removePark(parks[1].id)
    //                     .then(park => {
    //                         expect(park).to.true
    //                     })

    //             })

    //     })

    //     it('should fail becose idPark no exists', () =>
    //         logic.retrivePark("123456781234560000000000")
    //             .catch(({ message }) => expect(message).to.equal(`park with idPark 123456781234560000000000 already exists`))
    //     )

    //     it('should fail on no idPark', () =>
    //         logic.retrivePark()
    //             .catch(({ message }) => expect(message).to.equal('idPark is not a string'))
    //     )

    //     it('should fail on empty idPark', () =>
    //         logic.retrivePark('')
    //             .catch(({ message }) => expect(message).to.equal('idPark is empty or blank'))
    //     )

    //     it('should fail on blank idPark', () =>
    //         logic.retrivePark('     ')
    //             .catch(({ message }) => expect(message).to.equal('idPark is empty or blank'))
    //     )

    // })


    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})
