const  fs  = require('fs');
const http = require('http');

const server =  http.createServer((req,res)=>{

    const data = fs.readFileSync(`api.json`,"utf-8");
    const objData = JSON.parse(data);

    if(req.url == '/'){
        res.write("hello this is root home page");
        res.end();
    }else if(req.url == '/about'){
        res.write("hello this is about page");
        res.end();
    }else if(req.url == '/contact'){
        res.write("hello this is contact page");
        res.end();
    }else if(req.url == '/userapi'){
        res.writeHead(200,{ "content-type":"application/json" })
        res.end(objData[2].email);
    } 
    else{
        res.writeHead(404,{"Content-type":'text/html'} );
        res.end("<h1> 404 error. Page not found</h1>");
    }
});

server.listen(8000,"127.0.0.1", ()=>{
    console.log("listening to the port 8000");
});