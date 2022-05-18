//조건부 연산자 사용하기
//조건부 연산자의 기본 형식
//조건식 ? 참일 때 실행되는 식 : 거짓일 때 실행되는 식

5 > 0 ? "참입니다" : "거짓입니다";

let vlaue = 5 < 0 ? "참입니다" : "거짓입니다";

let condition = true;
let value = condition ? "참" : "거짓";
console.log(value);

if (condition) {
  value = "참";
} else {
  value = "거짓;";
}
console.log(value);

let condition1 = true;
let condition2 = false;
let value01 = condition1
  ? condition2
    ? "둘 다 참" //중첩 연산자(
    : "condition1 만 참" //내부 조건부 연산자) ->괄호쳐도됨
  : "condition1 이 거짓"; // 외부 조건부 연산자
console.log(value);

// let condition3 = false;
// let condition4 = true;
// let value02 condition3 ? 'condition3 이 참' : condition4 ? 'condition4가 참' : '둘 다 거짓';
// console.log(value02);

let cond = true;
let value03 = cond ? "참" : "거짓";
console.log(value03);

let cond1 = true;
let value04 = "";
switch (cond1) {
  case true:
    value04 = "참";
    break;
  case false:
    value04 = "거짓";
    break;
}
console.log(value04);
