// backend/routes/auth.js
const express = require('express');
const admin = require('../firebaseAdmin');
const router = express.Router();

router.post('/verify', async (req, res) => {
  const idToken = req.headers.authorization?.split(' ')[1];
  if (!idToken) return res.status(401).json({ error: 'No token provided' });

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    res.status(200).json({ message: 'User verified', user: decodedToken });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

module.exports = router;
