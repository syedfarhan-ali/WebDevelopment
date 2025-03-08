//async

// async function print() {
//   //   throw "404 page not found"; //throws and error
//   return "abc";
// }
// console.log(print());
// print()
//   .then((result) => {
//     console.log("promise was resolved");
//     console.log("result is ", result);
//   })
//   .catch((err) => {
//     console.log("promise rejected", err);
//   });
// let demo = async () => {
//   return 5;
// };
// console.log(demo());

//await

// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// }
// async function demo() {
//   await getNum();
//   await getNum();
//   getNum();
// }
//type demo(); in console


let h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let randNum = Math.floor(Math.random()*5)+1;
            if(randNum > 3){
                reject("Promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed");
        },delay);
    });
}

async function demo(){
    try{
        await changeColor("red",1000);
        await changeColor("orange",1000);
        await changeColor("green",1000);
        await changeColor("yellow",1000);
        await changeColor("blue",1000);
    }catch(err){
        console.log("error caught");
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("new number = ",a+3);
}