function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => π₯`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => π³`);
}

function getChicken() {
  //return Promise.resolve(`πͺ΄ => π`);
  return Promise.reject(new Error('μΉν¨μ κ°μ§κ³  μ¬ μ μμλ€!'));
}

getChicken() //
  .catch((error) => {
    console.error(error);
    return 'π';
  })
  .then(fetchEgg) //
  .then(fryEgg) //
  .then(console.log); //
