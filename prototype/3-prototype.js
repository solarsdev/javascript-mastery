// const dog1 = { name: '뭉치', emoji: '🐶' };
// const dog2 = { name: '코코', emoji: '🐕' };

function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;

  // 생성자 함수 내에서 정의된 함수는
  // 인스턴스 레벨의 함수 (모든 객체가 같은 함수를 가지게 됨)
  // this.printName = () => {
  //   console.log(`${this.name} ${this.emoji}`);
  // };
}

// 프로토타입 레벨의 함수
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};
const dog1 = new Dog('뭉치', '🐶');
const dog2 = new Dog('코코', '🐕');
console.log(dog1, dog2);
dog1.printName();
dog2.printName();

// 오버라이딩
// 인스턴스 레벨에서 (자식 객체에서) 동일한 이름으로 함수를 재정의 하면 (오버라이딩)
// 프로토타입 레벨의 (부모) 함수의 프로퍼티는 가려짐 (shadowing)
dog1.printName = function () {
  console.log('안녕!');
};
dog1.printName();

// 정적 레벨
Dog.hello = () => {
  console.log('Hello!');
};
//dog1.hello();
Dog.hello();
Dog.MAX_AGE = 20;

// 정리
// 함수의 단계에는 3가지가 있음
// 클래스 단위에서 객체를 만들지 않아도 가질수 있는 함수의 경우에는 static 레벨에서 정의
// 인스턴스 단위에서 (생성자를 통한 객체 생성 후에 알 수 있는 정보) 필요한 정보를 이용하지만, 모든 인스턴스가 공유하는 프로토타입 레벨에서 정의할 수 있는 함수
// 개별 인스턴스 단위에서 필요한 함수 (프로토타입의 함수 재정의 포함)
