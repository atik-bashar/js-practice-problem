/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */

/**
 * puts odd numbers in an array
 */

function oddAverage(numbers){
    console.log(numbers);
    const odds = [];
    for(const number of numbers){
        // console.log(number);
        if(number % 2 === 1){
            odds.push(number);
        }
    }
    // odds is the array that contains only the odd numbers
    // console.log(odds);

    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;
}

const numbers = [42, 13, 58, 65, 81, 7, 105];
const avg = oddAverage(numbers);
console.log('average of the odd numbers is:', avg);