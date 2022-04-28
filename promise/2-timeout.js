function execute() {
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 3000);
  console.log('3');
}

execute();
// 함수를 호출하면 1이 출력되고,
// setTimeout은 비동기이기 때문에 task queue에 저장하고 다음으로 이동
// 3을 출력하고,
// 3초 뒤에 task queue에서 call stack으로 콜백 함수를 가져옴
