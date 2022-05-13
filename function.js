//Function 함수
//-fundamental building block in the program//기본적인 빌딩블럭
//-subprogram can be used muliple times //서브프로그램이라고 불리며 여러번 재사용이 가능하다
//-performs a task or calculates a value//한가지태스크나 어떠한 값을 계산하기위해 쓰임

//1. Function declaration 
//function name(param1, param2) { body... return; }
//one function === one thing //하나의 함수는 한가지의 일만 하도록 만들어야함.
//naming: doSomething, command, verb// 동사형태로 이름을 지정
//e.g. createCardAndPoint -> createCard, createPoint 
//function is object in JS 
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

//2.Parameters
//premitive parmeters: passed by value
//object prameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

//3.Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi');

//4.Rest parameters (added in ES6)
function printAll(...args) { //...배열형태
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) { 
        console.log(arg);
    }
      //더 간단하게 
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'cording', 'ellie');

//5. Local scope
//밖에서는 안이 보이지 않고, 안에서만 밖을 볼수있다. 유리창틴트효과처럼,
let globalMessage = 'global'; //global variable
function printMessage() { 
    let message = 'hello';
    console.log(message);  //local variable 지역변수
    console.log(globalMessage);
}
printMessage();

//6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1,2)}`);

//7.Early return, early exit
//bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic...
    }
}

//good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic...
}



//First-class function
//functions are treated like any other variable
//can be assigned as a value to variable
//can be passed as an argument to other functions.
//can be returned by another function

//1. Function expresstion
//a function declaration can be called earlier than it is defiend.(hosted)
//a function expression is created whe the execution reaches it.
const print = function () { //anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain= sum;
console.log(sumAgain(1, 3));


//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    }else {
        printNo();
    }
}
//anonymous function
const printYes = function () {
    console.log('yes!');
};

//named function
//better debugging in debugger's stack traces
//recursions
const printNo = function print() {
    console.log('No!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo)

//Arrow function //함수를 간결하게 만들어줌
//always anonymous

// const simplePrint = function () {
//     console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a+b;
const simpleMultiply = (a, b) => {
    //do somthing more
    return a*b;
};

//IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})(); //괄호로 묶기 (함수를 바로 실행하고싶을때)