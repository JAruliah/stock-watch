const express = require('express')
const router = express.Router()
const { json } = require('body-parser')
const { get } = require('mongoose')
const bcrypt = require('bcryptjs')
const Users = require('../models/User')
router.use(express.json())

//ROUTES

//Register
router.post('/register',  async (req,res) => {
    try{
        // Check if user already exists
        const sentUser = await Users.find({email:req.body.email})
        if (Object.keys(sentUser).length !=0 == true){
            next()
        }
        //Hash password
        const salt =  await bcrypt.genSalt()
        const hashedPassword =  await bcrypt.hash(req.body.password, salt)
        //Create new user
        const user =  new Users(
            {
                email:req.body.email, 
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                password:hashedPassword
            }
        )
        //Save new user into database
        const savedUser = await user.save()
        const userLogged = await Users.find({email: req.body.email,})
        res.status(201).send({_id: userLogged[0]._id})
    }catch(err){
        res.status(500).send("user already exists")
    }
})

//Login
router.post('/login', async (req,res) => {
    const user = await Users.find({email: req.body.email,})
    //If user doesnt exist
    if (user == null) {
        return res.status(400).send('User does not exist')
    }
    //Compare passwords
    try {
      if (await bcrypt.compare(req.body.password,user[0].password)){
          res.status(202).send({_id: user[0]._id})
      }else{
          res.status(400).send('Unsuccessful')
      }
    } catch (err) {
        res.sendStatus(500)
    }
})

module.exports = router