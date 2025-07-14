let text = "FALL - WINTER Collection 2025";
let i = 0;

function type() {
  const heading = document.querySelector(".heading");
  if (heading && i < text.length) {
    heading.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

document.addEventListener("DOMContentLoaded", type);
