let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.dir(form);

//     // form data can be extracted using both of these

//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
//     // let user = this.elements[0];
//     // let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);
//     alert(`Hi ${user.value} welcome, your password is ${pass.value}`);
// });


form.addEventListener("submit",function(event){
        event.preventDefault();
});
let user = document.querySelector("#user");

user.addEventListener("change",function(event){
    console.log("input changed");
    console.log("final value",this.value);
});

let pass = document.querySelector("#pass");

pass.addEventListener("input",function(event){
    console.log("input changed");
    console.log("final value",this.value);
});