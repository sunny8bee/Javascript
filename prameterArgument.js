//πΆλ§€κ°λ³μ(prameter)μ μΈμ(Argument)
//ν¨μλ₯Ό μ μΈν  λλ νλΌλ―Έν°β¨(λ§€κ°λ³μ)   μ μΈ νλΌλ―Έν° λ§€κ°λ³μ
//ν¨μλ₯Ό νΈμΆν  λλ μκ·λ¨ΌνΈβ¨(μΈμ)      νΈμΆ μκ·λ¨ΌνΈ μΈμ
function a(prameter) {
  console.log(prameter);
}
a("argument");
// print : argument

//π±
function a1(w, x, y, z) {
  console.log(w, x, y, z);
  console.log(arguments);
}
a1("Hello", "parameter", "Argument");
//print :
// Arguments(3) ['Hello', 'parameter', 'Argument', callee: Ζ, Symbol(Symbol.iterator): Ζ]

//π± μΈμλ κ°μ§λ§, λ§€κ°λ³μμ κ°μλ₯Ό μΈμλ³΄λ€ μ κ² λ§λ€μ΄ λ³΄κΈ°
function a2(w, x) {
  console.log(w, x);
}
a2("Hello", "Parameter", "Argument");
// print : Hello
//μ§μ΄ μλ§λ λλ¨Έμ§λ λ¬΄μλλ€.

//π± λνκΈ° ν¨μ
function add(x, y) {
  return x + y;
}
console.log(add(3, 5));
console.log(add(8, 7));
//print :
//8
//15

//πΆ λ§€κ°λ³μ x, y,zμ λ°μ κ³±ν κ°μ λ°ννλ multiply ν¨μλ₯Ό λ§λ€μ΄λ³΄κΈ°.
// (λ¨, νμ΄ν ν¨μλ‘ λ§λ€κΈ°)
//νμ΄ν ν¨μ :  () => {}
const f = (x, y, z) => {
  return x * y * z;
};
console.log(f(2, 3, 4));
//print : 24

// νμ΄ν ν¨μ μ€κ΄νΈ, return μλ΅ν΄μ κ°λ΅ν μ¨λ³΄κΈ°
const g = (x, y, z) => x * y * z;
console.log(g(2, 3, 4));
//print : 24

//(a,b) => a+b; λλ (a,b) => (a + b);  κ°λ΅νμ°κΈ°
//(a,b) => {return a + b};

//π± λ€λ₯Έ λ³μ μ¬μ©νκΈ°
function minus1(x, y) {
  const a3 = 100;
  return (x - y) * a3;
}
console.log(minus1(5, 3));
//print : 200

//ν¨μ λ°μ μλ λ³μ κ° κ°μ Έμ€κΈ°
const a4 = 100;
function minus2(x, y) {
  return (x - y) * a4;
}
console.log(minus2(5, 3));
//print : 200

//π±κ°μ²΄ λ¦¬ν°λ΄
const name = "yumi";
const year = 2002;
const month = 2;
const date = 16;
const gender = "W";
// μ΄λ κ² κ΄κ³κ° μλ κ²λ€μ νλλ‘ λ¬ΆκΈ°
const rachel = {
  "1-name": "yumi", // μμ±λͺ: μμ±κ° // 'μ«μλ‘μμ,-νΉμκΈ°νΈ μ λ°μ΄ν'
  year: 2002,
  month: 2,
  date: 16,
  gender: "W", //μΌν , λΆμ¬λ μλΆμ¬λ μκ΄μμΌλ λμ€μ μΆκ°μμ μλ₯Ό λ€μμμ±μ μν΄μ μΆκ° ','
}; //μ€κ΄νΈ μ΄κ²μ κ°μ²΄ λ¦¬ν°λ΄μ΄λΌκ³  λΆλ₯Έλ€.
console.log(rachel["1-name"]); //[λκ΄νΈμ λ°μ΄ν!!] "λ°μ΄νλΉΌλ¨ΉμΌλ©΄"λ³μκ°μ΄λ¨
console.log(rachel.date);
console.log(rachel["date"]);
console.log(rachel.month);
//print :
//yumi
//16
//16
//2

//+μμ±μ κ±°νκΈ°
delete rachel.gender;
console.log(rachel.gender);
//print : undefined

//π±λ°°μ΄κ³Ό ν¨μκ° κ°μ²΄μΈ μ΄μ 
function hello() {}
hello.aaa = "really?";
const array = [];
array.bbb = "wow!";
console.log(hello.aaa);
console.log(array.bbb);
//print :
//really?
//wow!

//π±λ©μλ
//κ°μ²΄μ μμ± κ°μΌλ‘ ν¨μλ₯Ό λ£μμ λ μ΄ μμ±μ λ©μλλΌ ν¨//ν¨μλΌκ³ λΆλ¬λ λ¨
const debug = {
  log: function (value) {
    console.log(value);
  },
};
debug.log("Hello, Method");
//print :
//Hello, Method
