
const inputEl = document.querySelector('#validation-input');
const borderColor = (event) => {
    if (event.currentTarget.value.length === Number(inputEl.getAttribute("data-length"))) {
       inputEl.setAttribute('class', 'valid');
    }
    else {
        inputEl.setAttribute('class', 'invalid');
    }
} 
inputEl.addEventListener('blur', borderColor);