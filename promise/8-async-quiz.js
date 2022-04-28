function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('can not find 🐓'));
}

async function getFriedEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch (error) {
    chicken = '🐔';
  }
  const egg = await fetchEgg(chicken);
  const friedEgg = await fryEgg(egg);
  return friedEgg;
}

getFriedEgg().then(console.log);
