const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mainRouter = require('./routes');
const usersRouter = require('./routes/users');
const boardRouter = require('./routes/board');
const dbRouter = require('./routes/db');
const dbBoardRouter = require('./routes/dbBoard');
const cookieRouter = require('./routes/cookie');

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/board', boardRouter);
app.use('/db', dbRouter);
app.use('/dbBoard', dbBoardRouter);
app.use('/cookie', cookieRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode);
  res.send('<br> <a href="/board">목록으로</a>');
});

app.listen(PORT, () => {
  console.log(`SERVER IS OPENED AT PORT NO.${PORT}...`);
});
