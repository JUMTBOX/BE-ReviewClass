const express = require('express');

const Router = express.Router();

Router.get('/', (req, res) => {
  res.cookie('alert', true, {
    expires: new Date(Date.now() + 1000 * 60),
    httpOnly: true,
  });
  console.log(req.cookies);
  res.render('index');
});

module.exports = Router;
