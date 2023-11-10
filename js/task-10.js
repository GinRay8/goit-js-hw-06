function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("button[data-create]");
const destroyButton = controls.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", createBox);
destroyButton.addEventListener("click", destroyBox);

function createBox() {
  const numberOfBoxes = input.value;
  let sizeBox = 30;

  for (let i = 0; i < numberOfBoxes; i += 1) {
    const box = document.createElement("div");
    box.style.width = sizeBox + "px";
    box.style.height = sizeBox + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    sizeBox += 10;
  }
}

function destroyBox() {
  boxesContainer.innerHTML = "";
}