/**

 * 'TomTimTinTik'
 */

const numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

concatString='';

for(const number of numbers)
{
    concatString = concatString.concat(number);
}
console.log(concatString);

