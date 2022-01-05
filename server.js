const io = require('socket.io')(process.env.PORT || 3001, {
    cors: {
        origin: "*"
    }
})

io.on("connection", socket => {
    socket.on("send-request", data => {
        socket.broadcast.emit("receive-request", data)
        console.log(data)
    })
    socket.on("send-request-marcador", data => {
        socket.broadcast.emit("receive-request-marcador", data)
        console.log(data)
    })
    socket.on("open-points", data => {
        socket.broadcast.emit("send-animation", data)
        console.log(data)
    })
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
