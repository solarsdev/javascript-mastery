// 주석 Comments
// 한줄짜리 주석을 작성할때 씀
// ToDo: 해야 할 일을 작성
// ToDo(Lee): 어떤 기능을 구현하기

/**
 * 주석은 코드 자체를 설명하는 것이 아니라,
 * 왜(why)와 어떻게(how)를 설명하는 것이 좋음
 * 단, 정말 필요한 경우에만!
 */

// 외부에서 많이 쓰이는 함수 API인 경우 JSDoc을 사용하는 것이 좋음
// JSDoc wiki 참조

/**
 * 주어진 두 인자를 더한 값을 반환함
 * @param {*} a 숫자 1
 * @param {*} b 숫자 2
 * @returns a와 b를 더한값
 */
function add(a, b) {
  return a + b;
}

// 다른 라이브러리의 document를 참고해서 작성해볼것
