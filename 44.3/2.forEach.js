/**
 * Array.forEach()
 * ----Definition and Usage----
 * The forEach() method calls a function for each element in an array.
 * The forEach() method is not executed for empty elements.
 * N>B> As forEach() doesn't return anything so that we don't need to assign it in a variable
 */

const products = [
    {id: 1, brand: 'apple', model: '2015', price: 15000},
    {id: 2, brand: 'xiome', model: '2019', price: 19000},
    {id: 3, brand: 'oppo', model: '2021', price: 15000},
    {id: 4, brand: 'samsung', model: '2024', price: 35000},
    {id: 5, brand: 'nokia', model: '2016', price: 65000},
];


products.forEach(product => console.log(product.brand));
