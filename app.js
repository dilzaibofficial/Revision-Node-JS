const express = require('express')

const app=express()

app.get('',(req,resp)=>{
    resp.send('<h1>Welcome, This is Home Page.<h1>')
})

app.get('/about',(req,resp)=>{
    resp.send('<h1>Welcome, This is About Page.<h1>')
})

app.get('/products',(req,resp)=>{
    resp.send('<h1>Welcome, This is Products Page<h1>')
})

app.get('/help',(req,resp)=>{
    resp.send('<h1>Welcome, This is Help Page<h1>')
})

app.listen(4500)
