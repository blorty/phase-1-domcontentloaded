// Your code goes here

document.addEventListener("DOMContentLoaded", ()=> {
    console.log("The DOM has loaded");
    const text = document.getElementById("text");
    text.textContent = "This is really cool!";
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

// const text = document.getElementById("text");
// text.textContent = "JavaScript is so cool. It lets me add text to my page programmatically.";