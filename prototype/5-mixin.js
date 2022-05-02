// 오브젝트는 단 하나의 prototype을 가리킬 수 있음 (부모는 단 하나)
// 여러개의 함수들을 상속하고 싶을 경우에는 mixin을 사용
const play = {
  play: function () {
    console.log(`${this.name} 놀아요!`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요!`);
  },
};

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, sleep);
const dog = new Dog('멍멍');
console.log(dog);
dog.play();
dog.sleep();

// JavaScript의 클래스에서는 본질은 prototype이므로 mixin을 사용할 수 있음
class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}
Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger('하로');
tiger.sleep();
