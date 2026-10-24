const http = require('http');

// Elastic Beanstalk inyecta automáticamente el puerto en process.env.PORT
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // Configuramos la respuesta para que el navegador sepa que es texto simple
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('¡Hola Mundo desde AWS Elastic Beanstalk!\n');
});

server.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});