const express = require('express')
const bodyParser = require('body-parser')
const Hangman = require('./src/logic-es6')

const port = process.argv[2] || 3000

const app = express()
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false })) 

let hangman = new Hangman("hola");

app.get('/', (req, res) => {
    res.send(renderfun(req))
})

app.get('/game', (req, res) => {
    let guessed = hangman.guessed().join("")
    let attempts = hangman.attempts()

    res.send(rendergame(req))
})

app.get('/two-players', (req, res) => {
    res.send(render2p(req))
})


app.get('/initial-word', (req, res) => {
    const { body: { word, attempts } } = req
    
    try {
        hangman = new Hangman()
    } catch ({ message }) {
        res.redirect(`/?error=${message}`)
    }

    res.redirect('/game')
})

app.post("/try-word", (req, res) => {
    const { body: { text } } = req
    hangman.try(text)
    
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
                    <p class="lead">This is a spanish hangman game, you can play alone or challenge a friend.<br>Guess the word or you will be hanged!</p><br><br>
                    <a href="/initial-word" class="btn btn-lg btn-secondary align-bottom">Single player</a>
                    <a href="/two-players" class="btn btn-lg btn-secondary align-bottom">Two players</a>
                    ${error? `<div class="alert alert-warning alert-dismissible">
                        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                        <strong>Warning!</strong> ${error}
                    </div>` : ''}
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
                    <form action="" class="">
                        <label for="attm">Attempts: <span id="val-range"></span></label>  <br>
                        <input type="range" name="attm" id="attm" value="10" step="1" min="5" max="15" data-show-value="true">
                        <p><br></p>
                        <div  class="form-inline input-group mx-auto">
                            <input type="text" placeholder="Word to guess" name="description" id="desc" class="form-control">
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
                        <h1 id="sparcing" class="masthead-brand display-6">__NGM_N</h1><br>
                <form action="" class="">
                        <div  class="form-inline input-group mx-auto">
                            <input type="text" placeholder="Word or letter" name="description" id="desc" class="form-control">
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
        </body>
        </html>`)
}

app.listen(port, () => console.log(`server running on port ${port}`))

process.on('SIGINT', () => {
    console.log('\nstopping server')

    process.exit()
})