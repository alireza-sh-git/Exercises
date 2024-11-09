const defaultResult = 0;
let currentResult = defaultResult;

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

// Can also use "parseint" and "parsefloat" instead of Number(). subtle differences...
function add() {
    const enteredNumber = getUserInputNumber();
    let calculationDescription = currentResult + " + " + enteredNumber;
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, calculationDescription);
}

function subtract() {
    const enteredNumber = getUserInputNumber();
    let calculationDescription = currentResult + " - " + enteredNumber;
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult, calculationDescription);
}

function multiply() {
    const enteredNumber = getUserInputNumber();
    let calculationDescription = currentResult + " x " + enteredNumber;
    currentResult = currentResult * enteredNumber;
    outputResult(currentResult, calculationDescription);
}

function divide() {
    const enteredNumber = getUserInputNumber();
    let calculationDescription = currentResult + " ÷ " + enteredNumber;
    currentResult = currentResult / enteredNumber;
    outputResult(currentResult, calculationDescription);
}

function getUserInputNumber (){
    return parseInt(userInput.value)
}