// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수
// 전달된 당시의 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)이 전달됨
// 그래서 함수는 고차함수 안에서 필요한 순간에 나중에 호출됨
function calculator(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
  return result;
}

calculator(1, 2, add);
calculator(1, 2, multiply);
calculator(3, 3, multiply);
calculator(-1, 3, multiply);
