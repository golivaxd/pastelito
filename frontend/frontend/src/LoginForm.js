import { useState } from "react";
import { login } from "./api";

const LoginForm = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await login(correo, password);
    setMensaje(res ? "✅ Sesión iniciada" : "❌ Credenciales inválidas");
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Iniciar sesión</button>
      <p>{mensaje}</p>
    </form>
  );
};

export default LoginForm;
