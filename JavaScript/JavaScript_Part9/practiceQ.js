let para = document.createElement("p");
para.innerText = "Hey I am red";
para.style.color = "red";
document.body.append(para);

let h3 = document.createElement("h3");
h3.innerText = "I am blue";
h3.style.color = "blue";
document.body.append(h3);

let div1 = document.createElement("div");
let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
div1.appendChild(h1);
let p1 = document.createElement("p");
p1.innerText = "ME TOO!"
div1.appendChild(p1);
document.body.append(div1);
div1.className = "div1";

