'use strict'

require('dotenv').config()

const { mongoose, models: { User, Category, Product, Order } } = require('data')
const logic = require('.')
const { expect } = require('chai')

const { env: { DB_URL } } = process

describe('logic (singing-lab)', () => {
    let jackData, annaData, beginnerCourseCategoryData, advancedCourseCategoryData, beginnerCourseData, advancedCourseData

    before(() => mongoose.connect(DB_URL))

    beforeEach(() => {
        jackData = { name: 'Jack', surname: 'Johnson', phone: '+34 933 666 777', address: 'Roc Boronat 35', email: 'jj@mail.com', password: '123' }
        annaData = { name: 'Anna', surname: 'Kennedy', phone: '+34 933 666 778', address: 'Llull 69', email: 'ak@mail.com', password: '456' }
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
