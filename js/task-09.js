function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color')
const bodyEl = document.querySelector('body');
buttonEl.addEventListener('click', onButtonClick);
console.dir(bodyEl)
function onButtonClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}