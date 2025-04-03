const API_URL = 'https://pastelito.onrender.com/api'; // Nueva URL del backend

export const getUsuarios = async () => {
    const response = await axios.get(`${API_URL}/usuarios`);
    return response.data;
};
