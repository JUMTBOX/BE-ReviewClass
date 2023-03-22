const mongoClient = require('./mongoConnect');
const { ObjectId } = require('mongodb');

const UNEXPECTED_MSG = '<br><a href="/">메인 페이지로 이동</a>';

// 전체 게시물
const getAllArticle = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const board = client.db('kdt5').collection('board');

    const allArticleCursor = await board.find({});
    const ARTICLE = await allArticleCursor.toArray();

    res.render('db_board', {
      ARTICLE,
      articleCounts: ARTICLE.length,
      userId: req.session.userId,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message + UNEXPECTED_MSG);
  }
};

// 게시물 추가
const addNewArticle = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const board = client.db('kdt5').collection('board');
    const postArticle = await board.insertOne(
      {
        USERID: req.session.userId,
        TITLE: req.body.title,
        CONTENT: req.body.content,
      },
    );
    if (!postArticle) return res.status(400).send('something went wrong!');
    res.redirect('/dbBoard');
  } catch (err) {
    console.error(err);
    res.status(400).send('something went wrong!');
  }
};
// 게시물 수정 모드로 이동
const toModifyPage = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const board = client.db('kdt5').collection('board');

    const selectedArticle = await board.findOne({
      _id: ObjectId(req.params.id),
    });

    res.render('db_board_modify', { selectedArticle });
  } catch (err) {
    console.error(err);
  }
};

// 게시물 수정
const modifyArticle = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const board = client.db('kdt5').collection('board');
    await board.updateOne(
      { _id: { $eq: ObjectId(req.params.id) } },
      {
        $set: {
          TITLE: req.body.title,
          CONTENT: req.body.content,
        },
      },
    );
    res.status(200).redirect('/dbBoard');
  } catch (err) {
    console.error(err);
    res.status(500).send('something went wrong...!');
  }
};

// 게시물 삭제
const deleteArticle = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const board = client.db('kdt5').collection('board');
    await board.deleteOne({ _id: ObjectId(req.params.id) });
    res.status(200).json('삭제 성공!');
  } catch (err) {
    console.error(err);
    res.status(500).send('something went wrong...!');
  }
};

module.exports = {
  getAllArticle,
  addNewArticle,
  toModifyPage,
  modifyArticle,
  deleteArticle,
};
