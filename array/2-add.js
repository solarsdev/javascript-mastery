const fruits = ['🍌', '🍎', '🍇', '🍊'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  const element = fruits[i];
  console.log(element);
}
// 추가, 삭제 - 좋지 않은 방식은 아닌가 생각해 볼 필요가 있습니다
// 추가, 삭제 - 좋지 않은 방식
// const fruits = ['🍌', '🍎', '🍇', '🍊'];
//fruits[4] = 'ichigo';
fruits[fruits.length - 1] = 'ichigo';
// 인덱스로 접근하는 것은 좋지 못함
delete fruits[1];
// 키워드로 삭제하면 배열 도중에 공백이 생기기 때문에 좋지 못함
