/**
 * The For Of Loop
 * ----Use -----
 * The JavaScript for of statement loops through the values of an iterable array like object.
 * It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
 */

/**
 * Example 1
 */
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
// Even we can use map() or forEach() instead of for of loop
const array1Maped = array1.map(e => e);
console.log(array1Maped);



/**
 * Example 2
 */

let language = "JavaScript";

for (let x of language) {
    console.log(x);
}

const array2 = [10, 20, 30];

for (const element of array2) {
    console.log(element);
}
// Even we can use map() or forEach() instead of for of loop
const array2Maped = array2.map(e => e);
console.log(array2Maped);