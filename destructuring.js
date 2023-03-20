// // 배열 구조 분해 전
// const arr = [1, 2, 3];
// const one = arr[0];
// const two = arr[1];
// const three = arr[2];

// console.log(one, two, three);

// // 배열 구조 분해 사용

// const [deOne, deTwo, deThree] = arr;

// console.log(deOne, deTwo, deThree);

// 날짜
// const today = new Date();

// console.log(today);

// const formatDay = today.toISOString().substring(0, 10).split('-');
// console.log(formatDay);

// const [year, month, day] = formatDay;

// console.log(year, month, day);

// 객체 구조 분해 할당 전
const obj = { firstName: '재연', lastName: '양' };

// const firstName = obj.firstName;
// const lastName = obj.lastName;

// console.log(lastName, firstName);

const { firstName, lastName } = obj;

console.log(lastName, firstName);

const person = {
  name: 'yang',
  address: {
    zipcode: '03068',
    city: 'seoul',
  },
};

const {
  address: { zipcode, city },
} = person;

console.log(zipcode, city);
