const { Router } =require('express')
const{ createNewPosts, findAllPosts } = require('../../controllers/posts')

const route = Router()

route.get('/',(req,res)=>{
    res.send('//TODO : show all posts ')
})
module.exports ={
    postsRoute:route
}