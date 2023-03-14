/**
 * 44-2 template string, arrow function, spread operator
 */

// ES6 - Template string [done]
// ES6 - arrow function [done]
// ES6 - spread operator

const arr1 = [2, 4, 6, 8, 10];
const arr2 = ['shihan', 'moni'];

const copyOfArr1 = [...arr1];
const copyOfArr2 = [...arr2];

const currentArr1 = [...arr1, 12, 14];
const currentArr2 = [...arr2, 'tini'];

console.log(arr1);
console.log(copyOfArr1);
console.log(currentArr1);

console.log(arr2);
console.log(copyOfArr2);
console.log(currentArr2);
