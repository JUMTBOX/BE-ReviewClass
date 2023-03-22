const express = require('express');
const { registerUser } = require('../controllers/userController');

const Router = express.Router();

// 회원가입 페이지 이동
Router.get('/', (req, res) => {
  res.render('register');
});

// 회원 가입
Router.post('/', registerUser);

// 기존 회원 가입 라우터

// Router.post('/', async (req, res) => {
//   const duplicatedUser = await userDB.userCheck(req.body.id);
//   if (!duplicatedUser) {
//     const registerResult = await userDB.registerUser(req.body);
//     if (registerResult) {
//       res
//         .status(200)
//         .send('회원 가입 성공! <br> <a href="/login">로그인으로 이동</a>');
//     } else {
//       res
//         .status(500)
//         .send(
//           '회원 가입 실패! <br> <a href="/register">회원가입으로 이동</a>',
//         );
//     }
//   } else {
//     res
//       .status(400)
//       .send(
//         '동일한 ID를 가진 회원이 존재합니다! <br> <a href="/register">회원가입으로 이동</a>',
//       );
//   }
// });

module.exports = Router;
