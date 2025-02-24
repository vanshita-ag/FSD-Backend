const http = require('http');
const server = http.createServer((req, res)=>{
    let data=[
        {
            "id":1,
            "username": "admin",
            "password" : "1334"
        },
        {
            "id" : 2,
            "username" : "user",
            "password" : "5678" 
        }
    ];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
});
server.listen(9001,(err)=>{
    if(err)
        console.log("Error starting server" , err);
    else
    console.log("Server started on 9001")
});