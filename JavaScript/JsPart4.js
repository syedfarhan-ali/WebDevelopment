//1-15 tak odd numbers
// for(let i = 1;i <= 15;i++)
// {
//     if (i & 1) {
//         console.log(i);
//     }
// }

// for(let i = 1;i <= 15;i++)
// {
//     if (i%2 != 0) {
//         console.log(i);
//     }
// }

// for(let i = 1;i <= 15; i+=2)
// {
//     console.log(i);
// }

//2-10 tak even numbers
// for(let i = 2;i <= 10;i++)
// {
//     if(i%2==0)
//     console.log(i);
// }

// for(let i = 2;i <= 10; i++)
// {
//     if (i & 1) {
//     }
//     else{
//         console.log(i);
//     }
// }

// for(let i = 2;i <= 10;i+=2)
// {
//     console.log(i);
// }

//Print multiplication table of 5 using loops
// for (let i = 5; i <= 50; i += 5) {
//   console.log(i);
// }

// let number = prompt("Enter number");
// number = parseInt(number);
// for (let i = number; i <= number * 10; i += number) {
//   console.log(i);
// }

//nested loops
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     console.log(j);
//   }
// }

//Favorite Movie program
// const favoriteMovie = "3 idiots";
// let notquit = true;
// let guess = prompt("enter your guess \ntype quit to exit");
// while ((guess != favoriteMovie) && (guess != "quit")) {
//   guess = prompt("Wrong guess try again");
// }
// if (guess == favoriteMovie) {
//     alert("your guess was right");
// }

//loops on arrays
// let fruits = ["apple", "banana", "orange", "grape", "mango"];
// for(let i = 0;i<fruits.length;i++)
// {
//     console.log(i,fruits[i]);
// }
// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(i, fruits[i]);
// }

//loops on nested arrays
// let names = [
//   ["raju", "farhan", "rancho"],
//   ["chatur", "virus", "milimeter"],
// ];
// for (let i = 0; i < names.length; i++) {
//   for (let j = 0; j < names[0].length; j++) {
//     console.log(i, j, names[i][j]);
//   }
// }

//for of loop
// let fruits = ["apple", "banana", "orange", "grape", "mango"];
// for(names of fruits){
//     console.log(names);
// }

//nested for of loop
// let names = [
//   ["raju", "farhan", "rancho"],
//   ["chatur", "virus", "milimeter"],
// ];
// for(i of names){
//     for(j of i){
//         console.log(j);
//     }
// }