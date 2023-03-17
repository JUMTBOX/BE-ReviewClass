const express = require('express');
const boardDB = require('../controllers/boardController');

const Router = express.Router();

// 로그인 확인용 미들웨어
function isLogin(req, res, next) {
  if (req.session.login) {
    next();
  } else {
    res
      .status(404)
      .send(
        '로그인이 필요한 서비스 입니다! <br> <a href="/login">로그인으로 이동</a>',
      );
  }
}
// 게시판 페이지 호출
Router.get('/', isLogin, (req, res) => {
  boardDB.getAllArticles((data) => {
    console.log(data);
    const ARTICLE = data;
    const articleCounts = ARTICLE.length;
    const { userId } = req.session;
    res.render('db_board', { ARTICLE, articleCounts, userId });
  });
});
// 글쓰기 페이지 호출
Router.get('/write', isLogin, (req, res) => {
  res.render('db_board_write');
});
// 데이터 베이스에 글쓰기
Router.post('/write', (req, res) => {
  console.log(req.sessionID);
  if (req.body.title && req.body.content) {
    boardDB.writeArticle(req.body, req.session.userId, (data) => {
      console.log(data);
      if (data.affectedRows >= 1) {
        res.redirect('/dbBoard');
      } else {
        const err = new Error('글 쓰기 실패!');
        err.statusCode = 500;
        throw err;
      }
    });
  } else {
    const err = new Error('글 제목 또는 내용이 없습니다.');
    err.statusCode = 400;
    throw err;
  }
});
// 글 수정 모드로 이동
Router.get('/modify/:id', isLogin, (req, res) => {
  boardDB.getArticle(req.params.id, (data) => {
    if (data.length > 0) {
      res.render('db_board_modify', { selectedArticle: data[0] });
    } else {
      const err = new Error('해당 ID값을 가지는 게시글이  없습니다.');
      err.statusCode = 500;
      throw err;
    }
  });
});
// 글 수정
Router.post('/modify/:id', isLogin, (req, res) => {
  if (req.body.title && req.body.content) {
    boardDB.modifyArticle(req.params.id, req.body, (data) => {
      if (data.affectedRows >= 1) {
        res.redirect('/dbBoard');
      } else {
        const err = new Error('글 수정 실패');
        err.statusCode = 500;
        throw err;
      }
    });
  } else {
    const err = new Error('글 제목 또는 내용이 없습니다.');
    err.statusCode = 400;
    throw err;
  }
});
// 글 삭제
Router.delete('/delete/:id', isLogin, (req, res) => {
  if (req.params.id) {
    boardDB.deleteArticle(req.params.id, (data) => {
      if (data.affectedRows >= 1) {
        res.status(200).send('삭제 성공!');
      } else {
        const err = new Error('글 삭제 실패!');
        err.statusCode = 500;
        throw err;
      }
    });
  } else {
    const err = new Error('삭제 실패!');
    err.statusCode = 400;
    throw err;
  }
});

Router.get('/getAll', (req, res) => {
  boardDB.getAllArticles((data) => {
    res.send(data);
  });
});

module.exports = Router;
