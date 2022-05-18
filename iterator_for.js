//for 문으로 반복해서 출력하기
// --🥸 for 문의 기본형식--
//for (시작; 조건식; 종료식)
// 동작문;

for (let i = 0; i < 100; i++) {
  console.log("Hello, for!");
}

//for 문에 시작, 조건식, 종료식을 생략할 수 있다.
// for (;;) {
// }  ------>무한반복!!!!!!!!!!

//for문으로 1부터 100까지 출력하시오.
for (let j = 0; j < 100; j++) {
  console.log("for문 1부터 ~ 10까지 찍기");
}

//while문으로 1부터 100까지 출력하시오.
let k = 0;
while (k < 100) {
  console.log("while문 100까지 출력");
  k++;
}

//반복문 멈추기
//break문으로 반복문 멈추기
let l = 0;
while (true) {
  //무한반복문에 while 주로씀
  if (l === 5) break;
  l++;
}
console.log(l);

for (let i = 0; i < 100; i = i + 2) {
  console.log(i + 1);
}

// i == 0, i + 1 == 1
// i == 1, i + 1 == 3
// i == 3, i + 1 == 5
// i == 99, i + 1 == 100
// i == 100 ? 조건 false 끝

let i = 0;
while (i < 10) {
  // 홀수만  console.log
  i++;
  if (i % 2 === 0) {
    // 짝수만
    continue; // 건너뛰기
  }
  console.log(i);
}
