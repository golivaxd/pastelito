// backend/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
