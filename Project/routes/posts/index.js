const { Router } =require('express')
const{ createNewPosts, findAllPosts } = require('../../controllers/posts')

const route = Router()

route.get('/',(req,res)=>{
   const post = await findAllPosts()
   res.status(200).send(post)
})

route.post('/', async (req,res)=>{
    const {userId, title, body} = req.body
    if(!(userId)||!(title)||!(body)){
        return res.status(400).send({
            error:'Need userid, title, body '
        })
    }
    const post = await createNewPosts(userId, title, body)
    res.status(201).send(post)
})

module.exports ={
    postsRoute:route
}