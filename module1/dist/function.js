"use strict";
function add(num1, num2) {
    return num1 + num2;
}
add(2, 5);
const poorUser = {
    name: 'wasim',
    age: 29,
    balance: 0,
    addBalance(balance) {
        return `New Balance ${this.balance + balance}`;
    }
};
const arr = [2, 4, 6, 8];
const newArray = arr.map(ele => ele * ele);

console.log(newArray)
