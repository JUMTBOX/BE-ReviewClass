const connection = require('./dbConnect');

const userDB = {
  // 중복회원 찾기
  userCheck: (userID, cb) => {
    connection.query(`SELECT * FROM mydb.user WHERE USERID = '${userID}';`, (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },
  // 회원 가입하기
  registerUser: (newUser, cb) => {
    connection.query(`INSERT INTO mydb.user (USERID, PASSWORD) values ('${newUser.id}', '${newUser.password}');`, (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },
};

module.exports = userDB;
