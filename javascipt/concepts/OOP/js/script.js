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

const bulldog = Object.create(dog);

bulldog.race = "bulldog"

console.log(bulldog.race);

// 3 - Constructor

// function createDog(name, race){

//     const dog = Object.create({});

//     dog.name = name
//     dog.race = race

//     return dog;
// }

// const bob = createDog("bob", "German Shepherd");

// console.log(bob);

// function Dog(name, race){
//     this.name = name
//     this.race = race
// }

// const husky = new Dog("Ozzy", "Husky");

// console.log(husky);

// 4 - classes es6

class Dog {
    constructor(name, race){
        this.name = name
        this.race = race
    }
}

const bebel = new Dog("Bebel", "Mongrel");

console.log(bebel);

// 5 - override

class Human {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

const diogo = new Human("Diogo", 21);

console.log(diogo);

// 6 - symbol

class Plane{
    constructor(brand, turbines){
        this.brand = brand
        this.turbines = turbines
    }
}

const wings = Symbol();

Plane.prototype[wings] = 2

const boing = new Plane("Boing 474", 10);

console.log(boing[wings]);

// 7 getters and setters

class Post {
    constructor(title, description, tags){
        this.title = title
        this.description = description
        this.tags = tags
    }

    get showPost (){
        console.log(`Post title ${this.title} - Post description ${this.description}`);
    }

    set setTags (tags){
        const splitTags = tags.split(", ");
        this.tags = splitTags
    }
}

const anyPost = new Post("My title", "My description");

console.log(anyPost);

anyPost.setTags = "Programming, python, javascript, bdd"

console.log(anyPost);

// 8 - inheritance

class Mammalian {
    constructor(paws){
        this.paws = paws
    }
}

class Dolphin extends Mammalian {
    constructor(name, paws){
        super(paws, paws)
        this.name = name
    }
}

const henry = new Dolphin("Henry", 4);

console.log(henry);

// 9 - instaof

console.log(henry instanceof Mammalian);
console.log(Mammalian instanceof Dolphin);