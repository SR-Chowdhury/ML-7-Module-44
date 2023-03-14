/**
 * Array.includes()
 * -----Definition and Usage-----
 * The includes() method returns true if an array contains a specified value.
 * The includes() method returns false if the value is not found.
 * The includes() method is case sensitive.
 */

const numbers = [10, 20, 30, 40];
console.log(numbers.includes(30)); // ture
// Cause inclues gives you either true of false

const products = [
    {id: 1, brand: 'apple', model: '2015', price: 15000},
    {id: 2, brand: 'xiome', model: '2019', price: 19000},
    {id: 3, brand: 'oppo', model: '2021', price: 15000},
    {id: 4, brand: 'samsung', model: '2024', price: 35000},
    {id: 5, brand: 'nokia', model: '2016', price: 65000},
];

const specificName = products.filter(product => product.brand.includes('k'));
console.log(specificName);