const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
inputEl.addEventListener('input', onFontizeText);
function onFontizeText() {
    spanEl.style.fontSize = inputEl.value + 'px'; 
}
