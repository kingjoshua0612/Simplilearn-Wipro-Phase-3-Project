const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const ChatSchema = mongoose.Schema({
    name:String,
    message:String
})

let ChatModel = mongoose.model("",ChatSchema,"Chats")

module.exports = ChatModel