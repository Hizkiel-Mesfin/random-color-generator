const colorContainer = document.querySelector(".color-container");
const close = document.querySelector(".close");
const colorName = document.querySelector(".name");
const input = document.querySelector(".input");
const add = document.querySelector(".add");
const clearAll = document.querySelector(".btn-clear-all");

// Random color generator
const randColorGen = () => {
  const charSet = "0123456789abcdef";
  let randColor = "#";
  for (let i = 0; i < 6; i++) {
    const rand = Math.floor(Math.random() * charSet.length);
    randColor += charSet[rand];
  }

  return randColor;
};

const boxArr = [];

// Color adder
const addNewColor = (color) => {
  const html = `
       <div class="color-box" style="background-color: ${color}">
        <span class="close">X</span>
        <span class="name">${color}</span>
       </div>
    `;
  colorContainer.insertAdjacentHTML("beforeend", html);
};

// Add three colors on load
window.addEventListener("load", () => {
  for (let i = 0; i < 3; i++) {
    addNewColor(randColorGen());
  }
});

// Add functionality
add.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < +input.value; i++) {
    addNewColor(randColorGen());
  }
  input.value = "";
});

// Clear all functionality
clearAll.addEventListener("click", () => {
  colorContainer.innerHTML = "";
});

// close functionality
colorContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("close")) {
    e.target.parentElement.remove();
  }
});
