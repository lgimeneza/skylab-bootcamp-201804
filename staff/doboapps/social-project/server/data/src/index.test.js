'use strict'

require('dotenv').config()

const { mongoose, models: { User, Note, Image, Park } } = require('../')
const expect = require('expect')

const { env: { DB_URL } } = process

describe('models (user,park)', () => {
    before(() => mongoose.connect(DB_URL))

    beforeEach(() => Promise.all([User.remove(), Note.deleteMany()]))

    describe('create user', () => {


        it('should succeed', () => {
            let users = [];

            users.push(new User({ name: 'John', email: 'johndoe@mail.com', password: '123', race: "pug", gender: "male", description: "a dog", photoProfile: "/image", birthdate: new Date() }).save())
            users.push(new User({ name: 'pepe', email: 'pepe@mail.com', password: '123', race: "pug", gender: "female", description: "a dog", photoProfile: "/image", birthdate: new Date() }).save())
            users.push(new User({ name: 'toby', email: 'toby@mail.com', password: '123', race: "pug", gender: "male", description: "a dog", photoProfile: "/image", birthdate: new Date() }).save())

            Promise.all(users).then()
                .then((users) => {
                    const birthdate = new Date();
                    const image = new Image({ route: '/my/route', description: "my description", })
                    const user = new User({ name: 'curro', email: 'curro@mail.com', password: '123', race: "pug", gender: "male", description: "a dog", photoProfile: "/image", birthdate })

                    user.images.push(image)
                    user.images.push(image)
                    user.friends.push(users[0].id)
                    user.friends.push(users[1].id)
                    user.loves.push(users[1].id)
                    user.loves.push(users[2].id)

                    return user.save()
                        .then(user => {
                            expect(user).toBeDefined()
                            expect(user.name).toBe('curro')
                            expect(user.email).toBe('curro@mail.com')
                            expect(user.password).toBe('123')
                            expect(user.race).toBe('pug')
                            expect(user.gender).toBe('male')
                            expect(user.description).toBe('a dog')
                            expect(user.photoProfile).toBe('/image')
                            expect(user.birthdate).toBe(birthdate)
                            expect(user.friends.length).toBe(2)
                            expect(user.loves.length).toBe(2)
                            expect(user.images.length).toBe(2)
                            expect(user.images[0].route).toBe('/my/route')
                        })

                })

        })
    })

    describe('create park', () => {
        it('should succeed', () => {

            const user = new User({ name: 'John', surname: 'Doe', email: 'johndoe@mail.com', password: '123' })


            return user.save()
                .then((user) => {

                    const park = new Park({ name: 'park', city: 'Toledo', zip: '09123', location: "9887788009-3342" })
                    park.users.push(user.id)
                    
                    return park.save()

                }).then(park => {

                    expect(park).toBeDefined()
                    expect(park.name).toBe('park')
                    expect(park.city).toBe('Toledo')
                    expect(park.zip).toBe('09123')
                    expect(park.users.length).toBe(1)
                    expect(park.users[0].toString()).toBe(user.id)

                })
        })

    })

    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})
