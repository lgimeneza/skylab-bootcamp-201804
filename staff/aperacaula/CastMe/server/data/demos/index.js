'use strict'

require('dotenv').config()

const { User, Project, Casting, PhysicalData, PersonalData,  } = require('../models')
const { mongoose } = require('../../data')

const { env: { DB_URL } } = process

mongoose.connect(DB_URL)
    .then(() => mongoose.connection.db.dropDatabase())
    .then(() => {
        //Project 1
        const pr1_1 = {
            height: null,
            weight: null,
            physicalCondition: 'fat/chubby',
            eyes: null,
            hair: null,
            ethnicity: 'latino/hispanic',
            beard: false,
    
            tattoos: false,
    
            piercings: null
        };
        const casting1_1 =
    
            {
                title: "Gordo(Lead)",
                minAge: 20,
                maxAge: 28,
                sex: 'male',
                description: 'Gordo is a chubby, pudgy, overweight kid who works in the sweatshop. Very funny and high energy.',
                physicalReq: pr1_1,
                status: true
    
            }
            ;
        const pr1_2 = {
            height: 1.80,
            weight: null,
            physicalCondition: 'thin/slim',
            eyes: null,
            hair: null,
            ethnicity: 'latino/hispanic',
            beard: false,
    
            tattoos: false,
    
            piercings: null
        };
        const casting1_2 = {
            title: "Carlito(Supporting)",
            minAge: 20,
            maxAge: 28,
            sex: 'male',
            description: 'Carlito is tall and skinny, very mean. He is the leader of the kids in the sweatshop',
            physicalReq: pr1_2,
            status: true
    
        }
    
        const casting1_3 = {
            title: "Pedrito(Supporting)",
            minAge: 30,
            maxAge: 38,
            sex: 'male',
            description: 'Pedrito is tall and skinny, very mean. He is the leader of the kids in the sweatshop',
            physicalReq: pr1_2,
            status: true
        }
        const project1 = {
            title: 'Bonded',
            publishedDate: (() => new Date())(),
            endDate: (() => {
                let date = new Date()
                date.setDate(date.getDate() + 20)
                return date
            })(),
            paid: true,
            professional: true,
            province: 'Albacete',
            description: 'Project "Bonded," a feature film based on true events about illegal sweat shops in Los Angeles.',
    
            castings: []
        }

        //Project 2
        const pr2_1 = {
            height: 1.70,
            weight: null,
            physicalCondition: 'fit',
            eyes: null,
            hair: "blond",
            ethnicity: null,
            beard: false,
            tattoos: false,
            piercings: null
        };
        const casting2_1 = {
            title: "Desiree",
            minAge: 20,
            maxAge: 30,
            sex: 'female',
            description: 'Desiree is the main character. She is a young mum who deals with anxiety and modern society problems, mainly induced by her responsibility as a mum.',
            physicalReq: pr2_1,
            status: true
    
        };

        const pr2_2 = {
            height: null,
            weight: null,
            physicalCondition: 'fat/chubby',
            eyes: "brown",
            hair: "brown",
            ethnicity: null,
            beard: false,
            tattoos: true,
            piercings: null
        };
        const casting2_2 = {
            title: "Tracy(Supporting)",
            minAge: 40,
            maxAge: 50,
            sex: 'female',
            description: 'Drug addict, widow of Ray’s former partner, Tracy despises Ray and feels he has no right to continue butting into her life. Her addiction has gotten to the point where she has lost all track of her young daughter, who has gone missing ',
            physicalReq: pr2_2,
            status: true
    
        }
        const project2 = {
            title: 'Crown Vic',
            publishedDate: (() => new Date())(),
            endDate: (() => {
                let date = new Date()
                date.setDate(date.getDate() + 20)
                return date
            })(),
            paid: true,
            professional: true,
            province: 'Barcelona',
            description: 'Project "Crown Vic," a SAG Low Budget feature produced by Alec Baldwin. Project personnel will hold a Buffalo, NY open call. No appointments necessary.',
    
            castings: []
        }
    
    
        //Project 3
    
        const pr3_1 = {
            height: 1.70,
            weight: null,
            physicalCondition: 'fit',
            eyes: "green",
            hair: "brown",
            ethnicity: 'caucasian',
            beard: false,
            tattoos: false,
            piercings: false
        };
        const casting3_1 = {
            title: "Female",
            minAge: 20,
            maxAge: 50,
            sex: 'female',
            description: 'must have similar measurements/hair & skin tone',
            physicalReq: pr3_1,
            status: true
    
        };
    
        const project3 = {
            title: 'Luxury Fragrance (Publicity)',
            publishedDate: (() => new Date())(),
            endDate: (() => {
                let date = new Date()
                date.setDate(date.getDate() + 20)
                return date
            })(),
            paid: true,
            professional: true,
            province: 'Madrid',
            description: 'Project stand-ins for male and female talent in a luxury fragrance TVC shoot. Applicants must have similar height/measurements and skin tone as described.',
    
            castings: []
        }


        return Promise.all([
            Project.create(project1),
            Project.create(project2),
            Project.create(project3)
        ])
            .then(([proj1, proj2, proj3]) => {

                return Promise.all([
                    Casting.create(casting1_1),
                    Casting.create(casting1_2),
                    Casting.create(casting1_3),
                    Casting.create(casting2_1),
                    Casting.create(casting2_2),
                    Casting.create(casting3_1)
                ])
                    .then(([cast11, cast12, cast13, cast21, cast22,
                        cast31]) => {
                        proj1.castings.push(cast11)
                        proj1.castings.push(cast12)
                        proj1.castings.push(cast13)
                        proj2.castings.push(cast21)
                        proj2.castings.push(cast22)
                        proj3.castings.push(cast31)
                        const userData = {
                            email: 'aperacaula@gmail.com',
                            password: '12345',
                            personalData: {
                    
                                name: 'Alex',
                                surname: 'Peracaula',
                                birthDate: new Date('10/07/1993'),
                                sex: 'male',
                                twins: true,
                                province: 'Barcelona',
                                phone: 630075725
                    
                            },
                    
                            physicalData: {
                    
                                height: 1.77,
                                weight: 67,
                                physicalCondition: 'fit',
                                eyes: 'green',
                                hair: 'buzzed',
                                ethnicity: 'caucasian',
                                beard: true,
                                tattoos: true,
                                piercings: false
                    
                            },
                    
                            professionalData: {
                    
                                profession: 'actor/actress',
                                singing: true,
                                dancing: true,
                                otherHabilities: 'surfing',
                                previousJobExperiences: 20,
                                
                    
                            },
                    
                            videobookLink: 'https://youtube.com',
                    
                            profilePicture: 'http://res.cloudinary.com/dt6qv2j4j/image/upload/v1528803579/uvcv0wzsqe9sjrabd9ca.jpg',
                    
                            applications: []
                        }
                    
                        const otherUserData = {
                            email: 'apr1993@hotmail.com',
                            password: '12345',
                            personalData: new PersonalData({
                    
                                name: 'Alexia',
                                surname: 'Peracaula',
                                birthDate: new Date('10/07/2000'),
                                sex: 'female',
                                twins: true,
                                province: 'Madrid',
                                phone: 630075726
                    
                            }),
                    
                            physicalData: {
                    
                                height: 1.60,
                                weight: 61,
                                physicalCondition: 'fit',
                                eyes: 'green',
                                hair: 'brown',
                                ethnicity: 'caucasian',
                                beard: false,
                                tattoos: false,
                                piercings: false
                    
                            },
                    
                            professionalData: {
                    
                                profession: 'actor/actress',
                                singing: false,
                                dancing: true,
                                otherHabilities: 'yoga',
                                previousJobExperiences: 10,
                                
                    
                            },
                    
                            videobookLink: 'https://youtube.com',
                    
                            profilePicture: 'http://res.cloudinary.com/dt6qv2j4j/image/upload/v1528803579/uvcv0wzsqe9sjrabd9ca.jpg',
                            applications: []
                        }
                        return Promise.all([proj1.save(),proj2.save(),proj3.save()])
                            .then(()=> Promise.all([User.create(userData),User.create(otherUserData)])
                                .then(([user1,user2])=>{
                                    user1.applications.push({project: proj1._id, castings: [cast13._id]})
                                    user1.applications.push({project: proj2._id, castings: [cast22._id]})
                                    return user1.save()
                                }))
                        
                    })
            })

    })
    .then(() => mongoose.disconnect())
    .then(() => console.log('done'))
    .catch(console.error)