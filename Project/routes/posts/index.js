const { Router } =require('express')
const{ createNewPost, findAllPosts } = require('../../controllers/posts')

const route = Router()

route.get('/',async (req,res)=>{
   const post = await findAllPosts()  //findAllPosts is an async function so we need to make req,res function async.
   res.status(200).send(post)
    for(let p of post){
        console.log(p.title)
    }
})

route.post('/', async (req, res) => {
    console.log(`POST /api/posts`, req.body)
    
    const { userId, title, body } = req.body
    
    if ((!userId) || (!title) || (!body)) {
      return res.status(400).send({
        error: 'Need userid, title and body to create post'
      })
    }
  
    const post = await createNewPost(userId, title, body)
    res.status(201).send(post)
  })
  

module.exports ={
    postsRoute:route
}