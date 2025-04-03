import express from "express";
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

export default router;
