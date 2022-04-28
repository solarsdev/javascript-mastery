function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  //return Promise.resolve(`🪴 => 🐔`);
  return Promise.reject(new Error('치킨을 가지고 올 수 없었다!'));
}

getChicken() //
  .catch((error) => {
    console.error(error);
    return '🐓';
  })
  .then(fetchEgg) //
  .then(fryEgg) //
  .then(console.log); //
