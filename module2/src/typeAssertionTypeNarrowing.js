"use strict";
// type assertion
let anything;
anything = 'Next level web development.';
const sliceResult = anything.charAt(4);
console.log(sliceResult);
const kgToGram = (value) => {
    if (typeof value === 'string') {
        const convertedValue = parseFloat(value) * 1000;
        return `Converted value is: ${convertedValue.toFixed(2)} gram.`;
    }
    if (typeof value === 'number') {
        return (value * 1000).toFixed(2);
    }
};
const resultOfKgToGram = kgToGram('7');
console.log(resultOfKgToGram);
try {
}
catch (error) {
    console.log(error.message);
}
