// const student = {
//     name:"Farhan",
//     age:21,
//     marks:99.99
// };
// console.log(student["name"]);
// console.log(student["age"]);
// console.log(student["marks"]);
// let nm = "name";
// console.log(student[nm]);

// console.log(student.name);
// console.log(student.age);
// console.log(student.marks);

// let items = {
//     name:"box",
//     price:50,
//     color:["red","black"]
// };
// const post = {
//     username:"@farhan",
//     content:"first post #FirstPost",
//     likes:150,
//     repost:5,
//     tags:["@friend1","friend2"]
// };

// const obj = {
//     1:"a",
//     2:"b",
//     null:"c",
//     true:"d",
//     undefined:"e",
// };

// const student = {
//   name: "Farhan",
//   age: 21,
//   marks: 90,
//   city: "Ujjain",
// };
// console.log(student);
// student.city = "Delhi";
// console.log(student);

// student.gender = "male";
// console.log(student);

// student.marks = "A";
// console.log(student);

// delete student.city;
// console.log(student);

// const classInfo = {
//     student1:{
//         name:"stud1",
//         age:19,
//         marks:20
//     },
//     student2:{
//         name:"stud2",
//         age:20,
//         marks:40
//     },
//     student3:{
//         name:"stud3",
//         age:21,
//         marks:50
//     }
// };
// console.log(classInfo);

// const classInfo = [
//     {
//         name:"stud1",
//         age:19,
//         marks:20
//     },
//     {
//         name:"stud2",
//         age:20,
//         marks:40
//     },
//     {
//         name:"stud3",
//         age:21,
//         marks:50
//     }
// ];
// console.log(classInfo);

// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.abs(-99));
// console.log(Math.pow(2,5));
// console.log(Math.floor(9.999));
// console.log(Math.floor(-9.1));
// console.log(Math.ceil(9.1));
// console.log(Math.ceil(-9.999));
// console.log(Math.random());

//Random number range from 1 -> 10
// let num = Math.random();
// num = num * 10;//multiply by the range limit you want
// num = Math.floor(num);//removing all numbers after decimal
// num+=1;
// console.log(num);
// let numb = Math.floor(Math.random()*10) + 1;
// console.log(numb);

//Q.Generate a random number between 1 and 100
// let number = Math.random();
// number *= 100;
// number = Math.floor(number);
// number+=1;
// console.log(number);
// let number = Math.floor(Math.random()*100)+1;
// console.log(number);
// let number = Math.floor(Math.random()*5)+1;
// console.log(number);

//Guessing game
let max = prompt("Enter your max number");
let number = Math.floor(Math.random() * max) + 1;
let guess;
guess = prompt("Enter your guess\nquit to exit");
while (true) {
  if (guess == "quit") {
    console.log("you quit");
    break;
  }

  if (guess == number) {
    console.log("Congrats you guessed right");
    break;
  }
  if (guess > number) {
    guess = prompt("your guess is higher than number");
  } else{
    guess = prompt("your guess is lower than number");
  }
  
}
