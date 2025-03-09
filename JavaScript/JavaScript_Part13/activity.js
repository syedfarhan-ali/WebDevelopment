let url = "http://universities.hipolabs.com/search?name=";

let iput = document.querySelector("input");
let btn = document.querySelector("button");
let p = document.querySelector("#result");

btn.addEventListener("click",async () => {
    let country = iput.value;
    iput.value = "";
    console.log(country);
    let colleges = await getColleges(country);
    show(colleges);
});
function show(colleges){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colleges){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}
async function getColleges(country){
    try{
        let res = await axios.get(url + country);
        console.log(res);
        return res.data;
    }catch(err){
        console.log("ERROR - ",err);
    }
}