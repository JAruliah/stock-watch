  const express = require('express')
const PORT = 4001
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const { json } = require('body-parser')
const cors = require("cors")
app.use(cors())

//MIDDLEWARES
app.use(express.json())

//GET ROUTES
const userRouter = require('./routes/users')
app.use('/users',userRouter)

const watchListRouter = require('./routes/watchlist')
app.use('/watchlist',watchListRouter)

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () =>{
    console.log('Connected to DB!')
})

//Server is listening
app.listen(PORT, console.log(`Listening on port ${PORT}`))