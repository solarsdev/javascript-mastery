const pizza = { name: '🍕', price: 2 };
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1); // shallow copy
console.log('store1', store1);
console.log('store2', store2);

store2.push(sushi);
console.log('store1', store1);
console.log('store2', store2);

pizza.price = 4;
console.log('store1', store1);
console.log('store2', store2);

// Array.from을 이용해서 복사를 하면 배열 내 값들이 복사됨
// 값이 객체의 주소일 경우 주소만 복사됨
// 다른 배열의 객체 실은 동일한 것일 수 있음 (얕은 복사)
// 자바스크립트에서는 복사할때 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign
