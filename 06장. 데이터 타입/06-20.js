
// 심벌 값 생성
var key = Symbol('key');
console.log(`key = ${key.toString()}, typeof key = ${typeof key}`); // symbol

// 객체 생성
var obj = {};
obj[key] = 'value';
console.log(obj[key]); // value

// 잘 모르겠는데, obj 객체에서 key를 Symbol(key)로 하고, value를 'value'로 사용하는 방법인 것 같다.
