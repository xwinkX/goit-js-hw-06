let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const spanEl = document.querySelector('#value');
buttonDecrement.addEventListener('click', onClickBtnDecrement);
buttonIncrement.addEventListener('click', onClickBtnIncrement);
function onClickBtnDecrement() {
    counterValue -= 1;
    spanEl.textContent = counterValue;
}
function onClickBtnIncrement() {
    counterValue += 1;
     spanEl.textContent = counterValue;
}
