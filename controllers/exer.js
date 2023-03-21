const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 'mongodb+srv://yjey12:didghdus220@cluster0.fwyixrv.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// client.connect(() => {
//   const member = client.db('kdt5').collection('member');
//   member.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     member.insertMany(
//       [
//         { name: '김은정', age: 22 },
//         { name: '김성현', age: 34 },
//         { name: '백진솔', age: 34 },
//         { name: '박성재', age: 28 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);

//         member.insertOne(
//           { name: '윤제', age: 26 },
//           (insertOneErr, insertOneResult) => {
//             if (insertOneErr) throw insertOneErr;
//             console.log(insertOneResult);

//             member.deleteOne(
//               { name: '백진솔' },
//               (deleteOneErr, deleteOneResult) => {
//                 if (deleteOneErr) throw deleteOneErr;
//                 console.log(deleteOneResult);

//                 member.updateOne(
//                   { name: '윤제', age: 26 },
//                   { $set: { name: '백진솔', age: 34 } },
//                   (updateErr, updateResult) => {
//                     if (updateErr) throw updateErr;
//                     console.log(updateResult);

//                     const find = member.find({ age: { $gte: 25 } });
//                     find.toArray((findErr, findData) => {
//                       if (findErr) throw findErr;
//                       console.log(findData);
//                     });
//                   },
//                 );
//               },
//             );
//           },
//         );
//       },
//     );
//   });
// });

async function main() {
  try {
    await client.connect();
    const member = client.db('kdt5').collection('member');
    await member.deleteMany({});
    await member.insertMany([
      { name: '김은정', age: 22 },
      { name: '김성현', age: 34 },
      { name: '백진솔', age: 34 },
      { name: '박성재', age: 28 },
    ]);
    await member.insertOne({ name: '윤제', age: 26 });
    await member.deleteOne({ name: '백진솔' });
    await member.updateOne({ name: '윤제', age: 26 }, { $set: { name: '백진솔', age: 34 } });
    const find = member.find({ age: { $gte: 25 } });
    const result = await find.toArray();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
main();
