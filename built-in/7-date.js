console.log(new Date());
console.log(new Date('2022/04/01'));

// UTC (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간차이를 밀리초 단위로 표기)
console.log(Date.now());

const now = new Date();
now.setFullYear(2023);
now.setMonth(0); // 1월
now.getDate(); // 0은 1일
now.getDay(); // 0은 월요일

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString('ja-JP'));
