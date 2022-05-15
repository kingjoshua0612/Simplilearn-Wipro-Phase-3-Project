const express = require("express")
const mongoose = require("mongoose")
const Chat = require('./routes/chat.router')
const ChatController = require('./controllers/chat.controller')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const config = {
    PORT:8100,
    URL:"mongodb://localhost:27017/",
    db_name:"chatdb"
}

app.use(express.urlencoded({extended:true}))
app.use(express.json())

// -- MongoDB Connectivities --
const db_config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(config['URL']+config['db_name'],db_config)
mongoose.connection

app.use("/",Chat)
app.use(express.static(__dirname+'/public2'))

io.on("connection",ChatController.sendMessageSocket)

http.listen(config['PORT'],()=>console.log(`[LOG]: Listening @ http://localhost:${config['PORT']}/`))