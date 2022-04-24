// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];

console.log(
  nums
    .filter((num) => num > 5)
    .reduce((avg, num, _, arr) => (avg + num) / arr.length)
);
