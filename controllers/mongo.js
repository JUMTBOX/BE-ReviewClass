const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 'mongodb+srv://yjey12:ghdus220@cluster0.tgbblp4.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: false,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const test = client.db('kdt5').collection('test');
  console.log(test);
  test.deleteMany({}, (deleteErr, deleteResult) => {
    if (deleteErr) throw deleteErr;
    console.log(deleteResult);
    test.insertOne(
      {
        name: 'yang',
        nickName: 'triangle',
      },
      (insertErr, insertResult) => {
        console.log(insertResult);
        // client.close();
      },
    );
  });
});
