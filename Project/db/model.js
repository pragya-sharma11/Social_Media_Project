const sequelize = require('sequelize')
const db = sequelize({
    dialect : 'mysql',
    database : 'socialmediadb',
    username : 'root',
    password : null 
})