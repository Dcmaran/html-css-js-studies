// // setTimeout
// console.log("not yet executed");

// setTimeout(function() {
//     console.log("Asynchronous request");
// }, 2000)

// console.log("not yet executed 2");

// // setinterval

// console.log("not yet executed");

// setInterval(function (){
//     console.log("Asynchronous interval");
// }, 3000)

// console.log("not yet executed 2 ");

// // Promisses

// const promisse = Promise.resolve(5+5);

// console.log("Any code");

// promisse.then((value) => {
//     console.log(`The sum is ${value}`);
// });

// console.log("Other code");

// // promisses failure

// Promise.resolve(4 * "asd")
// .then((n) => {
//     if (Number.isNaN(n)) {
//         throw new Error("Invalid values");
//     }
// })
// .catch((err) => console.log(err));

// Promisses rejected

// function checkNumber(n){
//     return new Promise((resolve, reject) => {

//         if (n > 10) {
//             resolve("The number is bigger than 10")
//         } else {
//             reject(new Error("The number is less than 10"))
//         }
//     });
// }

// const a = checkNumber(20)
// const b = checkNumber(10)

// a.then((v) => console.log(`The result is ${v}`)).catch((err) => console.log(`Error: ${err}`));

// b.then((v) => console.log(`The result is ${v}`)).catch((err) => console.log(`Error: ${err}`));

// Resolve multiple promisses

const p1 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve(10);
    }, 3000)
})

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
    if (30 > 10) {
        resolve(30);
    } else {
        reject("Error!")
    }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));

// Async functions

async function sumWithDelay(a, b) {
    return a + b;
}

sumWithDelay(2, 4).then((value) => {
    console.log(`The sum value is ${value}`);
});

console.log("Test");

// async await

function resolveWithDelay(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Promise resolved");
        }, 2000);
    })
}

async function callAsync() {
    console.log("Calling promise and wait result");
    const result = await resolveWithDelay();
    console.log("Result received");
}

callAsync();