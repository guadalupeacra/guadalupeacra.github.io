document.addEventListener("DOMContentLoaded", () => {

    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".navlinks");

    if (menu && nav) {

        menu.addEventListener("click", () => {

            nav.classList.toggle("open");

            menu.setAttribute(
                "aria-expanded",
                nav.classList.contains("open")
            );

        });

    }

});
