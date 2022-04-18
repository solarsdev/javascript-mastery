// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
let add = function (a, b) {
  return a + b;
}; // 무명 함수
console.log(add(1, 2));
// 표현식으로 정의한 함수는 외부에서 접근이 불가능하기 때문에 무명함수를 많이 사용함

// 화살표 함수 const name = () => { }
add = (a, b) => a + b;
console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 객체파트에서 다룸

// IIFE - Immediately-Invoked Function Expressions
(function run() {
  console.log('😜');
})();
