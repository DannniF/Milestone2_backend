const bcrypt = require('bcrypt');
const User = require('../models/User');
const app = require('express');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "asdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm"

async function signUp(req, res) {
  const { name: { firstName, lastName }, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  const user = new User({ 
    name: { firstName, lastName }, 
    email, 
    password: encryptedPassword 
  });
  
  try {
    await user.save();
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

async function login(req, res) { 
  console.log(req.body)
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(500).json({ error: 'User not found' });
  }
  //check if password is equal to user password
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({},JWT_SECRET);

    return res.json({status: "ok", data: token});
  } else {
    return res.status(500).json({ status: 'error', error: 'Invalid user name or password' });
  }

}

module.exports = {
  signUp,
  login,
}
