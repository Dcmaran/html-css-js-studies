// const dog = {
//     name: "Bebel",
//     bark: function () {
//         console.log("Au Au");
//     }
// };

// dog.bark();

// 1 - Prototype

const text = "asd";

console.log(Object.getPrototypeOf(text));

// 2 - Basic Classes

const dog = {
    race: null,
    paws: 4,
};

const germanShepherd = Object.create(dog);

germanShepherd.race = "germanShepherd";

console.log(germanShepherd);
console.log(germanShepherd.paws);