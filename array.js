// const apple = "사과";
// const orange = "오렌지";
// const pear = "배";
// const strawberry = "딸기";
//위에 것들을 한번에 선언하기
const fruits = ["사과", "오렌지", "배", "딸기"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
// array.js:7 사과
// array.js:8 오렌지
// array.js:9 배
// array.js:10 딸기

const arrayOfArray = [
  [1, 2, 3],
  [4, 5],
];
arrayOfArray[0]; // [1,2,3]

const a = 10;
const b = 20;
const variableArray = [a, b, 30];
variableArray[1]; // 20 (b의 값)

const everything = ["사과", 1, undefined, true, "배열", null];
const duplicated = ["가", "가", "가", "가", "가"];
const empty = []; // 배열 내부의 값은 중복되어도 되고, 아무 값이 없는 배열도 가능

//배열의 요소 개수 구하기
//배열 이름 뒤에 .length
console.log(everything.length);
console.log(duplicated.length);
console.log(empty.length);
//prinst :
// array.js:33 6
// array.js:34 5
// array.js:35 0

const emptyValue = [null, undefined, false, " ", NaN];
console.log(emptyValue.length);
// array.js:41  print : 5

//배열의 마지막 요소 찾기
const findLastElement = ["a", "b", "c", "d", "e"];
console.log(findLastElement[findLastElement.length - 1]);
//array.js:45  print : e

//arr라는 배열이 있을 때 배열의 마지막에서 세번째 요소를 찾아보세요.
const arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length - 3]);
// array.js:51  print : 3

//배열에 요소 추가하기
const target = ["a", "b", "c", "d", "e"];
target[5] = "f";
console.log(target);
// print : (6) ['a', 'b', 'c', 'd', 'e', 'f']
// 0: "a"
// 1: "b"
// 2: "c"
// 3: "d"
// 4: "e"
// 5: "f"
// length: 6
// [[Prototype]]: Array(0)

//마지막 요소 쉽게 추가하기
const target01 = ["가", "나", "다", "라", "마"];
target01[target01.length] = "BA";
console.log(target01);
// print  :  (6) ['가', '나', '다', '라', '마', 'BA']
// 0: "가"
// 1: "나"
// 2: "다"
// 3: "라"
// 4: "마"
// 5: "BA"
// length: 6
// [[Prototype]]: Array(0)

//배열에 가장 앞에 값을 추가하기
const target02 = ["가", "나", "다", "라", "마"];
target02[0] = "한글=";
console.log(target02);
// print  :  (5) ['한글=', '나', '다', '라', '마']
// 0: "한글="
// 1: "나"
// 2: "다"
// 3: "라"
// 4: "마"
// length: 5
// [[Prototype]]: Array(0)
//앞자리가 수정되었다.

//수정없이 제일 앞에 값을 추가하는 동작  unshift기능을 실행한다.
const target03 = ["가", "나", "다", "라", "마"];
target03.unshift("세종대왕");
console.log(target03);
// print  :  (6) ['세종대왕', '가', '나', '다', '라', '마']
// 0: "세종대왕"
// 1: "가"
// 2: "나"
// 3: "다"
// 4: "라"
// 5: "마"
// length: 6
// [[Prototype]]: Array(0)

//제일 뒤에 요소를 추가하는 또 다른 방법
//배열[배열.length] = 값 도 가능하지만.
//배열명.push ("값"); 도 가능하다.
const target04 = ["가", "나", "다", "라", "마"];
target04.push("세종대왕");
console.log(target04);
// print  :  (6) ['가', '나', '다', '라', '마', '세종대왕']
// 0: "가"
// 1: "나"
// 2: "다"
// 3: "라"
// 4: "마"
// 5: "세종대왕"
// length: 6
// [[Prototype]]: Array(0)

