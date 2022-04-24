const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);

console.log(text[0]);
console.log(text[11]);
console.log(textObj.charAt(0));
console.log(textObj.charAt(11));

console.log(textObj.indexOf('o'));
console.log(textObj.lastIndexOf('o'));

console.log(textObj.includes('a'));
console.log(textObj.includes('H'));

console.log(textObj.startsWith('H'));
console.log(textObj.startsWith('!'));

const space = '                space              ';
console.log(space.trim());

const longText = 'Get to the point';
console.log(longText.split(' '));
