// src/api.js

// ✅ Función para obtener usuarios
export const obtenerUsuarios = async () => {
  try {
    const response = await fetch("https://pastelito.onrender.com/api/usuarios");
    if (!response.ok) throw new Error("Error al obtener usuarios");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("❌ Error en la API:", error);
    return null;
  }
};

// ✅ Función para login
export const login = async (correo, contrasena) => {
  try {
    const response = await fetch("https://pastelito.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correo, contrasena }),
    });

    if (!response.ok) {
      throw new Error("Error al iniciar sesión");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("❌ Error en login:", error);
    return null;
  }
};
