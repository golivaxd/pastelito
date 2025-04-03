const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config(); // Cargar variables de entorno desde .env

// Verificar si las variables de entorno están disponibles
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  console.error("❌ ERROR: Variables de entorno de Supabase no están definidas.");
  process.exit(1); // Termina la ejecución si no están definidas
}

// Crear cliente de Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Para manejar JSON

// Configuración de CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL || "*", // Permitir solicitudes desde el frontend en Vercel
  credentials: true, // Permitir cookies y autenticación si es necesario
};
app.use(cors(corsOptions));

// Ruta de prueba para verificar que el servidor responde
app.get("/", (req, res) => {
  res.send("¡Servidor funcionando con Supabase!");
});

// ✅ Ruta para obtener usuarios desde Supabase
app.get("/api/usuarios", async (req, res) => {
  try {
    const { data, error } = await supabase.from("usuarios").select("*");

    if (error) {
      console.error("❌ Error al obtener usuarios:", error.message);
      return res.status(500).json({ mensaje: "Error al obtener usuarios" });
    }

    res.json(data);
  } catch (error) {
    console.error("❌ Error en el servidor:", error);
    res.status(500).json({ mensaje: "Error en el servidor" });
  }
});

// Escuchar el servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor en ejecución en el puerto ${PORT}`);
});
