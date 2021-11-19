const io = require('socket.io')(process.env.PORT || 3001, {
    cors: {
        origin: "*"
    }
})

io.on("connection", socket => {
    socket.on("send-data", data => {
        socket.broadcast.emit("receive-data", data);
        console.log(data)
    })
    socket.on("rey-colina", data => {
        socket.broadcast.emit("send-colina", data);
        console.log(data)
    })
    socket.on("send-ganador", data => {
        socket.broadcast.emit("ganador", data);
        console.log(data)
    })
    console.log("conected")
})
