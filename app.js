const http = require('http');


const server = http.createServer(async (req, res) => {
    if (req.url === '/api/todos' && req.method === 'GET') {
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({todos:"example todos"}));
    }else if (req.url === '/api/mytodos' && req.method === 'GET') {
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({todos:"my todos"}));
    }
      else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found!' }));
    }
});

const PORT = process.env.PORT || 5010;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}!!!`));

// const express = require("express");
// const app = express();

// app.get('/api/todos',(req,res)=>{
//     res.status(200).json({todos:"example todos"})
// })
// app.get('/api/mytodos',(req,res)=>{
//     res.status(200).json({todos:"my todos"})
// })

// const PORT = process.env.PORT || 5010;
// app.listen(PORT, () => console.log(`Server listening on port ${PORT}!!!`));







