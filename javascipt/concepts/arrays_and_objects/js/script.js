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