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
    <div>
      <h1>Lista de Usuarios</h1>
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
    </div>
  );
};

export default App;
