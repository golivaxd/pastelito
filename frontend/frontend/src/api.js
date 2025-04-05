// src/api.js

const API_URL = "https://pastelito.onrender.com/api/usuarios";

export async function obtenerUsuarios() {
  try {
    const res = await fetch(`${API_URL}/api/usuarios`);
    if (!res.ok) throw new Error("Error al obtener usuarios");
    return await res.json();
  } catch (error) {
    console.error("❌ Error en la API:", error);
    return [];
  }
}
