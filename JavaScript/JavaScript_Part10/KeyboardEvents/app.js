let iput = document.querySelector("input");

iput.addEventListener("keydown",function(event){
    console.log("key = ",event.key);
    if(event.key == "ArrowUp"){
        console.log("Character Jumped");
    }
    else if(event.key == "ArrowDown"){
        console.log("Character Ducked");
    }
    else if(event.key == "ArrowRight"){
        console.log("Character Moved Forward");
    }
    else if(event.key == "ArrowLeft"){
        console.log("Character Moved backwards")
    }
});



