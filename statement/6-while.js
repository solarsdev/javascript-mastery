// while(조건) { }
// 조건이 false가 될때까지 { } 코드블럭을 반복 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = true;
let i = 0;
while (isActive) {
  console.log('is alive');
  if (i === 1000) {
    break;
  }
  i++;
}

isActive = false;
do {
  console.log('is alive!');
} while (isActive);
