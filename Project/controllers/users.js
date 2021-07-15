const { Users } = require('../db/model')
const { getRandomUserName } = require('../utils/username')
async function createAnonUser(){
    const user = await Users.create({
        username : getRandomUserName()
    })
    return user
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
