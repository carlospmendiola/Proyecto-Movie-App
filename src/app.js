const express = require('express');
const cors = require('cors');
require('dotenv').config();

const dbConnect = require('./utils/mongoConnect');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  "origin": [
    /^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/  // Permitir desde origines locales (localhost, 127.0.0.1 y ::1)
  ],
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",              // Permitir el uso de los métodos HTTP especificados
  "preflightContinue": false,                               // Cors es un middleware, cuando funciona por defecto da una respuesta y no pasa al siguiente middleware con next, es el comportamiento que de momento nos hace falta, nos aseguramos especificando el valor por defecto.
  "optionsSuccessStatus": 200                               // Espcificamos que en caso de resultado positivo el código de respuesta sea siempre 200, es útil para ciertos dispositivos antiguos y embebidos que usan otros códigos distintos y pueden dar problemas
}));
app.use(express.json());

process.env.MONGO_DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;
dbConnect().catch((error) => { console.log(error) });

app.get('/', (req, res) => {
  res.json({ ok: true, msg: 'API Movie App funcionando' });
});

app.use('/populateDB', require("./rutas/populateDB.route"));

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
