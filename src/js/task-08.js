const form = document.querySelector('.login-form');

form.addEventListener("submit", onFormSumbit);

function onFormSumbit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        mail,
        password,
    };
    
    if (mail == "" || password == "") {
        alert("Заполните все поля");
    } else {
        console.log(formData);
    }

    event.currentTarget.reset();

}
