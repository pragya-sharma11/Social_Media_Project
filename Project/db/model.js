const sequelize = require('sequelize')
const db = new sequelize({
    dialect : 'mysql',
    database : 'socialmediadb',
    username : 'root',
    password : null 
})

const Users = db.define('user',{    //always define name of table as singular and sequelize will automatically made it plural.
    
});

const Posts = db.define('post',{

})

const Comments = db.define('comment', {

})

module.exports ={
    db,
    Users,
    Posts,
    Comments
}