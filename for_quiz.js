//👻 퀴즈 ) 2에서 5까지 숫자를 뽑고 싶다. (가)~(라)를 모두 채워보자.

//🌼코드 1
// const answer = [];
// for (let n = 0; n < (가); n++) {
//     answer.push(n+2);
// }

const answer = [];
for (let n = 0; n < 4; n++) {
  //4까지 하면 뒤에 +2가 있기때문에 3+2 =5 까지 나올 수 있다.
  answer.push(n + 2);
}

//🌼코드 2
// const answer2 = [];
// for (let n2 = 0; n2 <= (나); n++){
//     answer2.push(n2 + 2);
// }

const answer2 = [];
for (let n2 = 0; n2 <= 3; n++) {
  //<= 3까지 하면 뒤에 +2로 최대 5까지 나올 수 있다.
  answer2.push(n2 + 2);
}

//🌼코드 3
// const answer3 = [];
// for (let n3 = 1; n3 < (다); n3++) {
//     answer3.push(n + 1);
// }

const answer3 = [];
for (let n3 = 1; n3 < 5; n3++) {
  //< 5는 4까지기때문에 뒤에 +1 : 최대 5가된다.
  answer3.push(n3 + 1);
}

//🌼코드 4
// const answer4 = [];
// for (let n4 = 1; n4 <= (라); n4++) {
//     answer4.push(n4 + 1);
// }

const answer4 = [];
for (let n4 = 1; n4 <= 4; n4++) {
  // <= 4는 최대 4까지기 떄문에 뒤에 +1 하면 ~5까진 나온다.
  answer4.push(n4 + 1);
}
