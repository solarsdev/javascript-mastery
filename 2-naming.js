/** 변수 규칙
 * 라틴문자 (0-9, a-z, A-Z), _
 * 대소문자를 구별함
 * 추천: camelCase (likeThis) ✅
 * 한국어 ❌
 * 예약어 ❌
 * 숫자로 시작 ❌
 * 특수문자 ❌ (_, $ 두가지는 예외)
 * 이모지 ❌
 * 여러개의 변수를 숫자로 지정 ❌ -> 최대한 의미있게, 구체적인 이름으로 작성 ✅
 */

let apple;
let redApple;

// 나쁜 예제1 💩
let number = 20;

// 좋은 예제1 ✨
let myAge = 20;

// 나쁜 예제2 💩
let audio1;
let audio2;

// 좋은 예제2 ✨
let backgroundAudio;
let windAudio;

// 팁! 👍
let audioBackground;
let audioWind;
// 대분류를 먼저 변수로 정의해줌
// audio를 쳤을때 자연스럽게 하위 분류를 찾아낼 수 있음
