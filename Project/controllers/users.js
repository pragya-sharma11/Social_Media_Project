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
    return await users.findOne({id})
}

module.exports={
    createAnonUser
}
/*----------->debugging purpose
async function task(){
    console.log(await createAnonUser())
    console.log('-----------------------')
    
}
task()
 */
