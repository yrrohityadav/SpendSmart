const admin = require('firebase-admin');
const serviceAccount = require('./firebase-service-key.json'); // Make sure this file exists!

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
