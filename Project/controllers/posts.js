const {Posts, Users} = require('../db/model')

async function createNewPost(userId, title, body){
    const post = await Posts.create({
        title,body,userId
    })
    return post
}

/**
 * showallposts({usename : ''})
 * showAllPosts({title : ''})
 */
 async function showAllPosts(query){

}

/* Test code */

async function task(){
    console.log(await createNewPost(
        1,'this is a simple post','Body of post goes here'
    ))

    console.log(await createNewPost(
        2,'this is a simple post','Body of post goes here'
    ))
}

task()