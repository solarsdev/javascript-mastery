const text = 'hello';
function func() {
  console.log(text);
}
func();

// 중첩된 함수에서 내부 함수에서 외부 함수로의 데이터에 접근이 가능
// 내부 함수와 외부 함수가 같이 엮여 있어서 하나의 그릅 (닫혀있는) 으로 구성되어 있는 것

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  inner();
}
//outer();
const func1 = outer;
func1();
func1();
