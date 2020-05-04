function toggleMenu () {
  const pageHeader = document.querySelector(".page-header"),
    toggler = pageHeader.querySelector(".toggle"),
    intro = document.querySelector(".intro");

  pageHeader.classList.add("page-header--minimized");
  toggler.setAttribute("aria-expanded", "false");
  intro.classList.add("intro--script-enabled");

  toggler.addEventListener("click", function () {
    pageHeader.classList.toggle("page-header--minimized");
    pageHeader.classList.toggle("page-header--expanded");

    if (toggler.getAttribute("aria-expanded") === "false") {
      toggler.setAttribute("aria-expanded", "true");
    } else {
      toggler.setAttribute("aria-expanded", "false");
    }
  });
}

toggleMenu();
