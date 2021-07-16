const { Router } =require('express')
const{ createNewPosts, findAllPosts } = require('../../controllers/posts')

const route = Router()

route.get('/',(req,res)=>{
   const post = await findAllPosts()
   res.status(200).send(post)
})


module.exports ={
    postsRoute:route
}