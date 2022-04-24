// 데이터의 종류에는 여러가지가 있으며, number는 숫자타입으로 원시 데이터 형태임
const number = 123;
console.log(number.toString());
// 원시타입은 데이터인데, 객체처럼 다양한 함수를 사용할수 있게 되어 있는건 왜일까?

// 래퍼 객체 (Wrapper Object)
// 원시값을 관련된 빌트인 객체로 변환해줌
// 언제 변환? : 필요에 의해
const num = 123; // 이 타이밍에는 원시 타입
// number. .을 사용하는 순간 래퍼객체에 의해 빌트인 객체로 변환됨
console.log(num); // 이 타이밍에는 다시 원시 타입으로 사용됨

const text = 'text';
console.log(text); // 역시 이 타이밍에는 원시 타입이지만
text.length; // 이때는 래퍼 객체에 의해 빌트인 string객체로 전환됨
text.trim(); // 이때는 래퍼 객체에 의해 빌트인 string객체로 전환됨
