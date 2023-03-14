import React, { useContext, useEffect } from "react";
import { io } from "socket.io-client";
import { locationContext } from "./LocationProvider.js";

export const socket = io("http://localhost:3001");

function SocketProvider({ children }) {
  const { currentPosition } = useContext(locationContext);

  useEffect(() => {
    if (!socket) return;

    console.log("connection opened");

    socket.emit("data", { ...currentPosition });

    socket.on("users", (data) => {
      console.log(data);
    });

    return () => {
      socket.close();
    };
  }, [socket]);

  return <>{children}</>;
}

export default SocketProvider;
