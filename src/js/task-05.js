const oldName = document.querySelector('#name-input');
const newName = document.querySelector('#name-output');

oldName.addEventListener('input', onInputChange);

function onInputChange(event) {
    oldName.textContent != event.currentTarget.value ?
    newName.textContent = event.currentTarget.value :
    newName.textContent = "Anonymous";
}
