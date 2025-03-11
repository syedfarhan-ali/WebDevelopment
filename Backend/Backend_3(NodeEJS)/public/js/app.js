const btns = document.querySelectorAll("button");
for(button of btns){
    button.addEventListener("click",() => {
        console.log("button was clicked");
    });
}