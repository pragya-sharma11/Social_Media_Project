const {Posts, Users} = require('../db/model')

async function createNewPost(userId, title, body){
    const post = await Posts.create({
        title,body,userId
    })
}

