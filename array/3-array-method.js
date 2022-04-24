// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ['🍌', '🍎', '🍇', '🍊'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('🍎'));

// 배열안에 특정한 아이템이 있는지
console.log(fruits.includes('🍎'));

// 추가 1. 제일 뒤에 추가
console.log(fruits.push('🍑')); // 배열 자체를 수정 (업데이트)
console.log(fruits);

// 추가 2. 제일 앞에 추가
console.log(fruits.unshift('🍉')); // 배열 자체를 수정 (업데이트)
console.log(fruits);

// 제거 1. 제일 뒤를 제거
console.log(fruits.pop()); // 배열 자체를 수정 (업데이트)
console.log(fruits);

// 제거 2. 제일 앞을 제거
console.log(fruits.shift()); // 배열 자체를 수정 (업데이트)
console.log(fruits);

// 중간을 제거
console.log(fruits.splice(1, 1));
console.log(fruits);

// 중간에 추가
console.log(fruits.splice(1, 0, '🍎', '🍓'));
console.log(fruits);

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2);
console.log(newArr);
console.log(fruits);

// slice 아무것도 전달하지 않을때
newArr = fruits.slice();
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 배열의 순서를 거꾸로 변경
const arr4 = arr3.reverse();
console.log(arr4);

console.clear();
// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr);
console.log(arr.flat(2));
arr = arr.flat(3);

// 특정한 값으로 배열을 채우기
arr.fill(0);
console.log(arr);

arr.fill('s', 1, 4);
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join(' | ');
console.log(text);
