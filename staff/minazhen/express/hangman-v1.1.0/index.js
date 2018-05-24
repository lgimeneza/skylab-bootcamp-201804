const express = require('express')
const bodyParser = require('body-parser')
const Hangman = require('./src/logic-es6')
const randomWord = require('./src/words')

const port = process.argv[2] || 3000

const app = express()
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false })) 
app.set('view engine', 'pug')

let hangman;
let error;

app.get('/', (req, res) => {
    hangman = undefined
    // res.send(renderfun(req))
    res.render('index', {error})
})

app.get('/game', (req, res) => {
    const {  query : { error } } = req
    if (hangman === undefined) hangman = new Hangman()

    let guessed = hangman.guessed().join("")
    let attempts = hangman.attempts()

    res.render('game', {error, hangman})
})


app.get('/two-players', (req, res) => {
    res.send(render2p(req))
})


app.post('/initial-word', (req, res) => {
    const { body: { word, attempts } } = req
    
    try {
        hangman = new Hangman(word.toUpperCase(), attempts)
    } catch ({ message }) {
        res.redirect(`/two-players?error=${message}`)
    }

    res.redirect('/game')
})

app.get('/initial-word', (req, res) => {
   
    try {
        hangman = new Hangman()
    } catch ({ message }) {
        res.redirect(`/two-players?error=${message}`)
    }

    res.redirect('/game')
})

app.post("/try", (req, res) => {
    const { body: { text } } = req

    // LET OP!!! tildes y mayusculas
    try {
        hangman.try(text)
    } catch ({ message }) {
        res.redirect(`/game?error=${message}`)
    }
    
    res.redirect('/game')
})

renderfun = (req) => {
    const { query: { error } } = req

    return (
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Hangman App</title>
            <link rel="stylesheet" href="vendor/bootstrap/4.1.0/css/bootstrap.min.css">
            <link rel="stylesheet" href="styles/main.css">
        </head>
            <body class="text-center">
                <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
                    <header class="masthead mb-auto">
                    <div class="inner">
                        <h1 class="masthead-brand display-3">Hangman</h1>
                    </div>
                    </header>
            
                    <main role="main" class="inner cover">
                    <p class="lead">This is a spanish hangman game, you can play alone or challenge a friend.<br>Guess the word or you will be hanged!</p>
                    ${error? `<div class="alert alert-warning alert-dismissible">
                        <a href="/initial-word" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                        <strong>Warning!</strong> ${error}
                    </div>` : '<br><br>'}
                    <a href="/game" class="btn btn-lg btn-secondary align-bottom">Single player</a>
                    <a href="/two-players" class="btn btn-lg btn-secondary align-bottom">Two players</a>
                    </main>        
                    <footer class="mastfoot mt-auto">
                    <div class="inner">
                        <p class="text-muted text-center">Hangman for <a href="https://http://www.skylabcoders.com/es/">SkylabCoders</a>, by <a href="https://github.com/MinaZhen">MinaZhen</a>.</p>
                    </div>
                    </footer>
                </div>
                <script src="vendor/jquery/3.3.1/jquery-3.3.1.min.js"></script>
                <script src="vendor/popper/1.14.3/popper.min.js"></script>
                <script src="vendor/bootstrap/4.1.0/js/bootstrap.min.js"></script>
            </body>
        </html>`)
}

render2p = (req) => {
    const { query: { error } } = req

    return (
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Hangman App</title>
            <link rel="stylesheet" href="vendor/bootstrap/4.1.0/css/bootstrap.min.css">
            <link rel="stylesheet" href="styles/main.css">
        </head>
        <body class="text-center">

            <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
                <header class="masthead mb-auto">
                <div class="inner">
                    <h1 class="masthead-brand display-3">Hangman</h1>
                </div>
                </header>
        
                <main role="main" class="inner cover">
                <p class="lead">Choose a word for your mate.<br>Also you can select the number of attempts. </p><br><br>
                    ${error? `<div class="alert alert-warning alert-dismissible">
                        <a href="/two-players" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                        <strong>Warning!</strong> ${error}
                        </div>` : '<br><br>'}
                    <form action="/initial-word" method="POST">
                        <label for="attm">Attempts: <span id="val-range" name="attempts"></span></label>  <br>
                        <input type="range" id="attm" value="10" step="1" min="5" max="15" data-show-value="true">
                        <p><br></p>
                        <div  class="form-inline input-group mx-auto">
                            <input type="text" placeholder="Word to guess" name="word" id="desc" class="form-control" autofocus>
                            <div class="input-group-append">
                                <input type="submit" value="Send!" class="btn btn-outline-secondary">
                            </div>
                        </div>
                    </form>
                </main>        
                <footer class="mastfoot mt-auto">
                <div class="inner">
                    <p class="text-muted text-center">Hangman for <a href="https://http://www.skylabcoders.com/es/">SkylabCoders</a>, by <a href="https://github.com/MinaZhen">MinaZhen</a>.</p>
                </div>
                </footer>
            </div>
            <script src="../public/vendor/jquery/3.3.1/jquery-3.3.1.min.js"></script>
            <script src="../public/vendor/popper/1.14.3/popper.min.js"></script>
            <script src="../public/vendor/bootstrap/4.1.0/js/bootstrap.min.js"></script>
            <script>
                var slider = document.getElementById("attm");
                var output = document.getElementById("val-range");
                output.innerHTML = slider.value;
                
                slider.oninput = function() {
                    output.innerHTML = this.value;
                }
            </script>
            </body>
        </html>`)
}

