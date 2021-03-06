function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('π');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('π');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// λ°λλμ μ¬κ³Ό κ°μ Έμ€κΈ°
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
