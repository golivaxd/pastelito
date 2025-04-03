// frontend/src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Cambia por la URL del backend en Render

export const getUsuarios = async () => {
    const response = await axios.get(`${API_URL}/usuarios`);
    return response.data;
};
