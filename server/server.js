require('dotenv').config();

const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    massive = require('massive')


    
const app = express();


massive(process.env.CONNECTIONSTRING).then(db  => {
        app.set('db', db)
        // app.get('db').init.seed_file().then(response => {
        //     console.log(response)
        // })
    })



app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})