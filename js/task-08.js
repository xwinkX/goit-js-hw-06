const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSabmit);
function onFormSabmit(event) {
    event.preventDefault();
    const formData = new formData(event.currentTarget);

    formData.forEach((value, name) => {
        
    })

    console.log('www')
}
