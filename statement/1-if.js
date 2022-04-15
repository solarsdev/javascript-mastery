// 조건문 Conditional Statement
// if(조건) { }
// if(조건) { } else { }
// if(조건) { } else if(조건) { } else { }
let fruit = 'apple';
if (fruit === 'apple') {
  console.log('🍎');
  let a = 1;
  console.log(a);
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('🍌');
}

if (false || 0 || '' || undefined || null) {
  console.log('출력되면 안됨!');
}
