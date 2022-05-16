const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSabmit);
function onFormSabmit(event) {
event.preventDefault();
    const validForm = [...event.target.elements]
        .filter((element) => element.tagName === "INPUT")
        .some((element) => element.value === "");
    if (validForm) {
        alert('Всі поля повинні бути заповнені');
    }
    const formData = new FormData(event.currentTarget);
    // console.lof(formData);
    formData.forEach((value, name) => {
        console.log('name', name);
        console.log('value', value);
    })
    form.reset();
}
