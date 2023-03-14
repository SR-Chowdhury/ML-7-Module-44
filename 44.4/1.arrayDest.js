/**
 * Array destructuring
 */

// Method 1

const numbers = [10, 20];

const [number1, number2] = numbers;
console.log(number1, number2); // 10 20

// Method 2

const makeArray = (number1, number2) => {
    const numbers = [number1, number2];
    return numbers;
}
const [num1, num2] = makeArray(10, 20);
console.log(num1, num2); // 10 20

// Method 3

const obj = {
    name: 'shihan',
    birthDate: [29, 06, 1992]
}
const [n1, n2, n3] = obj.birthDate;
console.log(n1, n2, n3);
