//find if all elements of the array are multiple of 10 or not
// let numArr = [10,50,60,70];
// let flag = numArr.every((num) => {
//     return (num % 10 == 0);
// });
// console.log(flag);

//find the minimum element in an array
let numberArr = [2,3,4,1]; 
let minResult = numberArr.reduce((min,eleCurr) => {
    if(min > eleCurr)
    {
        return eleCurr;
    }
    else{
        return min;
    }
});
console.log(minResult);
