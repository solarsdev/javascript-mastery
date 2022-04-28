// var의 특징 💩
// -> 일반 코딩 방식과 어긋나서 개발하면서도 멘붕이 옴
// -> 코드의 가독성과 유지보수성에 좋지 않음

// 1. 변수 선언하는 키워드 없이 선언과 할당이 가능
// 선언인지 재할당인지 구분이 어려움
something = '💩';
console.log(something);

// 2. 중복 선언이 가능함
// 협업과정에서 나도 모르게 재할당을 해버릴 가능성이 있음
var poo = '💩';
var poo = '💩';
var poo = '💩';
console.log(poo);

// 3. 블록 레벨 스코프 안됨 ❌
var apple = '사과';
{
  var apple = '🍎';
  {
    var apple = '🍏';
  }
}
console.log(apple);

// 4. 함수 레벨 스코프는 지원 됨
function example() {
  var dog = '🐶';
}
//console.log(dog);
