const route =require('express').Router()

route.get('/', (req,res)=>{
    res.send('//TODO : All users.')
})

module.exports ={
    usersRoute : route
}