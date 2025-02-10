// //Q1
// let arr = [1,2,3,4,5,6,2,3];
// let nums = 2;
// for(let i = 0;i<arr.length;i++)
// {
//     if(arr[i] == nums)
//     {
//         arr.splice(i,1);
//     }
// }
// for(numbers of arr)
// {
//     console.log(numbers);
// }

// //Q2
// let number = 287152;
// let count = 0;
// let num = number;
// while(num){
    
//     num = parseInt(num/10);
//     count++;
// }
// console.log(count);

// //Q3
// let number = 287152;
// let sum = 0;
// let num = number;
// while (num) {
//     sum += parseInt(num%10);
//     num = parseInt(num/10);
// }
// console.log(sum);

// //Q4
// let n = 7;
// let factorial = 1;
// for(let i = 1;i <= n;i++)
// {
//     factorial *= i;
// }
// console.log(factorial);

//Q5
let array = [10,22,3,40,59];
let largest = array[0];
for(let i = 0;i < array.length;i++)
{
    if (array[i] > largest) {
        largest = array[i];
    }
}
console.log(largest);