// 프로토타입을 베이스로 한 객체지향 프로그래밍
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}
Tiger.prototype = Object.create(Animal.prototype);

function Dog(name, emoji, owner) {
  // super(name, emoji)
  Animal.call(this, name, emoji);
  this.owner = owner;
}
// Dog.prototype = Object.create(Object.prototype);
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = () => {
  console.log('같이 놀자!');
};
const dog1 = new Dog('멍멍', '🐶', 'lee');
dog1.play();
dog1.printName();
const tiger1 = new Tiger('어흥', '🐯');

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(tiger1 instanceof Animal);
console.log(tiger1 instanceof Tiger);
