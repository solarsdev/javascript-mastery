// 클래스를 베이스로 한 객체지향
class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName = () => {
    console.log(`${this.name} ${this.emoji}`);
  };
}

class Tiger extends Animal {
  hunt = () => {
    console.log('사냥!');
  };
}

class Dog extends Animal {
  constructor(name, emoji, owner) {
    super(name, emoji);
    this.owner = owner;
  }

  play = () => {
    console.log('같이 놀자!');
  };
}

const dog1 = new Dog('멍멍', '🐶', 'lee');
dog1.play();
dog1.printName();
const tiger1 = new Tiger('어흥', '🐯');

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(tiger1 instanceof Animal);
console.log(tiger1 instanceof Tiger);
