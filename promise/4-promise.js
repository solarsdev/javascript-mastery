function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  .then(
    // 필요한 작업 수행
    () => console.log('타이머 완료!')
  )
  .catch(
    // 에러를 처리
    console.error
  )
  .finally(
    // 최종적으로 반드시 실행
    () => console.log('끝!')
  );
