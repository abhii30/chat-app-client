import { useState } from "react";
import axios from "axios";
import { Input, Button } from "../components/ui";

const Signup = ({ onSignup,onSwitch }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "https://chat-app-server-2ibm.onrender.com/api/auth/local/register",
        {
          email,
          username,
          password,
        }
      );
      console.log({ response });
      localStorage.setItem("authToken", response.data.jwt);
      localStorage.setItem("user", response.data.user.username);
      onSignup();
    } catch (error) {
      console.error(error);
      alert("Signup failed");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2 w-full">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
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
        <Button onClick={handleSignup}>Sign Up</Button>
      </div>
    </div>
  );
};

export default Signup;
