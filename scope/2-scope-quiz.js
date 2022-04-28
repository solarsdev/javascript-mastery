{
  const x = 1;
  {
    const y = 2;
    console.log(x);
  }
  console.log(x);
  // console.log(y); // 에러
}

const text = 'global'; // 전역 변수, 전역 스코프 (글로벌 변수, 글로벌 스코프)
{
  const text = 'inside block1'; // 지역 변수, 지역 스코프 (로컬 변수, 로컬 스코프)
  {
    console.log(text);
    // 가장 가까운 스코프가 먼저 참조됨
    // 같은 블럭 > 바로 위 부모 > ... > 글로벌 변수
  }
}
