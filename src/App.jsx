import React, { useState } from "react";
import { Login, SignUp, Logout, Chat, Message } from './views';
import './App.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => setAuthenticated(true);
  const handleSignup = () => setAuthenticated(true);

  return (
    <div className="app">
      {authenticated ? (
        <Chat/>
      ) : (
        <>
          <Login onLogin={handleLogin} />
          <SignUp onSignup={handleSignup} />
        </>
      )}
    </div>
  );
}

export default App;
