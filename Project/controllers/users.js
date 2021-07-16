const { Users } = require('../db/model')
const users = require('../routes/users')
const { getRandomUserName } = require('../utils/username')
async function createAnonUser(){
    const user = await Users.create({
        username : getRandomUserName()
    })
    return user
}

async function getUserById(){
    return await users.findOne({where:{id}}) //without where clause, it will give all users which has some id wven if we have given wrong id in params.
}

async function getUserByUsername(username){
    return await users.findOne({where:{username}})
}

module.exports={
    createAnonUser,
    getUserById,
    getUserByUsername

}
/*----------->debugging purpose
async function task(){
    console.log(await createAnonUser())
    console.log('-----------------------')
    
}
task()
 */
