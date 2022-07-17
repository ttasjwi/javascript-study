// 리터럴 표현식
10;
'hello';

class Person {
    name;

    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

}

// 선언문 (식이 아닌 문)
var sum = 30;
var person1 = new Person('kim');
var arr = [1,2,3];



// 식별자 표현식 : 값으로 평가될 수 있다
sum;
person1.name;
arr[1];

// 연산자 표현식
10 + 20;
sum = 10;
sum!==10;

sum = sum + 10; // sum은 10으로 평가되고, sum + 10이 평가된 값 20이 sum에 재할당된다. 이제 sum은 20으로 평가된다.

// 함수/메서드 표현식
Math.random();
person1.getName();
