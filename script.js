let defaultResult = 0;

let currentResult = defaultResult;

let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

// the description & result output of calculation

function createOutput(numberBeforeCalc, operator, calcNumber) {
  const calcDescription = `${numberBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

// object inside array

function writeToLog(
  operationIdentifier,
  prevResult,
  numberEnteredByUser,
  finalResult
) {
  const logEntry = {
    operation: operationIdentifier,
    PrevResult: prevResult,
    number: numberEnteredByUser,
    output: finalResult,
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}

function addition() {
  const initialResult = currentResult;
  currentResult = currentResult + getUserInput();
  createOutput(initialResult, "+", getUserInput());
  writeToLog("ADD", initialResult, getUserInput(), currentResult);
}

function subtraction() {
  const initialResult = currentResult;
  currentResult = currentResult - getUserInput();
  createOutput(initialResult, "-", getUserInput());
  writeToLog("SUBT", initialResult, getUserInput(), currentResult);
}

function multiplication() {
  const initialResult = currentResult;
  currentResult = currentResult * getUserInput();
  createOutput(initialResult, "*", getUserInput());
  writeToLog("MULTIPLY", initialResult, getUserInput(), currentResult);
}

function division() {
  const initialResult = currentResult;
  currentResult = currentResult / getUserInput();
  createOutput(initialResult, "/", getUserInput());
  writeToLog("DIVIDE", initialResult, getUserInput(), currentResult);
}

addBtn.addEventListener("click", addition);

subtractBtn.addEventListener("click", subtraction);

multiplyBtn.addEventListener("click", multiplication);

divideBtn.addEventListener("click", division);
