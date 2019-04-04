// PUERTO

process.env.PORT = process.env.PORT || 3000;

// ENTORNO

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// BASE DE DATOS'

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {

    urlDB = process.env.MONGO_URI;

    // MONGO_URI CREADA EN HEROKU.COM SITE COMO VARIABLE / IMPOSIBLE POR LINEA DE COMANDOS 
    //   urlDB = 'mongodb://JDOP:123456abcde@cluster0-shard-00-00-xy0mg.mongodb.net:27017,cluster0-shard-00-01-xy0mg.mongodb.net:27017,cluster0-shard-00-02-xy0mg.mongodb.net:27017/cafe?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin';

}
process.env.URLDB = urlDB;


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://JDOP:<password>@cluster0-xy0mg.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

//mongodb://userDB:123456abcde@cluster0-shard-00-00-xy0mg.mongodb.net:27017,cluster0-shard-00-01-xy0mg.mongodb.net:27017,cluster0-shard-00-02-xy0mg.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin