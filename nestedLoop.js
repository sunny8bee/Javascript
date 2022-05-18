//중첩 반복문

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(i, j);
  }
}

// i=0 j=0~9
//i=1 j=0~9 .....

for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) continue; //홀수만 출력
  for (let j = 0; j < 5; j++) {
    if (j % 2 === 0) continue;
    for (let k = 0; k < 5; k++) {
      if (k % 2 === 0) continue;
      console.log(i, j, k);
    }
  }
}

// nestedLoop.js:18 1 1 1
// nestedLoop.js:18 1 1 3
// nestedLoop.js:18 1 3 1
// nestedLoop.js:18 1 3 3
// nestedLoop.js:18 3 1 1
// nestedLoop.js:18 3 1 3
// nestedLoop.js:18 3 3 1
// nestedLoop.js:18 3 3 3

//퀴즈 : 구구단 출력하기! 단, 홀수만 출력하시오.(continue문 활용)

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue; //홀수만 출력
  for (let j = 0; j < 10; j++) {
    if (j % 2 === 0) continue;
    console.log(i, "x", j, "=", i * j);
  }
}
// nestedLoop.js:38 1 'x' 1 '=' 1
// nestedLoop.js:38 1 'x' 3 '=' 3
// nestedLoop.js:38 1 'x' 5 '=' 5
// nestedLoop.js:38 1 'x' 7 '=' 7
// nestedLoop.js:38 1 'x' 9 '=' 9
// nestedLoop.js:38 3 'x' 1 '=' 3
// nestedLoop.js:38 3 'x' 3 '=' 9
// nestedLoop.js:38 3 'x' 5 '=' 15
// nestedLoop.js:38 3 'x' 7 '=' 21
// nestedLoop.js:38 3 'x' 9 '=' 27
// nestedLoop.js:38 5 'x' 1 '=' 5
// nestedLoop.js:38 5 'x' 3 '=' 15
// nestedLoop.js:38 5 'x' 5 '=' 25
// nestedLoop.js:38 5 'x' 7 '=' 35
// nestedLoop.js:38 5 'x' 9 '=' 45
// nestedLoop.js:38 7 'x' 1 '=' 7
// nestedLoop.js:38 7 'x' 3 '=' 21
// nestedLoop.js:38 7 'x' 5 '=' 35
// nestedLoop.js:38 7 'x' 7 '=' 49
// nestedLoop.js:38 7 'x' 9 '=' 63
// nestedLoop.js:38 9 'x' 1 '=' 9
// nestedLoop.js:38 9 'x' 3 '=' 27
// nestedLoop.js:38 9 'x' 5 '=' 45
// nestedLoop.js:38 9 'x' 7 '=' 63
// nestedLoop.js:38 9 'x' 9 '=' 81

//별찍기
for (let i = 0; i < 5; i++) {
  console.log("⭐︎".repeat(i + 1));
}
// nestedLoop.js:69 ⭐︎
// nestedLoop.js:69 ⭐︎⭐︎
// nestedLoop.js:69 ⭐︎⭐︎⭐︎
// nestedLoop.js:69 ⭐︎⭐︎⭐︎⭐︎
// nestedLoop.js:69 ⭐︎⭐︎⭐︎⭐︎⭐︎

//반대로 별찍기
for (let i = 5; i > 1; i--) {
  console.log("✦".repeat(i - 1));
}
// nestedLoop.js:79 ✦✦✦✦
// nestedLoop.js:79 ✦✦✦
// nestedLoop.js:79 ✦✦
// nestedLoop.js:79 ✦

//i=0고정
for (let i = 0; i < 5; i++) {
  console.log("🌸".repeat(i + 1));
}
// nestedLoop.js:88 🌸
// nestedLoop.js:88 🌸🌸
// nestedLoop.js:88 🌸🌸🌸
// nestedLoop.js:88 🌸🌸🌸🌸
// nestedLoop.js:88 🌸🌸🌸🌸🌸

//0  5
//1  4
//2  3
//3  2
//4  1   여기서 규칙 : 합이 5이다.
for (let i = 0; i < 5; i++) {
  console.log("🌼".repeat(5 - i)); // 5-i를 한다!!
}
// nestedLoop.js:102 🌼🌼🌼🌼🌼
// nestedLoop.js:102 🌼🌼🌼🌼
// nestedLoop.js:102 🌼🌼🌼
// nestedLoop.js:102 🌼🌼
// nestedLoop.js:102 🌼

// 1, 3, 5, 7, 9 별찍기
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log("*".repeat(i++));
}
// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) continue; //홀수만 출력
//     for (let j = 0; j < 10; j++) {
//       if (j % 2 === 0) continue;
//       console.log(i, "x", j, "=", i * j);
//     }
//   }
// nestedLoop.js:113 *
// nestedLoop.js:113 ***
// nestedLoop.js:113 *****
// nestedLoop.js:113 *******
// nestedLoop.js:113 *********

// 9, 7, 5, 3 , 1 별찍기
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log("🦋".repeat(10 - i));
}
// nestedLoop.js:131 🦋🦋🦋🦋🦋🦋🦋🦋🦋
// nestedLoop.js:131 🦋🦋🦋🦋🦋🦋🦋
// nestedLoop.js:131 🦋🦋🦋🦋🦋
// nestedLoop.js:131 🦋🦋🦋
// nestedLoop.js:131 🦋

//console.log(' '.repeat(2) + '🦄'.repeat(3))
//   🦄🦄🦄
//앞이 비워져있는 별찍기 5에서부터 1까지
for (let i = 0; i < 5; i++) {
  console.log(" ".repeat(i + i) + "🦄".repeat(6 - i));
}
// nestedLoop.js:143 🦄🦄🦄🦄🦄🦄
// nestedLoop.js:143   🦄🦄🦄🦄🦄
// nestedLoop.js:143     🦄🦄🦄🦄
// nestedLoop.js:143       🦄🦄🦄
// nestedLoop.js:143         🦄🦄

//크리스마스 트리처럼 🔺 1, 3, 5, 7, 9 별찍기
for (let i = 1; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(" ".repeat(5 - i / 2) + "*".repeat(i));
}
// nestedLoop.js:154     *
// nestedLoop.js:154    ***
// nestedLoop.js:154   *****
// nestedLoop.js:154  *******
// nestedLoop.js:154 *********
