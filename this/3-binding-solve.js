function Cat(name) {
  this.name = name;
  // 2. arrow 화살표 함수를 사용: arrow 함수는 렉시컬 환경에서의 this를 기억하고 있음
  // 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킴
  this.printName = () => {
    console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
  };
  // 1. bind 함수를 이용해서 수동으로 바인딩
  // this.printName = this.printName.bind(this);
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

dog.printName = cat.printName;
dog.printName();
cat.printName();

function printOnMonitor(printName) {
  console.log('모니터를 준비하고, 전달된 콜백을 실행');
  printName();
}

printOnMonitor(cat.printName);
// undefined
// 정적 언어에서는 this가 반영이 되어 있을것이기 때문에
// 해당 객체의 printName을 호출했을것
