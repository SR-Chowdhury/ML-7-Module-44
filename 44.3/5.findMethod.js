/**
 * Array.find()
 * ----Definition and Usage-----
 * The find() method returns the value of the first element that passes a test.
 * The find() method executes a function for each array element.
 * The find() method returns undefined if no elements are found.
 * The find() method does not execute the function for empty elements.
 * The find() method does not change the original array.
 * N>B> As find() return only one value of object we need to assign it in a varaible
 * N>B> find() doesn't return an array
 */

const products = [
    {id: 1, brand: 'apple', model: '2015', price: 15000},
    {id: 2, brand: 'xiome', model: '2019', price: 19000},
    {id: 3, brand: 'oppo', model: '2021', price: 15000},
    {id: 4, brand: 'samsung', model: '2024', price: 35000},
    {id: 5, brand: 'nokia', model: '2016', price: 65000},
];

const specificName = products.find(product => product.brand.includes('a'));
console.log(typeof specificName, specificName);

// Output: { id: 1, brand: 'apple', model: '2015', price: 15000 }
// It will give you the first mathced value of object not array