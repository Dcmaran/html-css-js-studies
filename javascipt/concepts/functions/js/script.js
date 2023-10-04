function myFunction(){
    console.log("testing");
}

myFunction();

const myVariableFunction = function (){
    console.log("Variable in function");
}

myVariableFunction();

function functionWithParameters(txt){
    console.log(`Print: ${txt}`);
}

functionWithParameters("My print text");

const a = 10;
const b = 20;
const c = 30;
const d = 40;


function sum(n1, n2){
    return n1 + n2;
}

console.log(sum(a, b));

console.log(sum(c, d));

// arrow function

const testArrow = () => {
    console.log("This is a arrow function");
}

testArrow();

const evenOrOdd = (n) => {
    if (n % 2 === 0) {
        console.log("Even");
        return
    }

    console.log("Odd");
}

evenOrOdd(10);
evenOrOdd(7);

const squareRoot = (x) => x * x;
    

console.log(squareRoot(5));

// optional parameter

const multiplication = function (m, n) {
    if (n === undefined) {
        return m * 2;
    }
    else {
        return m * n;
    }
}

console.log(multiplication(5));
console.log(multiplication(5, 5));

const greeting = (name) => {
    if (!name) {
        console.log("Hello");
    } else {
        console.log(`Hello, ${name}`);
    }
}

greeting();

greeting("Diogo");

// Default value

const customGreeting = (name, greet = "Hello") => {
    return `${greet}, ${name}`
}

console.log(customGreeting("Diogo"));

console.log("Diogo", "Good morning");

const repeatName = (name, repeat = 3) => {
    for (let i = 0; i < repeat; i++) {
        console.log(name);
    }
}

repeatName("Diogo");
repeatName("Diogo", 5);

  