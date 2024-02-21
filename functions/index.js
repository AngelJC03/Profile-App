/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.UserInfo1 = functions.https.onRequest((request, response) => {
  response.set("Access-Control-Allow-Origin", "*");
  const db = admin.database();
  const ref = db.ref("Ssqneigv8NWHeLorSwKkkZIAyor2");
  ref.once("value", (snapshot) => {
    const data = snapshot.val();
    const animal = data.animal;
    const height = data.height;
    const image = data.image;
    const name = data.name;
    const number = data.number;

    response.send({"animal": animal, "height": height,
      "image": image, "name": name, "number": number});
  });
});

exports.UserInfo2 = functions.https.onRequest((request, response) => {
  response.set("Access-Control-Allow-Origin", "*");
  const db = admin.database();
  const ref = db.ref("dBBoJ4WTErbdJBk86dUNgRVxHNX2");
  ref.once("value", (snapshot) => {
    const data = snapshot.val();
    const animal = data.animal;
    const height = data.height;
    const image = data.image;
    const name = data.name;
    const number = data.number;

    response.send({"animal": animal, "height": height,
      "image": image, "name": name, "number": number});
  });
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
