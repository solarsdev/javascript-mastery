/**
 * 글로벌 컨텍스트의 this
 *  - 브라우저:
 *  - 노드:
 */
const x = 0;
module.exports.x = x;
// commonJS module
console.log(this);
console.log(globalThis); // 전역 객체
//globalThis.setTimeout();
//setTimeout();

// 브라우저
// this -> Window
// globalThis -> Window

console.clear();

/**
 * 함수 내부에서의 this
 * 엄격모드에서는 undefined
 * 느슨한모드에서는 globalThis
 */
function fun() {
  console.log(this);
}
fun();
// 노드에서는 함수 내부에서 this는 globalThis
// use strict를 통해서 엄격모드에서는 함수 내부에서 this를 사용할 수 없음
// 브라우저에서는 Window 객체
// 클래스 내부에서는 인스턴스를 가리킴

/**
 * 생성자 함수 또는 클래스에서의 this
 * 앞으로 생성될 인스턴스 자체
 */
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}
const cat1 = new Cat('냐옹');
const cat2 = new Cat('니야옹');
cat1.printName();
cat2.printName();
