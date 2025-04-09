import express from "express";
import supabase from "./db.js"; // Importa tu cliente Supabase

const router = express.Router();

// Ruta para obtener usuarios desde Supabase
router.get("/api/usuarios", async (req, res) => {
  try {
    // Llamada a Supabase para obtener los usuarios
    const { data, error } = await supabase.from("usuarios").select("*");

    if (error) {
      // Si hay un error con la consulta
      res.status(500).json({ error: error.message });
    } else {
      // Si la consulta es exitosa, enviar los datos
      res.json(data);
    }
  } catch (error) {
    // Manejo de errores generales
    res.status(500).json({ error: error.message });
  }
});

export default router;
