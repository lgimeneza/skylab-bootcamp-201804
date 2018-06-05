const express = require('express')
const bodyParser = require('body-parser')
const logic = require('logic')
const jwt = require('jsonwebtoken')
const jwtValidation = require('./utils/jwt-validation')

const router = express.Router()

const { env: { TOKEN_SECRET, TOKEN_EXP } } = process

const jwtValidator = jwtValidation(TOKEN_SECRET)

const jsonBodyParser = bodyParser.json()

router.post('/users', jsonBodyParser, (req, res) => {
    const { body: { name, email, password } } = req

    logic.registerUser(name, email, password)
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
            const token = jwt.sign({ id }, TOKEN_SECRET, { expiresIn: TOKEN_EXP })

            res.status(200)
            res.json({ status: 'OK', data: { id, token } })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.get('/users/:userId', jwtValidator, (req, res) => {
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

router.patch('/users/:userId', [jwtValidator, jsonBodyParser], (req, res) => {
    const { params: { userId }, body: { name, surname, email, password, newEmail, newPassword } } = req

    logic.updateUser(userId, name, email, password, newEmail, newPassword, race, gender, description, photoProfile, birthdate)
        .then(() => {
            res.status(200)
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.delete('/users/:userId', [jwtValidator, jsonBodyParser], (req, res) => {
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


router.post('/users/:userId/friends', [jwtValidator, jsonBodyParser], (req, res) => {
    const { params: { userId }, body: { friendId } } = req

    logic.addFriend(userId, friendId)
        .then(friends => {
            res.status(201)
            res.json({ status: 'OK', data: { friends } })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})


router.post('/users/:userId/loves', [jwtValidator, jsonBodyParser], (req, res) => {
    const { params: { userId }, body: { loveId } } = req

    logic.addFriend(userId, loveId)
        .then(loves => {
            res.status(201)
            res.json({ status: 'OK', data: { loves } })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})


router.delete('/users/:userId/friends/:id', jwtValidator, (req, res) => {
    const { params: { userId, friendId } } = req

    logic.removeFriend(userId, friendId)
        (friends => {
            res.status(201)
            res.json({ status: 'OK', data: { friends } })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})


router.delete('/users/:userId/loves/:id', jwtValidator, (req, res) => {
    const { params: { userId, lovesId } } = req

    logic.removeLove(userId, lovesId)
        (loves => {
            res.status(201)
            res.json({ status: 'OK', data: { loves } })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})


router.post('/parks', jsonBodyParser, (req, res) => {
    const { body: { name, creator, city, zip, location } } = req

    logic.createPark(name, creator, city, zip, location)
        .then(() => {
            res.status(201)
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})


router.get('/parks/:idPark', jwtValidator, (req, res) => {
    const { params: { idPark } } = req

    return logic.retriveParks(idPark)
        .then(park => {
            res.status(200)
            res.json({ status: 'OK', park })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })

})


router.delete('/parks/:idPark', [jwtValidator, jsonBodyParser], (req, res) => {
    const { params: { idPark } } = req

    logic.removePark(idPark)
        .then(() => {
            res.status(200)
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

module.exports = router