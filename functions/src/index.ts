import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as cors from "cors";
import { Request } from "firebase-functions/v1/https";

admin.initializeApp(functions.config().firebase);

const updateClaims = (uid: string) =>
  admin.auth().setCustomUserClaims(uid, {
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": "user",
      "x-hasura-allowed-roles": ["user"],
      "x-hasura-user-id": uid,
    },
  });

exports.processSignUp = functions.auth
  .user()
  .onCreate((user: any) => updateClaims(user.uid));

exports.refreshToken = functions.https.onRequest((req: Request) => {
  console.log("TOKEN REFRESH", req?.query?.uid);

  cors((req: Request, res: any) => {
    updateClaims(req?.query?.uid as string)
      .then(() => {
        res.status(200).send("success");
      })
      .catch((error: Error) => {
        console.error("REFRESH ERROR", error);
        res.status(400).send(error);
      });
  });
});
