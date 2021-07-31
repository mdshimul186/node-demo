const http = require('http');


// const server = http.createServer(async (req, res) => {
//     if (req.url === '/api/demo-1' && req.method === 'GET') {
        
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({data:"example api 1"}));
//     }else if (req.url === '/api/demo-2' && req.method === 'GET') {
        
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({data:"example api 2"}));
//     }
//       else {
//         res.writeHead(404, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ message: 'Route not found!' }));
//     }
// });

// const PORT = process.env.PORT || 5010;
// server.listen(PORT, () => console.log(`Server listening on port ${PORT}!!!`));

const express = require("express");
const app = express();

app.get('/api/demo-2',(req,res)=>{
    res.status(200).json({data:"example api 1"})
 
})
app.get('/api/demo-2',(req,res)=>{
    res.status(200).json({data:"example api 2"})
})

const PORT = process.env.PORT || 5010;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!!!`));







