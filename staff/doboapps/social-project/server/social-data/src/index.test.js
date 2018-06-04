'use strict'

require('dotenv').config()

const { mongoose, models: { User, Note, Image, Park } } = require('../')
const expect = require('expect')

const { env: { DB_URL } } = process

describe('models (user)', () => {
    before(() => mongoose.connect(DB_URL))

    beforeEach(() => Promise.all([User.remove(), Note.deleteMany()]))

    describe('create user', () => {
        it('should succeed when add note', () => {
            const note = new Note({ text: 'my note' })

            const user = new User({ name: 'John', surname: 'Doe', email: 'johndoe@mail.com', password: '123' })

            user.notes.push(note)

            return user.save()
                .then(user => {
                    expect(user).toBeDefined()
                    expect(user.name).toBe('John')
                    expect(user.surname).toBe('Doe')
                    expect(user.email).toBe('johndoe@mail.com')
                    expect(user.password).toBe('123')
                })
        })

        it('should succeed when add image', () => {
            const image = new Image({ route: '/my/route',description:"my description", })

            const user = new User({ name: 'John', surname: 'Doe', email: 'johndoe@mail.com', password: '123' })

            user.images.push(image)
            user.images.push(image)

            return user.save()
                .then(user => {
                    expect(user).toBeDefined()
                    expect(user.name).toBe('John')
                    expect(user.surname).toBe('Doe')
                    expect(user.email).toBe('johndoe@mail.com')
                    expect(user.password).toBe('123')
                    expect(user.images.length).toBe(2)
                    expect(user.images[0].route).toBe('/my/route')

                })
        })
    })

    describe('create park', () => {
        it('should succeed', () => {

            const user = new User({ name: 'John', surname: 'Doe', email: 'johndoe@mail.com', password: '123' })


            return user.save()
                .then((user) => {

                    const park = new Park({ name: 'park', city: 'Toledo', zip: '09123',location:"9887788009-3342" })
                    park.users.push(user.id)
                    return park.save()
                }).then(park=>{

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
