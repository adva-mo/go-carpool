import React, { useContext, useEffect } from "react";
import { io } from "socket.io-client";
import { locationContext } from "./LocationProvider.js";

const currentSocket = React.createContext({});

const socket = io("http://localhost:3001");

function SocketProvider({ children }) {
  const value = { socket };

  const { currentPosition } = useContext(locationContext);

  useEffect(() => {
    if (!socket) return;
    console.log("connection opened");
    // socket.on("connect", () => {
    socket.emit("data", { ...currentPosition });
    // });
    socket.on("users", (data) => {
      console.log(data);
    });

    return () => {
      socket.close();
    };
  }, [socket]);

  return (
    <currentSocket.Provider value={value}>{children}</currentSocket.Provider>
  );
}

export default SocketProvider;
