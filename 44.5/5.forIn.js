/**
 * The For In Loop 
 * The JavaScript for in statement loops through the properties of an Object:
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

for (const key in students) {
    console.log(key, students[key]);
}