const http = require('http');

const server = http.createServer((req,res) =>{
    server.writeHead(200,{'Content-Type':'text/html'});
    res.write("Hello");
    res.end()
},listen(3000));