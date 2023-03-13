const express = require('express');

const Router = express.Router();

Router.get('/', (req, res) => {
  res.render('index', { msg: '이 메시지는 서버에서 보냈어요!' });
});

module.exports = Router;
