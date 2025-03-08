let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((response1) => {
//     console.log(response1);
//     return response1.json();
//   })
//   .then((data1) => {
//     console.log(data1);
//     console.log(data1.fact);
//     console.log(data1.length);
//     return fetch(url);
//   })
//   .then((response2) => {
//     return response2.json();
//   })
//   .then((data2) => {
//     console.log(data2.fact);
//   })
//   .catch((err) => {
//     console.log("Error - ", err);
//   });
async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
  } catch (err) {
    console.log("ERROR - ", err);
  }
}
getFacts();
