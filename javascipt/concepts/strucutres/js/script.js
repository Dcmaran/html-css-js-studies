// 1 - Variables

let aName = "Pedro";

console.log(aName);

aName = "Dcmaran";

console.log(aName);

const age = 18

console.log(age);

// 2 - More about variables

let a = 10, b = 20, c = 30;

console.log(a, b, c);

let $name = "Dcmaran";

let _age = 19;

console.log($name, _age);

// 3 - Prompt

// const yourAge = prompt("What is your age?")

// console.log(yourAge)

// 4 - Alert

// alert("Testing");

// 5 - Math object

console.log(Math.max(5, 2 , 1 , 10))

console.log(Math.floor(5.14));

console.log(Math.ceil(5.14));

// 6 - Console object

console.log("Test");

console.error("Error!")

console.warn("Warning!")

// 7 - If

const m = 10;

if (m > 5) {
    console.log("M is larger than 5")
}

const user = "Jhon";

if (user === "Jhon") {
    console.log(`Welcome!!! ${user}`)
}

// 8 - Else

const loggedIn = true;

if (loggedIn) {
    console.log("User is logged in");
}
else {
    console.log("User is not logged")
}

// else if

if (1 > 2) {
    console.log("1 > 2");
}
else if (2 > 3) {
    console.log("here")
}
else {
    console.log("Out if")
}

// 10 - Loops

let i = 0;

while (i < 5) {
    console.log(`Repeat ${i}`);
    i++;
}

let o = 10;
do {
    console.log(`O value = ${o}`)
    o--;
} while (o >= 1);

for (let index = 0; index <= 10; index++) {
    console.log("Loop...");
    
}

// Continue 

for (let i = 0; i < 10; i++) {
    
    if (i % 2 === 0) {
        console.log(i + " is pair")
        continue;
    }
    
}

// Switch case

const job = "Engineer";

switch (job) {
    case "Engineer":
        console.log("Job is: " + job);
        break;

    default:
        break;
}