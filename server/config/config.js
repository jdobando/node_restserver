// PUERTO

process.env.PORT = process.env.PORT || 3000;

// ENTORNO

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// BASE DE DATOS'

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://userDB:123456abcde@cluster0-shard-00-00-xy0mg.mongodb.net:27017,cluster0-shard-00-01-xy0mg.mongodb.net:27017,cluster0-shard-00-02-xy0mg.mongodb.net:27017/cafe?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin';
}

process.env.URLDB = urlDB;