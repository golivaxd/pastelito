// src/App.js
import React, { useState } from "react";
import { login } from "./api";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      alert("✅ Bienvenido " + data.usuario.email);
      console.log("Token:", data.token); // puedes guardarlo en localStorage si quieres
    } catch (error) {
      alert("❌ Error: " + error.message);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default App;
