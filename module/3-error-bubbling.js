// Bubbling up, Propagating
function a() {
  throw new Eror('error!');
}

function b() {
  a();
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('Catched!');
}
console.log('Done!');

// 에러처리의 주체는 발생지점에서 근접한 함수일수도 있고, 최종적으로는 맨 처음 호출한 함수일 수도 있음
