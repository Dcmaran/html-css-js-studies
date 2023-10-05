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

// 10 - forEach

const nums = [1, 2, 3, 4, 5];

nums.forEach((number) => {
    console.log(number);
})

const posts = [
    {title: "First post", category: "PHP"},
    {title: "Second post", category: "JS"},
    {title: "Third post", category: "Python"},
];

posts.forEach((post) => {
    console.log(`Showing post: ${post.title}, category: ${post.category}`);
});

// 11 - Includes

const brands = ["bmw", "vw", "fiat"];

console.log(brands.includes("fiat"));
console.log(brands.includes("KIA"));

// 12 - Reverse

console.log(brands);
console.log(brands.reverse());

// 13 - String methods

const testTrim = "  Hello \n "

console.log(testTrim.trim());

// 14 - padstart and padend

const testPadStart = "1";

const newNumber = testPadStart.padStart(4, 0);

console.log(newNumber);

// 15 - Join and split

const myString = "Hello world it's me Dcmaran";

const arraySplit = myString.split(" ");

console.log(arraySplit);

const arrayJoin = arraySplit.join(" ");

console.log(arrayJoin);

// 16 - repeat

const word = "Testing ";

console.log(word.repeat(5));

// 17 - rest operator / rest parameters

const infinitySum = (...args) => {
    
    let total = 0;

    for (let index = 0; index < args.length; index++) {
        total += args[index];
    }

    return total;
};

console.log(infinitySum(1, 2, 5, 10));

// 18 - for of

const forOfTest = [2, 5];
let total = 0;

for (num of forOfTest) {
    total+= num;
}

console.log(total);

// 19 - Destructuring

const userDetails = {
    firstName: "Diogo",
    lastName: "Rodrigues",
    job: "Dev",
}

const {firstName, lastName, job} = userDetails

console.log(lastName);
