const pizza = { name: 'š', price: 2 };
const ramen = { name: 'š', price: 3 };
const sushi = { name: 'š£', price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1); // shallow copy
console.log('store1', store1);
console.log('store2', store2);

store2.push(sushi);
console.log('store1', store1);
console.log('store2', store2);

pizza.price = 4;
console.log('store1', store1);
console.log('store2', store2);

// Array.fromģ ģ“ģ©ķ“ģ ė³µģ¬ė„¼ ķė©“ ė°°ģ“ ė“ ź°ė¤ģ“ ė³µģ¬ėØ
// ź°ģ“ ź°ģ²“ģ ģ£¼ģģ¼ ź²½ģ° ģ£¼ģė§ ė³µģ¬ėØ
// ė¤ė„ø ė°°ģ“ģ ź°ģ²“ ģ¤ģ ėģ¼ķ ź²ģ¼ ģ ģģ (ģģ ė³µģ¬)
// ģė°ģ¤ķ¬ė¦½ķøģģė ė³µģ¬ķ ė ķ­ģ ģģ ė³µģ¬ź° ģ“ė£Øģ“ģ§!
// Array.from, concat, slice, spread(...), Object.assign
