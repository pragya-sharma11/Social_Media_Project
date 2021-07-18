const route =require('express').Router()
const { createAnonUser, getUserById, getUserByUsername} = require('../../controllers/users')
route.get('/:id', async (req,res)=>{    //this :id is important here .it basically used here for query for user details using id .
    let user ;
    if(isNaN(parseInt(req.params.id))){
        user = await getUserByUsername(req.params.id)
    }else{
        user = await getUserById(req.params.id)
    }
   if(user) {
       res.status(200).send(user)
   } else {
        res.status(404).send({
            error: 'no such user id or username exists'
        })
   }
})

route.post('/', async (req,res)=>{
    const user = await createAnonUser()
    console.log(user)
    res.status(201).send(user)  //201 - thing has successfully created.s
})

module.exports ={
    usersRoute : route
}