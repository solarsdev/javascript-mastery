function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('๐');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('๐');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// ๋ฐ๋๋์ ์ฌ๊ณผ ๊ฐ์ ธ์ค๊ธฐ
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);
// Promise๋ฅผ ์์ฐจ์ ์ผ๋ก ์ํํ๋ฉด ์ด ์๊ฐ์ด ๋์ด๋๋ฏ๋ก ๋ณ๋ ฌ์ํ์ด ํ์
// Promise.all ๋ณ๋ ฌ์ ์ผ๋ก ํ๋ฒ์ ๋ชจ๋  Promise๋ฅผ ์คํ!
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log(`all: ${fruits}`));

// Promise.race ์ฃผ์ด์ง Promise๋ค ์ค์ ์ ์ผ ๋นจ๋ฆฌ ์ํ๋๊ฒ์ด ์น๋ฆฌ
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log(`race: ${fruit}`));

// all ์ํ์ค ์๋ฌ๊ฐ ๋ฐ์ํ๋ฉด?
// catch๋ฅผ ์ํํด์ผ ํ  ํ์๊ฐ ์์
Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log(`all: ${fruits}`)) //
  .catch(console.error);

// Promise.all์ then์ ์ all์ ์ ๋ฌํ ๋ชจ๋  ํจ์๊ฐ ์ฑ๊ณต์ ์ผ๋ก ์ํ๋์์๋๋ง ์คํ๋จ
// ์ผ๋ถ๋ง ์ฑ๊ณตํด๋ then์ ์์ฐจ์ ์ผ๋ก ์คํํ๊ณ  ์ถ๋ค๋ฉด? -> allSettled
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log(`all: ${fruits}`, fruits)) //
  .catch(console.log);
// allSettled๋ ๊ฐ๊ฐ์ ๊ฒฐ๊ณผ๊ฐ์ ๊ฐ์ฒด ๋ฐฐ์ด์ ํํ๋ก ์ ๋ฌํด์ฃผ๊ณ , ์ํ์ ๊ฐ์ ๋ฐ๋ก ์ ๋ฌํด์ค
// fulfilled -> ์ฑ๊ณตํ ๊ตฌ๋ฌธ
// rejected -> ์คํจํ ๊ตฌ๋ฌธ
