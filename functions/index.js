// Importamos functions desde firebasebase-funcions
const functions = require("firebase-functions");
// Importamos firebase-admin para conectarnos con la base de datos
const firebase = require("firebase-admin");
// Importamos el archivo de configuración que descargamos
const config = require("./apis-varias-mias-firebase-adminsdk.json");
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
