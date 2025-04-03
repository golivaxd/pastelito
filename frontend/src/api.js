import axios from 'axios';

// Detectar si estamos en desarrollo o producción
const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://pastelito.onrender.com/api'  // URL del backend en producción
    : 'http://localhost:5000/api';          // URL en desarrollo

export const getUsuarios = async () => {
    const response = await axios.get(`${API_URL}/usuarios`);
    return response.data;
};
