const { response } = require('express')
const express=require('express')
const path =require('path')

const publicPath =path.join(__dirname,"public")
const app=express()

app.set ('view engine','ejs')

app.get('',(_,resp)=>
{
    resp.render('index')
})

app.get('/profile',(_,resp)=>
{
    const user={
        name:'Dil Zaib',
        email:'dilzaib5848@gmail.com',
        city:'Karachi',
        skills:['MangoDB','JAVA']
        }
    resp.render('profile',{user})
})

app.get('/login',(_,resp)=>{
    resp.render('login')
})

app.get("/header",(_,resp)=>{
    resp.render('common/header')
})

app.listen(5000)