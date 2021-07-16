const express = require('express')
const app = express()
const { db } = require('./db/model')
//we can also write models = req('./db/models) the db  = models.db for imprting only one object or we can obtain one object like {db}
const { usersRoute }= require('./routes/users')
const { postsRoute } = require('./routes/posts')
//app.use(express.json)
//app.use(express.urlencoded({extended:true}))
app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)
app.use('/', express.static(__dirname+'/public'))


db.sync({alter:true})     //its  a promising function so its used to synchronise with db
.then(()=>{
    app.listen(8833, ()=>{
        console.log("server is started on http://localhost:8833")
    })
})
.catch((err)=>{
    console.error(err)
})