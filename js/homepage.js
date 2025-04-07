"use strict";
// ACCORDION
const accordionHeaders = document.querySelectorAll(".accordion-header");
accordionHeaders.forEach((h) => {
    h.addEventListener("click", () => {
        const contentId = h.getAttribute("aria-controls");
        const content = document.getElementById(contentId);
        const isExpanded = h.getAttribute("aria-expanded") === "true";
        h.setAttribute("aria-expanded", `${!isExpanded}`);
        content.style.display = isExpanded ? "none" : "block";
    });
});
// MOBILE 
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
hamburger.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', `${isOpen}`);
});
