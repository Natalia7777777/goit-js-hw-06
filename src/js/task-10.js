const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', () => onCreateBoxes(input.value));

destroyBtn.addEventListener('click', onDestroyBoxes);

function onCreateBoxes(amount) {
  onDestroyBoxes();
  const boxesElements = [];
  for (let i = 0, j = 30; i < amount; i += 1, j +=10) {
    const createBoxes = `<div style="background-color: ${getRandomHexColor()}; width: ${j}px; height: ${j}px;"></div>`
    boxesElements.push(createBoxes);
  }

  boxes.insertAdjacentHTML("afterbegin", boxesElements.join(''));
}

function onDestroyBoxes() {
  boxes.innerHTML = ''; 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
