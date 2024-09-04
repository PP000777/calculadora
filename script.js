let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operation = '';

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function setOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculateResult();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function clearDisplay() {
    display.value = '';
    currentNumber = '';
    previousNumber = '';
    operation = '';
}

function deleteLast() {
    currentNumber = currentNumber.slice(0, -1);
    display.value = currentNumber;
}

function calculateResult() {
    if (previousNumber === '' || currentNumber === '') return;
    let result;
    let prev = parseFloat(previousNumber);
    let curr = parseFloat(currentNumber);

    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }

    display.value = result;
    currentNumber = result;
    previousNumber = '';
    operation = '';
}
