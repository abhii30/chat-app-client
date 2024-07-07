import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket("https://chat-app-server-1-0xee.onrender.com");

client.onopen = () => {
    console.log("WebSocket Client Connected");
};
 
client.onmessage = (message) => {
    console.log("Received message from server:", message.data);
};

export default client;
