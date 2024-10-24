// change the color mode

let modeBtn = document.querySelector("button");
let mode = "light";
let body = document.querySelector(".main");

modeBtn.addEventListener("click", () => {
    if(mode === "light") {
        mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        console.log("hello");
    }
    else {
        mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        console.log("hello");
    }
});