// backend/middleware/firebaseAuth.js
const admin = require('../firebaseAdmin');

const verifyFirebaseToken = async (req, res, next) => {
  const idToken = req.headers.authorization?.split(' ')[1];
  if (!idToken) return res.status(401).json({ error: 'Unauthorized - No token' });

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken; // Optional: You can use `req.user.uid` to link users to their expenses
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Unauthorized - Token invalid' });
  }
};

module.exports = verifyFirebaseToken;
