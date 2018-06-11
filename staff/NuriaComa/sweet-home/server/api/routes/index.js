const express = require('express')
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()
const logic = require('logic')
const jwt = require('jsonwebtoken')
const jwtValidation = require('./utils/jwt-validation')

const { env: { TOKEN_SECRET, TOKEN_EXP } } = process

const jwtValidator = jwtValidation(TOKEN_SECRET)

const router = express.Router()

router.post('/registeruser/:apartmentId', jsonBodyParser, (req,res) =>{

    const { params: { apartmentId }, body: { name, surname, phone, dni, password } } = req
    
    return logic.registerUser(name, surname, phone, dni, password, apartmentId)
    .then(()=>{
        res.status(201)
        res.json({status:'OK'})
    })
    .catch(({message})=>{
        res.status(400)
        res.json({status:'KO', error: message})
    })
})

router.post('/auth', jsonBodyParser, (req, res) => {

    const { body: { dni, password } } = req

    logic.authenticateUser(dni, password)
        .then(user=> {
            
            const userId = user.id;
            const apartmentId = user.apartmentId;
            const token = jwt.sign({ id: userId, apartmentId }, TOKEN_SECRET, { expiresIn: TOKEN_EXP })

            res.status(200)
            res.json({ status: 'OK', data: { user, token  } })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})
router.get('/users/:userId',jwtValidator, (req, res) => {
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
    const { params: { userId }, body: { name, surname, phone, dni, password, newPassword } } = req

    logic.updateUser(userId, name, surname, phone, dni, password, newPassword)
        .then(() => {
            res.status(200)
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})
router.get('/list/:apartmentId',jwtValidator, (req, res) => {
    const{ params: {apartmentId} } =req
    
    return logic.listUsers(apartmentId)
        .then(users => {
            res.status(200)
            res.json({ status: 'OK', data: users })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })

})
router.delete('/users/:userId', [jwtValidator, jsonBodyParser], (req, res) => {
    const { params: { userId }, body: { dni, password } } = req

    logic.unregisterUser(userId, dni, password)
        .then(() => {
            res.status(200)
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.post('/register', jsonBodyParser, (req,res) =>{

    const { body: { name, address, phone } } = req

    return logic.registerApartment(name, address, phone)
    .then(apartId=>{
        
        res.status(201)
        res.json({status:'OK', data: apartId})
    })
    .catch(({message})=>{
        res.status(400)
        res.json({status:'KO', error: message})
    })
})

router.get('/listapartment/:apartmentId', jwtValidator, (req, res) => {
    const{ params: {apartmentId} } =req
    console.log('api-server-apartmentId', apartmentId)
    return logic.listApartment(apartmentId)
        .then(apartments => {
            console.log('api-server-apartment', apartments)
            res.status(200)
            res.json({ status: 'OK', data: apartments })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

module.exports = router