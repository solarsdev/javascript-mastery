// static 정적 프로퍼티, 메소드
class Fruit {
  static MAX_FRUITS = 4;
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메소드
  static makeRandomFruit() {
    // 클래스 레벨의 메소드에서는 this를 참조할 수 없음
    // 왜? -> 클래스 레벨에서는 아무것도 채워진것이 없는 템플릿 상태이기 때문임
    return new Fruit('banana', '🍌');
  }
  // 인스턴스 레벨의 메소드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(banana.display());

Math.pow();
Number.isFinite(1);
