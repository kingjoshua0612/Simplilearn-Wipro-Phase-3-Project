let index_page = `
<!--
Version: 04172021    
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" href="https://icons.iconarchive.com/icons/pelfusion/long-shadow-media/512/Message-Bubble-icon.png">  
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <title>ChatLog</title>
    <script src="/socket.io/socket.io.js"></script>
    <script>
        var socket = new io()

        function get_content2server(){
            let clientName = document.getElementById('clientName')
            let msg = document.getElementById('clientMsg')

            let client_info = {'name':clientName.value,"msg":msg.value}
            socket.emit("chat",client_info)
            msg.value = ""
        }
    </script>
</head>
<body>
    
    <div class="container">
        <h1>ChatLog</h1>
    
        <div class="bodyContent">

            <div class="MessageForm">
                <form action="/" method="post">
                <label>Name:</label>
                <input type="text" id="clientName" name="name">
                <br>

                <div style="margin:auto;width:min-content;">
                <div class="chatLog">
                    <div style="margin:auto;text-align:center;">
                    <table id="chatLogTable">
                        <tbody>
                            <span></span>
                        </tbody>
                    </table>
                    </div>
                </div>
                <textarea placeholder="Enter your message here..." name="msg" id="clientMsg" rows="2"></textarea>
                </div>

                <br>

                <input class="btn btn-primary msgBtn" type="submit" value="Send" onclick="get_content2server()">
                <input class="btn btn-secondary msgBtn" type="reset" value="Reset">
                </form>
            </div>
        </div>
    </div>
</body>
</html>`
module.exports = index_page