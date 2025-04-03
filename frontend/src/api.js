const API_URL = process.env.REACT_APP_API_URL || "https://pastelito.onrender.com"; // URL del backend en Render

// ✅ Función para obtener usuarios desde la API
export async function obtenerUsuarios() {
  try {
    const response = await fetch(`${API_URL}/api/usuarios`); // Llama a la API en Render
    if (!response.ok) throw new Error("Error en la API");
    return await response.json();
  } catch (error) {
    console.error("❌ Error obteniendo usuarios:", error);
    return [];
  }
}


