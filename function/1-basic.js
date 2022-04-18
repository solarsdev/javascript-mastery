function add(a, b) {
  console.log('function add is called!');
  return a + b;
}

const result = add(1, 2);
console.log(result);

// 함수 사용 예제
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
let lastName = '김';
let firstName = '지수';
console.log(fullName(firstName, lastName));

let lastName2 = '이';
let firstName2 = '상국';
console.log(fullName(firstName2, lastName2));
