import { useEffect, useState } from "react";
import { obtenerUsuarios } from "./api";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    obtenerUsuarios().then(setUsuarios);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Lista de Usuarios</h1>

      {usuarios.length === 0 ? (
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
}

export default App;
