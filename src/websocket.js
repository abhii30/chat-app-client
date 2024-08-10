import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket("https://websocket-server-39y6.onrender.com");

client.onopen = () => {
  console.log("WebSocket Client Connected");
};

client.onmessage = (message) => {
  console.log("Received message from server:", message.data);
};

export default client;
