// change the color mode

let modeBtn = document.querySelector(".mode");
let mode = "light";
let body = document.querySelector(".mainContainer");

modeBtn.addEventListener("click", () => {
    if(mode === "light") {
        mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        console.log("enable dark mode");
        modeBtn.textContent = "Light Mode";
        modeBtn.classList.add("dark");
        modeBtn.classList.remove("light");
    }
    else {
        mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        console.log("enable light mode");
        modeBtn.textContent = "Dark Mode";
        modeBtn.classList.add("light");
        modeBtn.classList.remove("dark");
    }
});

// logic for menu button

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
});
