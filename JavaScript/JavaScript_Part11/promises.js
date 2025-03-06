// function savetoDB(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success(data);
//   } else {
//     failure();
//   }
// }
// savetoDB(
//   "MERN STACK",
//   () => {
//     console.log("data saved");
//     savetoDB(
//         "MERN STACK",
//         () => {
//           console.log("data saved");
//           savetoDB(
//             "MERN STACK",
//             () => {
//               console.log("data saved");
//             },
//             () => {
//               console.log("data was not saved");
//             }
//           );
//         },
//         () => {
//           console.log("data was not saved");
//         }
//       );
//   },
//   () => {
//     console.log("data was not saved");
//   }
// );

//Promise
function savetoDB(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success: data was saved");
    } else {
      reject("failure: weak connection");
    }
  });
}
//req = promise object
savetoDB("Unity3D")
  .then((result) => {
    console.log("data 1 saved : promise was resolved");
    console.log(result);
    return savetoDB("Unreal Engine");
  })
  .then((result) => {
    console.log("data 2 was saved");
    console.log(result);
    return savetoDB("UE5");
  })
  .then((result) => {
    console.log("data 3 was saved");
    console.log(result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log(error);
});
