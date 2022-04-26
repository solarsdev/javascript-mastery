// 논리연산자 (Logical Operator)
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'someone' };

// object는 null이 아니면 truthy
if (obj1 && obj2) {
  console.log('둘다 true!');
}

// obj1가 true이기 때문에 뒤에는 체크하지 않음
if (obj1 || obj2) {
  console.log('둘다 true!');
}

let result = obj1 && obj2;
console.log(result);

result = obj1 || obj2;
console.log(result);

// 활용예제
// && 조건이 truthy일때, 무언가를 해야 할 경우
// || 조건이 falshy일때, 무언가를 해야 할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없음');
  }
  animal.owner = '바뀐 주인!';
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있음');
  }
  animal.owner = '새로운 주인!';
}
obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할때
let item = { price: 1 };
const price = item && item.price;
console.log(price);

// 기본값을 설정
// default parameter는 null과 undefined인 경우
// || falshy한 경우 값을 설정 (할당)
// null or undefined 외의 공백, 0등과 같은 falshy한 경우까지 처리 가능하기 때문에 유용
function print(message) {
  const text = message || 'Hello';
  console.log(text);
}
print();
