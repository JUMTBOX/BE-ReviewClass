const express = require('express');
const userDB = require('../controllers/userController');

const Router = express.Router();

Router.get('/', (req, res) => {
  res.render('login');
});

Router.post('/', (req, res) => {
  userDB.userCheck(req.body.id, (data) => {
    if (data.length === 1) {
      if (data[0].PASSWORD === req.body.password) {
        // 세션 생성
        req.session.login = true;
        req.session.userId = req.body.id;
        // 로그인 쿠키 발행
        res.cookie('user', req.body.id, {
          maxAge: 1000 * 30,
          httpOnly: true,
          signed: true,
        });
        res.status(200).redirect('/dbBoard');
      } else {
        res.status(400).send('비밀번호가 틀립니다!<br> <a href="/login">로그인으로 이동</a>');
      }
    } else {
      res
        .status(400)
        .send('ID가 존재하지 않습니다!<br> <a href="/register">회원가입으로 이동</a>');
    }
  });
});

Router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.clearCookie('user');
    res.redirect('/');
  });
});

module.exports = Router;
