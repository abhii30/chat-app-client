import { useState } from "react";
import axios from "axios";
import { Input, Button } from "../components/ui";
const url = "https://chat-app-server-2ibm.onrender.com/api/auth/local";

const Login = ({onLogin,onSwitch}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      if(username || password) {
        const response = await axios.post(url, {
          identifier: username,
          password: password,
        });
        console.log({ response });
        localStorage.setItem("authToken", response.data.jwt);
        localStorage.setItem("user", response.data.user.username);
        onLogin();
      }
      alert("Login successful!");
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-2 w-full">
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"

        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button onClick={handleLogin}>Log In</Button>
      </div>
    </div>
  );
};

export default Login;
