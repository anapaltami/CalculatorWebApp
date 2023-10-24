document.addEventListener('DOMContentLoaded', () => {
    let currentInput = "";
    let currentOperation = null;
    let firstOperand = null;

    const display = document.querySelector('.display');

    document.querySelector('.buttons').addEventListener('click', (e) => {
        const value = e.target.textContent;

        if (!isNaN(value) || value === '.') {
            currentInput += value;
            display.textContent = currentInput;
        } else if (value === '+' || value === '-' || value === '×' || value === '÷') {
            firstOperand = parseFloat(currentInput);
            currentOperation = value;
            currentInput = "";
        } else if (value === '=') {
            if (firstOperand !== null) {
                const secondOperand = parseFloat(currentInput);
                switch (currentOperation) {
                    case '+':
                        display.textContent = firstOperand + secondOperand;
                        break;
                    case '-':
                        display.textContent = firstOperand - secondOperand;
                        break;
                    case '×':
                        display.textContent = firstOperand * secondOperand;
                        break;
                    case '÷':
                        display.textContent = firstOperand / secondOperand;
                        break;
                }

                currentInput = display.textContent;
                currentOperation = null;
                firstOperand = null;
            }
        } else if (value === 'C') {
            currentInput = "";
            currentOperation = null;
            firstOperand = null;
            display.textContent = "0";
        }
    });
});