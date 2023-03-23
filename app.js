const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');

require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(cookieParser('0613'));
app.use(
  session({
    secret: '0613',
    resave: false,
    saveUninitialized: true,
    // cookie: {
    //   maxAge: 1000 * 60 * 60,
    // },
  }),
);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mainRouter = require('./routes');
const usersRouter = require('./routes/users');
const boardRouter = require('./routes/board');
const dbRouter = require('./routes/db');
const dbBoardRouter = require('./routes/dbBoard');
const cookieRouter = require('./routes/cookie');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/board', boardRouter);
app.use('/db', dbRouter);
app.use('/dbBoard', dbBoardRouter);
app.use('/cookie', cookieRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode);
  res.send('<br> <a href="/board">목록으로</a>');
});

app.listen(PORT, () => {
  console.log(`SERVER IS OPENED AT PORT NO.${PORT}...`);
});
