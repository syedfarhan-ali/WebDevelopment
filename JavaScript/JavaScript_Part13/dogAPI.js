let url = "https://catfact.ninja/fact";
let p = document.querySelector("#fact");
let button = document.querySelector("#catfact");

button.addEventListener("click", async () => {
      p.innerText = await getFacts();
    });
async function getFacts() {
  try {
    let res = await axios.get(url);
    console.log(res.data.fact);
    return res.data.fact;
    //commented out part is the solution I came up with
    // button.addEventListener("click", () => {
    //   p.innerText = res.data.fact;
    //   getFacts();
    // });
  } catch (err) {
    console.log("ERROR - ", err);
  }
}

let url2 = "https://dog.ceo/api/breeds/image/random";
let buttonDog = document.querySelector("#factDog");

buttonDog.addEventListener("click",async () => {
    let link = await getDogPic();
    console.log(link);
    let img = document.querySelector("#img");
    img.setAttribute("src",link);
    // document.getElementById("img").src = link;   //this was my solution
    // document.getElementById("img").style.height = "300px";
    document.getElementById("img").style.width = "400px";
});
async function getDogPic(){
    try{
        let pic = await axios.get(url2);
        // console.log(pic.data.message);
        return pic.data.message;
    }catch(err){
        console.log("ERROR - ",err);
    }
    
}