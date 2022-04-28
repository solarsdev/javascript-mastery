// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!
function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error('callback함수를 전달해야 함');
  }
  if (seconds < 0) {
    throw new Error('0보다 작은 숫자를 입력할 수 없습니다.');
  }
  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay(() => console.log('test'), 3);
} catch (error) {
  console.log(error);
}
