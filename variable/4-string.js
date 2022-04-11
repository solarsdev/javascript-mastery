// 문자열타입
let string = '안녕하세요';
string = `안녕!`;
console.log(string);

// 특수문자 출력하는법
string = "'안녕!'";
console.log(string);

string = '안녕!\n내 이름은\t\t누굴까\\\u09AC';
console.log(string);

// 템플릿 리터럴 (Template Literal)
let id = '테스트';
let greetings = '안녕, ' + id + '👍 좋은 하루 보내!';
console.log(greetings);

greetings = `안녕, ${id}👍 좋은 하루 보내!`;
console.log(greetings);
