export const obtenerUsuarios = async () => {
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
  };
  