const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const server = require("http").Server(app);
//const io = require("socket.io")(server);
const io = require("socket.io")(server);
const port = 3002;

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

/*const db = mariadb.createPool({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "movable_shopper_mobile",
});
*/

//import routes
const productsRoute = require("./routes/products");
const categoryRoute = require("./routes/category");
const storeRoutes = require("./routes/Store");
//const chat = require("./routes/Chat");

//use routes [express function -> 'use']
app.use("/api/products", productsRoute);
app.use("/api/stores", storeRoutes);
app.use("/api/category", categoryRoute);
//app.use('/api/chat',chat);

{
  /**io.on('connection',socket=>{
  console.log('a user connected :D');
  socket.on("Chat message",msg=>{
    console.log(msg);
    io.emit("chat message",msg);
  });
});
 */
}

// ------------------------------------------------------------
{
  /**let usersConnected = new Map();
 io.on("connection", (socket) => {
  let { id } = socket.client;

  socket.on("user nickname", (nickname) => {
    usersConnected.set(nickname, [socket.client.id, socket.id]);

    //  2) Send list with connected sockets
    io.emit("users-on", Array.from(usersConnected.keys()));

    //  3) Send to all other users the 'nickname' of the new socket connected
    socket.broadcast.emit("welcome", nickname);
  });

  socket.on("chat message", ({ nickname, msg }) => {
    socket.broadcast.emit("chat message", { nickname, msg });
  });

  socket.on("chat message private", ({ toUser, nickname, msg }) => {
    let socketId = usersConnected.get(toUser)[1];
    io.to(socketId).emit("private msg", { id, nickname, msg });
  });


  socket.on("disconnect", () => {
    let tempUserNickname;

    for (let key of usersConnected.keys()) {
      if (usersConnected.get(key)[0] === id) {
        tempUserNickname = key;
        usersConnected.delete(key);
        break;
      }
    }
    // Send to client the updated list with users connected
    io.emit("users-on", Array.from(usersConnected.keys()));

    // Send to cliente the nickname of the user that was disconnected
    socket.broadcast.emit("user-disconnected", tempUserNickname);
  });
}); */
}

// ------------------------------------------------------------

io.on("connection ", (socket) => {
  console.log("a user connected :D");
  socket.on("chat message", (msg) => {
    console.log(msg);
    io.emit("chat message", msg);
  });
});

server.listen(port, () => {
  console.log("Server is running on port: " + port);
});
