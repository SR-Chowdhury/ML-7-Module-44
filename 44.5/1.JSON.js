/**
 * Javascript Object Notaion
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

const studentJSON = JSON.stringify(students);

console.log(students);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);

console.log(studentObj);
