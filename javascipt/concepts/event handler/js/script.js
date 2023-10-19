// adding events

const btn = document.querySelector("#my-button");

btn.addEventListener("click", function() {
    console.log("Test");
});

// remove event

const secondBtn = document.querySelector("#btn");

const removeEventBtn = document.querySelector("#other-btn")

function printMessage() {
    console.log("Test");
}

secondBtn.addEventListener("click", printMessage);


removeEventBtn.addEventListener("click", () => {
    secondBtn.removeEventListener("click", printMessage);
    console.log("Event removed");
});

// Event argument

const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.target);
    console.log(event.pointerType);
});

// propagation

const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");


containerBtn.addEventListener("click", () => {
    console.log("Event 1");
})

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Event 2");
})

// removing default events

const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    //e.preventDefault();
    console.log("Removing default action");
})

// key events

document.addEventListener("keydown", (e) => {
    console.log(`the key pressed is ${e.key}`);
});

// mouse events

const mouse = document.querySelector("#mouse")

mouse.addEventListener("mouseup", () => {
    console.log("Button was depressed");
});

mouse.addEventListener("mousedown", () => {
    console.log("Button was pressed");
});

mouse.addEventListener("dblclick", () => {
    console.log("Double click");
});


document.addEventListener("mousemove", (e) => {
    //console.log(`axis ${e.x}`);
})

// scroll events

window.addEventListener("scroll", (e) => {
    if (window.scrollY > 200) {
        console.log("Test");
    }
})

// focus event

const input = document.querySelector("#my-input")

input.addEventListener("focus", (e) => {
    console.log("Entered the input");
});

input.addEventListener("blur", (e) => {
    console.log("Left the input");
});

// loading event

window.addEventListener("load", () => {
    console.log("The page loaded");
})

// debounce

const debounce = (f, delay) => {

    let timeout

    return (...arguments) => {
        if(timeout){
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            f.apply(arguments);
        }, delay)
    };
};

window.addEventListener("mousemove", debounce(() => {
    console.log("Executing every 400ms");
}, 400))