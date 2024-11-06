let display = document.getElementById("display");
let currentOperator = null;
let firstOperand = "";
let secondOperand = "";

function clearDisplay() {
    display.innerText = "0";
    currentOperator = null;
    firstOperand = "";
    secondOperand = "";
}

function appendNumber(number) {
    if (display.innerText === "0" && number !== ".") {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function setOperator(operator) {
    if (currentOperator === null) {
        firstOperand = display.innerText;
        currentOperator = operator;
        display.innerText = "";
    } else if (display.innerText !== "") {
        calculate();
        currentOperator = operator;
    }
}

function calculate() {
    if (currentOperator !== null) {
        secondOperand = display.innerText;
        let result;
        switch (currentOperator) {
            case "+":
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case "-":
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case "*":
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case "/":
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
        }
        display.innerText = result.toString();
        firstOperand = result;
        currentOperator = null;
    }
}

function negate() {
    display.innerText = (parseFloat(display.innerText) * -1).toString();
}

function percent() {
    display.innerText = (parseFloat(display.innerText) / 100).toString();
}
