const ChatModel = require('../model/chat.model')
const path = require('path')

let sendMessageSocket = (socket,next) => {
    socket.on("chat", (msg)=>{
        console.log(`[LOG]: ${msg.name} has just connected!`)
        // We need to unpack the message & display the message
        let chat = new ChatModel({
            name:msg.name,
            message:msg.msg
        })

        console.log(`[${msg['name']}]:  ${msg['msg']}`)
        chat.save((error,data)=>{
            if(!error){
                console.log("[LOG]: Stored in DB")
            }else{
                console.log("[ERROR]: Issue with storing: " + error)
            }
        })
    })
}

let display_index = (req,res) => {
    res.sendFile(path.resolve(__dirname+"/../public2/index.html"))
}

let display_index_2 = async (req,res) => {
    let index_page = await update_index()
    res.send(index_page)
}

let sendMessage = async (req,res) => {
    let index_page = await update_index()
    res.send(index_page)
}

async function update_index(){
    let page = require('../public2/pages')
    let data = await ChatModel.find({})

    let page_b = page.split('<span></span>')[0]
    let page_a = page.split('<span></span>')[1]

    for(let [idx,item] of data.entries()){
        page_b += `<tr><td class="userName">${item['name']}</td><td class="userMsg">${item['message']}</td></tr>\n`
    }
    let full_page = page_b + page_a
    return full_page
}

module.exports = {
    display_index,
    display_index_2,
    sendMessage,
    sendMessageSocket
}