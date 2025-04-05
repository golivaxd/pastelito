// src/api.js

const API_URL = "https://pastelito.onrender.com"; // URL de tu backend en Render

export async function obtenerUsuarios() {
  try {
    const res = await fetch(`${API_URL}/api/usuarios`);
    if (!res.ok) {
      throw new Error("Error al obtener usuarios");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("❌ Error en la API:", error);
    return [];
  }
}
