// const { MongoClient, ServerApiVersion } = require('mongodb');

// const uri = 'mongodb+srv://yjey12:didghdus220@cluster0.fwyixrv.mongodb.net/?retryWrites=true&w=majority';
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });

// 삽입 쿼리
// async function main() {
//   try {
//     await client.connect();
//     const test = client.db('kdt5').collection('test');
//     await test.deleteMany({});
//     await test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'crong', age: 4 },
//         { name: 'loopy', age: 6 },
//       ],
//     );
//     const findCursor = test.find({ age: { $gte: 5 } });
//     const dataArr = await findCursor.toArray();
//     console.log(dataArr);
//     return dataArr;
//   } catch (err) {
//     console.error(err);
//   }
// }

// main();
// client.connect((err) => {
//   const collection = client.db('kdt5').collection('test');
//   collection.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);
//   });

//   collection.insertOne(
//     {
//       name: 'pororo', age: 5,
//     },
//     (insertErr, insertResult) => {
//       if (insertErr) throw insertErr;
//       console.log(insertResult);
//     },
//   );
// });

// 삭제 쿼리

// client.connect((err) => {
//   const collection = client.db('kdt5').collection('test');
//   collection.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);
//   });

//   collection.insertMany(
//     [
//       { name: 'pororo', age: 5 },
//       { name: 'loopy', age: 6 },
//       { name: 'crong', age: 4 },
//     ],
//     (insertErr, insertResult) => {
//       if (insertErr) throw insertErr;
//       console.log(insertResult);

//       collection.deleteMany(
//         { age: { $gte: 5 } },
//         (deleteManyErr, deleteManyResult) => {
//           if (deleteManyErr) throw deleteManyErr;
//           console.log(deleteManyResult);
//         },
//       );
//     },
//   );
// });

// 업데이트 쿼리
// client.connect(() => {
//   const collection = client.db('kdt5').collection('test');
//   collection.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);
//   });

//   collection.insertMany(
//     [
//       { name: 'pororo', age: 5 },
//       { name: 'loopy', age: 6 },
//       { name: 'crong', age: 4 },
//     ],
//     (insertErr, insertResult) => {
//       if (insertErr) throw insertErr;
//       console.log(insertResult);

//       collection.updateMany(
//         { age: { $gte: 5 } },
//         { $set: { name: '5살 이상인 친구' } },
//         (updateErr, updateResult) => {
//           if (updateErr) throw updateErr;
//           console.log(updateResult);
//         },
//       );
//     },
//   );
// });

// 데이터 찾기 쿼리
// client.connect(() => {
//   const collection = client.db('kdt5').collection('test');
//   collection.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);
//   });

//   collection.insertMany(
//     [
//       { name: 'pororo', age: 5 },
//       { name: 'loopy', age: 6 },
//       { name: 'crong', age: 4 },
//     ],
//     (insertErr, insertResult) => {
//       if (insertErr) throw insertErr;
//       console.log(insertResult);

//       // collection.findOne(
//       //   { name: 'loopy' },
//       //   (findErr, findData) => {
//       //     if (findErr) throw findErr;
//       //     console.log(findData);
//       //   },
//       // );

//       const findCursor = collection.find({});
//       console.log(findCursor);
//       findCursor.toArray((toArrErr, toArrData) => {
//         if (toArrErr) throw toArrErr;
//         console.log(toArrData);
//       });
//     },
//   );
// });
