// frontend/src/App.js
import { useEffect, useState } from 'react';
import { getUsuarios } from './api';

function App() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        async function fetchUsuarios() {
            const data = await getUsuarios();
            setUsuarios(data);
        }
        fetchUsuarios();
    }, []);

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <table border="1">
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
                    {usuarios.map(user => (
                        <tr key={user.id_usuario}>
                            <td>{user.id_usuario}</td>
                            <td>{user.nombre_usuario}</td>
                            <td>{user.correo_electronico}</td>
                            <td>{user.ubicacion}</td>
                            <td>{user.tipo_usuario}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
