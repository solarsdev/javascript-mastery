// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다
const fruits = ['🍏', '🥝', '🍓', '🍌'];
const [first, second, ...others] = fruits;
console.log(fruits[0]);
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [y, x, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ['apple', '🍎'];
}
const [title, emoji] = createEmoji();
console.log(title, emoji);

// Object Destructuring
const lee = { name: 'lee', age: 22 };
function display({ name, age }) {
  console.log('이름', name);
  console.log('나이', age);
}
display(lee);

const { name, age } = lee;
console.log(name);
