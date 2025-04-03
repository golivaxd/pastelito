import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Para que pueda manejar JSON

// Ruta de prueba para verificar que el servidor responde
app.get("/", (req, res) => {
    res.send("¡Servidor funcionando en Render creoooo!");
});

// ✅ Ruta correcta para obtener usuarios
app.get("/api/usuarios", async (req, res) => {
    try {
        const usuarios = [
            { id: 1, nombre: "Usuario 1" },
            { id: 2, nombre: "Usuario 2" },
        ]; // Simula una respuesta
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener usuarios" });
    }
});

// Escuchar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

