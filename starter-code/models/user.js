'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User', {
  username: {
    type: String,
    unique: true,
    required: [true, 'Username is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  }
});

module.exports = User;