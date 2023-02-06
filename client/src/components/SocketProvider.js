import React, { useEffect } from "react";
import currentSocket from "../context/socket.context.js";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

function SocketProvider({ children }) {
  const value = { socket };

  useEffect(() => {
    socket.on("users", (data) => {
      console.log(data);
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <currentSocket.Provider value={value}>{children}</currentSocket.Provider>
  );
}

export default SocketProvider;
