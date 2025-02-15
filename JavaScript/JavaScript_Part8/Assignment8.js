//Q1 square and sum the array elements using the arrow function and then find the average of the array
let nums = [1, 2, 3, 4, 5];
const square = nums.map((num) => num * num);
console.log(square);
let sum = square.reduce((sum, ele) => sum + ele);
let avg = sum / nums.length;
console.log(avg);
//Q2 Create a new array using the map function whose each element is equal to the original element plus 5.

let array = [1, 2, 3, 4, 5];
let newArray = array.map((ele) => ele + 5);
console.log(newArray);

//Q3 Create a new array whose elements are in uppercase of words present in the original array.

let strings = ["Rancho", "Raju", "Farhan", "Chatur", "milimeter"];
let newStrings = strings.map((names) => names.toUpperCase());
console.log(newStrings);

//Q4 Write a function called double And Return Args which accepts an array and a
//variable number of arguments.The function should return a new array with the
//original array values and all of the additional arguments doubled.
const returnAndDoubleArgs = (arr, ...args) => [
    ...arr,
    ...args.map((v) => v*2),
];
console.log(returnAndDoubleArgs([1,2,3],4,4));
console.log(returnAndDoubleArgs([2],10,4));

//Q5 Write a function called mergeObjects that accepts two objects and returns a new
//object which contains all the keys and values of the first object and second object
const mergeObjects = (obj1,obj2) => {
    return {...obj1,...obj2};
};
const obj1 = { name: "raju", marks: 75 };
const obj2 = { name: "rancho", marks: 99 };
const obj1and2 = mergeObjects(obj1,obj2);
console.log(obj1and2);

