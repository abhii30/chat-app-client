import React from "react";
import { Button } from "../components/ui";

const Logout = ({ setAuthToken }) => {
  const handleLogout = () => {
    setAuthToken(null);
    alert("Logged out successfully!");
  };

  return <Button onClick={handleLogout}>Log Out</Button>;
};

export default Logout;
