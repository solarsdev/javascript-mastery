// JSON: JavaScript Object Notation
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
// stringify(object) -> JSON
// parse(JSON) -> object
const lee = {
  name: 'lee',
  age: 13,
  eat: () => {
    console.log('eat');
  },
};

// 직렬화 Serializing: 객체를 문자열로 변환
const json = JSON.stringify(lee);
// stringify를 통해 만들어지는 text내에는 property만 변환되어 저장됨
// method의 경우에는 변환되지 않음
console.log(lee);
console.log(json);

// 역직렬화 Deserializing: 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj);
