const fs = require("fs");
const path = require("path");
const admin = require('firebase-admin');

let credential = null;

if (process.env.ENV === 'development') {
    const key = process.env.SERVICE_ACCOUNT_KEY;

    if (!key) {

        credential = admin.credential.applicationDefault();
    } else {
        let cert = null;

        if (path.isAbsolute(key)) {
            cert = JSON.parse(fs.readFileSync(key).toString());
        } else {
            cert = require(key);
        }

        credential = admin.credential.cert(cert);
    }


} else {

    credential = admin.credential.applicationDefault();
}

admin.initializeApp({
    credential: credential
});

module.exports = admin.firestore();