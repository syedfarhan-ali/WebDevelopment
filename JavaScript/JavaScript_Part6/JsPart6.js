// function rollDice(){
//     let roll = Math.floor(Math.random()*6)+1;
//     console.log(roll);

// }
// rollDice();
// rollDice();

//Function arguments
// function printName(name){
//     console.log(name);
// }
// let Name = prompt("enter name");
// printName(Name);

// function addNumbers(num1,num2){
//     console.log(num1+num2);

// }
// addNumbers(5,6);

// function printArray(fruits){
//     console.log(fruits);

// }
// let fruits = ["mango","orange"]
// printArray(fruits);

// function printName(name,age){
//     console.log(`${name}'s age is ${age}`);
// }
// printName("Rancho",24);
// printName("Raju");
// printName(21);

// function average(num1,num2,num3) {
//     console.log((num1+num2+num3)/3);
// }
// average(5,9,10);
// let number = 5;
// printMultiplicationTable(number);
// function printMultiplicationTable(num){
//     for(let i = 1;i <= 10;i++)
//     {
//         console.log(i*num);

//     }
// }
// function printOneToN(num){
//     let sum = 0;
//     for(let i=1;i<=num;i++){
//         sum+=i;
//     }
//     return sum;
// }
// let number = 100;
// console.log(printOneToN(number));

// function concatinate(array) {
//     let str = "";
//   for (let i = 0; i < array.length; i++) {
//     str = str+arr[i];
//   }
//   return str;
// }
// let arr = ["hello","world","I","am","Kira"];
// console.log( concatinate(arr));

// let sum = function(a,b){
//     return a+b;
// }
// console.log(sum(1,3));

// function multipleGreet(func, n) {
//   for (let i = 1; i <= n; i++) {
//     func();
//   }
// }
// let greet = function () {
//   console.log("America ya!");
// };
// multipleGreet(greet,10); 

// function odd(){
//     console.log("odd");
        
// }
// function even(){
        
//     console.log("even");
// }
// function evenOdd(str)
// {
//     if (str == "odd") {
//         return odd();
//     }
//     else if(str == "even")
//     {
//         return even();
//     }
//     else
//     {
//         console.log("wrong input");
        
//     }
// }
// let string = prompt("Enter value");

// evenOdd(string);

// const calculator = {
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }

// };
// console.log(calculator.sub(5,3));

// const calculator = {
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     },
//     mul(a,b){
//         return a*b;
//     }

// };
// console.log(calculator.add(5,3));

