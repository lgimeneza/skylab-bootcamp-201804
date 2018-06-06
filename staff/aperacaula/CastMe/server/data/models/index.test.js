'use strict'

require('dotenv').config()

const { mongoose, models: { User, Casting, Project, ProfessionalData, PersonalData, PhysicalData } } = require('../')
const projects = require("./projects-generator")
const expect = require('expect')

const { env: { DB_URL } } = process

describe('models ', () => {
    before(() => mongoose.connect(DB_URL))

    beforeEach(() => Promise.all([User.remove(), Project.deleteMany()]))

    describe('create user', () => {
        it('should succeed', () => {
            const projectList = projects

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
                    curriculum: ['The Importance of Being Earnest, TNC', 'Hello World, E.G.Wells']

                }),

                videobookLink: 'https://youtube.com',

                pics: [],
            })

            user.castings.push({
                project: projectList[0]._id,
                castings: [
                    projectList[0].castings[0]._id,
                    projectList[0].castings[1]._id
                ]
            })

            return user.save()
                .then(user => {
                    expect(user).toBeDefined()
                    expect(user.email).toBe('aperacaula@gmail.com')
                    expect(user.personalData.surname).toBe('Peracaula')
                    expect(user.professionalData.profession).toBe('actor/actress')
                    expect(user.password).toBe('12345')

                    expect(user.castings).toBeDefined()
                    expect(user.castings.length).toBe(1)

                    const { castings: [casting] } = user

                    expect(casting.project.toString()).toBe(projectList[0]._id.toString())

                    expect(casting.castings).toBeDefined()
                    expect(casting.castings.length).toBe(2)

                    const { castings: [casting1, casting2] } = casting

                    expect(casting1.toString()).toBe(projectList[0].castings[0]._id.toString())
                    expect(casting2.toString()).toBe(projectList[0].castings[1]._id.toString())
                })
        })
    })

    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})
