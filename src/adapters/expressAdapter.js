const express = require('express');
const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());

const httpMethods = ['GET', 'POST', 'PUT', 'DELETE'];

const adaptRoute = httpMethods.forEach(method, route, middleware => {
  if (method === 'GET') {
    app.get(route, middleware);
  } else if (method === 'POST') {
    app.post(route, middleware);
  } else if (method === 'PUT') {
    app.put(route, middleware);
  } else if (method === 'DELETE') {
    app.delete(route, middleware);
  } else {
    console.error(`Method HTTP ${method} not found`);
  }
});

const startServer = () => {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    })
}

module.exports = { adaptRoute, startServer };