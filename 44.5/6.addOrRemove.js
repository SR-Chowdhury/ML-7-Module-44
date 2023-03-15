/**
 * Copy Array, Add new element in an array, remove particular item from array
 */

const products = [
    {id: 1, brand: 'apple', model: '2015', price: 15000},
    {id: 2, brand: 'xiome', model: '2019', price: 19000},
    {id: 3, brand: 'oppo', model: '2021', price: 15000},
    {id: 4, brand: 'samsung', model: '2024', price: 35000},
    {id: 5, brand: 'nokia', model: '2016', price: 65000},
];

const newProduct = {id: 6, brand: 'hawaie', model: '2022'};

// First copy old products than add a new product to the updatedProducts
const updatedProducts = [...products, newProduct];
console.log(updatedProducts);

// remove particular item from array list

const remainingProducts = products.filter(product => product.brand !=='xiome');
console.log(remainingProducts);