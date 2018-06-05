'use strict'

require('dotenv').config()

const { mongoose, models: { User, Park } } = require('data')
const { expect } = require('chai')
const logic = require('.')
const _ = require('lodash')

const { env: { DB_URL } } = process

describe('logic social', () => {
    const birthdateUser = new Date()
    const dummyUserId = '123456781234567812345678'
    const dummyUserId2 = '223456781234567812345678'
    const dummyNoteId = '123456781234567812345678'
    const userData = { name: 'John', email: 'jd@mail.com', password: '123' }
    const otherUserData = { name: 'Jack', email: 'jw@mail.com', password: '456' }
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

    describe('register user', () => {
        it('should succeed on correct dada', () =>
            logic.registerUser('John', 'jd@mail.com', '123')
                .then(res => expect(res).to.be.true)
        )

        it('should fail on already registered user', () =>
            User.create(userData)
                .then(() => {
                    const { name, email, password } = userData

                    return logic.registerUser(name, email, password)
                })
                .catch(({ message }) => {
                    expect(message).to.equal(`user with email ${userData.email} already exists`)
                })
        )

        it('should fail on no user name', () =>
            logic.registerUser()
                .catch(({ message }) => expect(message).to.equal('user name is not a string'))
        )

        it('should fail on empty user name', () =>
            logic.registerUser('')
                .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
        )

        it('should fail on blank user name', () =>
            logic.registerUser('     ')
                .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
        )

        it('should fail on no user email', () =>
            logic.registerUser(userData.name)
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            logic.registerUser(userData.name, '')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            logic.registerUser(userData.name, '     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user password', () =>
            logic.registerUser(userData.name, userData.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.registerUser(userData.name, userData.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.registerUser(userData.name, userData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })

    describe('authenticate user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(() =>
                    logic.authenticateUser('jd@mail.com', '123')
                        .then(id => expect(id).to.exist)
                )
        )

        it('should fail on no user email', () =>
            logic.authenticateUser()
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            logic.authenticateUser('')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            logic.authenticateUser('     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user password', () =>
            logic.authenticateUser(userData.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.authenticateUser(userData.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.authenticateUser(userData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })

    describe('retrieve user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {
                    return logic.retrieveUser(id)
                })
                .then(user => {
                    expect(user).to.exist

                    const { name, email, _id, password } = user

                    expect(name).to.equal('John')
                    expect(email).to.equal('jd@mail.com')

                    expect(_id).to.be.undefined
                    expect(password).to.be.undefined
                })
        )

        it('should fail on no user id', () =>
            logic.retrieveUser()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            logic.retrieveUser('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.retrieveUser('     ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )
    })

    describe('udpate user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {

                    return logic.updateUser(id, 'Jack', 'jd@mail.com', '123', 'jck@mail.com', '456', "pug", "female", "a dog", "/images", birthdateUser)
                        .then(res => {
                            expect(res).to.be.true

                            return User.findById(id)
                        })
                        .then(user => {
                            expect(user).to.exist

                            const { name, email, password, race, gender, description, photoProfile, birthdate } = user

                            expect(user.id).to.equal(id)
                            expect(name).to.equal('Jack')
                            expect(email).to.equal('jck@mail.com')
                            expect(password).to.equal('456')
                            expect(race).to.equal('pug')
                            expect(gender).to.equal('female')
                            expect(description).to.equal('a dog')
                            expect(photoProfile).to.equal('/images')
                            expect(birthdate.toString()).to.equal(birthdateUser.toString())
                        })
                })
        )

        it('should fail on changing email to an already existing user\'s email', () =>
            Promise.all([
                User.create(userData),
                User.create(otherUserData)
            ])
                .then(([{ id: id1 }, { id: id2 }]) => {
                    const { name, email, password } = userData

                    return logic.updateUser(id1, name, email, password, otherUserData.email, "456", "pug", "male", "a dog", "/images", birthdateUser)
                })
                .catch(({ message }) => expect(message).to.equal(`user with email ${otherUserData.email} already exists`))
        )

        it('should fail on no user id', () =>
            logic.updateUser()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            logic.updateUser('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.updateUser('     ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on no user name', () =>
            logic.updateUser(dummyUserId)
                .catch(({ message }) => expect(message).to.equal('user name is not a string'))
        )

        it('should fail on empty user name', () =>
            logic.updateUser(dummyUserId, '')
                .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
        )

        it('should fail on blank user name', () =>
            logic.updateUser(dummyUserId, '     ')
                .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
        )


        it('should fail on no user email', () =>
            logic.updateUser(dummyUserId, userData.name)
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            logic.updateUser(dummyUserId, userData.name, '')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            logic.updateUser(dummyUserId, userData.name, '     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user password', () =>
            logic.updateUser(dummyUserId, userData.name, userData.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.updateUser(dummyUserId, userData.name, userData.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.updateUser(dummyUserId, userData.name, userData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on no user race', () =>
            logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456')
                .catch(({ message }) => expect(message).to.equal('user race is not a string'))
        )

        it('should fail on empty user race', () =>

            logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "")
                .catch(({ message }) => expect(message).to.equal('user race is empty or blank'))
        )

        it('should fail on blank user race', () =>
            logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "       ")
                .catch(({ message }) => expect(message).to.equal('user race is empty or blank'))
        )

        it('should fail on no user gender', () =>
            logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug")
                .catch(({ message }) => expect(message).to.equal('user gender is not a string'))
        )

        it('should fail on empty user gender', () =>

            logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "")
                .catch(({ message }) => expect(message).to.equal('user gender is empty or blank'))
        )

        it('should fail on blank user gender', () =>
            logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "       ")
                .catch(({ message }) => expect(message).to.equal('user gender is empty or blank'))
        )

        it('should fail on no user description', () =>
            logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "male")
                .catch(({ message }) => expect(message).to.equal('user description is not a string'))
        )

        it('should fail on empty user description', () =>

            logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "male", "")
                .catch(({ message }) => expect(message).to.equal('user description is empty or blank'))
        )

        it('should fail on blank user description', () =>
            logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "male", "       ")
                .catch(({ message }) => expect(message).to.equal('user description is empty or blank'))
        )


        it('should fail on no user photoProfile', () =>
            logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "male", "the description")
                .catch(({ message }) => expect(message).to.equal('user photoProfile is not a string'))
        )

        it('should fail on empty user photoProfile', () =>

            logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "male", "the description", "")
                .catch(({ message }) => expect(message).to.equal('user photoProfile is empty or blank'))
        )

        it('should fail on blank user photoProfile', () =>
            logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "male", "the description", "       ")
                .catch(({ message }) => expect(message).to.equal('user photoProfile is empty or blank'))
        )


        it('should fail on no user birthdate', () =>
            logic.updateUser(dummyUserId, userData.name, userData.email, userData.password, otherUserData.email, '456', "pug", "male", "the description", "/image")
                .catch(({ message }) => expect(message).to.equal('user birthdate is not a object'))
        )


    })

    describe('unregister user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {
                    return logic.unregisterUser(id, 'jd@mail.com', '123')
                        .then(res => {
                            expect(res).to.be.true

                            return User.findById(id)
                        })
                        .then(user => {
                            expect(user).to.be.null
                        })
                })
        )

        it('should fail on no user id', () =>
            logic.unregisterUser()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            logic.unregisterUser('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.unregisterUser('     ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on no user email', () =>
            logic.unregisterUser(dummyUserId)
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            logic.unregisterUser(dummyUserId, '')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            logic.unregisterUser(dummyUserId, '     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user password', () =>
            logic.unregisterUser(dummyUserId, userData.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.unregisterUser(dummyUserId, userData.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.unregisterUser(dummyUserId, userData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })

    describe('add friend', () => {
        it('should succeed on correct data', () => {
            let users = [];

            users.push(new User({ name: 'John', email: 'johndoe@mail.com', password: '123', race: "pug", gender: "male", description: "a dog", photoProfile: "/image", birthdateUser }).save())
            users.push(new User({ name: 'pepe', email: 'pepe@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())
            users.push(new User({ name: 'toby', email: 'toby@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())

            return Promise.all(users).then()
                .then((users) => {
                    let addFriends = []
                    addFriends.push(logic.addFriend(users[0].id, users[1].id))
                    addFriends.push(logic.addFriend(users[0].id, users[2].id))

                    return Promise.all(addFriends)
                        .then(idFriend => {
                            expect(idFriend).to.exist
                            expect(idFriend.length).to.equals(2)
                            expect(idFriend[0].toString()).to.equal(users[1].id)
                            expect(idFriend[1].toString()).to.equal(users[2].id)
                        })
                })
        })

        it('should fail on wrong user id', () => {
            return logic.addFriend(dummyUserId, dummyUserId)
                .catch(({ message }) => expect(message).to.equal(`no user found with id ${dummyUserId}`))
        })


        it('should fail on no user id', () =>
            logic.addFriend()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            logic.addFriend('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.addFriend('     ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on no friendId', () => {
            logic.addFriend(dummyUserId)
                .catch(({ message }) => expect(message).to.equal('friendId is not a string'))
        })

        it('should fail on empty friendId', () =>
            logic.addFriend(dummyUserId, '')
                .catch(({ message }) => expect(message).to.equal('friendId is empty or blank'))
        )

        it('should fail on blank friendId', () =>
            logic.addFriend(dummyUserId, '   ')
                .catch(({ message }) => expect(message).to.equal('friendId is empty or blank'))
        )


    })


    describe('remove friend', () => {
        it('should succeed on correct data', () => {
            let users = [];

            users.push(new User({ name: 'John', email: 'johndoe@mail.com', password: '123', race: "pug", gender: "male", description: "a dog", photoProfile: "/image", birthdateUser }).save())
            users.push(new User({ name: 'pepe', email: 'pepe@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())
            users.push(new User({ name: 'toby', email: 'toby@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())

            return Promise.all(users).then()
                .then((users) => {

                    users[0].friends.push(users[1].id)
                    users[0].friends.push(users[2].id)

                    return users[0].save()
                        .then(({ id }) => {

                            return logic.removeFriend(id, users[1].id)

                        }).then(friends => {
                            expect(friends).to.exist
                            expect(friends.length).to.equals(1)
                            expect(friends[0].toString()).to.equals(users[2].id)

                        })
                })
        })


        it('no friend found', () =>{

        const user = new User(userData)
        user.friends.push(dummyUserId)

        return user.save()
            .then(({ id:userId }) => {

                logic.removeFriend(userId, dummyUserId2)
                    .catch(({ message }) => expect(message).to.equal(`no friend found with id ${dummyUserId2}`))
            })
        })

        it('should fail on non user id', () =>
            logic.removeFriend()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            logic.removeFriend('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.removeFriend('      ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on wrong user id', () => {
            const user = new User(userData)

            user.friends.push(dummyUserId)

            return user.save()
                .then(({ friends }) => {
                    return logic.removeFriend(dummyUserId, dummyUserId)
                        .catch(({ message }) => expect(message).to.equal(`no user found with id ${dummyUserId}`))
                })
        })

        it('should fail on no friendId', () =>
            logic.removeFriend(dummyUserId)
                .catch(({ message }) => expect(message).to.equal('friendId is not a string'))
        )

        it('should fail on empty friendId', () =>
            logic.removeFriend(dummyUserId, '')
                .catch(({ message }) => expect(message).to.equal('friendId is empty or blank'))
        )

        it('should fail on blank friendId', () =>
            logic.removeFriend(dummyUserId, '       ')
                .catch(({ message }) => expect(message).to.equal('friendId is empty or blank'))
        )

    })




    describe('add lover', () => {
        it('should succeed on correct data', () => {
            let users = [];

            users.push(new User({ name: 'John', email: 'johndoe@mail.com', password: '123', race: "pug", gender: "male", description: "a dog", photoProfile: "/image", birthdateUser }).save())
            users.push(new User({ name: 'pepe', email: 'pepe@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())
            users.push(new User({ name: 'toby', email: 'toby@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())

            return Promise.all(users).then()
                .then((users) => {
                    let addLoves = []
                    addLoves.push(logic.addLove(users[0].id, users[1].id))
                    addLoves.push(logic.addLove(users[0].id, users[2].id))

                    return Promise.all(addLoves)
                        .then(idFriend => {
                            expect(idFriend).to.exist
                            expect(idFriend.length).to.equals(2)
                            expect(idFriend[0].toString()).to.equal(users[1].id)
                            expect(idFriend[1].toString()).to.equal(users[2].id)
                        })
                })
        })


        it('no love found', () =>{

            const user = new User(userData)
            user.loves.push(dummyUserId)
    
            return user.save()
                .then(({ id:userId }) => {
    
                    logic.removeLove(userId, dummyUserId2)
                        .catch(({ message }) => expect(message).to.equal(`no love found with id ${dummyUserId2}`))
                })
            })
    

        it('should fail on wrong user id', () => {
            return logic.addLove(dummyUserId, dummyUserId)
                .catch(({ message }) => expect(message).to.equal(`no user found with id ${dummyUserId}`))
        })


        it('should fail on no user id', () =>
            logic.addLove()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            logic.addLove('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.addLove('     ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on no friendId', () => {
            logic.addLove(dummyUserId)
                .catch(({ message }) => expect(message).to.equal('loveId is not a string'))
        })

        it('should fail on empty friendId', () =>
            logic.addLove(dummyUserId, '')
                .catch(({ message }) => expect(message).to.equal('loveId is empty or blank'))
        )

        it('should fail on blank friendId', () =>
            logic.addLove(dummyUserId, '   ')
                .catch(({ message }) => expect(message).to.equal('loveId is empty or blank'))
        )

    })


    describe('remove love', () => {
        it('should succeed on correct data', () => {
            let users = [];

            users.push(new User({ name: 'John', email: 'johndoe@mail.com', password: '123', race: "pug", gender: "male", description: "a dog", photoProfile: "/image", birthdateUser }).save())
            users.push(new User({ name: 'pepe', email: 'pepe@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())
            users.push(new User({ name: 'toby', email: 'toby@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())

            return Promise.all(users).then()
                .then((users) => {

                    users[0].loves.push(users[1].id)
                    users[0].loves.push(users[2].id)

                    return users[0].save()
                        .then(({ id }) => {

                            return logic.removeLove(id, users[1].id)

                        }).then(loves => {
                            expect(loves).to.exist
                            expect(loves.length).to.equals(1)
                            expect(loves[0].toString()).to.equals(users[2].id)

                        })
                })
        })


        it('should fail on non user id', () =>
            logic.removeLove()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            logic.removeLove('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.removeLove('      ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on wrong user id', () => {
            const user = new User(userData)

            user.loves.push(dummyUserId)

            return user.save()
                .then(({ loves }) => {
                    return logic.removeLove(dummyUserId, dummyUserId)
                        .catch(({ message }) => expect(message).to.equal(`no user found with id ${dummyUserId}`))
                })
        })

        it('should fail on no friendId', () =>
            logic.removeLove(dummyUserId)
                .catch(({ message }) => expect(message).to.equal('loveId is not a string'))
        )

        it('should fail on empty loveId', () =>
            logic.removeLove(dummyUserId, '')
                .catch(({ message }) => expect(message).to.equal('loveId is empty or blank'))
        )

        it('should fail on blank loveId', () =>
            logic.removeLove(dummyUserId, '       ')
                .catch(({ message }) => expect(message).to.equal('loveId is empty or blank'))
        )

    })



    describe('create park', () => {
        it('should succeed on correct dada', () =>
            logic.createPark('central park', dummyUserId, "New York", "08013", "789098776-099762121", dummyUserId)
                .then(res => expect(res).to.be.true)
        )


        it('should fail on no name', () =>
            logic.createPark()
                .catch(({ message }) => expect(message).to.equal('name is not a string'))
        )

        it('should fail on empty name', () =>
            logic.createPark('')
                .catch(({ message }) => expect(message).to.equal('name is empty or blank'))
        )

        it('should fail on blank name', () =>
            logic.createPark('     ')
                .catch(({ message }) => expect(message).to.equal('name is empty or blank'))
        )



        it('should fail on no creator', () =>
            logic.createPark("name")
                .catch(({ message }) => expect(message).to.equal('creator is not a string'))
        )

        it('should fail on empty creator', () =>
            logic.createPark("name", '')
                .catch(({ message }) => expect(message).to.equal('creator is empty or blank'))
        )

        it('should fail on blank creator', () =>
            logic.createPark("name", '     ')
                .catch(({ message }) => expect(message).to.equal('creator is empty or blank'))
        )


        it('should fail on no city', () =>
            logic.createPark("name", "creator")
                .catch(({ message }) => expect(message).to.equal('city is not a string'))
        )

        it('should fail on empty city', () =>
            logic.createPark("name", "creator", '')
                .catch(({ message }) => expect(message).to.equal('city is empty or blank'))
        )

        it('should fail on blank city', () =>
            logic.createPark("name", "creator", '     ')
                .catch(({ message }) => expect(message).to.equal('city is empty or blank'))
        )

        it('should fail on no zip', () =>
            logic.createPark("name", "creator", "mycity")
                .catch(({ message }) => expect(message).to.equal('zip is not a string'))
        )

        it('should fail on empty zip', () =>
            logic.createPark("name", "creator", "mycity", '')
                .catch(({ message }) => expect(message).to.equal('zip is empty or blank'))
        )

        it('should fail on blank zip', () =>
            logic.createPark("name", "creator", "mycity", '     ')
                .catch(({ message }) => expect(message).to.equal('zip is empty or blank'))
        )

        it('should fail on no location', () =>
            logic.createPark("name", "creator", "mycity", "123zip", )
                .catch(({ message }) => expect(message).to.equal('location is not a string'))
        )

        it('should fail on empty location', () =>
            logic.createPark("name", "creator", "mycity", "123zip", '')
                .catch(({ message }) => expect(message).to.equal('location is empty or blank'))
        )

        it('should fail on blank location', () =>
            logic.createPark("name", "creator", "mycity", "123zip", '     ')
                .catch(({ message }) => expect(message).to.equal('location is empty or blank'))
        )




    })


    describe('retrieve park', () => {
        it('should succeed on correct dada', () => {

            let createParks = []
            createParks.push(Park.create(parkData))
            createParks.push(Park.create(parkData2))

            Promise.all(createParks)
                .then((parks) => {

                    logic.retrivePark(parks[1].id)
                        .then(park => {
                            expect(park).to.exist
                            expect(park.id.toString()).to.equals(parks[1].id)
                        })

                })

        })

        it('should fail becose idPark no exists', () =>
            logic.retrivePark("123456781234560000000000")
                .catch(({ message }) => expect(message).to.equal(`park with idPark 123456781234560000000000 already exists`))
        )

        it('should fail on no idPark', () =>
            logic.retrivePark()
                .catch(({ message }) => expect(message).to.equal('idPark is not a string'))
        )

        it('should fail on empty idPark', () =>
            logic.retrivePark('')
                .catch(({ message }) => expect(message).to.equal('idPark is empty or blank'))
        )

        it('should fail on blank idPark', () =>
            logic.retrivePark('     ')
                .catch(({ message }) => expect(message).to.equal('idPark is empty or blank'))
        )

    })




    describe('remove park', () => {
        it('should succeed on correct dada', () => {

            let createParks = []
            createParks.push(Park.create(parkData))
            createParks.push(Park.create(parkData2))

            Promise.all(createParks)
                .then((parks) => {

                    logic.removePark(parks[1].id)
                        .then(park => {
                            expect(park).to.true
                        })

                })

        })

        it('should fail becose idPark no exists', () =>
            logic.retrivePark("123456781234560000000000")
                .catch(({ message }) => expect(message).to.equal(`park with idPark 123456781234560000000000 already exists`))
        )

        it('should fail on no idPark', () =>
            logic.retrivePark()
                .catch(({ message }) => expect(message).to.equal('idPark is not a string'))
        )

        it('should fail on empty idPark', () =>
            logic.retrivePark('')
                .catch(({ message }) => expect(message).to.equal('idPark is empty or blank'))
        )

        it('should fail on blank idPark', () =>
            logic.retrivePark('     ')
                .catch(({ message }) => expect(message).to.equal('idPark is empty or blank'))
        )

    })


    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})
