const express = require('express')
const router = express.Router()
const { json } = require('body-parser')
const Stock = require('../models/Stock')
const { db } = require('../models/Stock')
const Users = require('../models/User')
const mongoose = require('mongoose')
router.use(express.json())

// get watchlist and name 
router.get('/:id', async(req,res) => {
    try{
        const user = await Users.find({_id:mongoose.Types.ObjectId(req.params.id)})
        res.send({
            firstName: user[0].firstName,
            lastName:user[0].lastName,
            watchlist :user[0].watchlist 
        })
    }catch(err){res.sendStatus(500)}

})

//Post watchlist item in the watchlist array
router.post('/:id', async (req,res) => {
    const stock = new Stock({
        symbol:req.body.symbol,
        close:req.body.close,
        open:req.body.open,
        low:req.body.low,
        high:req.body.high,
        change:req.body.change
    })
    try{
        const userUpdate = await Users.updateOne({_id:mongoose.Types.ObjectId(req.params.id)},{$push:{watchlist:stock}})
        const userAdded = await Users.find({_id:mongoose.Types.ObjectId(req.params.id)})
        res.json(userAdded[0].watchlist).send
    }catch(err){res.sendStatus(500)}
    
})

//Delete the watchlist item given the userid and watchlist item id
router.delete('/:id',async (req,res)=>{
    try{
        const deletedItem = await Users.updateOne({_id: mongoose.Types.ObjectId(req.params.id)}, {$pull:{watchlist:{_id: mongoose.Types.ObjectId(req.body._id)}}})
        res.json(deletedItem).send
    }catch(err){res.sendStatus(500)}
    
})





module.exports = router