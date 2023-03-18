// Using '' to convert number to string 

const num = 10;
const numString = num + '';

console.log(typeof num, num);
console.log(typeof numString, numString);


// Using + to convert string to number

const str = '123';
const strNum = +str;

console.log(typeof str, str);
console.log(typeof strNum, strNum);


// Using Ternary oprator to calling function

const isValid = true;
const func1 = () => console.log('display');
const func2 = () => console.log('hidden');

isValid ? func1() : func2(); // display


// Using && operator for checking left side; if left side true than right side will execute
isValid && func1(); // display


// Using || if left side is false than right side will be execute
const x = false;
x || func2(); // hidden



// Toogle Boolean
let bool = true;
bool = !bool;
console.log(bool); // false


// Object shorthand 

const a = 5;
const b = 10;

const obj1 = {
    a: a,
    b: b
}

// Or shotrhand

const obj2 = {a, b};
console.log(obj2.a, obj2.b); // 5 10