rendergame = (req) => {
    const { query: { error } } = req

    return (
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Hangman App</title>
            <link rel="stylesheet" href="vendor/bootstrap/4.1.0/css/bootstrap.min.css">
            <link rel="stylesheet" href="styles/main.css">
        </head>
        <body class="text-center bg-body">

            <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
                <header class="masthead mb-auto">
                <div class="inner">
                    <h1 class="masthead-brand display-3">Hangman</h1>
                </div>
                </header>
                <main role="main" class="inner cover">
                    ${error? `<div class="alert alert-warning alert-dismissible">
                        <a href="/game" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                        <strong>Warning!</strong> ${error}
                        </div>` : '<br><br>'}
                        <!-- <p>${hangman.attempts()}</p> -->
                    <h1 id="sparcing" class="masthead-brand display-6">${hangman.guessed().join("").toUpperCase()}</h1><br>
                    ${(hangman.status() === 1) ? 
                        `<div class="modal modal-sm bg-success modal-dialog modal-content modal-body" id="myModal" role="dialog">
                    <a href="/" class="close" data-dismiss="modal">&times;</a>
                    <h5> ✨ YOU WIN ✨ </h5><br>
                    </div>` : ''}
                    ${(hangman.status() === 2) ? 
                        `<div class="modal modal-sm bg-danger modal-dialog modal-content modal-body" id="myModal" role="dialog">
                    <a href="/" class="close" data-dismiss="modal">&times;</a>
                    <h5> ☠ YOU LOSE ☠ </h5><br>
                    </div>` : ''}

                   

                    ${(hangman.status() === 0) ?
                    `<form action="/try" method="POST">
                        <div  class="form-inline input-group mx-auto">
                            <input type="text" placeholder="Word or letter" name="text" id="desc" class="form-control" autofocus>
                            <div class="input-group-append">
                                <input type="submit" value="Send!" class="btn btn-outline-secondary">
                            </div>
                        </div>
                    </form>` : ''}
                </main>      
                <footer class="mastfoot mt-auto">
                <div class="inner">
                    <p class="text-muted text-center">Hangman for <a href="https://http://www.skylabcoders.com/es/">SkylabCoders</a>, by <a href="https://github.com/MinaZhen">MinaZhen</a>.</p>
                </div>
                </footer>
            </div>
            <script src="../public/vendor/jquery/3.3.1/jquery-3.3.1.min.js"></script>
            <script src="../public/vendor/popper/1.14.3/popper.min.js"></script>
            <script src="../public/vendor/bootstrap/4.1.0/js/bootstrap.min.js"></script>
        </body>
        </html>`)
}

app.listen(port, () => console.log(`server running on port ${port}`))

process.on('SIGINT', () => {
    console.log('\nstopping server')

    process.exit()
})