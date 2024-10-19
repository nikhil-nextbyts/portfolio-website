// change the color mode

let modeBtn = document.querySelector("#mode");
let mode = "light";
let body = document.querySelector("body");

modeBtn.addEventListener("click", () => {
    if(mode === "light") {
        mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else {
        mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});