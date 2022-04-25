// Iterable : 순회가 가능하다는 것
// [Symbol.iterator](): IterableIterator<T>;
// 심볼 정의를 가진 객체나, 특정한 함수가 IterableIterator<T>를 리턴한다는 것은
// 순회 가능한 객체라는것을 의미함
// 순회가 가능하면 무엇이 가능한가?
// -> 반복문, 연산자들을 사용할 수 있다는 것
const array = [1, 2, 3];
console.log(array.values()); // Object [Array Iterator]{}
console.log(array.entries());
console.log(array.keys());

// iterator 사용방법
const iterator = array.values();
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
for (let item of array.values()) {
  console.log(item);
}

const obj = { id: 123, name: 'tester' };
// object is not iterable
// for (const item of obj) {
//   console.log(item);
// }
for (const key in obj) {
  console.log(key);
}
