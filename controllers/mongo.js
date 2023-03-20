const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 'mongodb+srv://yjey12:didghdus220@cluster0.fwyixrv.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db('kdt5').collection('test');
  console.log(collection);
  collection.deleteMany({}, (deleteErr, deleteResult) => {
    if (deleteErr) throw deleteErr;
    console.log(deleteResult);
    collection.insertOne(
      {
        name: 'Yang',
        nickName: 'triangle',
      },
      (insertErr, insertResult) => {
        console.log(insertResult);
        const findCursor = collection.find({});
        findCursor.toArray((err, data) => {
          console.log(data);
        });
      },
    );
  });
});
