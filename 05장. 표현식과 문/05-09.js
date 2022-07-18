function foo() {

    return
    {};
    // ASI(automatic semicolon insertion)의 동작 결과 => return; {};
    // 개발자의 예측 : return {};

}

console.log(foo()); // undefined();

/**
 ASI의 동작 결과 => var bar = function() {} (function {})();
 개발자의 예측 => var bar = function() {}; (function() {})();
 TypeError : (intermediate value(...) is not a function
 */
var bar = function () {}
(function() {})();
