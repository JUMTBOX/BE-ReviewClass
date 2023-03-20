const userData = {
  name: '양재연',
  age: 28,
  nickName: 'yjey12',
  email: 'yjey12@naver.com',
};

const { name, ...others } = userData;

console.log(others);

const arrNum = [1, 2, 3, 4, 5, 6];

const [first, ...rest] = arrNum;

console.log(first, rest);
// const userInfo = {
//   nickName: 'yjey12',
//   email: 'yjey12@naver.com',
// };

// const yjey = {
//   userData,
//   userInfo,
// };

// const yjey = { ...userData, ...userInfo };
// console.log(yjey);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const arr2 = ['8', '9', '10'];

// const merge = [...arr, ...arr2];
// console.log(arr.concat(arr2));
// console.log(merge);
