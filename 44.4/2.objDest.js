/**
 * Object destructuring
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

const {id, mobile} = students;
console.log(id, mobile); //1 '0745322222'

const {firstName, lastName} = students?.name;
console.log(firstName, lastName); //shihan chowhdury 


// N>B> optional chaining is better to use in object destructuring


