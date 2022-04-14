// 조건문 Conditional Statement
// switch
// if else if else if else if ... else
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우
let day = 6; // 0: 월요일, 1: 화요일... 6:일요일
let dayName;
if (day === 0) {
  dayName = '월요일';
} else if (day === 1) {
  dayName = '화요일';
} else if (day === 2) {
  dayName = '수요일';
} else if (day === 3) {
  dayName = '목요일';
} else if (day === 4) {
  dayName = '금요일';
} else if (day === 5) {
  dayName = '토요일';
} else if (day === 6) {
  dayName = '일요일';
}

// switch
switch (day) {
  case 0:
    dayName = '월요일';
    break;
  case 1:
    dayName = '화요일';
    break;
  case 2:
    dayName = '수요일';
    break;
  case 3:
    dayName = '목요일';
    break;
  case 4:
    dayName = '금요일';
    break;
  case 5:
    dayName = '토요일';
    break;
  case 6:
    dayName = '일요일';
    break;
  default:
    dayName = '그런 요일은 없음';
    break;
}

// switch문은 break를 만날때까지 수행하기 때문에, 여러 케이스의 처리가 동일하면 break를 사용하지 않음
let condition = 'okay'; // okay, good이면 좋음, bad이면 나쁨
switch (condition) {
  case 'okay':
  case 'good':
    console.log('좋음');
    break;
  case 'bad':
    console.log('나쁨');
    break;
}
