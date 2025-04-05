import React, { useState, useEffect } from "react";
import { obtenerUsuarios } from "./api";

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsuarios = async () => {
      const data = await obtenerUsuarios();
      setUsuarios(data);
      setLoading(false);
    };
    fetchUsuarios();
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {loading ? (
        <p>Cargando usuarios...</p>
      ) : (
        <ul>
          {usuarios.map((usuario, index) => (
            <li key={index}>{usuario.nombre}</li> // Cambia "nombre" según tu modelo de datos
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
