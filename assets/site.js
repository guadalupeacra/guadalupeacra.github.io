
const config = {
  name: "Guadalupe Acra",
  shortName: "GA",
  github: "YOUR_GITHUB_USERNAME",
  linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/",
  email: "YOUR_EMAIL@example.com",
  cv: "assets/Guadalupe_Acra_CV.pdf",
  university: "Universidad del Pacífico",
  graduation: "2023–Present"
};

function linkify(selector, value) {
  document.querySelectorAll(selector).forEach(el => {
    el.href = value;
  });
}
function fill(selector, value) {
  document.querySelectorAll(selector).forEach(el => el.textContent = value);
}

document.addEventListener("DOMContentLoaded", () => {
  fill("[data-name]", config.name);
  fill("[data-short-name]", config.shortName);
  fill("[data-university]", config.university);
  linkify("[data-github]", `https://github.com/${config.github}`);
  linkify("[data-linkedin]", config.linkedin);
  linkify("[data-email]", `mailto:${config.email}`);
  linkify("[data-cv]", config.cv);

  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".navlinks");
  if (menu && nav) {
    menu.addEventListener("click", () => {
      nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", nav.classList.contains("open"));
    });
  }

  const page = document.body.dataset.page;
  document.querySelectorAll(".navlinks a[data-page]").forEach(a => {
    if (a.dataset.page === page) a.classList.add("active");
  });

  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});
