//----------------Reverse array item with multiple ways-----------------


// -------------SIMPLE WAY --------------

const numbers=[22, 33, 44, 55, 66, 88, 99];

console.log(numbers);

// numbers.reverse(); It is shortcut process for reverse array

// console.log(numbers);

const reverseArray=[];
for(const number of numbers)
{

    reverseArray.unshift(number); //unshift function place the array item from right to left or start in the array
}

console.log(reverseArray);


// For loop for reverse an array

console.log("\nArray Reverse Using for loop: ")

const countryRev=[];
const country=['Bangladesh', 'Pakistan', 'America', 'England', 'Korea', 'Saudi-Arabia'];

for(let i=0; i<country.length; i++)
{
    const item=country[i];

    countryRev.unshift(item);
}

console.log(countryRev);

// Array reverse without function

console.log("\n Mannually array reverse: ");

const numArray=[100, 200, 300, 400, 500, 600, 700];

const numArrayRev=[];

for(let i=numArray.length-1; i>=0; i--)
{
    const num=numArray[i];

    numArrayRev.push(num);
}


console.log(numArrayRev);

