const sequelize = require('sequelize')
const db = new sequelize({
    dialect : 'mysql',
    database : 'socialmediadb',
    username : 'root',
    password : null 
})

const COL_ID_DF = {
    type:sequelize.DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
}

const  COL_USERNAME_DEF = {
    type: sequelize.DataTypes.STRING(30),
    unique : true,
    allowNull:false
}

const COL_TITLE_DEF = {
    type : sequelize.DataTypes.STRING(140),
    allowNull:false
}
const Users = db.define('user',{    //always define name of table as singular and sequelize will automatically made it plural.
    id:COL_ID_DF,
    username:COL_USERNAME_DEF
});

const Posts = db.define('post',{
    id:COL_ID_DF,
    title:COL_TITLE_DEF,
    body:{
        type:sequelize.DataTypes.TEXT,
        allowNull:false
    }
})

const Comments = db.define('comment', {
    id:COL_ID_DF,
    title:COL_TITLE_DEF
})

module.exports ={
    db,
    Users,
    Posts,
    Comments
}