const express = require('express');

const Router = express.Router();

const ARTICLE = [
  {
    title: 'title1',
    content: '맨크조크야',
  },
  {
    title: 'title2',
    content: '고라에용',
  },
  {
    title: 'title3',
    content: '계속 진행해',
  },
];
// 글 목록 보여주기
Router.get('/', (req, res) => {
  res.render('board', { ARTICLE, articleCounts: ARTICLE.length });
});
// 글 쓰기 모드로 이동
Router.get('/write', (req, res) => {
  res.render('board_write');
});
// 글 추가 미들웨어
Router.post('/write', (req, res) => {
  if (req.body.title && req.body.content) {
    const newPost = {
      title: req.body.title,
      content: req.body.content,
    };
    ARTICLE.push(newPost);
    res.redirect('/board');
  } else {
    const err = new Error('SOMETHING WENT WRONG...');
    err.statusCode = 400;
    throw err;
  }
});
// 글 수정 모드로 이동
Router.get('/modify/:title', (req, res) => {
  const arrIndex = ARTICLE.findIndex((el) => el.title === req.params.title);
  const selectedArticle = ARTICLE[arrIndex];
  res.render('board_modify', { selectedArticle });
});
// 글 수정 미들웨어
Router.post('/modify/:title', (req, res) => {
  const arrIndex = ARTICLE.findIndex((el) => el.title === req.params.title);
  if (req.body.title && req.body.content) {
    ARTICLE[arrIndex].title = req.body.title;
    ARTICLE[arrIndex].content = req.body.content;
    res.redirect('/board');
  } else {
    const err = new Error('석 나가네..');
    err.statusCode = 400;
    throw err;
  }
});
// 글 삭제 미들웨어
Router.delete('/delete/:title', (req, res) => {
  const arrIndex = ARTICLE.findIndex((el) => el.title === req.params.title);
  ARTICLE.splice(arrIndex, 1);
  res.send('삭제완료!');
});

module.exports = Router;
