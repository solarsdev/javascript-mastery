// 자바스크립트의 함수는 만능 슈퍼맨
// 함수처럼 사용도 가능하지만, 생성자 함수로도 사용 가능 (클래스)
// 옛날 자바스크립트는 클래스가 없었기 때문에 허용했었음
// 하지만, 이걸 위해서 불필요한 프로토타입 객체가 필요함 (데이터의 집합 -> 사용하지 않는다면 불필요)
const dog = {
  name: 'Dog',
  play: () => {
    // 좋지 못한 예
    // 객체의 키로 함수를 만들게 되면 함수의 프로토타입형으로 만들어 지게 됨
    console.log('논다멍');
  },
};
dog.play();
// const obj = new dog.play(); // ...
// console.log(obj);

// ES6
const cat = {
  name: 'cat',
  play() {
    // 객체의 메소드 (오브젝트에 속한 함수)
    console.log('냥');
  },
};
cat.play();
// const obj1 = new cat.play();
// cat.play는 생성자가 아님
// 즉, 객체의 메소드로 함수를 생성하면 객체의 생성자로는 사용할 수 없음

/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔
 * 2. 생성자 함수로 사용이 불가능 (무거운 프로토타입이 없음)
 * 3. 함수 자체 arguments가 없음
 * 4. this에 대한 바인딩이 정적으로 결정됨
 *    - 함수를 감싸고 있는, 바로 상위 스코프의 this에 정적으로 바인딩
 */

function sum(a, b) {
  console.log(arguments);
}
sum(1, 2);

const add = (a, b) => {
  console.log(arguments); // arrow함수 외부의 arguments를 참조함
};
add(1, 2);

const printArrow = () => {
  console.log(this);
};
printArrow();
cat.printName = printArrow;
cat.printName();
