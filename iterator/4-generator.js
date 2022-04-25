// const makeIterable = (startValue, maxValue, callback) => {
//   return {
//     [Symbol.iterator]: () => {
//       const max = maxValue;
//       let num = startValue;
//       return {
//         next() {
//           return { value: callback(num++), done: num > max };
//         },
//       };
//     },
//   };
// };

// 제너레이터를 만들게 되면 next를 호출해야 yield 다음 구문이 수행됨
// -> 제너레이터 내부의 yield를 만나게 되면, value, done이 반환됨과 동시에 next() 호출 전까지 코드대기
function* multipleGenerator() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
    yield i ** 2;
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);
multiple.return(); // return을 호출하면 iterator가 즉시 종료되고 done은 true가 됨
//multiple.throw('Error!'); // 에러 발생시키고 종료시킴 try-catch로 에러처리 가능
next = multiple.next();
console.log(next.value, next.done);
