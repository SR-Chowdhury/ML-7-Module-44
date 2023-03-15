/**
 * Object.keys and values
 */

const students = {
    id: 1,
    name: {
        firstName: 'shihan',
        lastName: 'chowhdury'
    },
    hobby: ['gaming', 'gardening'],
    address: {
        streetAddress: 8,
        postCode: 'PO1 5BJ',
        country: 'UK'
    },
    mobile: '0745322222'
}

const keyOfStudents = Object.keys(students);
const valuesOfStudents = Object.keys(students);
console.log(typeof keyOfStudents, keyOfStudents);
console.log(typeof valuesOfStudents, valuesOfStudents);



