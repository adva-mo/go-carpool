require("dotenv").config();
const mongoose = require("./db/mongoose.js");

const express = require("express");
const app = express();
const server = require("http").createServer(app);

server.listen(3001, () => {
  console.log("server connected ");
});
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("conected socket");

  socket.on("data", (data) => {
    //add users data to DB then emit list of all users
    io.emit("users", "users");
    console.log(data);
  });
});
