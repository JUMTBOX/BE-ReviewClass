const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 'mongodb+srv://yjey12:didghdus220@cluster0.fwyixrv.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
