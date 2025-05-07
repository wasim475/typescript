"use strict";
// Nullable Types
function searchName(value) {
    if (value) {
        console.log("searching");
    }
    else {
        console.log("Nothing to search");
    }
}
searchName("null");
// Unknoen Type
const getSpeedInMeterPerSecond = (value) => {
    if (typeof value === 'number') {
        const convertedValue = (value * 10000) / 3600;
        console.log(`The speed is ${convertedValue.toFixed(1)} ms^-1`);
    }
    if (typeof value === 'string') {
        const [valueInNumber, unit] = value.split(' ');
        const convertedValue = (parseFloat(valueInNumber) * 1000) / 3600;
        console.log(`The speed is ${convertedValue.toFixed(1)} ms^-1`);
    }
    else {
        console.log("Wrong Input");
    }
};
getSpeedInMeterPerSecond(undefined);
// Never type
function throwError(msg) {
    throw new Error(msg);
}
throwError("mushkil se error");
