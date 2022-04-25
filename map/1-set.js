// Set
const set = new Set([1, 2, 3]);
console.log(set);

// 갯수
console.log(set.size);

// 존재하는지 확인
console.log(set.has(2));
console.log(set.has(4));

// 순회
set.forEach((val) => console.log(val));
for (const val of set.values()) {
  console.log(val);
}

// 추가
set.add(4);
console.log(set);
set.add(4);
console.log(set);
// 중복이 안됨

// 삭제
set.delete(4);
console.log(set);

// 전부 다 삭제
set.clear();
console.log(set.size);
console.log(set);

// 오브젝트 셋
const obj1 = { name: 'lee', age: 23 };
const obj2 = { name: 'kim', age: 21 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// 퀴즈
obj1.age = 13;
objs.add(obj1);
console.log(objs);

// 퀴즈
const obj3 = { name: 'kim', age: 21 };
objs.add(obj3);
console.log(objs);
