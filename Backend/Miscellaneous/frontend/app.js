//factory function
// function personMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`Hello my name is ${name}`);
//     },
//   };
//   return person;
// }
// let p1 = personMaker("bob",25);

//constructers - doesn't return anything & start with capital letter
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log(this);
// }

// Person.prototype.talk = function () {
//   console.log(`Hi my name is ${this.name}`);
// };

// let p1 = new Person("charli", 20);
// let p2 = new Person("charli", 20);

//Classes - start with capital letter
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi my name is ${this.name}`)
//     }
// }

// let p1 = new Person("david", 25);
// let p2 = new Person("jones", 27);

//Inheritance
class Person{
    constructor(name,age){
        console.log("Person class constructor");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi my name is ${this.name}`);
    }
}
class Student extends Person{ // class childClass extends ParentClass
    constructor(name,age,marks){
        console.log("student class constructor");
        super(name,age);//calling constructor of parent class
        this.marks = marks;
    }
   
}


class Teacher extends Person{ // class childClass extends ParentClass
    constructor(name,age,subject){
        super(name,age);//calling constructor of parent class
        this.subject = subject;
    }
    
}

//example
class Mammal{
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }
    eat(){
        console.log("I am eating");
    }
}

class Dog extends Mammal{
    constructor(name){
        super(name);
    }
    bark(){
        console.log("woof...");
    }
    eat(){
        console.log("dog is eating");//if we make a method with the same name the current class method will overwrite the parent method
    }
}

class Cat extends Mammal{
    constructor(name){
        super(name);
    }
    meow(){
        console.log("meow...");
    }
}