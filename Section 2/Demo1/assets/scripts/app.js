const defaultResult = 0;
let currentResult = defaultResult;

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

function add() {
    let calculationDescription = currentResult + " + " + userInput.value;
    currentResult = currentResult + Number(userInput.value);
    outputResult(currentResult, calculationDescription);
}

function subtract() {
    let calculationDescription = currentResult + " - " + userInput.value;
    currentResult = currentResult - Number(userInput.value);
    outputResult(currentResult, calculationDescription);
}

function multiply() {
    let calculationDescription = currentResult + " x " + userInput.value;
    currentResult = currentResult * Number(userInput.value);
    outputResult(currentResult, calculationDescription);
}

function divide() {
    let calculationDescription = currentResult + " ÷ " + userInput.value;
    currentResult = currentResult / Number(userInput.value);
    outputResult(currentResult, calculationDescription);
}