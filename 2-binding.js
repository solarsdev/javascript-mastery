// this 바인딩
// 자바, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는
// this는 항상 자신의 인스턴스 자체를 가리킴!
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름을 출력한다옹: ${this.name}`);
  };
}

// 생성자로 인스턴스를 생성하면 this는 그때 해당 인스턴스의 변수와 함수를 연결해줌
// -> 동적 바인딩
const cat = new Cat('냐옹');
const dog = new Dog('멍멍');
cat.printName();
dog.printName();
