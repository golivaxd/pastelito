import React, { useState, useEffect } from "react";
import { obtenerUsuarios } from "./api";

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsuarios = async () => {
      const data = await obtenerUsuarios(); // Llamada a la API
      if (data) {  // Verifica si los datos están presentes
        setUsuarios(data); // Establece los usuarios en el estado
        setLoading(false);  // Cambia el estado de carga
      } else {
        console.error("No se pudieron obtener los usuarios.");
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Pastelito App 🍰</h1>

      {/* 🔐 FORMULARIO LOGIN */}
      {!logeado && (
        <form onSubmit={handleLogin} style={{ marginBottom: "2rem" }}>
          <input
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Iniciar sesión</button>
          <p>{mensaje}</p>
        </form>
      )}

      {/* 📋 TABLA DE USUARIOS */}
      {logeado && (
        <>
          <h2>Lista de Usuarios</h2>
          {loading ? (
            <p>Cargando usuarios...</p>
          ) : (
            <table border="1" cellPadding="10">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Ubicación</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((u) => (
                  <tr key={u.id_usuario}>
                    <td>{u.id_usuario}</td>
                    <td>{u.nombre_usuario}</td>
                    <td>{u.correo_electronico}</td>
                    <td>{u.ubicacion}</td>
                    <td>{u.tipo_usuario}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}

      <h1 style={{ marginTop: "3rem" }}>NOMAMES YA LA PUDE CONECTAR, SOY UN PENDEJO XD</h1>
      <p>Tamopastelito</p>
    </div>
  );
};

export default App;
