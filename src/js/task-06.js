const inputRef = document.querySelector('#validation-input');
const inputLength = parseInt(inputRef.dataset.length);

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length == inputLength) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
}