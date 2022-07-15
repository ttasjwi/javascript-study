
// 변수는 하나의 값을 저장하기 위한 수단이다
var userId = 1;
var userName = 'Lee';

// 객체나 배열 같은 자료구조를 사용하면 여러 개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 있다.
var user = { id: 1, name: 'ttasjwi'};
console.log(user);
console.log(user.id);
console.log(user.name);

var users = [
    {id: 1, name: 'Lee'},
    {id: 2, name: 'Kim'}
];
console.log(users[0]);
console.log(users[1]);
