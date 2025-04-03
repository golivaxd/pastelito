const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();


dotenv.config(); // Carga variables de entorno

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 🔥 Conexión a Supabase
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

// ✅ Ruta para obtener usuarios desde Supabase
app.get("/api/usuarios", async (req, res) => {
    try {
        const { data, error } = await supabase.from("usuarios").select("*");

        if (error) throw error;
        res.json(data);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener usuarios", error });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});


