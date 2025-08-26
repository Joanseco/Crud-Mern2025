// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

// Sincroniza el modelo con la base de datos
sequelize.sync()
  .then(() => console.log('Conexión a MySQL exitosa y modelos sincronizados'))
  .catch(err => console.log('Error de conexión a MySQL:', err));

app.get('/', (req, res) => {
  res.send('API REST MERN con MySQL funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});