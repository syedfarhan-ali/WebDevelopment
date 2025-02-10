//Q1.Create a program that generates a random number representing a dice roll
let roll = Math.floor(Math.random()*6)+1;
console.log(roll);
//Qs2.Create an object representing a car that stores the following properties for the 
// car:name,model,color.
// Print the car’s name.
const car = {
    name:"maruti",
    model:"Dzire",
    color:"white"
};
console.log(car.name);
console.log(car["name"]);
//Qs3.Create an object Person with their name,age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States.
const person = {
    name:"generic_name",
    age:21,
    city:"Mumbai"
};
console.log(person);
person.city = "New York";
console.log(person);
person.country = "United States";
console.log(person);