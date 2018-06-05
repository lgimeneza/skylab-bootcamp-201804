'use strict'

require('dotenv').config()

const { mongoose, models: { User, Demand, Casting, ProfessionalData, PersonalData, PhysicalData } } = require('../')
const castings = require("./castingGenerator")
const expect = require('expect')

const { env: { DB_URL } } = process

describe('models ', () => {
    before(() => mongoose.connect(DB_URL))

    beforeEach(() => Promise.all([User.remove(), Casting.deleteMany()]))

    describe('create user', () => {
        it('should succeed', () => {
            const castingList = castings

            const user = new User({ 
                email: 'aperacaula@gmail.com',
                password: '12345',
                personalData: new PersonalData({

                    name: 'Alex',
                    surname: 'Peracaula',
                    birthDate: new Date('10/07/1993'),
                    sex: 'male',
                    twins: true,
                    province: 'Barcelona',
                    phone: 630075725

                }),
            
                physicalData: new PhysicalData({

                    height: 1.77,
                    weight: 67,
                    physicalCondition: 'fit',
                    eyes: 'green',
                    hair: 'buzzed',
                    ethnicity: 'caucasian',
                    beard: true,
                    tattoos: true,
                    piercings: false

                }),
            
                professionalData: new ProfessionalData({

                    profession: 'actor/actress',
                    singing: true,
                    dancing: true,
                    otherHabilities: 'surfing',
                    previousJobExperiences: 20,
                    curriculum: ['The Importance of Being Earnest, TNC','Hello World, E.G.Wells']

                }),
            
                videobookLink: 'https://youtube.com',
            
                pics: [],
            })

            user.castings.push(castingList[0].demanding[0].id)
            user.castings.push(castingList[0].demanding[1].id)

            return user.save()
                .then(user => {
                    expect(user).toBeDefined()
                    expect(user.email).toBe('aperacaula@gmail.com')
                    expect(user.personalData.surname).toBe('Peracaula')
                    expect(user.professionalData.profession).toBe('actor/actress')
                    expect(user.password).toBe('12345')
                    expect(castingList[0].title).toBe('Bonded')
                    expect(castingList[1].province).toBe('Barcelona')
                    expect(castingList[2].demanding[0].title).toBe('Female')
                    expect(castingList[0].demanding[0].status).toBe(true)
                })
        })
    })

    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})
