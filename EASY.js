// EASY:

//  Write a function that takes in an array of numbers and outputs the average of all the numbers. 
// Example 1:
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2


const numbers = [1, 4, 7];
function calculateAverage(numbers) {
    let total = 0;
    let count = 0;
// The forEach() method calls a function for each element in an array.//
    numbers.forEach(function(item, index) {
        total += item; //adding the sum of numbers in array//
        count++;
    });

    return total / count; //returning the total and dividing it by the count//
}

console.log(calculateAverage(numbers));


const num = [10, 5];
function calculateAverage(num) {
    let total = 0;
    let count = 0;

    num.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}

console.log(calculateAverage(num));

const num2 = [1.5, 3, 2.5, 1];

function calculateAverage(num2) {
    let total = 0;
    let count = 0;

    num2.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}

console.log(calculateAverage(num2));

