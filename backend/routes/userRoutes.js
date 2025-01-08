// backend/routes/api.js
import express from 'express';
const router = express.Router();

// Example route
router.route('/login').post((req, res) => {
  res.send('This is an example login route!');
});

router.route('/register').post((req, res) => {
  res.send('This is an example register route!');
});

export default router;
