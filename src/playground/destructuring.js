
// Object Destructuring

// const person = {
//     name: 'Santi',
//     age: 43,
//     location: {
//         city: 'Arequipa',
//         temp: 24
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'LEGO Ideas',
//     author: 'Lego Master',
//     publisher : {
//         name: 'Lego Press'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);


// Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, smallPrice, mediumPrice, largePrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
