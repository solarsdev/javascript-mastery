// Spread Operator, 전개구문
// 모든 Iterable은 Spread될 수 있음
// 순회가 가능한 모든 것들은 펼쳐질수 있음
// function (...iterable)
// [...iterable]
// {...iterable}
// ES 2018
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums));

// Rest parameters
function sum(...nums) {
  return nums.reduce((result, num) => result + num);
}
console.log(sum(1, 2, 3, 4, 5, 6));

// Array Concat
const fruits1 = ['🍏', '🥝'];
const fruits2 = ['🍓', '🍌'];
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1, '🍕', ...fruits2];
console.log(arr);

// Object
const lee = { name: 'lee', age: 22 };
const updated = {
  ...lee,
  job: 'engineer',
};
console.log(lee);
console.log(updated);
