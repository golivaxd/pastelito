import React, { useEffect, useState } from "react";
import { fetchUsuarios } from "./api";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetchUsuarios().then(setUsuarios);
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {usuarios.length > 0 ? (
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>
              {usuario.nombre} - {usuario.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay usuarios o no se pudo conectar.</p>
      )}
    </div>
  );
}

export default App;
