//🐱객체의 비교(원시값과의 차이점)
// {} === {} 모양이 같아도 비교하면  false값이 나온다.
// 객체끼리는 서로 비교하면 false
// 배열 , 함수도끼리도 false

//true가 나오는 : 객체가 아닌 숫자, 문자열, 불 값, null, undefined
//'str' === 'str';
//123 === 123;
//false === false
//null === null;
//undefined === undefined;    이 모든것이 true

//🙊 객체끼리 비교한 것이 true 가 나오게 하려면 ?
//기존 객체를 변수에 저장해 둬야 함.
const z = { name: "rachel" }; //{대괄호 객체리터럴}
const array1 = [1, 2, z]; // [중괄호 배열리터럴]
console.log(z === array1[2]);
//print : true

const y = { name: "rachel" };
const array2 = [1, 2, y];
console.log(array2 === [1, 2, y]);
//array2 가 또 생성되기 때문에 값은 false

//🐱참조와 복사
const x = { name: "rachel" };
const w = x; //여기서 참조와 복사가 일어남. x에 w를 대입한 상황
x.name = "hero";
console.log(w.name); //값은 : hero

//객체가 아닌값 : 원시값 (문자열, 숫자, 불 값, null, undefined)
let xx = { name: "rachel" };
let ww = xx;
xx = "hero";
console.log(ww); // 결과 : 'rachel'
console.log(xx); // 결과 : hero

//🥸퀴즈
//다음과 같이 객체 안에서 객체가 있을때 '김' 값에 접근하는 방법은?
const sosi = {
  name: {
    //속성
    first: "태연",
    last: "김",
  },
  gender: "m", //속성
};
console.log(sosi.name.last); //결과 : 김
console.log(sosi["name"]["last"]); //결과 : 김
