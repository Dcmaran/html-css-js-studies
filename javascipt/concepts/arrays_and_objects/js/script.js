// 1 - arrays

const list = [1, 2, 3, 4, 5];

console.log(list);

const items = ["Name", 1, 2 , 3]

console.log(items);

const numbers = [5, 3, 4];

console.log(numbers.length);

const array = ["a", "b", "c"];

console.log(array[2]);

// 2 - Methods

const otherNumbers = [4, 5, 7]

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers)

const text = "hello world";

console.log(text.toUpperCase());

console.log(text.indexOf("o"));

// 3 - Objects

const person = {
    myName: "Diogo",
    age: 21,
    job: "Dev",
};

console.log(person);
console.log(person.myName);
console.log(person.job);

const car = {
    engine: 2.0,
    brand: "VW",
    km: 20000,
    model: "Golf",
}

car.doors = 4

console.log(car);

delete car.km;

console.log(car);

const obj = {
    a: "test",
    b: true,
};

console.log(obj instanceof Object);

const obj2 = {
    c: [],
}

Object.assign(obj2, obj)

console.log(obj2);

// 4 - More about objects properties

console.log(Object.keys(car));

console.log(Object.entries(car));

// 5 - Mutability

const a = {
    name: "Diogo"
}

const b = a;

console.log(a);
console.log(b);

// 6 - Push and pop
const myArray = ["a", "b", "c"];

const savePop = myArray.pop();

console.log(myArray);

myArray.push("o", "u", 2);

console.log(savePop)

console.log(myArray);

// 7 - Shift and unshift

const letters = ["a", "b", "c"];

const saveShift = letters.shift()

console.log(saveShift);

letters.unshift("z", "x");

console.log(letters);

// 8 - indexOf and lastIndexOf

const myFruits = ["Apple", "Banana", "Grape", "Apple"];

console.log(myFruits.indexOf("Apple"));
console.log(myFruits.lastIndexOf("Apple"));

// 9 - Slice

const testSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testSlice.slice(2,4 + 1)

console.log(subArray);