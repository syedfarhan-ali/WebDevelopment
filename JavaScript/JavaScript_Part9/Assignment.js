let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click me";
document.body.append(input);
document.body.append(btn);

input.setAttribute("placeholder","username");
btn.setAttribute("id","btn");

document.querySelector("button").style.backgroundColor = "blue";
document.getElementById("btn").style.color = "white";

let heading = document.createElement("h1");
heading.innerHTML = "<u>DOM Practice</u>";
heading.style.color = "purple";
document.body.prepend(heading);

let para = document.createElement("p");
para.innerHTML = "<b>Practice</b>"
document.body.append(para);