const express = require('express')
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()
const logic = require('../../../logic/')


const router = express.Router()

router.post('/register', jsonBodyParser, (req,res) =>{

    const { body: { username, email, password, repeatPassword } } = req

    return logic.registerUser(username, email, password, repeatPassword)
    .then(()=>{
        res.status(201)
        res.json({status:'OK'})
    })
    .catch(({message})=>{
        res.status(400)
        res.json({status:'KO', error: message})
    })
})

module.exports = router