const defaultValue = 0;
let currentResult = defaultValue;

function add() {
    prevCurrentResult = currentResult;
    currentResult += parseInt(userInput.value);
    resultOutput(`${prevCurrentResult} + ${userInput.value}`,currentResult);
}

function subtract() {
    prevCurrentResult = currentResult;
    currentResult -= parseInt(userInput.value);
    resultOutput(`${prevCurrentResult} - ${userInput.value}`,currentResult);
}

function multiply() {
    prevCurrentResult = currentResult;
    currentResult *= parseInt(userInput.value);
    resultOutput(`${prevCurrentResult} * ${userInput.value}`,currentResult);
}

function divide() {
    prevCurrentResult = currentResult;
    currentResult /= parseInt(userInput.value);
    resultOutput(`${prevCurrentResult} / ${userInput.value}`,currentResult);
}

function reset() {
    location.reload(true);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

resetBtn.addEventListener('click',reset);

function resultOutput(calculation, result) {
    currentCalculationOutput.textContent = calculation;
    currentResultOutput.textContent = result;
}