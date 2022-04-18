// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//    console.log('놀자');
//  }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.eat();
tiger.sleep();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }
  // 오버라이딩 overriding
  // 부모의 함수 내용을 자식 클래스에 맞게 덮어씌우기
  eat() {
    console.log('강아지가 먹는다!');
  }
  // 오버라이딩의 다른 예
  // 부모의 메소드를 사용하면서 추가적으로 특정 기능을 구현해야 할 때
  sleep() {
    super.sleep();
    console.log('강아지는 3시간만 잡니다');
  }
  // 강아지에 맞는 메소드를 따로 구현해줌
  play() {
    console.log('놀자');
  }
}
const dog = new Dog('빨강이', '주인님');
dog.eat();
dog.sleep();
dog.play();
