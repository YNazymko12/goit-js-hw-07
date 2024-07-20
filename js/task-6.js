const numberInput = document.querySelector('input[type = "number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxesEl.innerHTML = '';
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    divEl.style.backgroundColor = getRandomHexColor();

    boxesEl.appendChild(divEl);
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

function onCreateBtnClick() {
  const amount = Number(numberInput.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    numberInput.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
  }
}

createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', destroyBoxes);
