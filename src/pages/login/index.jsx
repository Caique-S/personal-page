import React, { useState } from "react";
import "./styles.scss"
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
// import { GoogleProvider, signInWithPopup } from 'firebase/auth'

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleGoogleAuth = () => {

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };


  return (
    <div className="login-container" >
      <div className="loginLogo">
        <img src={Logo} alt="Logo da Code Craft" />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button className="loginUser" type="submit">Login</button>
      </form>
      <p>
        Não tem uma conta? <Link to="/register">Registre-se</Link>
      </p>
      <button className="loginGoogle" type="submit" onClick={handleGoogleAuth}>
          Entrar com Google
      </button>
      <button className="loginMicrosoft" type="submit" onClick={handleGoogleAuth}>
          Entrar com Microsoft
      </button>
    </div>
  );
};
