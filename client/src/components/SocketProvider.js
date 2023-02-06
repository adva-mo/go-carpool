import React from "react";
import currentSocket from "../context/socket.context.js";

function SocketProvider({ children }) {
  const value = {};
  return <currentSocket.Provider value={{}}>{children}</currentSocket.Provider>;
}

export default SocketProvider;
