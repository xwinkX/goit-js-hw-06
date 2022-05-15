const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
console.log(input )
input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (input.value === '') {
        output.textContent = 'Annonimus'
    }
    else {
        output.textContent = event.currentTarget.value;
    }
}