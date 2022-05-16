"use strict";
//object-oriendted programming
//class: template
//object: instance of a class
//JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based ingheritance

//1. Class declarations
class Person {
  //constructor 생성자
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const yumi = new Person("yumi", 20);
console.log(yumi.name);
console.log(yumi.age);
yumi.speak();

//2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastname = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    //if (value < 0) {
    // throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

//3. Fields (public, private)
// Too soon!
//쓰기 시작한지 얼마되지 않아 사용도가 높진 않다.
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static propertises and methods
//Too soon! //아직 사용도가 높진 않다.
class Article {
  static publisher = "Dream coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printpublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printpublisher();

//상속 & 다양성
//5.Inheritance 상속
//a way for one calss to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color !`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log("🔺");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

//6. class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
