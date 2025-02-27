const http = require('http')
const users =[]
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type' : 'application/json'});
    if(req.url === '/gatdata' && req.method === 'GET'){
        res.end(JSON.stringify(Users));
    }
    else if(req.url === '/setdata' && req.method === 'POST'){

        let body = '';
        req.on('data',chunk=>{
            body += chunk;
        });
        req.on('end', ()=>{
            let data = JSON.parse(body);
            console.log(data);
            users.push(data);
            res.end(JSON.stringify({message : 'Data recieved'}));
        });
    }
    else{
        res.writeHead(404);
        res.end("not found") ;   
    }
});
server.listen(9000, (err)=>{
    if(err)
        console.log("Error starting server", err);
    else
        console.log("Server started on port 9000"); 
});