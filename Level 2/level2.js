/*1. Create an object that contains first name, last name and age properties, 
create a function called greeting that will print to console Hello, 
firstName using template literals. */

let jean = { firstname: 'Jean', lastname: 'Calderon', age: 26};

const greeting = (human) => {
    console.log(`Hello, ${human.firstname}`);
};

greeting(jean);

/*2.1 Using the same object of the previous item, create a function to increment age, 
another to decrement age, both receiving the amount as parameter. */

const getOlder = (years) => {
    jean.age = jean.age + years;
};

const getYounger = (years) => {
    jean.age = jean.age - years;
};

getOlder(5);
console.log(`Your age is ${jean.age}`);

getYounger(3);
console.log(`Your age is ${jean.age}`);

/*3. Create a function that prints to the console “first age”, 
“second age” or “third age” based on the object’s age property passed as parameter.  */

const classifyAge = (human) => {
    if (human.age <= 30) {
        console.log('first age');
    } else if(human.age > 30 && human.age <= 60) { 
        console.log('second age');
    } else if(human.age > 60) { 
        console.log('third age');
    }
};

classifyAge(jean);

/*4. Following the 2nd exercise of the previous lecture, 
create a function that receives a parameter and prints to console the type of that parameter */

const getType = (parameter) => {
    console.log(`The type is ${typeof parameter}`);
};

getType(jean);

/*5. Create a function that receives any number of parameters, 
for each parameter: do nothing if parameter is not a string, 
prints JSON object of that string if it’s a valid JSON string, 
if deserialized object contains an age property, sum all ages and return the total. */

function sumAge(){
    const arr = Array.from(arguments);
    let age_counter = 0;
    
    arr.forEach(argument => {        
        if (typeof argument === 'string') {
            try {
                let jsonObject = JSON.parse(argument);
                console.log(jsonObject);
                if (jsonObject.age) {
                    age_counter = age_counter + parseInt(jsonObject.age);
                } else {
                    throw new Error("object dont have an age property");
                };
            } catch (error) {
                console.log(error);
            };
        };        
    });
    console.log("total age: "+ age_counter);
};

sumAge(15,'{"name": "John"}',"",'{"age":"30"}','{"age": "45"}');

/*6. Create an array of objects containing first name and last name, and turn it into an array of full names. */

let persons = [
    { 
        firstName: "jean", 
        lastname: "calderon" 
    },
    { 
        firstName: "kendra", 
        lastname: "melo" 
    },
    { 
        firstName: "karina", 
        lastname: "fajardo" 
    }
];

let fullnames = persons.map(function(person){
    return person.firstName + ' ' + person.lastname;
});

console.log(fullnames);

/* Given the array [30, 5, 5, 18, 43, 16, 21, 16, 24, 4, 38, 3, 18, 19, 18, 42, 6, 35, 38, 43] ,
sort them in a way that evens come before the odds, and then sort them from lowest to highest. */

let numbers = [30, 5, 5, 18, 43, 16, 21, 16, 24, 4, 38, 3, 18, 19, 18, 42, 6, 35, 38, 43];

let odds = [];
let evens = [];

numbers.map(function(number){
    return ( number % 2 ) ? odds.push(number) : evens.push(number);
});

odds.sort((a,b)=>a-b);
evens.sort((a,b)=>a-b);

let sorted_Numbers = evens.concat(odds) ;

console.log(sorted_Numbers);