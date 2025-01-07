const person = {
    name: "Hohyeon",
    age: "28",
    greet: function() {
        console.log(`Hello, my name is ${this.name}!`);
    }
};

console.log(person.name);
person.greet();