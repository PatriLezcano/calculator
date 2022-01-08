const displayPreviousValue = document.getElementById('previous-value');
const displayNewValue = document.getElementById('new-value');
const numberButton = document.querySelectorAll('.number');
const operationButton = document.querySelectorAll('.symbol');

const display = new Display(displayPreviousValue, displayNewValue);

numberButton.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});

operationButton.forEach(button => {
    button.addEventListener('click', () => display.compute(button.value))
});