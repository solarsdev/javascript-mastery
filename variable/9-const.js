// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
//text = 'hi'; ❌

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
console.log(apple);
apple.name = 'orange';
apple.display = '🍊';
console.log(apple);

// 왜? apple이라는 변수 자체는 const이기 때문에 새로운 주소값을 덮어쓰는것은 안되지만,
// 그 안에 있는 name과 같은 키밸류는 다른 공간 (Heap) 에 할당되어 있는 데이터기 때문에 사용 가능
