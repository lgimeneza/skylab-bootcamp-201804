const express = require('express')
const bodyParser = require('body-parser')
const logic = require('logic')


const router = express.Router()

const jsonBodyParser = bodyParser.json()

router.post('/users', jsonBodyParser, (req, res) => {
    const { body: { email,
        password,
        personalData,
        physicalData,
        professionalData,
        videobookLink,
        profilePicture
         } } = req
    
    
    

    logic.registerUser(email,
        password,
        personalData,
        physicalData,
        professionalData,
        videobookLink,
        profilePicture
        )
        .then(() => {
            res.status(201)
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.post('/auth', jsonBodyParser, (req, res) => {
    const { body: { email, password } } = req

    logic.authenticateUser(email, password)
        .then(id => {

            res.status(200)
            res.json({ status: 'OK', data: { id } })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.get('/users/:userId', (req, res) => {
    const { params: { userId } } = req

    return logic.retrieveUser(userId)
        .then(user => {
            res.status(200)
            res.json({ status: 'OK', data: user })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })

})

router.get('/home/:userId', (req, res) => {
    const { params: { userId } } = req

    return logic.retrieveUser(userId)
        .then(user => {
            const {personalData:{name,surname},profilePicture, _id}=user
            return logic.getUserAppliedProjectCastings(_id.toString())
                .then(projects=>{
                    let applications=[]
                    for (let i=0; i<projects.length;i++){
                        for (let j=0; j<projects[i].castings; j++){
                            let {title, publishedDate, endDate, description}= projects[i]
                            applications.push({title,publishedDate,endDate,description, casting: projects[i].castings[j]})
                        }
                    }
                    res.status(200)
                    res.json({ status: 'OK', data: {name,surname,profilePicture, applications} })
                })

            // res.status(200)
            // res.json({ status: 'OK', data: {name,surname,profilePicture,applications} })
            // 
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })

})


router.patch('/users/:userId', jsonBodyParser, (req, res) => {
    const { body: { email,
        password,
        newEmail,
        newPassword,
        personalData,
        physicalData,
        professionalData,
        videobookLink,
        profilePicture
     } } = req

    logic.updateUser(email,
        password,
        newEmail,
        newPassword,
        personalData,
        physicalData,
        professionalData,
        videobookLink,
        profilePicture
    )
        .then(() => {
            res.status(200)
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.delete('/users/:userId', jsonBodyParser, (req, res) => {
    const { params: { userId }, body: { email, password } } = req

    logic.unregisterUser(userId, email, password)
        .then(() => {
            res.status(200)
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.get('/users/:userId/applications', (req, res) => {
    const { params: { userId } } = req

    logic.getUserAppliedProjectCastings(userId)
        .then(applications => {
            res.json({ status: 'OK', data: applications })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.get('/projects', (req, res) => {
    
    logic.listProjects()
        .then(projects => {
            res.json({ status: 'OK', data: projects })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })

})

// router.delete('/users/:userId/notes/:id', jwtValidator, (req, res) => {
//     const { params: { userId, id } } = req

//     logic.removeNote(userId, id)
//         .then(() => {
//             res.json({ status: 'OK' })
//         })
//         .catch(({ message }) => {
//             res.status(400)
//             res.json({ status: 'KO', error: message })
//         })
// })

// router.patch('/users/:userId/notes/:id', [jwtValidator, jsonBodyParser], (req, res) => {
//     const { params: { userId, id }, body: { text } } = req

//     logic.updateNote(userId, id, text)
//         .then(() => {
//             res.json({ status: 'OK' })
//         })
//         .catch(({ message }) => {
//             res.status(400)
//             res.json({ status: 'KO', error: message })
//         })
// })

module.exports = router