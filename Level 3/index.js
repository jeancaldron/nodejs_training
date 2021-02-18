/*1. Create a class with at least 4 properties (try to use different types) in a separate file, 
require that class in index.js and create an instance, for each property of that instance 
print to console propName: propValue, where propName is the name of the property and 
propValue is the corresponding value. */

const Car = require('./Car'); // no need to explicit the file extension
const prius = new Car("Toyota Prius", 5, true);

for (const prop in prius) {
    console.log(`${prop}: ${prius[prop]}`);
}

/*2. At the root of your code base, create a txt file and add a “lorem ipsum” to it, 
require the fs module and read that file asynchronous, after calling the readFile method 
print to console “reading file”, after finishing reading file content print the content to console. */

const fs = require("fs");

fs.readFile("./text.txt", "utf-8", function (err, content) {
    if (err) {
        return console.log(err);
    }
    console.log(content);
});

console.log("reading file");

/*3. Create a class named Animal that has three properties name, numberOfPaws, 
gender and two methods named say and info, then create three more classes 
Dog, Cat, Fox that will override methods and fill out properties */

class Animal {
    constructor(numberOfPaws, gender) {
        this.name = null;
        this.numberOfPaws = numberOfPaws;
        this.gender = gender;
    }
    say() {
    }
    info() {
    }
}

class Dog extends Animal {
    constructor() {
        super(4, "Male");
        this.name = "Dog";
    }

    say() {
        return "Guau";
    }
    info() {
        return "The domestic dog is a wolf-like canid that can be found distributed around the world.";
    }
}

class Cat extends Animal {
    constructor() {
        super(4, "Female");
        this.name = "Cat";
    }

    say() {
        return "Miau";
    }
    info() {
        return "The cat (Felis catus) is a domestic species of small carnivorous mammal.";
    }
}

class Fox extends Animal {
    constructor() {
        super(4, "Female");
        this.name = "Fox";
    }

    say() {
        return `Ring-ding-ding-ding-dingeringeding!\n` +
                `Gering-ding-ding-ding-dingeringeding!\n` +
                `Gering-ding-ding-ding-dingeringeding!`;
    }
    info() {
        return "Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae.";
    }
}

const fox = new Fox();

console.log(fox.name);
console.log(fox.say());
console.log(fox.info());