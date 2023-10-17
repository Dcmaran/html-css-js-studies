console.log(document.body.childNodes);


// Get by tag

const itemsList = document.getElementsByTagName("li");

console.log(itemsList);

// Get by id

const title = document.getElementById("title")

console.log(title);


// get by class

const products = document.getElementsByClassName("product");

console.log(products);

// Find multiple elements by css

const productsQuery = document.querySelectorAll(".product")

console.log(productsQuery);

const mainContainer = document.querySelector("#main-container")

console.log(mainContainer);

// insertBefore

const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);

// appendChild

const navLinks = document.querySelector("nav ul");

const li = document.createElement("li")

navLinks.appendChild(li);

// replaceChield

const h2 = document.createElement("h2");

h2.textContent = "My new title";

header.replaceChild(h2, title);

// createTextNode

const myText = document.createTextNode("Now we add one more title");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

mainContainer.appendChild(h3)

const firstLink = navLinks.querySelector("a");

console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com")

firstLink.setAttribute("target", "_blank");