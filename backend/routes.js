// backend/routes.js
import express from 'express';
import supabase from './db.js';

const router = express.Router();

// Obtener lista de usuarios
router.get('/usuarios', async (req, res) => {
    const { data, error } = await supabase.from('Usuarios').select('*');

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

export default router;
