const MongoClient = require('./mongoConnect');

const userDB = {
  userCheck: async (userId) => {
    try {
      const client = await MongoClient.connect();
      const user = client.db('kdt5').collection('user');
      const findUser = user.findOne({ id: userId });
      return findUser;
    } catch (err) {
      console.error(err);
    }
    return console.log('중복 유저체크 완료!');
  },

  registerUser: async (newUser) => {
    try {
      const client = await MongoClient.connect();
      const user = client.db('kdt5').collection('user');
      await user.insertOne(newUser);
      return true;
    } catch (err) {
      console.error(err);
    }
    return console.log('회원가입 처리 완료!');
  },
};

module.exports = userDB;
