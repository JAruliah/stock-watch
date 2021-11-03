const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const PORT = 4001






//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () =>{
    console.log('Connected to DB!')
})
//Listening on port 4001
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})