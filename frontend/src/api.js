// frontend/src/api.js
const API_URL = "https://pastelito.onrender.com"; // Tu backend de Render

export const fetchUsuarios = async () => {
  try {
    const response = await fetch(`${API_URL}/api/usuarios`);
    if (!response.ok) {
      throw new Error("Error al obtener los usuarios");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("❌ Error en fetchUsuarios:", error);
    return [];
  }
};


