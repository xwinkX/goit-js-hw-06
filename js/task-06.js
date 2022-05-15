const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('input', onInput);
// inputEl.addEventListener('blur', onInputBlur);

// function onInput(event) {
      
//    event.currentTarget.value.length;
      
// }
// console.log(onInput)


// console.log(inputEl.getAttribute("data-length"));
// function onInputBlur() {
  
//     if (onInput === inputEl.getAttribute("data-length")) {
//         inputEl.setAttribute('class', 'valid');
//     } 
   
//        inputEl.setAttribute('class', 'invalid');
    
 
// }

function onInput(event) {
      
    if (event.currentTarget.value.length === inputEl.getAttribute("data-length")) {
        inputEl.setAttribute('class', 'valid');
    }
    else { 
    inputEl.setAttribute('class', 'invalid');
    
} 
}
//  inputEl.addEventListener('blur', onInputBlur);