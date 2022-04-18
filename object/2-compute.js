const obj = {
  name: '이',
  age: 20,
};

// 코딩하는 시점에, 정적으로 접근이 확정됨
// 코드상에 명시적으로 변수를 선언한 뒤에 사용하고 있음
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용
function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(obj, 'name'));

function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, 'job', 'engineer');
console.log(obj);

function deleteKey(obj, key) {
  delete obj[key];
}
addKey(obj, 'job');
console.log(obj);
