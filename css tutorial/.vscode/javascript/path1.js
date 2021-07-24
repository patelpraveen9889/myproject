const path = require('path')
const http = require('http');
const fs=require('fs');
const port = 3000;
const server = http.createServer((req,res)=>{
  
        fs.readFile(path.join(__dirname,'js.html'),'utf8',function(err,data){
            if(err){
                console.error(err);
            }
            res.writeHead(200,{'Contrnt-Type':'text/html'});
            res.write(data);
             
            res.write(data);
            res.end(); 

            
    
 

});  
});
server.listen(port ,()=>console.log(` server is running on port number${port}`));
console.log(__dirname);
console.log(__filename);