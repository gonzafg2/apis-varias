// Importamos functions desde firebasebase-funcions
const functions = require("firebase-functions");
// Importamos firebase-admin para conectarnos con la base de datos
const firebase = require("firebase-admin");
// Importamos el archivo de configuración que descargamos
const config = require("./adminSDK.json");
// inicializamos nuestra aplicación
firebase.initializeApp({
  credential: firebase.credential.cert(config),
  databaseURL: "https://apis-varias-mias.firebaseio.com", // URL de nuestro proyecto
});

exports.api = functions.https.onRequest((req, res) => {
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "GET") {
    const data = firebase.database().ref("/paso_a_paso"); // Hacemos referencia a la base de datos
    data.on("value", (snapshot) => {
      res.json(snapshot.val()); // El elemento resultante lo exponemos en un archivo JSON
    });
  }
});

exports.pizzeria = functions.https.onRequest((req, res) => {
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "GET") {
    const data = firebase.database().ref("/pizzeria"); // Hacemos referencia a la base de datos
    data.on("value", (snapshot) => {
      res.json(snapshot.val()); // El elemento resultante lo exponemos en un archivo JSON
    });
  }
});

exports.planes_moviles = functions.https.onRequest((req, res) => {
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "GET") {
    const data = firebase.database().ref("/planes_moviles"); // Hacemos referencia a la base de datos
    data.on("value", (snapshot) => {
      res.json(snapshot.val()); // El elemento resultante lo exponemos en un archivo JSON
    });
  }
});

exports.planes_crossfit = functions.https.onRequest((req, res) => {
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "GET") {
    const data = firebase.database().ref("/planes_crossfit"); // Hacemos referencia a la base de datos
    data.on("value", (snapshot) => {
      res.json(snapshot.val()); // El elemento resultante lo exponemos en un archivo JSON
    });
  }
});

exports.visumtech = functions.https.onRequest((req, res) => {
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "GET") {
    const data = firebase.database().ref("/visumtech"); // Hacemos referencia a la base de datos
    data.on("value", (snapshot) => {
      res.json(snapshot.val()); // El elemento resultante lo exponemos en un archivo JSON
    });
  }
});

exports.regiones_comunas = functions.https.onRequest((req, res) => {
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "GET") {
    const data = firebase.database().ref("/regiones_comunas"); // Hacemos referencia a la base de datos
    data.on("value", (snapshot) => {
      res.json(snapshot.val()); // El elemento resultante lo exponemos en un archivo JSON
    });
  }
});

exports.bees = functions.https.onRequest((req, res) => {
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "GET") {
    const data = firebase.database().ref("/bees"); // Hacemos referencia a la base de datos
    data.on("value", (snapshot) => {
      res.json(snapshot.val()); // El elemento resultante lo exponemos en un archivo JSON
    });
  }
});

exports.sucursales_scotia = functions.https.onRequest((req, res) => {
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "GET") {
    const data = firebase.database().ref("/sucursales_scotia"); // Hacemos referencia a la base de datos
    data.on("value", (snapshot) => {
      res.json(snapshot.val()); // El elemento resultante lo exponemos en un archivo JSON
    });
  }
});
