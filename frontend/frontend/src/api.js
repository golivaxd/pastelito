// src/api.js
export const login = async (email, password) => {
  try {
    const response = await fetch("https://pastelito.onrender.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.mensaje || "Error al iniciar sesión");
    }

    return data;
  } catch (error) {
    console.error("❌ Error en login:", error);
    throw error;
  }
};

/*export const obtenerUsuarios = async () => {
    try {
      const response = await fetch('https://pastelito.onrender.com/api/usuarios');
      if (!response.ok) {
        throw new Error("Error al obtener los usuarios");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error en la API:", error);
    }
  };*/
  