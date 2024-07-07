import React from "react";

function Message({ username, text }) {
  return (
    <div className="message">
      <strong>{username}:</strong> {text}
    </div>
  );
}

export default Message;
