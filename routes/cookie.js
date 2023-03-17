const express = require('express');

const Router = express.Router();

Router.get('/', (req, res) => {
  res.render('cookie');
});

Router.get('/cook', (req, res) => {
  res.cookie('alert', true, {
    maxAge: 1000 * 5,
    httpOnly: false,
  });
  res.status(200).json('내가 만든 쿠키');
});

module.exports = Router;
