// Objects
//one of the JavaScript's data types.
// a collection of related date and/or functionality.
//Nearly all objects in JavaScript are instances of Object
//object = { key : value };

//1. Literals and properties
const obj1 = {}; //'object literal' syntax
const obj = new Object(); //'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const rachel = { name: "rachel", age: 16 };
print(rachel);

//with JavaScript Magic (dynamically typed language)
//can add properties later
rachel.hasJob = true;
console.log(rachel.hasJob);

//can delete properties later
delete rachel.hasJob;
console.log(rachel.hssJob);

//2.computed properties //계산된 특징
//object['key']
//key should be always string ' ' !!
console.log(rachel.name); //일반코딩할때는 . 쓰고
console.log(rachel["name"]); //string 형태로 접근가능'string' //실시간으로 값을 받아와야하는 경우
rachel["hasJob"] = true;
console.log(rachel.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(rachel, "name");
printValue(rachel, "age");

//3. Property value shorthand  // Lovely shortand
const person1 = { name: "써니", age: 2 };
const person2 = { name: "서현", age: 3 };
const person3 = { name: "윤아", age: 4 };
// const person4 = makePerson("수만", 20);
const person4 = new Person("수만", 30); //결과 : Person {name: '수만', age: 30}
console.log(person4); //결과 : {name: '수만', age: 20}

// function makePerson(name, age) {
//   return {
//     name,
//     age,
//   };
// }

//4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

//5. in Operator: property existence check( Key in obj)
// 해당 키가 오브젝트 안에 있는지 확이하는 방법
console.log("name" in rachel); // true
console.log("age" in rachel); //true
console.log("random" in rachel); //false
console.log(rachel.random); // undefined

//6. for..in vs for..of // 나중에 프로젝트시 유용하게 이용될 녀석.
console.clear(); // 위에 값들 지우기 Console was cleared
for (key in rachel) {
  console.log(key); //rachel안에 있는 모든 키들이 출력
}
// name
// age
// hasJob

//for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
  console.log(value);
}
// 1
// 2
// 3
// 4
// 5

//7.Fun cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "rachel", age: "20" };
const user2 = user;
console.log(user2); //{name: 'rachel', age: '20'}
user2.name = "baby";
console.log(user); //{name: 'baby', age: '20'}

//오브젝트 복제
//1) 옛날방법 old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3); //{name: 'baby', age: '20'}
//2)요즘방법
const user4 = Object.assign({}, user);
console.log(user4); //{name: 'rachel', age: '20'}

const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); // fruit2가 덮어씀
console.log(mixed.color); //blue
console.log(mixed.size); // big
