
const express = require('express')
const bodyParser = require('body-parser')
const Hangman = require('./src/logic')

let hangman = new Hangman('---');
const startingAttempts = hangman.attempts();
const app = express()

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug')


app.get('/', (req, res) => {
  const guessed = hangman.guessed()
  const attempts = hangman.attempts()
  const status = hangman.status()
  const attemptsDone = startingAttempts - hangman.attempts()

  res.render('index2.pug', { guessed, attempts, attemptsDone, status, Hangman})

})

app.post('/try-word', (req, res) => {
  const { body: { text } } = req
  hangman.try(text)

  res.redirect('/')

})

app.post('/guess', (req, res) => {
  const { body: { word } } = req
  hangman = new Hangman(word);

  res.redirect('/')

})

app.get('/new-game', (req, res) => {
  hangman = new Hangman('alba');
  res.redirect('/')

})

const port = process.argv[2] || 5000
app.listen(port, console.log(`server running on port ${ port }`))
process.on('SIGINT', () => {
  console.log('stopping server')
  process.exit()
})