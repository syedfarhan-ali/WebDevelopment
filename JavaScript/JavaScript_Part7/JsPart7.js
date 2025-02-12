//this keyword

// const student = {
//   name: "Farhan",
//   eng: 75,
//   math: 80,
//   sci: 90,
//   getAvg() {
//     console.log(this);

//     let average = Math.floor((this.eng + this.math + this.sci) / 3);
//     console.log(average);
//   },
// };
// student.getAvg();
// console.log(this);

//try and catch

// console.log("hello");
// console.log("world");
// try{
//     console.log(a);
// }
// catch(err){
//     console.log("error on a variable");
//     console.log(err);

// }
// console.log("I");
// console.log("am");
// console.log("Kira");

//Miscellaneous Topics
// const sum = (num1,num2) => {console.log(num1+num2);}
// sum(50,79);

// const mul = (n1, n2) => (
//   n1 * n2
// );
// console.log(mul(5,6));

//setTimeout
// console.log("Hi there");
// setTimeout(() => console.log("Ohaiyo!"), 4000);
// console.log("welcome to ");

//setInterval
// let id = setInterval(() => console.log("arigato "), 2000);
// let id1 = setInterval(() => console.log("gosaimasu dattebaiyo"), 2000);

// clearInterval(id);

//this with arrow functions
//1)Arrow this-> Lexical scope , parent -> call scope
//2)function this->calling object scope
// const student = {
//   name: "farhan",
//   marks: 98,
//   prop: this,
//   getName: function () {
//     console.log(this);
//     return this.name;
//   },
//   getMarks: () => {
//     console.log(this);
//     return this.marks;
//   },
//   getInfo1: function () {
//     setInterval(() => {
//       console.log(this);
//     }, 2000);
//   },
//   getInfo2: function () {
//     setInterval(function(){
//       console.log(this);
//     }, 2000);
//   },
// };
// console.log(student.getName());
// console.log(student.getMarks());

// console.log(student.getInfo1());
// console.log(student.getInfo2());

//practice Qs
// const square = (n) => n * n;
// console.log(square(4));
// let id = setInterval(function () {
//     for (let i = 0; i < 5; i++) console.log("Hello world");
//   }, 2000);
// setTimeout(() => {clearInterval(id)},10000);