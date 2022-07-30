let x, y;

x = -10;
console.log(`x = ${x}, typeof x = ${typeof x}`); // -10, number;

// 부호를 반전시킨다.
y = -x;
console.log(`y = ${y}, typeof y = ${typeof y}`); // 10, number;

// 피연산자 그 자체에 대한 부수효과가 없다
console.log(`x = ${x}, typeof x = ${typeof x}`); // -10, number;
console.log();


x = '-10';
console.log(`x = ${x}, typeof x = ${typeof x}`); // '-10', string;

// -연산자는 부호를 반전시킨 숫자로 타입 변환한다.
y = -x;
console.log(`y = ${y}, typeof y = ${typeof y}`); // 10, number;

// 피연산자 그 자체에 대한 부수효과가 없다
console.log(`x = ${x}, typeof x = ${typeof x}`); // '-10' , string;
console.log();

x = true;
console.log(`x = ${x}, typeof x = ${typeof x}`); //  true, boolean;

// - 연산자는 boolean 타입 값을 부호를 반전시킨 숫자로 타입 변환한다.
y = -x;
console.log(`y = ${y}, typeof y = ${typeof y}`); // -1, number;

// 피연산자 그 자체에 대한 부수효과가 없다
console.log(`x = ${x}, typeof x = ${typeof x}`); // true, boolean;
console.log();


x = 'hello';
console.log(`x = ${x}, typeof x = ${typeof x}`); // 'hello', string;

// - 연산자 역시 숫자로 타입변환이 불가능한 경우 NaN을 반환한다.
y = -x;
console.log(`y = ${y}, typeof y = ${typeof y}`); // NaN, number;

// 피연산자 그 자체에 대한 부수효과가 없다
console.log(`x = ${x}, typeof x = ${typeof x}`); // 'hello', string;
console.log();
