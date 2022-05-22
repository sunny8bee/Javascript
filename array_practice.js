//1.다음 배열에서 '라'를 모두 제거하시오 (indexOf, splice사용하기)
const arr = ["가", "라", "다", "라", "마", "라"];
// arr.indexOf("라");
arr.splice(1, 1);
arr.splice(2, 1);
arr.splice(3, 1);
console.log(arr);
//print : (3) ['가', '다', '마']

//2.위의 내용으로 반복문 만들기
const arr1 = ["가", "라", "다", "라", "마", "라"];
// while(arr.indexOf('라') !== -1)  또는 아랫방법
while (arr1.indexOf("라") > -1) {
  arr1.splice(arr1.indexOf("라"), 1);
}
console.log(arr1);

//3.
const arr2 = ["가", "라", "다", "라", "마", "라"];
let index = arr2.indexOf("라");
while (index > -1) {
  arr2.splice(index, 1);
  index = arr2.indexOf("라");
}
console.log(arr2);

//3값 다 동일
//print :
//(3) ['가', '다', '마']
//0: "가"
//1: "다"
//2: "마"
//length: 3
//[[Prototype]]: Array(0)
