// =========================================
// P&T POWER WASHING
// Website JavaScript
// =========================================

document.addEventListener("DOMContentLoaded", function () {

// =========================================
// SMOOTH SCROLLING
// =========================================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function (link) {

link.addEventListener("click", function (event) {

const targetId = this.getAttribute("href");

if (targetId === "#") {
return;
}

const target = document.querySelector(targetId);

if (target) {
event.preventDefault();

target.scrollIntoView({
behavior: "smooth",
block: "start"
});
}

});

});


// =========================================
// QUOTE FORM
// =========================================

const quoteForm = document.querySelector(".quote-form form");

if (quoteForm) {

quoteForm.addEventListener("submit", function (event) {

event.preventDefault();

const name = document.querySelector("#name").value.trim();
const phone = document.querySelector("#phone").value.trim();
const service = document.querySelector("#service").value;

if (!name || !phone || !service) {

alert(
"Please fill out your name, phone number, and service needed."
);

return;
}

/*
The form will be connected to your Gmail later.

For now, this message lets you know the form
is working correctly.
*/

alert(
"Thanks, " +
name +
"! Your quote request is ready. We'll connect this form to P&T Power Washing's email next."
);

});

}


// =========================================
// CURRENT YEAR
// =========================================

const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach(function (element) {

element.textContent = new Date().getFullYear();

});


// =========================================
// IMAGE FALLBACK
// =========================================

const images = document.querySelectorAll("img");

images.forEach(function (image) {

image.addEventListener("error", function () {

this.style.display = "none";

});

});

});
