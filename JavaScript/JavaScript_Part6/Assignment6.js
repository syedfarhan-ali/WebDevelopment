// let arr = [4,5,6,7,8,9,10];
// let n = 7;
// function largerElements(array,target)
// {
//     for(let i = 0;i<array.length;i++)
//     {
//         if(array[i] > target){
//             console.log(array[i]);
//         }
//     }
// }
// console.log(largerElements(arr,n));

// let string = "abcdabcdefgggh"; // let ans = "abcdefgh";
// function unique(str) {
//   let ans = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if(ans.indexOf(char) == -1)
//     {
//         ans += char;
//     }
//   }
//   return ans;
// }
// console.log(unique(string));

// let country = ["Australia", "Germany", "United States of America"];
// function longestCountryName(name) {
//     let largest = "null";
//     for(let i=0;i<country.length;i++)
//     {
//         if(country[i].length > largest.length)
//         {
//             largest = country[i];
//         }
//     }
//     return largest;
// }
// console.log( longestCountryName(country));

// let str = "afraid";
// function countVowels(string){
//     let count = 0;
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
//         {
//             count++;
//         }
//     }
//     return count;
// }
// console.log( countVowels(str));

let start = 5;
let end = 10;
let diff = end-start;
function randomNum(start,end) {
    return Math.floor(Math.random()*diff)+start;
}
console.log( randomNum(start,end));

