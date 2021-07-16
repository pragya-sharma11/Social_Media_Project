const { Router } =require('express')

const route = Router()

route.get('/', (req,res)=>{
    res.send('//TODO : All users.')
})

module.exports ={
    userRoute : route
}