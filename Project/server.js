const express = require('express')
const app = express()
const { db } = require('./db/models')

app.listen(8833, ()=>{
    console.log("server is started on http://localhost:8833")
})