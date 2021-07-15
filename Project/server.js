const express = require('express')
const app = express()
const { db } = require('./db/models')
//we can also write models = req('./db/models) the db  = models.db for imprting only one object or we can obtain one object like {db}

app.listen(8833, ()=>{
    console.log("server is started on http://localhost:8833")
})