/* 1. Create an async function that returns an array of integers after 2 seconds, 
iterate over the result printing each value to console. DO NOT USE CALLBACKS */
console.log('waiting');

async function numbers() {
    const numbersArr = [1, 2, 3];
    return new Promise((resolve) => {
        setTimeout(() => resolve(numbersArr), 2000)
    })
}

async function printNumbers() {
    const result = await numbers();
    result.forEach(number => {
        console.log(number);
    });
}

printNumbers();

/* 2. Given the following code, refactor it to use Promise:

function waitTo(ms, callback) {
    setTimeout(() => callback('done!'), ms);
}
 
waitTo(1200, (result) => { 
    console.log(result);
}) */

async function waitTo(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve('done!'), ms)
    })
}

waitTo(2000).then(result => {
    console.log(result);
});

/* 3. Create a variable named num and increment its value inside a setInterval every 1200 ms.
it should print the updated value always until the program is exited.

Tip 1: since you are running the application on console and it doesn’t get to an end,
you can press Ctrl + C to stop it. */

let num = 26;
setInterval(() => {    
    console.log(num++);
}, 1200);