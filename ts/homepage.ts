// const accordionHeaders = document.querySelectorAll('.accordion-header');

// accordionHeaders.forEach(header => {
//   header.addEventListener('click', () => {
//     const contentId = header.getAttribute('aria-controls');
//     const content = document.getElementById(contentId);
//     const isExpanded = header.getAttribute('aria-expanded') === 'true';

//     header.setAttribute('aria-expanded', !isExpanded);
//     content.style.display = isExpanded ? 'none' : 'block';
//   });
// });

const accordionHeaders = document.querySelectorAll(
  ".accordion-header"
) as NodeListOf<HTMLButtonElement>;

accordionHeaders.forEach((h) => {
  h.addEventListener("click", () => {
    const contentId = h.getAttribute("aria-controls");
    const content = document.getElementById(contentId!);
    const chevron = document.querySelector(".accordion-icon use");
    const isExpanded = h.getAttribute("aria-expanded") === "true";

    h.setAttribute("aria-expanded", `${!isExpanded}`);
    content!.style.display = isExpanded ? "none" : "block";

    chevron!.setAttribute(
      "href",
      isExpanded
        ? "../imgs/icon-chevron.svg#down"
        : "../imgs/icon-chevron.svg#up"
    );
  });
});
