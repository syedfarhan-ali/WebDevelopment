let fruits = ["mango", "orange", "banana"];
let numbers = [1, 2, 3, 4];

let mixarray = ["mango", 45, false, 3.14, 'a'];//mixed arrays can be created in javascript
let emptyarray = [];

console.log(fruits);
console.log(numbers);
console.log(mixarray);
console.log(emptyarray);
console.log(fruits[0][0]);

fruits[0] = "papaya";
console.log(fruits);

fruits[10] = "litchi"
console.log(fruits);
//push pop 
let cars = ["bmw", "maruti", "audi"];
console.log(cars);

cars.push("toyota");
console.log(cars);

cars.pop();
console.log(cars);
//shift unshift
cars.unshift("volkswagan");
console.log(cars);
cars.shift();
console.log(cars);

//<--*-->
console.log(cars.indexOf("audi"));
console.log(cars.includes("maruti"));
console.log(cars.includes("civic"));

//concation and reverse
let primary = ["red","yellow","blue"];
let seconday = ["orange","green","violet"];

console.log(primary.concat(seconday));
console.log(primary.concat(seconday).reverse());

//slice ->return a copy of array items
let colors = ["red","yellow","blue","orange","pink","white"];
console.log(colors.slice());
console.log(colors.slice(2,3));
console.log(colors.slice(2));
console.log(colors.slice(-2));

//splice -> changes the existing array
let brands = ["mi","apple","samsung","oneplus","google"];
//splice(start,deleteCount,item0->itemN) [item0-N = items to be added]
console.log(brands.splice(1,1));
console.log(brands.splice(0,1,"lava"));

//sorting -> don't use sorting on numbers because numbers are converted
//to strings and then sorted as strings
let counting = [6,8,3,100,4,99];
console.log(counting.sort());