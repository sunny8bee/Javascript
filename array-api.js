//❓Q1. make string out of an array.
// 배열을 문자열로 만들어라.
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(", and ");
  console.log(result);
} // 결과 : apple, and banana, and orange

//❓Q2. make an array out of a string
// 문자열을 배열로 변환하라.
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(",");
  console.log(result);
} // 결과 : (4) ['🍎', ' 🥝', ' 🍌', ' 🍒']
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(",", 2); //어디서부터 몇개나 지울것인가 삭제해주는 API
  console.log(result);
} // 결과 : (2) ['🍎', ' 🥝']

//❓Q3. make this arry look like this : [5, 4, 3, 2, 1]
//배열의 순서를 거꾸로 나열하시오.
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); // 배열자체도 순서가 변화된다.
} // 결과 : (5) [5, 4, 3, 2, 1]

//❓Q4.make new array without the first two elements
{
  // 앞에 두개의 요소를 빼고 새로운 배열을 만들어라.
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(0, 2); //index 0부터 2개를 삭제하겠다.
  console.log(result); //삭제된[1, 2]가 리턴이 됨
  console.log(array); // 남은 [3, 4, 5]
  //  고로 , splice는 새로운배열을 만들 수 없기에 패쓰!!
}
{
  const array = [1, 2, 3, 4, 5]; //slice는 0, 1, 2, 3, 4 로 봐야함 마지막꺼는 빼고 출력
  const result = array.slice(2, 5);
  console.log(result); // 결과 : (3) [3, 4, 5]
  console.log(array); // 결과 : (5) [1, 2, 3, 4, 5]  // 배열은 여전히 동일하게 남아있음
}
// ✨splice : 배열 자체를 수정   / ✨slice : 배열에서 원하는 부분만 리턴해서 받아오고 싶을 때

//❓❓❓Q5, 6, 7, 8, 9, 10의 보기 문제❓❓❓
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

//❓Q5. find a student with the score 90
//90점인 학생을 찾아라.

// const result = students.find(function (student, index) {
//   return student.score === 90; });
{
  //✨줄여작성:
  const result = students.find(student => student.score === 90);
  console.log(result);
}
//결과 : Student {name: 'C', age: 30, enrolled: true, score: 90}

//❓Q6. make an array of enrolled students
//학생들 중 수업에 등록한 학생들만 골라내라.
{
  const result = students.filter(student => student.enrolled);
  console.log(result);
}
//결과 : [Student, Student, Student]
//0: Student {name: 'A', age: 29, enrolled: true, score: 45}
//1: Student {name: 'C', age: 30, enrolled: true, score: 90}
//2: Student {name: 'E', age: 18, enrolled: true, score: 88}

//❓Q7. make an array containing only the students'
//scores result should be: [45, 80, 90, 66, 88]
//학생 배열에서 점수만 뽑아오자.
{
  const result = students.map(student => student.score);
  //map 매핑하다 : 들어가있는 한가지 한가지를 다른 것으로 변환
  console.log(result);
  //결과 : (5) [45, 80, 90, 66, 88]
}
{
  const result = students.map(student => student.score * 2); // 곱하기 2
  console.log(result);
  //결과 : (5) [90, 160, 180, 132, 176]
}

//❓Q8. check if there is a student with the sore lower than 50
// 50점보다 낮은 학생이 있는가 ? some
{
  const result = students.some(student => student.score < 50);
  console.log(result);
} // 결과 : true
{
  //                     every : 모든요소가 충족해야 true
  const result = students.every(student => student.score < 50);
  console.log(result);
}

//❓Q9. compute students' average score
//모든 학생들의 평균을 구해라 reduce (  누적하는 함수, 모아두는)
// reduceRight 배열의 제일 뒤에서부터 시작함.
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length); //나눠주기
} // 결과 : 73.8

//❓Q10. make a string containing all the scores
//result should be : '45, 80, 90, 66, 88'
// 학생들의 모든 점수를 문자열로 변환하시오. map
{
  const result = students.map(student => student.score);
  console.log(result); //결과 :(5) [45, 80, 90, 66, 88]
}
{
  // 합쳐서 작성 가능
  const result = students
    .map(student => student.score)
    .filter(score => score >= 50)
    .join();
  console.log(result); //결과 : 80,90,66,88
}

//❓Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
// 낮은 점수가 먼저 나오게 해서 문자열로 변환하시오.
{
  const result = students //매핑을 먼저해준 후 솔트로 정렬한다.
    .map(student => student.score)
    .sort((a, b) => a - b) // 점수가 큰게 앞으로 나오게하고싶다면 b - a
    .join();
  console.log(result);
} //결과 : 45,66,80,88,90
