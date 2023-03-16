const express = require('express');
const boardDB = require('../controllers/boardController');

const Router = express.Router();

// 게시판 페이지 호출
Router.get('/', (req, res) => {
  boardDB.getAllArticles((data) => {
    console.log(data);
    const ARTICLE = data;
    const articleCounts = ARTICLE.length;
    res.render('db_board', { ARTICLE, articleCounts });
  });
});
// 글쓰기 페이지 호출
Router.get('/write', (req, res) => {
  res.render('db_board_write');
});
// 데이터 베이스에 글쓰기
Router.post('/write', (req, res) => {
  if (req.body.title && req.body.content) {
    boardDB.writeArticle(req.body, (data) => {
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
Router.get('/modify/:id', (req, res) => {
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
Router.post('/modify/:id', (req, res) => {
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
Router.delete('/delete/:id', (req, res) => {
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
