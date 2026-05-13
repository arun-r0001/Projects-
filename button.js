// Select the button element
const btn = document.querySelector('button');

// Change background color when mouse enters
btn.onmouseover = function() {
    btn.style.backgroundColor = "rgb(255, 0, 0)";
    btn.style.cursor = "pointer";
};

// Change it back when mouse leaves
btn.onmouseout = function() {
    btn.style.backgroundColor = "";
};