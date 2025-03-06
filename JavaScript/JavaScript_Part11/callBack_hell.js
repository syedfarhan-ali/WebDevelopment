let h1 = document.querySelector("h1");
// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }
// //callback hell
// changeColor("red", 1000, () => {
//   changeColor("orange", 1000,()=>{
//     changeColor("green", 1000,()=>{
//         changeColor("yellow", 1000,()=>{
//             changeColor("blue", 1000,()=>{});
//         });
//     });
//   });
// });

//Refactored code with Promises
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}
changeColor("red", 1000)
  .then(() => {
    console.log("red is color");
    return changeColor("orange", 1000);
  })
  .then(() => {
    console.log("orange is color");
    return changeColor("blue", 1000);
  })
  .then(()=>{
    console.log("blue is color");
  })
  //using catch is unnecessary here as this code will only get rejected if we mess up changing color syntax
  .catch(() => {
    console.log("rejected");
  });
