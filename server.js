const io = require('socket.io')(3001,{
    cors: {
        origin: "*"
    }
})

io.on("connection",socket =>{
    socket.on("send-data",data => {
        socket.broadcast.emit("receive-data",data)
        console.log(data)
    })
    console.log("conected")
})