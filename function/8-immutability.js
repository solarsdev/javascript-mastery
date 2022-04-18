// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는것은 💩
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트 or 값) 만들어서 반환할것
// 원시값 -> 값에 의한 복사
// 객체값 -> 참조에 의한 복사 (메모리 주소)
function display(num) {
  num = 5;
  console.log(num);
}
const value = 4;
display(value);
console.log(value);

// 객체값에서 문제 발생
function displayObject(obj) {
  obj.name = 'alice'; // 💩❌ 외부로부터 주어진 인자를 멋대로 변경 금지
  console.log(obj);
}
const lee = { name: 'lee' };
displayObject(lee);
console.log(lee);

// 올바른 방법
// 이름을 지을때 변경된다는 것을 암시할것
// 새로운 객체를 만들어서 반환할것
function changeName(obj) {
  return { ...obj, name: 'Bob' };
}
