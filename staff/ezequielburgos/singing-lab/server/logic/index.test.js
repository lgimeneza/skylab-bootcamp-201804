'use strict'

require('dotenv').config()

const { mongoose, models: { User, Category, Product, Order } } = require('data')
const logic = require('.')
const { expect } = require('chai')

const { env: { DB_URL } } = process

describe('logic (singing-lab)', () => {
    let jackData, annaData, otherjackData, beginnerCourseCategoryData, advancedCourseCategoryData, beginnerCourseData, advancedCourseData
    const dummyUserId = '123456781234567812345678'
    const dummyNoteId = '123456781234567812345678'

    before(() => mongoose.connect(DB_URL))

    beforeEach(() => {
        jackData = { name: 'Jack', surname: 'Johnson', phone: '+34 933 666 777', address: 'Roc Boronat 35', email: 'jj@mail.com', password: '123' }
        annaData = { name: 'Anna', surname: 'Kennedy', phone: '+34 933 666 778', address: 'Llull 69', email: 'ak@mail.com', password: '456' }
        otherjackData = { name: 'Jack', surname: 'Doe', phone: '+34 933 665 778', address: 'Londres 32', email: 'jd@mail.com', password: '789' }
        beginnerCourseCategoryData = { name: 'Beginner Course', description: 'Beginner Course desc', image: 'http://images.com/230957' }
        advancedCourseCategoryData = { name: 'Advanced Course', description: 'Advanced Course desc', image: 'http://images.com/259827' }
        beginnerCourseData = { name: 'Beginner Course I', price: 50, discount: 15, description: 'Beginner Course I desc', image: 'http://images.com/5678', stock: 123 }
        advancedCourseData = { name: 'Advanced Course I', price: 100, discount: 20, description: 'Advanced Course I desc', image: 'http://images.com/1234', stock: 77 }

        return Promise.all([User.remove(), Category.deleteMany(), Product.deleteMany()])
    })

    describe('register user', () => {
        it('should succeed on correct data', () =>
            logic.registerUser('Jack', 'Wayne', 'somewhere road', 'jw@mail.com', '1234')
                .then(res => expect(res).to.be.true)
        )

        it('should fail on existing email', () => {
            User.create(jackData)
                .then(() => {
                    return logic.registerUser('John', 'Doe', 'Av Madrid', 'jd@mail.com', '789')
                        .catch(({ message }) => expect(message).to.equal(`user with email ${jackData.email} already exists`))
                })
        })
        it('should fail on no user name', () =>
            logic.registerUser()
                .catch(({ message }) => expect(message).to.equal('name is not a string'))
        )

        it('should fail on empty user name', () =>
            logic.registerUser('')
                .catch(({ message }) => expect(message).to.equal('name is empty or blank'))
        )

        it('should fail on blank user name', () =>
            logic.registerUser('     ')
                .catch(({ message }) => expect(message).to.equal('name is empty or blank'))
        )

        it('should fail on no user surname', () =>
            logic.registerUser(jackData.name)
                .catch(({ message }) => expect(message).to.equal('surname is not a string'))
        )

        it('should fail on empty user surname', () =>
            logic.registerUser(jackData.name, '')
                .catch(({ message }) => expect(message).to.equal('surname is empty or blank'))
        )

        it('should fail on blank user surname', () =>
            logic.registerUser(jackData.name, '     ')
                .catch(({ message }) => expect(message).to.equal('surname is empty or blank'))
        )

        it('should fail on no user address', () =>
            logic.registerUser(jackData.name, jackData.surname)
                .catch(({ message }) => expect(message).to.equal('address is not a string'))
        )

        it('should fail on empty user address', () =>
            logic.registerUser(jackData.name, jackData.surname, '')
                .catch(({ message }) => expect(message).to.equal('address is empty or blank'))
        )

        it('should fail on blank user address', () =>
            logic.registerUser(jackData.name, jackData.surname, '     ')
                .catch(({ message }) => expect(message).to.equal('address is empty or blank'))
        )

        it('should fail on no user email', () =>
            logic.registerUser(jackData.name, jackData.surname, jackData.address)
                .catch(({ message }) => expect(message).to.equal('email is not a string'))
        )

        it('should fail on empty user email', () =>
            logic.registerUser(jackData.name, jackData.surname, jackData.address, '')
                .catch(({ message }) => expect(message).to.equal('email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            logic.registerUser(jackData.name, jackData.surname, jackData.address, '     ')
                .catch(({ message }) => expect(message).to.equal('email is empty or blank'))
        )

        it('should fail on no user password', () =>
            logic.registerUser(jackData.name, jackData.surname, jackData.address, jackData.email)
                .catch(({ message }) => expect(message).to.equal('password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.registerUser(jackData.name, jackData.surname, jackData.address, jackData.email, '')
                .catch(({ message }) => expect(message).to.equal('password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.registerUser(jackData.name, jackData.surname, jackData.address, jackData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('password is empty or blank'))
        )
    })

    describe('authenticate user', () => {
        it('should succeed on correct data', () =>
            User.create(jackData)
                .then(() =>
                    logic.authenticateUser('jj@mail.com', '123')
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
            logic.authenticateUser(jackData.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.authenticateUser(jackData.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.authenticateUser(jackData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })

    describe('retrieve user', () => {
        it('should succeed on correct data', () =>
            User.create(jackData)
                .then(({ id }) => {
                    return logic.retrieveUser(id)
                })
                .then(user => {

                    expect(user).to.exist
                    
                    const { name, surname, address, email, _id, password } = user

                    expect(name).to.equal('Jack')
                    expect(surname).to.equal('Johnson')
                    expect(address).to.equal('Roc Boronat 35')
                    expect(email).to.equal('jj@mail.com')

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
            User.create(jackData)
                .then(({ id }) => {
                    return logic.updateUser(id, 'Jack', 'Wayne','+34 111 222 333', 'Roc Boronat 36' ,'jj@mail.com', '123', 'jw@mail.com', '456')
                        .then(res => {
                            expect(res).to.be.true

                            return User.findById(id)
                        })
                        .then(user => {
                            expect(user).to.exist

                            const { name, surname, phone, address, email, password } = user

                            expect(user.id).to.equal(id)
                            expect(name).to.equal('Jack')
                            expect(surname).to.equal('Wayne')
                            expect(phone).to.equal('+34 111 222 333')
                            expect(address).to.equal('Roc Boronat 36')
                            expect(email).to.equal('jw@mail.com')
                            expect(password).to.equal('456')
                        })
                })
        )

        it('should fail on changing email to an already existing user\'s email', () =>
            Promise.all([
                User.create(jackData),
                User.create(otherjackData)
            ])
                .then(([{ id: id1 }, { id: id2 }]) => {
                    const {name, surname, phone, address, email, password} = jackData

                    return logic.updateUser(id1, name, surname, phone, address, email, password, otherjackData.email)
                })
                .catch(({ message }) => expect(message).to.equal(`user with email ${otherjackData.email} already exists`))
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

        it('should fail on no user surname', () =>
            logic.updateUser(dummyUserId, jackData.name)
                .catch(({ message }) => expect(message).to.equal('user surname is not a string'))
        )

        it('should fail on empty user surname', () =>
            logic.updateUser(dummyUserId, jackData.name, '')
                .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
        )

        it('should fail on blank user surname', () =>
            logic.updateUser(dummyUserId, jackData.name, '     ')
                .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
        )

        it('should fail on no user phone', () =>
            logic.updateUser(dummyUserId, jackData.name, jackData.surname)
                .catch(({ message }) => expect(message).to.equal('user phone is not a string'))
        )

        it('should fail on empty user phone', () =>
            logic.updateUser(dummyUserId, jackData.name, jackData.surname, '')
                .catch(({ message }) => expect(message).to.equal('user phone is empty or blank'))
        )

        it('should fail on blank user phone', () =>
            logic.updateUser(dummyUserId, jackData.name, jackData.surname, '     ')
                .catch(({ message }) => expect(message).to.equal('user phone is empty or blank'))
        )
        it('should fail on no user address', () =>
            logic.updateUser(dummyUserId, jackData.name, jackData.surname, jackData.phone)
                .catch(({ message }) => expect(message).to.equal('user address is not a string'))
        )

        it('should fail on empty user address', () =>
            logic.updateUser(dummyUserId, jackData.name, jackData.surname, jackData.phone, '')
                .catch(({ message }) => expect(message).to.equal('user address is empty or blank'))
        )

        it('should fail on blank user address', () =>
            logic.updateUser(dummyUserId, jackData.name, jackData.surname, jackData.phone, '     ')
                .catch(({ message }) => expect(message).to.equal('user address is empty or blank'))
        )
        it('should fail on no user email', () =>
            logic.updateUser(dummyUserId, jackData.name, jackData.surname, jackData.phone, jackData.address)
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            logic.updateUser(dummyUserId, jackData.name, jackData.surname, jackData.phone, jackData.address, '')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            logic.updateUser(dummyUserId, jackData.name, jackData.surname, jackData.phone, jackData.address, '     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user password', () =>
            logic.updateUser(dummyUserId, jackData.name, jackData.surname, jackData.phone, jackData.address, jackData.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.updateUser(dummyUserId, jackData.name, jackData.surname, jackData.phone, jackData.address, jackData.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.updateUser(dummyUserId, jackData.name, jackData.surname, jackData.phone, jackData.address, jackData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })

    describe('unregister user', () => {
        it('should succeed on correct data', () =>
            User.create(jackData)
                .then(({ id }) => {
                    return logic.unregisterUser(id, 'jj@mail.com', '123')
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
            logic.unregisterUser(dummyUserId, jackData.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.unregisterUser(dummyUserId, jackData.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.unregisterUser(dummyUserId, jackData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })


    describe('list categories', () => {
        it('should succeed on correct data', () =>
            Promise.all([
                Category.create(beginnerCourseCategoryData),
                Category.create(advancedCourseCategoryData)
            ])
                .then(res => {
                    return logic.listCategories()
                        .then(category => {
                            expect(category[0]._id).to.exist
                            expect(category[0].name).to.equal(beginnerCourseCategoryData.name)

                            expect(category[1]._id).to.exist
                            expect(category[1].name).to.equal(advancedCourseCategoryData.name)
                        })
                })
        )


        it('should fail on non user id', () =>
            logic.listCategories()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            logic.listCategories('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.listCategories('      ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )
    })

    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})
