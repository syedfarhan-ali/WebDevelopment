//forEach

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(el => {
//     console.log(el);
// });
// arr.forEach(function (el) {
//   console.log(el);
// });
// let print = function(el){
//     console.log(el);
// };
// arr.forEach(print);

// let students = [
//   {
//     name: "Raju",
//     marks: 75
//   },
//   {
//     name: "Farhan",
//     marks: 90
//   },
//   {
//     name: "Rancho",
//     marks: 99
//   },
// ];
// let gpa = students.map((ele) => {
//     return (ele.marks/10.0);
// });
// let prt = function (element){
//     console.log(element.marks);
// };
// objArr.forEach(prt);

//map

// let nrml = [1,2,3,4,5];

// let sqr = nrml.map(function (element){
//     return element**2;
// });
// console.log(sqr);

//filter
// let nums = [2, 1, 5, 3, 7, 8, 6, 4, 9];
// let even = nums.filter((ele) => {
//     return !(ele&1)
// }); // if true then element gets added to the even array.

//Every -> return true if every element of array gives true for some function.Else returns false (it is like logical and)
// console.log(
//   [2, 4].every((ele) => {
//     return !(ele & 1);
//   })
// );

//some -> return true if some element of array gives true for some function.Else returns false (it is like logical or)

// console.log(
//       [3,4].some((ele) => {
//         return !(ele & 1);
//       })
//     );

//Reduce ->reduces the array to a single value
//syntax ->arr.reduce(reducer function with 2 variables for (accumulator,element));
// console.log();
//     [1, 2, 3, 4].reduce((accumulator, element) => {
//         console.log(`value of accumulator is ${accumulator}`);
//         return accumulator + element});
//accumulator is initialized with the reutrn value

// let nums = [2,3,4,5,3,4,7,8,1,2];

// let result = nums.reduce((max,ele) => {
//     if(ele>max){
//         return ele;
//     }
//     else{
//         return max;
//     }
// });
// console.log(result);

//default arguments

// function add(a,b = 1){
//     return a+b;
// }
// let result = add(4);
// console.log(result);

//spread
// let array = [1,2,3,4,5];
// let string = "Farhan"
// let obj = [
//     raju = {name:"Raju",
//     marks:75},
//     rancho = {name:"Rancho",
//     marks:99}
// ];
// console.log(...array);
// console.log(...string);
// console.log(...obj);

// let numbers = [1,2,3,4,5,6];
// let newNumbers = [...numbers];
// console.log(...newNumbers);

// let chars = ["hello"]

// let newChars = [...chars];
// console.log(...newChars);

// let even = [2,4,6,8,10];
// let odd = [1,3,5,7,9];
// let both = [...even,...odd];
// console.log(...both);

// let data = {
//     email:"something@gmail.com",
//     password:"abc"
// };
// let newData = {...data,id: 123};

// let arr1 = [1,2,3,4];
// let obj1 = {...arr1};

//rest -> allows a function to take indefinite number of arguments and bundle them in an array

// function print(...args) {
//   for(let i = 0;i<args.length;i++)
//   {
//     console.log(`you gave us ${args[i]}`);
//   }
// }
// console.log(print(1,2,3,4,5));

// function sum(...args) {
//     return arguments.reduce((sum,ele) =>sum+ele);
//   }
// console.log(sum(1,2,3,4,5));

//destructuring
// let names = ["Rancho","Farhan","Raju","Chatur","milimeter"];
// let [first,second,third,...others] = names;
// console.log(first,second,third);
// console.log(...others);

//destructuring for objects
const student = {
    name:"piyush",
    class:9,
    subjects:["hindi","english","maths","science"],
    username:"piyush44",
    password:"py123",
    city:"indore"
};
let {password,username: user,city: place = "mumbai"} = student;
