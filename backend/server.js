const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Cargar variables de entorno

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('¡Servidor funcionando en Render creoooo!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
