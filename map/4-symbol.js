// Symbol 심볼
// 유일한 키를 생성할 수 있음
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
// map.set(key1, 'Hello');
// console.log(map.get(key2));
// console.log(key1 === key2);

const key1 = Symbol('key');
const key2 = Symbol('key');
map.set(key1, 'Hello');
console.log(map.get(key2));
console.log(key1 === key2);

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2);

console.log(Symbol.keyFor(k1));
console.log(Symbol.keyFor(key1));

// 심벌을 언제 사용?
// Map에서 key를 사용할때 문자열 대신에 symbol을 사용하면 유니크한 키를 만들어낼 수 있음
// object에서도 symbol 사용 가능
const obj = { [k1]: 'Hello', [Symbol('key')]: 1 };
console.log(obj);
console.log(obj[Symbol('key')]);
