// index.js
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { createClient } = require("@supabase/supabase-js");
const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

// LOGIN
app.post("/api/login", async (req, res) => {
  const { correo, password } = req.body;
  const { data: usuario, error } = await supabase
    .from("usuarios")
    .select("*")
    .eq("correo", correo)
    .single();

  if (error || !usuario) return res.status(401).json({ mensaje: "Usuario no encontrado" });

  const esValida = await bcrypt.compare(password, usuario.password);
  if (!esValida) return res.status(401).json({ mensaje: "Contraseña incorrecta" });

  const token = jwt.sign({ id: usuario.id, correo }, process.env.JWT_SECRET, { expiresIn: "2h" });
  res.json({ token, usuario: { id: usuario.id, nombre: usuario.nombre } });
});

// RUTA PROTEGIDA
const verificarToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ mensaje: "No autorizado" });

  try {
    req.usuario = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(403).json({ mensaje: "Token inválido" });
  }
};

app.get("/api/perfil", verificarToken, (req, res) => {
  res.json({ mensaje: "Autenticado como", usuario: req.usuario });
});

app.listen(3000, () => console.log("Servidor en puerto 3000"));
