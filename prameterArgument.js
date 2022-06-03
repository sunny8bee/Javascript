//🐶매개변수(prameter)와 인수(Argument)
//함수를 선언할 때는 파라미터✨(매개변수)   선언 파라미터 매개변수
//함수를 호출할 때는 아규먼트✨(인수)      호출 아규먼트 인수
function a(prameter) {
  console.log(prameter);
}
a("argument");
// print : argument

//🐱
function a1(w, x, y, z) {
  console.log(w, x, y, z);
  console.log(arguments);
}
a1("Hello", "parameter", "Argument");
//print :
// Arguments(3) ['Hello', 'parameter', 'Argument', callee: ƒ, Symbol(Symbol.iterator): ƒ]

//🐱 인수는 같지만, 매개변수의 개수를 인수보다 적게 만들어 보기
function a2(w, x) {
  console.log(w, x);
}
a2("Hello", "Parameter", "Argument");
// print : Hello
//짝이 안맞는 나머지는 무시된다.

//🐱 더하기 함수
function add(x, y) {
  return x + y;
}
console.log(add(3, 5));
console.log(add(8, 7));
//print :
//8
//15

//🐶 매개변수 x, y,z을 받아 곱한 값을 반환하는 multiply 함수를 만들어보기.
// (단, 화살표 함수로 만들기)
//화살표 함수 :  () => {}
const f = (x, y, z) => {
  return x * y * z;
};
console.log(f(2, 3, 4));
//print : 24

// 화살표 함수 중괄호, return 생략해서 간략히 써보기
const g = (x, y, z) => x * y * z;
console.log(g(2, 3, 4));
//print : 24

//(a,b) => a+b; 또는 (a,b) => (a + b);  간략히쓰기
//(a,b) => {return a + b};

//🐱 다른 변수 사용하기
function minus1(x, y) {
  const a3 = 100;
  return (x - y) * a3;
}
console.log(minus1(5, 3));
//print : 200

//함수 밖에 있는 변수 값 가져오기
const a4 = 100;
function minus2(x, y) {
  return (x - y) * a4;
}
console.log(minus2(5, 3));
//print : 200

//🐱객체 리터럴
const name = "yumi";
const year = 2002;
const month = 2;
const date = 16;
const gender = "W";
// 이렇게 관계가 있는 것들을 하나로 묶기
const rachel = {
  "1-name": "yumi", // 속성명: 속성값 // '숫자로시작,-특수기호 시 따옴표'
  year: 2002,
  month: 2,
  date: 16,
  gender: "W", //쉼표 , 붙여도 안붙여도 상관없으나 나중에 추가수정시를 다음속성을 위해서 추가 ','
}; //중괄호 쓴것을 객체 리터럴이라고 부른다.
console.log(rachel["1-name"]); //[대괄호에 따옴표!!] "따옴표빼먹으면"변수값이됨
console.log(rachel.date);
console.log(rachel["date"]);
console.log(rachel.month);
//print :
//yumi
//16
//16
//2

//+속성제거하기
delete rachel.gender;
console.log(rachel.gender);
//print : undefined

//🐱배열과 함수가 객체인 이유
function hello() {}
hello.aaa = "really?";
const array = [];
array.bbb = "wow!";
console.log(hello.aaa);
console.log(array.bbb);
//print :
//really?
//wow!

//🐱메서드
//객체의 속성 값으로 함수를 넣었을 때 이 속성을 메서드라 함//함수라고불러도 됨
const debug = {
  log: function (value) {
    console.log(value);
  },
};
debug.log("Hello, Method");
//print :
//Hello, Method
