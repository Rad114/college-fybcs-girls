// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String // administrator, faculty, staff, or student
});

const User = mongoose.model('User', userSchema);

module.exports = User;