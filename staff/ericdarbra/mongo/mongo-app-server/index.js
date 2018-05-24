const express= require('mongodb')
const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/skylab-bootcamp-201804', (err, conn) => {
    if (err) throw err

    const db = conn.db()

    const app = express()

    // routes?

    const port = process.argv[2]

    app.listen(port,() => console.log(`server running on port ${port}`)

    process.on('SIGINT', () =>{
        console.log('\nstopping server')
        
        conn.close() //cerrar conexión con db de forma segura
    
    })
