// typeof: 데이터 타입을 확인
// 값을 타입 문자열로 반환
let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 1;
console.log(typeof variable);

variable = false; // 실행 시점에 할당 데이터에 따라 타입이 결정됨
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);
