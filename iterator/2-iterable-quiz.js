// [Symbol.iterator](): IterableIterator<T>;
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
const makeIterable = (startValue, maxValue, callback) => {
  return {
    [Symbol.iterator]: () => {
      const max = maxValue;
      let num = startValue;
      return {
        next() {
          return { value: callback(num++), done: num > max };
        },
      };
    },
  };
};

console.clear();
for (const num of makeIterable(0, 20, (num) => num * 2)) {
  console.log(num);
}
