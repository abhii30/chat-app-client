import { useState } from "react";
import { Login, SignUp, Chat } from "./views";
import { Button } from "./components/ui";
import "./App.css";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = () => setAuthenticated(true);
  const handleSignup = () => setAuthenticated(true);
  const toggleView = () => setShowLogin(!showLogin);

  return (
    <div className="app">
      {authenticated ? (
        <Chat />
      ) : (
        <div className="flex justify-center ">
          <div className="w-1/2 flex flex-col">
            <div className="flex justify-center gap-10 mb-2">
              <p
                onClick={() => setShowLogin(false)}
                className={`cursor-pointer ${
                  !showLogin ? "border-b border-black" : ""
                }`}
              >
                Sign Up
              </p>
              <p
                onClick={() => setShowLogin(true)}
                className={`cursor-pointer ${
                  showLogin ? "border-b border-black" : ""
                }`}
              >
                Log In
              </p>
            </div>
            {showLogin ? (
              <Login onLogin={handleLogin} onSwitch={toggleView} />
            ) : (
              <SignUp onSignup={handleSignup} onSwitch={toggleView} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
