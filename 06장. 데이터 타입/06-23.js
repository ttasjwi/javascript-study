var foo; // undefined
console.log(`foo = ${foo}, typeof foo = ${typeof foo}`); // undefined

foo = 3; // 숫자
console.log(`foo = ${foo}, typeof foo = ${typeof foo}`); // number

foo = 'Hello'; // 문자열
console.log(`foo = ${foo}, typeof foo = ${typeof foo}`); // string

foo = true; // 불리언
console.log(`foo = ${foo}, typeof foo = ${typeof foo}`); // boolean

foo = null; // null
console.log(`foo = ${foo}, typeof foo = ${typeof foo}`); // object

foo = Symbol(); // 심벌
console.log(`foo(Symbol -> Symbol.toString()) = ${foo.toString()}, typeof foo = ${typeof foo}`); // symbol

foo = {}; // 객체
console.log(`foo = ${foo}, typeof foo = ${typeof foo}`); // object

foo = []; // 배열 -> 객체
console.log(`foo = ${foo}, typeof foo = ${typeof foo}`); // object

foo = function () {}; // 함수
console.log(`foo = ${foo}, typeof foo = ${typeof foo}`); // function
