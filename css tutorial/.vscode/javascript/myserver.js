const http =require('http');
const fs = require('fs');
const path =require('path');
const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
 let  route = path.join(__dirname);
    switch(req.url){
        case '/':
            route+='/js.html';
            break;
        case '/home':
            route+="/home.html";
            break;
        default :
            route +='/error.html';
            break;

    }
     
        fs.readFile( route ,'utf8',(err,data)=>{
            if(err){
                console.error(err);
            }
            console.log(req.method);
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
             res.end();
        });

     
     
    

});
server.listen(port,()=>{console.log(`port is running on ${port}`);});