// client socket.io
// 이렇게 하면 server와 socket 연결을 할 수 있다.
const socket = io("http://localhost:4000");


// new message 만들기 : front-end에서는 emit으로 서버에 socket을 이용한 메시지 전송
// const createNewMessage = () => {
//     socket.emit("new message", "I love Life");
// }


// setInterval(createNewMessage, 1000);

setInterval(()=>{socket.emit("fuck")}, 1000);

socket.on("pong", () => {
    console.log("pong");
});