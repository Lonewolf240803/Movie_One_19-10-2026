import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Elastic Beanstalk asigna el puerto automáticamente mediante process.env.PORT
const port = process.env.PORT || 8080;

// Servir los archivos ya compilados de la carpeta dist
app.use(express.static(path.join(__dirname, 'dist')));

// Redirigir el resto de las rutas al index (vital para React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});