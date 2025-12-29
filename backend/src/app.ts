import express from 'express';
import dotenv from 'dotenv';
import { db } from './config/db.ts';
import cors from 'cors'; 
import type { Request, Response } from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json());

import taskRoutes from './routes/taskRoutes.js';
app.use('/api', taskRoutes);


// Ruta de prueba
app.get('/', (req: Request, res: Response) => {
  res.send('Backend funcionando correctamente');
});

async function testConnection() {
  try {
    const [rows] = await db.query('SELECT 1');
    console.log('Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('Error conectando a la base de datos:', error);
  }
}

testConnection();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
