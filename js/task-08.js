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
    else {
        const formData = new FormData(event.currentTarget);
        const formResult = Object.fromEntries(formData.entries());
        console.log(formResult)
        event.currentTarget.reset();
    }
}
