var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var http = require('http').Server(app)
var io = require('socket.io')(http);

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

var messages = [ 
    {name:"Roshan", message: "hi"},
    {name:"Jane", message: "hello"},

]

app.get('/messages',(req,res)=>{
    res.send(messages);
})

app.post('/messages',(req,res)=>{
    messages.push(req.body)
    res.sendStatus(200);
})

io.on('connection', (socket)=>{
    console.log("user Connected")
})

http.listen(3000);
