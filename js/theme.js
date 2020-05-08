/**
 * @author oitsjustjose | https://github.com/oitsjustjose | oitsjustjose.com
 * Handles all things in regards to theming
 */

let mode = "dark";

const css = document.getElementById("themekit");
const icon = document.querySelector(".theme-toggle");

const updateIcon = () => {
    if (mode == "dark") {
        icon.innerHTML = `<i class="fas fa-moon"></i>`;
    } else if (mode == "moonlight") {
        icon.innerHTML = `<i class="fas fa-sun"></i>`;
    } else {
        icon.innerHTML = `<i class="fas fa-adjust"></i>`;
    }
};

const toggle = () => {
    if (mode == "dark") {
        window.localStorage.setItem("theme", "moonlight");
        mode = "moonlight";
        css.href = "./css/themes/moonlight.css";
    } else if (mode == "moonlight") {
        window.localStorage.setItem("theme", "light");
        mode = "light";
        css.href = "./css/themes/light.css";
    } else {
        window.localStorage.setItem("theme", "dark");
        mode = "dark";
        css.href = "./css/themes/dark.css";
    }
    updateIcon();
};

window.addEventListener("DOMContentLoaded", (evt) => {
    if (window.localStorage.getItem("theme") === null) {
        // Match with system dark mode
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            window.localStorage.setItem("theme", "dark");
        }
        // Match with system light mode
        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            window.localStorage.setItem("theme", "light");
        }
        // Literally choose the middle option 
        else {
            window.localStorage.setItem("theme", "moonlight");
        }
    }

    mode = window.localStorage.getItem("theme");

    if (mode == "dark") {
        css.href = "./css/themes/dark.css";
    } else if (mode == "moonlight") {
        css.href = "./css/themes/moonlight.css";
    } else {
        css.href = "./css/themes/light.css";
    }
    updateIcon();
});