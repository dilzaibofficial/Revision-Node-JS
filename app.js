// const app=require('./app')

// console.log("Here is the value of X , Y: "+app.x+' , '+app.z())

// const arr=[2,3,4,6,5,3,4,3,9,8]

// let result =arr.filter((item)=>{
//     return item===3
// })
// console.warn(result)


// const fs=require('fs')
// const { dirname } = require('path')
// fs.writeFileSync("hello2.txt")
// console.log("-->>"+__dirname)


// const http =require('http');
// // http.createServer((req,resp)=>{
// //     resp.write("Hello Here Is Dilzaib");
// //     resp.end();
// // }).listen(4500);

// const dataControl =(req,resp)=>{
//     resp.write("<h1>Hello,Dil Zaib Is Here</h1>");
//     resp.end();
// }

// http.createServer(dataControl).listen(4500);
// const chalk=require('chalk')
// console.log(chalk.blue('Hello world!'));


console.log("hello, here is dilzaib manzoor")


const http= require('http');
const data =require('./data')
http.createServer((req,resp)=>{
resp.writeHead(404,{'Content-Type':'application\json'});
resp.write(JSON.stringify(data))
resp.end()
}).listen(5000);




const fs =require('fs')

const input =process.argv;

if(input[2]=="new")
{
    fs.writeFileSync(input[3],input[4])
}
else if(input[2]=="remove")
{
    fs.unlinkSync(input[3])
}
else{
    console.log("Something gone wrong first correct it.")
}

const fs=require('fs');
const path =require('path')
const dirPath=path.join(__dirname,'files')

for(var i=0;i<5;i++)
{
    fs.writeFileSync(dirPath+'/hello'+i+'.txt','hello world')
}

fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>
    {
        console.log("this is files"+item+"\n\n")
    })
})


