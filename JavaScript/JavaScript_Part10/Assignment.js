let div = document.querySelector("div");

div.addEventListener("mouseout", (event) => {
    console.log("mouse out");
});
let p = document.querySelector("p");

window.addEventListener("scroll",(event) => {
    console.log("scroll triggered");
});
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });

let btn = document.querySelector("button");
btn.addEventListener("click",() =>{
    btn.style.backgroundColor = "green";
});

let iput = document.querySelector("input");
let h2 = document.querySelector("h2");
iput.addEventListener("input",() => {
    h2.innerText = iput.value;
});