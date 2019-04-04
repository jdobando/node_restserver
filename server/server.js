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
    if (err) throw err; // SI ERROR TERMINA AQUI.
    console.log('Base de Datos ONLINE'); // SI ES EXITOSO ESTA LINEA SE IMPRIME

});


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto :', process.env.PORT);
})


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://JDOP:<password>@cluster0-xy0mg.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

//mongodb://userDB:123456abcde@cluster0-shard-00-00-xy0mg.mongodb.net:27017,cluster0-shard-00-01-xy0mg.mongodb.net:27017,cluster0-shard-00-02-xy0mg.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin