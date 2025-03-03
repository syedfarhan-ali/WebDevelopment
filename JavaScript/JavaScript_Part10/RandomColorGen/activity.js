let btn = document.querySelector("button");
let div = document.querySelector("div");
let head = document.querySelector("h1");
btn.addEventListener("click",function(){
    let randomColor = getRandomColor();
    head.innerText = randomColor;
    div.style.backgroundColor = randomColor;
});

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}