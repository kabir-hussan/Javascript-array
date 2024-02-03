// sorting
// Ascending------> smaller to larger
//Descending------> larger to smaller


const numbers=[6, 20, 40, 1, 8];

const sortedNumbers= numbers.sort(); ///It doesn't working properly for big numbers


console.log(sortedNumbers);

console.log("\n Accurate sorting: ");

const ascSort= numbers.sort(function(a, b){return a-b}); //It's Working Properly for big value
console.log(ascSort);

const descSort=numbers.sort(function(a,b){return b-a});//descending sort
console.log(descSort);