//const인데 수정이 가능한 이유
//const에는 새로운 값을 대입(=)하지만 못한다.
//처음에만 =을 쓰고 그다음엔 =을 쓸 수 없다.
// 대신에 객체내부는 바꿀 수 있다. 허나 객체를 통째로는 바꾸지 못한다.
const target05 = ["a", "b", "c", "d", "e"];
// target05 = ["f", "g"]; //불가능
target05[0] = "h"; //가능
console.log(target05);
// print  :  (5) ['h', 'b', 'c', 'd', 'e']
// 0: "h"
// 1: "b"
// 2: "c"
// 3: "d"
// 4: "e"
// length: 5
// [[Prototype]]: Array(0)

// 배열의 요소 수정하기
const target06 = ["가", "나", "다", "라", "마"];
target06[3] = "카";
console.log(target06);
// print : (5) ['가', '나', '다', '카', '마']
// 0: "가"
// 1: "나"
// 2: "다"
// 3: "카"
// 4: "마"
// length: 5
// [[Prototype]]: Array(0)

//배열에서 요소 제거하기
//배열의 마지막 요소 제거하기  배열명.pop(); //push와 짝궁
const target07 = ["가", "나", "다", "라", "마"];
target07.pop();
console.log(target07);
//print : (4) ['가', '나', '다', '라']

//배열의 첫번째 요소를 제거하고 싶으면 shift기능 사용 //unshift 짝궁
const target08 = ["가", "나", "다", "라", "마"];
target08.shift();
console.log(target08);
//print : (4) ['나', '다', '라', '마']

//배열의 중간 요소를 제거하기 splice
const target09 = ["가", "나", "다", "라", "마"];
target09.splice(1, 1);
console.log(target09);
//print : (4) ['가', '다', '라', '마']

const target10 = ["가", "나", "다", "라", "마"];
target10.splice(2, 2); // 다, 라 제거
console.log(target10);
//print : (3) ['가', '나', '마']

const target11 = ["가", "나", "다", "라", "마"];
target11.splice(1); // 두번째 숫자가 없으면 1 뒤는 전부 제거
console.log(target11);
//print : ['가']

//지우면서 추가하도 가능한 splice
const target12 = ["가", "나", "다", "라", "마"];
target12.splice(1, 3, "TA", "PA");
console.log(target12);
//print : (4) ['가', 'TA', 'PA', '마']

//하나도 지우지 않고 추가하기 splice
const arr01 = ["가", "나", "다", "라", "마"];
arr01.splice(2, 0, "BA");
console.log(arr01);
//prinst : (6) ['가', '나', 'BA', '다', '라', '마']

//배열에서 요소 찾기 includes
const target13 = ["가", "나", "다", "라", "마"];
const result = target13.includes("다"); //조건문이나 반복문에 많이 넣는다.
const result2 = target13.includes("카");
console.log(result);
console.log(result2);
//print :
// true
// false

//배열에서 검색하고 싶은 값이 몇번째 인덱스에 위치하는지 찾기
//indexOf , lastIndexOf 기능
const target14 = ["라", "나", "다", "라", "다"];
const result3 = target14.indexOf("다"); //앞에서부터 찾기
const result4 = target14.lastIndexOf("라"); //뒤에서부터 찾기
const result5 = target14.indexOf("가"); //없으면 -1
console.log(result3);
console.log(result4);
console.log(result5);
//print :
//  2
//  3
//  -1

//배열 모든 요소들 반복하기
const target15 = ["가", "나", "다", "라", "마"];
let i = 0;
while (i < target15.length) {
  //첨부터 마지막꺼 까지 다 찍어라
  console.log(target15[i]);
  i++;
}
//print:
// 가
// 나
// 다
// 라
// 마

//문자열도 가능하다.
const target16 = "안녕하세요";
let j = 0;
while (j < target16.length) {
  //첨부터 마지막꺼 까지 다 찍어라
  console.log(target16[j]);
  j++;
}
//print:
// 안
// 녕
// 하
// 세
// 요

//for문으로 반복문쓰기
const target17 = ["가", "나", "다", "라", "마"];
for (let k = 0; k < target17.length; k++) {
  console.log(target17[k]);
}
//print:
// 가
// 나
// 다
// 라
// 마
