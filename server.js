const express = require('express');
const cors = require('cors');
const http = require('http');
const path = require('path');

var app = express()

app.use(express.static(__dirname,"dist"));
app.use(cors());
app.get("*" ,(req,res)=>{

    res.sendFile( path.join(__dirname, "dist/index.html"));



});

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port,()=>{

    console.log("Server listening at "+port);

})