import { useState, useEffect } from "react";
import client from "../websocket";
import { Input, Button } from "../components/ui";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const user = localStorage.getItem("user");

  useEffect(() => {
    const storedChat = JSON.parse(localStorage.getItem("chatHistory"));
    if (storedChat) {
      setChat(storedChat);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chat));
  }, [chat]);

  const sendMessage = () => {
    client.send(message);
    setChat([...chat, { user:user, message }]);
    setMessage("");
  };

  client.onmessage = (event) => {
    let serverMessage;
    try {
        serverMessage = JSON.parse(event.data);
    } catch (e) {
      serverMessage = event.data;
    }
      console.log("Received message from server:", serverMessage);
    setChat((prevChat) => [
      ...prevChat,
      { user: "Server", message: serverMessage },
    ]);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="border-2 rounded-md p-4 w-full h-40 mb-2">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={msg.user === "Server" ? "text-left" : "text-right"}
          >
            <strong>{msg.user}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <Button onClick={sendMessage}>Send</Button>
    </div>
  );
};

export default Chat;
