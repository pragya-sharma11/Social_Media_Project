const route =require('express').Router()
const { createAnonUser, getUserById, getUserByUsername} = require('../../controllers/users')
route.get('/', (req,res)=>{
    let user ;
    if(isNaN(parseInt(req.params.id))){
        user = await getUserByUsername(req.params.id)
    }else{
        user = await getUserById(req.params.id)
    }
    res.send('//TODO : All users.')
})

module.exports ={
    usersRoute : route
}