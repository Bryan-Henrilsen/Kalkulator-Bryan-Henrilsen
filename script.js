const display = document.querySelector(".display")
const buttons = document.querySelectorAll(".buttons button")

buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick)
});

function handleButtonClick(event) {
    const buttonValue= event.target.dataset.value;

    switch(buttonValue) {
        case 'C':
            clearDisplay();
            break;
        case 'DEL':
            deleteLastCharacter();
            break;
        case '=':
            calculateResult();
            break;
        case '+/-':
            toggleSign();
            break;
        case 'POWER':
            calculatePower();
            break;
        case 'FAKTORIAL':
            calculateFaktorial();
            break;
        case 'AKAR':
            calculateSQRT();
            break;
        case 'MOD':
            updateDisplay('%');
            break;
        case '%':
            calculatePercent();
            break;
        default:
            updateDisplay(buttonValue);
            break;
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = display.value.replace(/,/g, '.');
        let result = eval(expression);
        display.value = result.toString().replace(/\./g, ',');
    } catch (error) {
        display.value = 'Error';
    }
}

function toggleSign() {
    display.value = display.value.charAt(0) === '-' ? display.value.slice(1) : '-' + display.value;
}

function calculatePower() {
    display.value = Math.pow(parseFloat(display.value.replace(/,/g, '.')), 2).toString().replace(/\./g, ',');
}

function calculateFaktorial() {
    const number = parseInt(display.value.replace(/,/g, '.'));
    if (number < 0) {
        display.value = 'Error';
        return;
    }
    let faktorial = 1;
    for (let i = 1; i <= number; i++) {
        faktorial *= i;
    }
    display.value = faktorial.toString();
}

function calculateSQRT() {
    display.value = Math.sqrt(parseFloat(display.value.replace(/,/g, '.'))).toString().replace(/\./g, ',');
}

function calculatePercent() {
    try {
        let value = parseFloat(display.value.replace(/,/g, '.'));

        let result = value / 100;

        display.value = result.toString().replace(/\./g, ',');
    } catch (error) {
        display.value = 'Error';
    }
}

function updateDisplay(value) {
    display.value += value;
}