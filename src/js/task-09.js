const bodyColor = document.querySelector('body');
const colorPalette = document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');

colorBtn.addEventListener("click", onChangeColor);

function onChangeColor() {
  const color = getRandomHexColor();
  bodyColor.style.backgroundColor = color;
  colorPalette.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
