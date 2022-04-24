// 배열 생성 방법
let array = new Array(3);
console.log(array);

array = new Array(1, 2, 3); // 생성자함수를 이용
console.log(array);

array = Array.of(1, 2, 3, 4, 5); // static 함수
console.log(array);

const anotherArray = [1, 2, 3, 4];
console.log(anotherArray);

// iterable - 순회가 가능한 것들 (문자열, 배열)
array = Array.from(anotherArray); // static 함수
console.log(array);

array = Array.from('text'); // static 함수
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야함
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않을 수 있음
// Object와 비슷함
// 자바스크립트에서의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체 (object)
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Typed Collections)
array = Array.from({
  0: '안',
  1: '녕',
  length: 2,
});
console.log(array);
