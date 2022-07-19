var binary = 0b01000001; // 2진수
var octal = 0o101; // 8진수
var decimal = 65; // 10진수
var hex = 0x41; // 16진수

// 메모리에 2진수로 저장되고 이들 값을 참조하면 10진수로 해석된다.
console.log("binary :", binary); // 65
console.log("octal :", octal); // 65
console.log("decimal :",decimal); // 65
console.log("hex :", hex); // 65
console.log("binary === octal ? :", binary === octal); // true
console.log("octal === decimal ? :", octal === decimal); // true
console.log("decimal === hex ? :", decimal === hex); // true
