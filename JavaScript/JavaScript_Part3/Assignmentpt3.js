//Q1
let arr = [7, 9, 0, -2];
let n = 3;
console.log(arr.slice(0, n));

//Q2
// console.log(arr.slice(-1*n));
console.log(arr.slice(arr.length - n));


//Q3
let string = "";
if (string.length == 0) {
    console.log("blank");
}
else {
    console.log("not blank");
}

//Q4
let char = 'hellO';
let index = 3;
if (char[index] == char[index].toLowerCase()) {
    console.log("lowercase");
}
else {
    console.log("uppercase");
}

//Q5
let str = "     hellow      ";
console.log(str.trim());

//Q6
let array = ["java", "python", "c++", "rust"];
console.log(array.includes("html"));

// let arra = ["hello", 'a', 23, 64, 99, -6];
// let item = 64;
// if (arr.indexOf(item) != -1) {
//     console.log("element exists in array");
// }
// else {
//     console.log("element doesn't exist in array");
// }