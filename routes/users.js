const express = require('express');

const Router = express.Router();

Router.get('/', (req, res) => {
  res.render('users', { user: 'calm회원님 반갑습니다!' });
});

module.exports = Router;
