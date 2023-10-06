const dog = {
    name: "Bebel",
    bark: function () {
        console.log("Au Au");
    }
};

dog.bark();

// 1 - Prototype

const text = "asd";

console.log(Object.getPrototypeOf(text));