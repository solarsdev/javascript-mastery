const fruits = ['π', 'π', 'π', 'π'];

// λ°°μ΄ μμ΄νμ μ°Έμ‘°νλ λ°©λ²
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  const element = fruits[i];
  console.log(element);
}
// μΆκ°, μ­μ  - μ’μ§ μμ λ°©μμ μλκ° μκ°ν΄ λ³Ό νμκ° μμ΅λλ€
// μΆκ°, μ­μ  - μ’μ§ μμ λ°©μ
// const fruits = ['π', 'π', 'π', 'π'];
//fruits[4] = 'ichigo';
fruits[fruits.length - 1] = 'ichigo';
// μΈλ±μ€λ‘ μ κ·Όνλ κ²μ μ’μ§ λͺ»ν¨
delete fruits[1];
// ν€μλλ‘ μ­μ νλ©΄ λ°°μ΄ λμ€μ κ³΅λ°±μ΄ μκΈ°κΈ° λλ¬Έμ μ’μ§ λͺ»ν¨
