"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions = require("firebase-functions");
var admin = require("firebase-admin");
var cors = require("cors");
admin.initializeApp(functions.config().firebase);
var updateClaims = function (uid) {
    return admin.auth().setCustomUserClaims(uid, {
        "https://hasura.io/jwt/claims": {
            "x-hasura-default-role": "user",
            "x-hasura-allowed-roles": ["user"],
            "x-hasura-user-id": uid,
        },
    });
};
exports.processSignUp = functions.auth
    .user()
    .onCreate(function (user) { return updateClaims(user.uid); });
exports.refreshToken = functions.https.onRequest(function (req) {
    var _a;
    console.log("TOKEN REFRESH", (_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.uid);
    cors(function (req, res) {
        var _a;
        updateClaims((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.uid)
            .then(function () {
            res.status(200).send("success");
        })
            .catch(function (error) {
            console.error("REFRESH ERROR", error);
            res.status(400).send(error);
        });
    });
});
//# sourceMappingURL=index.js.map