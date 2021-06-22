import { firestore } from "../config/firebase";

async function getUsername() {
  const db = firestore;
  const usernameRef = db.collection("username").doc("k4kbpEP1sdMmYz9F4OgU");
  const doc = await usernameRef.get();

  if (!doc.exists) {
    console.log("No such document!");
  } else {
    console.log("Document data:", doc.data());
  }
}

export { getUsername };
// var faunadb = require("faunadb");

// const q = faunadb.query;
// const client = new faunadb.Client({
//   secret: "dnAEL_I8uhACBzK1gikyIRKmY2uZiL74XgSyh_JS",
// });

// export { client, q };