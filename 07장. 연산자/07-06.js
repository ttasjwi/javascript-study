
let x = '1';
console.log(`x = ${x}, typeof x = ${typeof x}`); // '1', string;

// 문자열을 숫자로 타입 변환한다.
let y = +x;
console.log(`y = ${y}, typeof y = ${typeof y}`); // 1, number;

// 피연산자 그 자체에 대한 부수효과가 없다
console.log(`x = ${x}, typeof x = ${typeof x}`); // 1, string;
console.log();


x = true;
console.log(`x = ${x}, typeof x = ${typeof x}`); // true, bool;

// + 연산자는 불리언 값을 숫자로 변환한다.
y = +x;
console.log(`y = ${y}, typeof y = ${typeof y}`); // 1, number;

// 피연산자 그 자체에 대한 부수효과가 없다
console.log(`x = ${x}, typeof x = ${typeof x}`); // true, boolean;
console.log();

x = 'hello';
console.log(`x = ${x}, typeof x = ${typeof x}`); // 'hello', string;

// 숫자로 타입변환이 불가능한 경우 NaN을 반환한다.
y = +x;
console.log(`y = ${y}, typeof y = ${typeof y}`); // NaN, number;

// 피연산자 그 자체에 대한 부수효과가 없다
console.log(`x = ${x}, typeof x = ${typeof x}`); // 'hello', string;
console.log();
