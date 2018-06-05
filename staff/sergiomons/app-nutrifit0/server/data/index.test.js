'use strict'

require('dotenv').config()

const { mongoose, models: { User, Order, Product, Category } } = require('.')
const { expect } = require('chai')

const { env: { DB_URL } } = process

describe('models nutrifit', () => {
    let sergioData, johnData, packCategoryData, proteinCategoryData, veganCategoryData, packSCategoryData, packMCategoryData, packLCategoryData, packXLCategoryData

    before(() => mongoose.connect(DB_URL))

    beforeEach(() => {
        sergioData = { name: 'Sergio', surname: 'M', username: 'sergi', email: 'ser@email.com', password: '123', repeatPassword: '123', address: 'Calle V', phone: 123456789, points: 4 }
        johnData = { name: 'John', surname: 'W', username: 'jwaine', email: 'jw@email.com', password: '123', repeatPassword: '123', address: 'Calle J', phone: 987654321, points: 5 }

        packCategoryData = { name: 'Pack' }
        proteinCategoryData = { name: 'Protein' }
        veganCategoryData = { name: 'Vegan' }
        packSCategoryData = { name: 'Pack S' }
        packMCategoryData = { name: 'Pack M' }
        packLCategoryData = { name: 'Pack L' }
        packXLCategoryData = { name: 'Pack XL' }

        return Promise.all([User.remove(), Product.deleteMany(), Category.deleteMany()])
    })

    describe('create user', () => {
        it('should succeed on correct data', () => {
            const user = new User(sergioData)

            return user.save()
                .then(user => {
                    expect(user).to.exist
                    expect(user._id).to.exist
                    expect(user.name).to.equal(sergioData.name)
                    expect(user.surname).to.equal(sergioData.surname)
                    expect(user.phone).to.equal(sergioData.phone)
                    expect(user.email).to.equal(sergioData.email)
                    expect(user.username).to.equal(sergioData.username)
                    expect(user.password).to.equal(sergioData.password)
                    // TODO check all mandatory fields (more expects)
                })
        })
    })

    describe('create category hierarchy', () => {
        it('should succeed on correct data', () =>
            Promise.all([
                new Category(packCategoryData).save(),
                new Category(packSCategoryData).save(),
                new Category(packMCategoryData).save(),
                new Category(packLCategoryData).save(),
                new Category(packXLCategoryData).save()
            ])
                .then(([packCategory, packSCategory, packMCategory, packLCategory, packXLCategory]) => {
                    packSCategory.parentId = packCategory._id
                    packMCategory.parentId = packCategory._id
                    packLCategory.parentId = packCategory._id
                    packXLCategory.parentId = packCategory._id

                    return Promise.all([
                        packSCategory.save(),
                        packMCategory.save(),
                        packLCategory.save(),
                        packXLCategory.save()
                    ])
                        .then(([packSCategory, packMCategory, packLCategory, packXLCategory]) => {
                            expect(packSCategory.name).to.equal(packSCategoryData.name)
                            expect(packSCategory.parentId.toString()).to.equal(packCategory._id.toString())

                            expect(packMCategory.name).to.equal(packMCategoryData.name)
                            expect(packMCategory.parentId.toString()).to.equal(packCategory._id.toString())

                            expect(packLCategory.name).to.equal(packLCategoryData.name)
                            expect(packLCategory.parentId.toString()).to.equal(packCategory._id.toString())

                            expect(packXLCategory.name).to.equal(packXLCategoryData.name)
                            expect(packXLCategory.parentId.toString()).to.equal(packCategory._id.toString())
                        })
                })
        )
    })

    describe('list products by category (linked directly to the category, or indirectly through sub-categories)', () => {
        // TODO
    })

    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})