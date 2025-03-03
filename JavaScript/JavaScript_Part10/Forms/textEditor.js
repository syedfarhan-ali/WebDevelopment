let iput = document.querySelector("#text");
let p = document.querySelector("p");
iput.addEventListener("input",function(event){
    console.log(iput.value);
    p.innerText = iput.value;
});