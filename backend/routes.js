// backend/routes/auth.js
import express from "express";
import supabase from "../db.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("❌ Error de login:", error.message);
      return res.status(401).json({ mensaje: "Credenciales incorrectas" });
    }

    return res.status(200).json({
      mensaje: "Login exitoso",
      usuario: data.user,
      token: data.session.access_token,
    });
  } catch (err) {
    console.error("❌ Error en el servidor:", err);
    return res.status(500).json({ mensaje: "Error interno del servidor" });
  }
});

export default router;


/*import express from "express";
// import pool from "./db.js"; // Para MySQL/PostgreSQL
import supabase from "./db.js"; // Para Supabase

const router = express.Router();

router.get("/api/usuarios", async (req, res) => {
  try {
    //const [rows] = await pool.query("SELECT * FROM usuarios"); // Para MySQL/PostgreSQL
    const { data, error } = await supabase.from("usuarios").select("*"); // Para Supabase
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router; */
