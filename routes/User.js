const router = require('express').Router()
// //check what .Router() does for our routes (controller)
const {
  signUp,
  login,
} = require('../controllers/User')

// //signing up
// router.post('/signUp', signUp)


// module.exports = router

const express = require('express');
//const router = express.Router();
const User = require('../models/User');

// Check if an account exists for the given email
router.post('/check-account', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  res.json({ accountExists: !!user });
});

// Create a new account with the given email and password
router.post('/signup', signUp);

router.post('/login', login);

module.exports = router;