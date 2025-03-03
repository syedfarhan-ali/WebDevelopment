let btn = document.querySelectorAll("button");
// console.dir(btn);

// btn.onclick = function (){
//     console.log("button was clicked");
//     alert("Button was clicked");
// }

// function sayHello(){
//     alert(`Hello!`);
// }
// for(button of btn)
// {
//     button.onclick = sayHello;
//     button.onmouseenter = function (){
//         console.log("You entered a button");
//     }
// }
for (button of btn) {
  button.addEventListener("click", function () {
    console.log("button was clicked");
  });
}
for (button of btn) {
  button.addEventListener("click", function () {
    console.log("2nd event Listener");
  });
}
for(button of btn)
{
    button.addEventListener("mouseenter",function () {
        console.log("you entered a button");
    });
}
