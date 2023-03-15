/**
 * JavaScript Fetch API
 * -----Definition and Usage-----
 * The fetch() method starts the process of fetching a resource from a server.
 * The fetch() method returns a Promise that resolves to a Response object.
 */

const url = 'example.com';
fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))