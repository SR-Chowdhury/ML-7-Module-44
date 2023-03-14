/**
 * Array.filter()
 * ------Definition and Usage-----
 * The filter() method creates a new array filled with elements that pass a test provided by a function.
 * The filter() method does not execute the function for empty elements.
 * The filter() method does not change the original array.
 * N>B> As filter() return a new array so we need to assign it a variable
 */

const products = [
    {id: 1, brand: 'apple', model: '2015', price: 15000},
    {id: 2, brand: 'xiome', model: '2019', price: 19000},
    {id: 3, brand: 'oppo', model: '2021', price: 15000},
    {id: 4, brand: 'samsung', model: '2024', price: 35000},
    {id: 5, brand: 'nokia', model: '2016', price: 65000},
];

const filteredProduct = products.filter(product => product.price < 20000);
console.log(filteredProduct);