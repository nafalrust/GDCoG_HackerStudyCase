const express = require('express');
const router = express.Router();

// Mock example
router.get('/', (req, res) => {
  res.json({ users: ['User1', 'User2'] });
});

module.exports = router;
