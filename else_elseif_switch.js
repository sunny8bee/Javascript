// //if-else 문의 기본 형식
// if (조건식) {
//   //조건식이 참인 값일 때 실행
//   동작문;
// } else {
//   //조건식이 거짓인 값일 때 실행
//   동작문;
// }

if (false) {
  console.log("Hello, if!");
} else {
  console.log("Hello, else!");
}

let value01 = "사과";
let condition = false; //else 문이 실행됨
if (condition) {
  value01 = "바나나";
} else {
  value01 = "포도";
}
console.log(value01);

// //else if 문의 기본 형식
// if (조건식) {
//   동작문;
// } else if (조건식) {
//   동작문;
// } else {
//   동작문;
// }

const score = 90;
if (score >= 90) {
  //90점 이상
  console.log("A+");
} else if (score >= 80) {
  //90점 미만 80점 이상
  console.log("A");
} else if (score >= 70) {
  //80점 미만 70점 이상
  console.log("B+");
} else if (score < 70 && score >= 60) {
  //70점 미만 60점 이상
  console.log("B");
} else {
  //60점 미만
  console.log("F");
}

//중첩 if문
let first = true;
let second = false;
if (first) {
  console.log("첫 번째 조건 충족!");
  if (second) {
    console.log("두 번째 조건도 충족!");
  } else {
    console.log("두 번째 조건은 불충족!");
  }
} else {
  console.log("첫 번째 조건 불충족!");
}

// //switch문의 기본 형식
// switch(조건식) {
//   case 비교조건식:
//     동작문;
// }

let value02 = "A";
switch (value02) {
  case "A":
    console.log("A");
}

let value03 = "A";
switch (value03) {
  case "A":
    console.log("A");
    console.log("B");
}

let value04 = "B";
switch (value04) {
  case "A":
    console.log("A");
  case "B":
    console.log("B");
  case "C":
    console.log("C");
} //B 다음으로 다 실행됨

let value05 = "B";
switch (value05) {
  case "A":
    console.log("A");
  case "B":
    console.log("B");
    break; //break를 걸어주면 멈춤.
  case "C":
    console.log("C");
}

let value06 = "F";
switch (value06) {
  case "A":
    console.log("A");
  case "B":
    console.log("B");
  case "C":
    console.log("C");
    break;
  default: //else와 비슷한 개념
    console.log("아무것도 일치하지 않음");
}

let fruit = "배";
if (fruit == "사과") {
  console.log("사과입니다!");
} else if (fruit === "배") {
  console.log("배입니다!");
} else if (fruit === "포도") {
  console.log("포도입니다!");
} else {
  console.log("뭔지 모르겠습니다!");
}

let fruit02 = "사과";
switch (fruit02) {
  default:
    console.log("뭔지 모르겠습니다!");
    break;
  case "사과":
    console.log("사과입니다!");
    break;
  case "배":
    console.log("배입니다!");
    break;
  case "포도":
    console.log("포도입니다!");
    break;
}
