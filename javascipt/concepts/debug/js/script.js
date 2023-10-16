// "use strict";

// const test = "hello";

// debugger

let c = 1;
let d = 2;

if (c = 1) {
    c = d + 2;
}

// data handling

function checkNumber(n){

    const result = Number(n);

    if (Number.isNaN(result)) {
        console.log("Invalid value!");
        return;
    }

    console.log("Correct value!");
    return result;
}

checkNumber(5);

checkNumber("10");

checkNumber({});

checkNumber("test");

// exceptions

let x = 10;

// if (x != 11) {
//     throw new Error("X != 11");
// }

// try catch

try {
    const sum = x + y;
} catch (error) {
    console.log(`Program error ${error}`);
}

// finnaly

try {
    const value = checkNumber("1");

    if (!value) {
        throw new Error("Invalid values");
    }
} catch (error) {
    console.log(`Ops, a problem ocurred ${error}`);
}
finally {
    console.log("The code was executed");
}

// assertions

function checkArray(arr){
    if (arr.length === 0) {
        throw new Error("The array needs elements")
    } else {
        console.log(`The array has ${arr.length} elements`);
    }
}

const arr = [1, 2, 3, 4];
// checkArray([]);
checkArray(arr);