function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 바나나와 사과 가져오기
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);
// Promise를 순차적으로 수행하면 총 시간이 늘어나므로 병렬수행이 필요
// Promise.all 병렬적으로 한번에 모든 Promise를 실행!
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log(`all: ${fruits}`));

// Promise.race 주어진 Promise들 중에 제일 빨리 수행된것이 승리
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log(`race: ${fruit}`));

// all 수행중 에러가 발생하면?
// catch를 수행해야 할 필요가 있음
Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log(`all: ${fruits}`)) //
  .catch(console.error);

// Promise.all의 then절은 all에 전달한 모든 함수가 성공적으로 수행되었을때만 실행됨
// 일부만 성공해도 then을 순차적으로 실행하고 싶다면? -> allSettled
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log(`all: ${fruits}`, fruits)) //
  .catch(console.log);
// allSettled는 각각의 결과값을 객체 배열의 형태로 전달해주고, 상태와 값을 따로 전달해줌
// fulfilled -> 성공한 구문
// rejected -> 실패한 구문
