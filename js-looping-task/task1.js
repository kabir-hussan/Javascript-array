/**
 * Write a JavaScript code to reverse the array colors without using the reverse method
 */


const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const colorsRev=[];

for(const color of colors)
{

    colorsRev.unshift(color);

}

console.log(colorsRev);

