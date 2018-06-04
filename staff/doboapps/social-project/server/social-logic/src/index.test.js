'use strict'

require('dotenv').config()

const { mongoose, models: { User, Note } } = require('social-data')
const { expect } = require('chai')
const logic = require('.')
const _ = require('lodash')

const { env: { DB_URL } } = process

describe('logic social', () => {
    const birthdateUser = new Date()
    const userData = { name: 'John', email: 'jd@mail.com', password: '123' }
    const otherUserData = { name: 'Jack', email: 'jw@mail.com', password: '456' }
    const dummyUserId = '123456781234567812345678'
    const dummyUserId2 = '223456781234567812345678'
    const dummyNoteId = '123456781234567812345678'
    const noteText = 'my note'
    const indexes = []

    before(() => mongoose.connect(DB_URL))

    beforeEach(() => {
        let count = 10 + Math.floor(Math.random() * 10)
        indexes.length = 0
        while (count--) indexes.push(count)

        return Promise.all([User.remove()/*, Note.deleteMany()*/])
    })

     false && describe('register user', () => {
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

     false && describe('authenticate user', () => {
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

     false && describe('retrieve user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {
                    return logic.retrieveUser(id)
                })
                .then(user => {
                    expect(user).to.exist

                    const { name, email, _id, password, notes } = user

                    expect(name).to.equal('John')
                    expect(email).to.equal('jd@mail.com')

                    expect(_id).to.be.undefined
                    expect(password).to.be.undefined
                    expect(notes).to.be.undefined
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

     false && describe('udpate user', () => {
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

     false && describe('unregister user', () => {
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

    false && describe('add friend', () => {
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


     false && describe('remove friend', () => {
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
                        .then(({id}) => {
                            
                            return logic.removeFriend(id,users[1].id)                            

                        }).then(friends => {
                            expect(friends).to.exist
                            expect(friends.length).to.equals(1)
                            expect(friends[0].toString()).to.equals(users[2].id)

                        })
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
                    .then(({ friends}) => {
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




     false && describe('add lover', () => {
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


    false && describe('remove love', () => {
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
                        .then(({id}) => {
                            
                            return logic.removeLove(id,users[1].id)                            

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
                    .then(({ loves}) => {
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
            logic.createPark('central park', dummyUserId, "New York", "08013", "789098776-099762121",dummyUserId)
                .then(res => expect(res).to.be.true)
        )

    })


    //  false && describe('list loves', () => {
    //     it('should succeed on correct data', () => {
    //         let users = [];

    //         users.push(new User({ name: 'John', email: 'johndoe@mail.com', password: '123', race: "pug", gender: "male", description: "a dog", photoProfile: "/image", birthdateUser }).save())
    //         users.push(new User({ name: 'pepe', email: 'pepe@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())
    //         users.push(new User({ name: 'toby', email: 'toby@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())
    //         users.push(new User({ name: 'bob', email: 'bob@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdateUser }).save())


    //         return Promise.all(users).then()
    //             .then((users) => {
         
    //                         users[0].friends.push(users[1].id)
    //                         users[0].friends.push(users[2].id)
    //                         users[0].friends.push(users[3].id)

    //                         return users[0].save()
    //                             .then(({ id }) => {

    //                                 return logic.listFriends(id)

    //                             }).then(friends => {
    //                                 expect(friends).to.exist
    //                                 expect(friends.length).to.equals(1)
    //                                 expect(friends[0].toString()).to.equals(users[2].id)

    //                             })
    //                     })
    //             })
    //     })



       //  false && describe('list notes', () => {
    //     it('should succeed on correct data', () => {
    //         const user = new User(userData)

    //         const notes = indexes.map(index => new Note({ text: `${noteText} ${index}` }))

    //         user.notes = notes

    //         return user.save()
    //             .then(({ id: userId, notes }) => {
    //                 // const validNoteIds = []
    //                 // const validNoteTexts = []

    //                 // notes.forEach(({ id, text }) => {
    //                 //     validNoteIds.push(id)
    //                 //     validNoteTexts.push(text)
    //                 // })
    //                 // or
    //                 const validNoteIds = _.map(notes, 'id')
    //                 const validNoteTexts = _.map(notes, 'text')

    //                 return logic.listNotes(userId)
    //                     .then(notes => {
    //                         expect(notes).to.exist
    //                         expect(notes.length).to.equal(indexes.length)

    //                         notes.forEach(({ id, text, _id }) => {
    //                             // expect(validNoteIds.includes(id)).to.be.true
    //                             // expect(validNoteTexts.includes(text)).to.be.true
    //                             // or
    //                             expect(validNoteIds).to.include(id)
    //                             expect(validNoteTexts).to.include(text)
    //                             expect(_id).not.to.exist
    //                         })
    //                     })
    //             })
    //     })

    //     it('should fail on non user id', () =>
    //         logic.listNotes()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         logic.listNotes('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         logic.listNotes('      ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )
    // })



    //  false && describe('retrieve note', () => {
    //     it('should succeed on correct data', () => {
    //         const user = new User(userData)
    //         const note = new Note({ text: noteText })

    //         user.notes.push(note)

    //         return user.save()
    //             .then(({ id: userId, notes: [{ id: noteId }] }) => {
    //                 return logic.retrieveNote(userId, noteId)
    //             })
    //             .then(({ id, text, _id }) => {
    //                 expect(id).to.equal(note.id)
    //                 expect(text).to.equal(note.text)
    //                 expect(_id).not.to.exist
    //             })
    //     })

    //     it('should fail on non user id', () =>
    //         logic.retrieveNote()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         logic.retrieveNote('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         logic.retrieveNote('      ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on wrong user id', () => {
    //         const user = new User(userData)
    //         const note = new Note({ text: noteText })

    //         user.notes.push(note)

    //         return user.save()
    //             .then(({ notes: [{ id: noteId }] }) => {
    //                 return logic.retrieveNote(dummyUserId, noteId)
    //                     .catch(({ message }) => expect(message).to.equal(`no user found with id ${dummyUserId}`))
    //             })
    //     })

    //     it('should fail on no note id', () =>
    //         logic.retrieveNote(dummyUserId)
    //             .catch(({ message }) => expect(message).to.equal('note id is not a string'))
    //     )

    //     it('should fail on empty note id', () =>
    //         logic.retrieveNote(dummyUserId, '')
    //             .catch(({ message }) => expect(message).to.equal('note id is empty or blank'))
    //     )

    //     it('should fail on blank note id', () =>
    //         logic.retrieveNote(dummyUserId, '       ')
    //             .catch(({ message }) => expect(message).to.equal('note id is empty or blank'))
    //     )

    //     it('should fail on wrong note id', () => {
    //         const user = new User(userData)
    //         const note = new Note({ text: noteText })

    //         user.notes.push(note)

    //         return user.save()
    //             .then(({ id: userId }) => {
    //                 return logic.retrieveNote(userId, dummyNoteId)
    //                     .catch(({ message }) => expect(message).to.equal(`no note found with id ${dummyNoteId}`))
    //             })
    //     })
    // })

    //  false && describe('list notes', () => {
    //     it('should succeed on correct data', () => {
    //         const user = new User(userData)

    //         const notes = indexes.map(index => new Note({ text: `${noteText} ${index}` }))

    //         user.notes = notes

    //         return user.save()
    //             .then(({ id: userId, notes }) => {
    //                 // const validNoteIds = []
    //                 // const validNoteTexts = []

    //                 // notes.forEach(({ id, text }) => {
    //                 //     validNoteIds.push(id)
    //                 //     validNoteTexts.push(text)
    //                 // })
    //                 // or
    //                 const validNoteIds = _.map(notes, 'id')
    //                 const validNoteTexts = _.map(notes, 'text')

    //                 return logic.listNotes(userId)
    //                     .then(notes => {
    //                         expect(notes).to.exist
    //                         expect(notes.length).to.equal(indexes.length)

    //                         notes.forEach(({ id, text, _id }) => {
    //                             // expect(validNoteIds.includes(id)).to.be.true
    //                             // expect(validNoteTexts.includes(text)).to.be.true
    //                             // or
    //                             expect(validNoteIds).to.include(id)
    //                             expect(validNoteTexts).to.include(text)
    //                             expect(_id).not.to.exist
    //                         })
    //                     })
    //             })
    //     })

    //     it('should fail on non user id', () =>
    //         logic.listNotes()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         logic.listNotes('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         logic.listNotes('      ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )
    // })

    //  false && describe('update note', () => {
    //     it('should succeed on correct data', () =>
    //         User.create(userData)
    //             .then(({ id: userId }) =>
    //                 User.findByIdAndUpdate(userId, { $push: { notes: { text: noteText } } }, { new: true })
    //                     .then(user => {
    //                         const noteId = user.notes[user.notes.length - 1].id

    //                         const newNoteText = `${noteText} 2`

    //                         return logic.updateNote(userId, noteId, newNoteText)
    //                             .then(res => {
    //                                 expect(res).to.be.true

    //                                 return User.findById(userId)
    //                             })
    //                             .then(({ notes }) => {
    //                                 const [{ id, text }] = notes

    //                                 expect(id).to.equal(noteId)
    //                                 expect(text).to.equal(newNoteText)
    //                             })
    //                     })
    //             )
    //     )

    //     it('should fail on non user id', () =>
    //         logic.updateNote()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         logic.updateNote('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         logic.updateNote('      ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on wrong user id', () => {
    //         const user = new User(userData)
    //         const note = new Note({ text: noteText })

    //         user.notes.push(note)

    //         return user.save()
    //             .then(({ notes: [{ id: noteId }] }) => {
    //                 return logic.updateNote(dummyUserId, noteId, `${noteText} 2`)
    //                     .catch(({ message }) => expect(message).to.equal(`no user found with id ${dummyUserId}`))
    //             })
    //     })

    //     it('should fail on wrong note id', () => {
    //         const user = new User(userData)
    //         const note = new Note({ text: noteText })

    //         user.notes.push(note)

    //         return user.save()
    //             .then(({ id: userId }) => {
    //                 return logic.updateNote(userId, dummyNoteId, `${noteText} 2`)
    //                     .catch(({ message }) => expect(message).to.equal(`no note found with id ${dummyNoteId}`))
    //             })
    //     })
    // })

    //  false && describe('remove note', () => {
    //     it('should succeed on correct data', () => {
    //         const user = new User(userData)
    //         const note = new Note({ text: noteText })

    //         user.notes.push(note)

    //         return user.save()
    //             .then(({ id: userId, notes: [{ id: noteId }] }) => {
    //                 return logic.removeNote(userId, noteId)
    //                     .then(res => {
    //                         expect(res).to.be.true

    //                         return User.findById(userId)
    //                     })
    //                     .then(({ notes }) => {
    //                         expect(notes).to.exist
    //                         expect(notes.length).to.equal(0)
    //                     })
    //             })
    //     })

    //     it('should fail on non user id', () =>
    //         logic.removeNote()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         logic.removeNote('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         logic.removeNote('      ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on wrong user id', () => {
    //         const user = new User(userData)
    //         const note = new Note({ text: noteText })

    //         user.notes.push(note)

    //         return user.save()
    //             .then(({ notes: [{ id: noteId }] }) => {
    //                 return logic.removeNote(dummyUserId, noteId)
    //                     .catch(({ message }) => expect(message).to.equal(`no user found with id ${dummyUserId}`))
    //             })
    //     })

    //     it('should fail on no note id', () =>
    //         logic.removeNote(dummyUserId)
    //             .catch(({ message }) => expect(message).to.equal('note id is not a string'))
    //     )

    //     it('should fail on empty note id', () =>
    //         logic.removeNote(dummyUserId, '')
    //             .catch(({ message }) => expect(message).to.equal('note id is empty or blank'))
    //     )

    //     it('should fail on blank note id', () =>
    //         logic.removeNote(dummyUserId, '       ')
    //             .catch(({ message }) => expect(message).to.equal('note id is empty or blank'))
    //     )

    //     it('should fail on wrong note id', () => {
    //         const user = new User(userData)
    //         const note = new Note({ text: noteText })

    //         user.notes.push(note)

    //         return user.save()
    //             .then(({ id: userId }) => {
    //                 return logic.removeNote(userId, dummyNoteId)
    //                     .catch(({ message }) => expect(message).to.equal(`no note found with id ${dummyNoteId}`))
    //             })
    //     })
    // })

    //  false && describe('find notes', () => {
    //     it('should succeed on correct data', () => {
    //         const user = new User(userData)

    //         user.notes.push(new Note({ text: `${noteText} a` }))
    //         user.notes.push(new Note({ text: `${noteText} ab` }))
    //         user.notes.push(new Note({ text: `${noteText} abc` }))
    //         user.notes.push(new Note({ text: `${noteText} bc` }))
    //         user.notes.push(new Note({ text: `${noteText} c` }))

    //         const text = 'ab'

    //         return user.save()
    //             .then(({ id: userId, notes }) => {
    //                 const matchingNotes = notes.filter(note => note.text.includes(text))

    //                 const validNoteIds = _.map(matchingNotes, 'id')
    //                 const validNoteTexts = _.map(matchingNotes, 'text')

    //                 return logic.findNotes(userId, text)
    //                     .then(notes => {
    //                         expect(notes).to.exist
    //                         expect(notes.length).to.equal(matchingNotes.length)

    //                         notes.forEach(({ id, text, _id }) => {
    //                             // expect(validNoteIds.includes(id)).to.be.true
    //                             // expect(validNoteTexts.includes(text)).to.be.true
    //                             // or
    //                             expect(validNoteIds).to.include(id)
    //                             expect(validNoteTexts).to.include(text)
    //                             expect(_id).not.to.exist
    //                         })
    //                     })
    //             })
    //     })

    //     it('should fail on non user id', () =>
    //         logic.findNotes()
    //             .catch(({ message }) => expect(message).to.equal('user id is not a string'))
    //     )

    //     it('should fail on empty user id', () =>
    //         logic.findNotes('')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on blank user id', () =>
    //         logic.findNotes('      ')
    //             .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
    //     )

    //     it('should fail on no text', () =>
    //         logic.findNotes(dummyUserId)
    //             .catch(({ message }) => expect(message).to.equal('text is not a string'))
    //     )

    //     it('should fail on empty text', () =>
    //         logic.findNotes(dummyUserId, '')
    //             .catch(({ message }) => expect(message).to.equal('text is empty'))
    //     )
    // })

    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})
