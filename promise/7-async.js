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
async function fetchFruits() {
  // return getBanana() //
  //   .then((banana) =>
  //     getApple() //
  //       .then((apple) => [banana, apple])
  //   );
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple];
}

fetchFruits().then((fruits) => console.log(fruits));
