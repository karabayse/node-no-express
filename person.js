const person = {
  name: 'Jane Doe',
  age: '45'
}

class Person2 {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
  }
}

module.exports = person;
module.exports = Person2;
