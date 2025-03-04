let iput = document.querySelector("input");
let addBtn = document.querySelector("#add");
let ul = document.querySelector("ul");

addBtn.addEventListener("click", function () {
    let li = document.createElement("li");
    li.innerText = iput.value;
    ul.appendChild(li);
    iput.value = "";

    //My solution, works perfectly

    // let delBtn = document.createElement("button");
    // delBtn.innerText = "Delete task";
    // delBtn.classList.add("del");
    // li.append(delBtn);
    // delBtn.addEventListener("click", function () {
    //     if(li) li.remove();
    // });

    //Tutorial's solution
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete task";
    delBtn.classList.add("del");
    li.append(delBtn);
});
    //Tutorial's solution -> works for newly add elements by using Delegation.
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});
    //Tutorial's solution -> doesn't work for newly added elements
// let delBtns = document.querySelectorAll(".del");
// for(btn of delBtns){
//     btn.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(this);
//         par.remove();
//     });
// }

