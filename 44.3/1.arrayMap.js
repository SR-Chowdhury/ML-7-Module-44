/**
 * Array.map() =>
 * ---Definition and Usage---
 * map() creates a new array from calling a function for every array element.
 * map() calls a function once for each element in an array.
 * map() does not execute the function for empty elements.
 * map() does not change the original array.
 * N>B> As map return a new array so we need to assign this new array to a vairable
 */
const products = [
    {id: 1, brand: 'apple', model: '2015', price: 15000},
    {id: 2, brand: 'xiome', model: '2019', price: 19000},
    {id: 3, brand: 'oppo', model: '2021', price: 15000},
    {id: 4, brand: 'samsung', model: '2024', price: 35000},
    {id: 5, brand: 'nokia', model: '2016', price: 65000},
];

const prices = products.map(product =>product.price);

if (Array.isArray(prices)) {
    console.log('Map return a new array'); // true: Map return a new array
}
console.log(prices);