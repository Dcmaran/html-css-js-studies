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

