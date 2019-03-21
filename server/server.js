require('./config/config');


const express = require('express');
const mongoose = require('mongoose');


const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(require('./routes/usuario'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true }, (err, res) => {
    // mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
    if (err) throw new err; // SI ERROR TERMINA AQUI.
    console.log('Base de Datos ONLINE'); // SI ES EXITOSO ESTA LINEA SE IMPRIME

});


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto :', process.env.PORT);
})