var x = 5;
var result;
console.log(`result = ${result}, x = ${x}`); // result = undefined, x = 5;
console.log()

result = x++; // 피연산자를 참조하여 할당한 뒤 증가 (선 할당 후 증가)
console.log('result = x++;');
console.log(`result = ${result}, x = ${x}`); // result = 5, x = 6;
console.log();

result = ++x; // 피연산자를 먼저 증가 시킨 후 참조하여 할당(선증가 후 할당)
console.log('result = ++x;');
console.log(`result = ${result}, x = ${x}`); // result = 7, x = 7;
console.log()

result = x--; // 피연산자를 참조하여 할당한 뒤 감소 (선 할당 후 감소)
console.log('result = x--;');
console.log(`result = ${result}, x = ${x}`); // result = 7, x = 6;
console.log();

result = --x; // 피연산자를 먼저 감소 시킨 후 참조하여 할당(선감소 후 할당)
console.log('result = --x;');
console.log(`result = ${result}, x = ${x}`); // result = 5, x = 5;
