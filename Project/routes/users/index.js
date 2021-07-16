const route =require('express').Router()
const { createAnonUser, getUserById, getUserByUsername} = require('../../controllers/users')
route.get('/', (req,res)=>{
    res.send('//TODO : All users.')
})

module.exports ={
    usersRoute : route
}