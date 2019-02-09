console.log('in index.js');

const person = require('./person');
console.log(person);

const Person2 = require('./person');
const newPerson = new Person2('June Doe', 50);
newPerson.greeting();
