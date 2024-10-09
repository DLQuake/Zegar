const input = document.querySelector(".theme-switcher input");


const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.setAttribute("data-theme", savedTheme);
    input.checked = savedTheme === "dark";
}

// Dodanie nasłuchiwania na zmianę
input.addEventListener("change", (e) => {
    const theme = e.target.checked ? "dark" : "light";
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
});
