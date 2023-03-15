const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mainRouter = require('./routes');
const usersRouter = require('./routes/users');
const boardRouter = require('./routes/board');
const dbRouter = require('./routes/db');

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/board', boardRouter);
app.use('/db', dbRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode);
  res.send('<br> <a href="/board">목록으로</a>');
});

app.listen(PORT, () => {
  console.log(`SERVER IS OPENED AT PORT NO.${PORT}...`);
});
