const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config(); // Cargar variables de entorno desde .env

// backend/server.js

import authRoutes from "./routes/auth.js"; // importa la ruta
app.use("/api", authRoutes); // usa la ruta


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

app.use(express.json());

// Configuración de CORS
const corsOptions = {
  origin: ["https://pastelito-iota.vercel.app", "http://localhost:3000"], // Permitir solicitudes desde Vercel y local
  credentials: true,  // Si necesitas cookies o headers de autenticación
};
app.use(cors(corsOptions));

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Servidor funcionando con Supabase!");
});

// Ruta para obtener usuarios
app.get("/api/usuarios", async (req, res) => {
  try {
    const { data, error } = await supabase.from("usuarios").select("*");

    if (error) {
      console.error("❌ Error al obtener usuarios:", error.message);
      return res.status(500).json({ mensaje: "Error al obtener usuarios" });
    }

    console.log("✅ Datos obtenidos de Supabase:");
    console.table(data); // Imprime los datos en forma de tabla en la consola

    res.json(data);
  } catch (error) {
    console.error("❌ Error en el servidor:", error);
    res.status(500).json({ mensaje: "Error en el servidor" });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor en ejecución en el puerto ${PORT}`);
});
