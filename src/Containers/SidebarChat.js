import React from "react";
import "./SidebarChat.css";
// import "./SidebarChat.scss";
import { Avatar } from "@material-ui/core";

function SidebarChat() {
  return (
    <div classname="sidebarChat">
      <div className="sidebarChat__avatar">
        <Avatar />
      </div>
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>this is last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
