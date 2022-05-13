//1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1+2 = ${1+2}`);

//2.Numeric operators
console.log(1+1); //add
console.log(1-1); //substract
console.log(1/1); //divide
console.log(1*1); //multiply
console.log(5%2); //remainder
console.log(2**3); //exponentiation 2의 3승

//3. uncrement and decrement operators
let counter =2;
const preIncrement = ++counter;
//counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

//postIncrement = counter;
//counter = counter + 1;
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

//4.Assignment operators
let x = 3;
let y = 6;
x += y; //x=x+y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

//6. Logical operators: || (or), && (and), !(not)
const value1 = true;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check()}`);

//&& (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

////often used to compress long if-statement
////nullableObject && nullableObject.something
// if(nullableObject != null) {
//     nullableObject.something;
// }

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('🤣');
    }
    return true;
}


//! (not)
console.log(!value1);

//7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strick equality, no type conversion //type이 같은건지 묻는것.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const yumi1 = { name: 'yumi' };
const yumi2 = { name: 'yumi' };//yumi1,2 각각 다른 레퍼런스가 있다.
const yumi3 = yumi1;
console.log(yumi1 == yumi2);
console.log(yumi1 === yumi2);
console.log(yumi1 === yumi3);

// equality - puzzler
console.log(0 == false); //t
console.log(0 === false); // 불리안타입0 이기때문에 f
console.log('' == false); // 엠티 t
console.log('' === false); // 불리안타입이 아니기때문에 f
console.log(null == undefined);  //t
console.log(null === undefined);  // f 다른타입

// //8. conditional operators: if
// // if, else if, else
// const names = 'coder';
// if (names === 'yumi') {
//     console.log('Welcome, yumi!');{
//     } else if (names === 'coder') {
//         console.log('you are amazing coder');
//     }else {
//         console.log('unkwnon');
//     }
// }


//9. Ternary operator: ? 삼항연산자
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

//10.Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multipel type checks in TS
const browser = 'Chrome';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':    
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break; 
}

//11. Loops 반복문
//while loop, while the condition is truthy,
//body code is executed.
let i = 3;
while ( i > 0 ) {
    console.log(`while: ${i}`);
    i--;// 1감소 후위연산자 . 3 , 2, 1 
}

//do while loop, body code is executed first,
//then check the condition.
do{  
    console.log(`do while: ${i}`);
    i--;// 선실행 후 맞는지 안맞는지 검사하는 것.
}while (i >0);


//for loop, for(begin; condition; step)
//(시작하는문장; 조건; 어떤스텝을 밟는지)
for (i= 3; i>0; i--) {
    console.log(`for: ${i}`);
}

for(let i=3; i>0; i=i-2) {//블럭안에 지역변수 선언
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${i}`);
    }
}

//break, continue
//Q1. iterate from 0 to 10 and print only even numbers(use continue)
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`q1. ${1}`);
}

//Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}

