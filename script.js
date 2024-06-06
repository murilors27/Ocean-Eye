const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');

function validateForm() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const subjectValue = subjectInput.value.trim();

    if (nameValue === '' || emailValue === '' || subjectValue === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    return true;
}

form.addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("O formulário foi enviado com sucesso!");
    });
});