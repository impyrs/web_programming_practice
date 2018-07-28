// 1. HTTP 서버 만들기
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const path = require("path");
const logger = require("morgan");

app = express();
server = http.createServer(app);
const io = socketIO(server);
const PORT = 4000;

const handleSocketConnection = (socket) => {
    //console.log(`Client Connect With the ID ${socket.id} connected!`);
    // 아래의 socket은 인자이다.
    socket.on("fuck", data => {
        // 모든 연결된 Client에게 메시지 전송하기
        io.emit("pong");
        console.log("ping");
    })
}

const handleListening = () => console.log(`Server Running on http://localhost:${PORT}`);

server.listen(PORT, handleListening);

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));

// 서버에서는 client에서 socket을 이용해서 보낸 message를 처리할 함수를 on method를 통해 처리한다.
io.on("connection", handleSocketConnection)