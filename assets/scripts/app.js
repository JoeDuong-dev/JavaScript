//Starting value of 0
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Gets input from input field
function getUserNumberInput() {
    //Using parseInt to convert String input into Integer
    return parseInt(userInput.value);
} 

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    const logEntry = {
        operation: 'ADD',
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    }
    logEntries.push(logEntry);
    console.log(logEntries[0]);
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);  
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);  
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);  
}
//Execute the add function on click
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
