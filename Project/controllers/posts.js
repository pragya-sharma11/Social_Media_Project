const {Posts, Users} = require('../db/model')

async function createNewPost(userId, title, body){
    const post = await Posts.create({
        userId,title,body
    })
    return post
}

/**
 * showallposts({usename : ''})
 * showAllPosts({title : ''})
 */
 async function showAllPosts(query){
    //todo: handle query params
    const posts = await Posts.findAll({
        include :[ Users ]   //this means that we can include Users as query.---left outer join with usertable.
        //we can include any table in another table only when there is a relationship already defined between those tables in db.
    })
    return posts
}

/* Test code */
/*
async function task(){
    
    console.log(await createNewPost(
        1,'this is a simple post','Body of post goes here'
    ))
        
    const posts = await showAllPosts()
    for(let p of posts){
        console.log(`${p.title} - author: ${p.user.username} -  ${p.body}\n==============\n`)
    }
}

task()
*/

module.exports ={
    createNewPost,
    showAllPosts
}

/**
 * module.exports ={
 *  a: function (){}
 *  b: function (){}
 * }
 * 
 * lib = require(---)
 * lib.b() works
 * 
 * { b } =require(---)
 * b()  will not work.
 */