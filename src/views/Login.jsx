import React, { useState } from "react";
import axios from "axios";
import { Input, Button } from "../components/ui";
import { Link } from "react-router-dom";
const url = "http://localhost:1337/api/auth/local";

const Login = ({onLogin}) => {
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
    <div className="flex justify-center">
      <div className="flex flex-col w-1/3 gap-2 ">
        <h1 className="text-center">Login</h1>
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
        {/* <Link to="/signup">Sign Up</Link> */}
      </div>  
    </div>
   
  );
};

export default Login;
