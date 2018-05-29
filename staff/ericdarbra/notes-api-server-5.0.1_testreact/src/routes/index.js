const express = require('express')
const logic = require('../logic')

const router = express.Router()


router.post('/users', (req, res) => {
    const { body: { name, surname, email, password } } = req

    logic.registerUser(name, surname, email, password)
        .then(user => {
            res.status(200)
            res.json({ status: 'OK', data: user })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})
router.post('/users/authenticate', (req, res) => {
    const { body: { email, password } } = req
    logic.authenticateUser(email, password)
        .then(id => {
            res.json({ status: 'OK', data: { id } })
        })
        .then(({ message }) => res.json({ status: 'KO', error: message }))
})

router.get('/users/retrieveUser/:id', (req, res) => {
    const { params: { id } }
    logic.retrieveUser(id)
        .then(user => res.json({ status: 'KO', data: user }))
})

router.patch('/users/updateUser/:id', (req, res) => {
    const { params: { id }, body: { name, surname, email, password, newEmail, newPassword } } = req

    logic.updateUser(id, name, surname, email, password, newEmail, newPassword)
        .then(result => result.json({ status: 'OK', data: { result } }))
})

router.delete('/users/unregister/:id', (req,res) => {
    const {params: {id}, body:{email,password}} = req

    logic.unregisterUser(id, email, password)
        .then(res => res.json({status:'OK', message: `user with id ${id} has been deleted successfuly`}))
        .catch(({message}) => res.json({status:'KO', error: message}))
})

router.post('/users/:userId/notes', (req, res) => {
    const { params: { userId }, body: { text } } = req

    logic.addNote(userId, text)
        .then(id => {
            res.status(201)
            res.json({ status: 'OK', data: { id } })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.get('/users/:userId/notes/:id', (req, res) => {
    const { params: { userId, id } } = req

    logic.retrieveNote(userId, id)
        .then(note => {
            res.json({ status: 'OK', data: note })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.get('/users/:userId/notes', (req, res) => {
    const { params: { userId }, query: { q } } = req;

    (q ? logic.findNotes(userId, q) : logic.listNotes(userId))
        .then(notes => {
            res.json({ status: 'OK', data: notes })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })

})

router.delete('/users/:userId/notes/:id', (req, res) => {
    const { params: { userId, id } } = req

    logic.removeNote(userId, id)
        .then(() => {
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.patch('/users/:userId/notes/:id', (req, res) => {
    const { params: { userId, id }, body: { text } } = req

    logic.updateNote(userId, id, text)
        .then(() => {
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

module.exports = router