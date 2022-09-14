const { response } = require('express')
const express=require('express')
const path =require('path')


const publicPath =path.join(__dirname,"public")
const app=express()

app.set('view engine','ejs')

app.get('',(_,resp)=>
{
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/profile',(_,resp)=>
{
    const user={
        name:'DIL Zaib',
        email:'dilzaib@gmail.com',
        city:'Karachi'
    }
    resp.render('profile',{user})
})


app.listen(4500)
