const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { createClient } = require('@supabase/supabase-js');

// Cargar las variables de entorno
dotenv.config();

// Crear cliente de Supabase
const supabase = createClient(
  process.env.SUPABASE_URL, 
  process.env.SUPABASE_ANON_KEY
);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Para manejar JSON

// Ruta de prueba para verificar que el servidor responde
app.get("/", (req, res) => {
  res.send("¡Servidor funcionando con Supabase!");
});

// ✅ Ruta correcta para obtener usuarios desde Supabase
app.get("/api/usuarios", async (req, res) => {
  try {
    // Hacer una consulta a la tabla usuarios de Supabase
    const { data, error } = await supabase
      .from("usuarios") // Reemplaza "usuarios" con el nombre de tu tabla
      .select("*"); // Selecciona todas las columnas

    if (error) {
      console.log("Error al obtener usuarios:", error.message);
      return res.status(500).json({ mensaje: "Error al obtener usuarios" });
    }

    // Si todo va bien, devuelve los datos
    res.json(data);
  } catch (error) {
    console.log("Error en el servidor:", error);
    res.status(500).json({ mensaje: "Error en el servidor" });
  }
});

// Escuchar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
