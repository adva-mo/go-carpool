import React, { useContext, useEffect } from "react";
import currentSocket from "../context/socket.context.js";
import { io } from "socket.io-client";
import { locationContext } from "./LocationProvider.js";

const socket = io("http://localhost:3001");

function SocketProvider({ children }) {
  const value = { socket };

  const { currentPosition } = useContext(locationContext);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connection opened");
      socket.emit("data", { ...currentPosition });
    });
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
