const express = require('express')
const app = express()
app.listen(8833,()=>{
    console.log('server is on')
})
app.get('/',(req,res)=>{
    res.send('hello world')
})