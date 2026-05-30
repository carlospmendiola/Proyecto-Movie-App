const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
    "origin": [
        /^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/
    ],
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 200
}));
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ ok: true, msg: 'API Movie App funcionando' })
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})
