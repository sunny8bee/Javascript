//함수
//function() {}
//또는
//() => {}    //이것은 익명함수... 딱 한번만 쓸때 쓰임

//함수에 이름넣어주기
//function a() {}    //함수선언문 !! 세미콜론 없음!!!
//cosnt b = function() {};    //함수표현식!!
//cosnt c = () => {};  //화살표함수

function a() {} //함수를 선언한 다음에
a(); //함수를 호출(call)한다고 말함.
//print : ( 없음 )

//console.log , parseInt 또한 함수라 명한다.
function a() {
  console.log("Hello");
  console.log("Function");
}
a();
//print :
// Hello
// function
// Hello
// function

//리턴값 (반환값)
//return에는 항상 undefined 존재함.
function b() {}
//두 코드는 동일함
function c() {
  return undefined;
}

function d() {
  console.log("d");
} // 두 코드는 동일함
function e() {
  console.log("e");
  return undefined;
}

//반환값도 값이므로 다른 식이나 문에 넣어 사용가능하다.
function f() {
  return 10;
}
console.log(f()); //호출값은 리턴값으로 바꿔준다
// print : 10

//함수가 함수를 다루는 것 : 고차함수 (중반부 쯤에 다룰 예정)

function g() {
  return 10;
}
const h = g();
console.log(h);
//print : 10

//조건부
function a1() {
  if (false) {
    return;
  }
  console.log("실행합니다");
}
a1();
//print : 실행합니다
