var foo = 'Lee';

// 이전 참조를 제거. foo 변수는 더 이상 'Lee'를 참조하지 않는다.
// 더 이상 'Lee'는 어떤 식별자도 참조하지 않으므로 가비지 컬렉션에 의해 제거될 것이다.
foo = null;
console.log(`foo = ${foo}, typeof foo = ${typeof foo}`);

//typeof null의 결과가 object인 것은 버그이고 일부러 수정하고 있지 않다. null 확인은 === 을 사용하는 것이 낫다
console.log(`foo === null : ${foo === null}`);
