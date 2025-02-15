// const arrayAverage = (array) => {
//     let average = 0;
//     for(let number of array)
//     {
//         average += number;
//     }
//     return average/array.length;
// };
// let arr = [50,60,70];
// console.log(arrayAverage(arr));

// const isEven = number => {
//     if(number&1)
//     {
//         return "odd";
//     }
//     else{
//         return "even";
//     }
// }
// let num = 55;
// console.log(isEven(num));

//undifined print because 
// const object = {
//     message:'Hello, world!',

//     logMessage(){
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage,1000); //we didn't use ()after logMessage

//Q4
const length = 4;
function callback(){
    console.log(this.length);
}
const object = {
    length:5,
    method(callback){
        callback();
    },
};
object.method(callback,1,2);