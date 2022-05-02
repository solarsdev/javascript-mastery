// 동결! Object.freeze()
// 추가, 삭제, 쓰기, 속성 재정의 불가 ❌
// (단, 얕은 freeze로 작동함)
// -> 중첩되어 있는 객체의 경우에는 수정이 가능함 (딥하게 들어가면서 얼려주지 않음)
const lee = { name: 'lee' };
const dog = { name: '와우', emoji: '🐶', owner: lee };

Object.freeze(dog);
dog.name = '멍멍';
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);

// shallow
lee.name = '이상국';
console.log(dog);

// 밀봉 Object.seal()
// 값의 수정은 가능하나 ✅
// 키의 추가, 삭제, 속성 재정의 불가능 ❌
const cat = { ...dog };
//Object.assign(cat, dog);
Object.seal(cat);
cat.name = '냐옹';
console.log(cat);
delete cat.emoji;
console.log(cat);

// 동결여부 확인
console.log(Object.isFrozen(dog));
// 밀봉여부 확인
console.log(Object.isSealed(cat));

// 확장 금지 preventExtensions()
// 새로운 속성 추가 금지 ❌
// 그 외에는 전부 가능 ✅
const tiger = { name: '호랑' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '호랑호랑';
console.log(tiger);
delete tiger.name;
console.log(tiger);
