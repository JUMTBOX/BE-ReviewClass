const express = require('express');
const userDB = require('../controllers/userController');

const Router = express.Router();

Router.get('/', (req, res) => {
  userDB.getUsers((data) => {
    res.send(data);
  });
});

module.exports = Router;
