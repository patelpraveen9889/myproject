 
const fs =require('fs');
const path = require('path');
const http = require('http');
 fs.readFile(path.join(__dirname,"js.html"),'utf8',(err,data)=>{
     if(err){
         console.error(err);
     }
     console.log(data);
 }) ;
 