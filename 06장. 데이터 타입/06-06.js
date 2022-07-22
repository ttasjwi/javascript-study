var string;

string = '\'문자열\''; // 싱글쿼트(SingleQuote)
console.log(string);

string = "\"문자열\""; // 더블쿼트(DoubleQuote)
console.log(string);

string = `\`문자열\``; // 백틱(Backtick) : `
console.log(string);

string = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열로 인식됩니다.';
console.log(string);

string = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열로 인식됩니다.";
console.log(string);

string = "큰 따옴표 안에서 \"큰 따옴표\"를 문자열로 인식시키고 싶다면, \\를 \" 앞에 쓰면 됩니다.";
console.log(string);
