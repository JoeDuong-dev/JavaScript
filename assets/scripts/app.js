//Starting value of 0
const defaultResult = 0;
let currentResult = defaultResult;

function add(){
    //Using parseInt to convert String input into Integer
    const enteredNumber = parseInt(userInput.value);
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, calcDescription);
}

function subtract(){
    const enteredNumber = parseInt(userInput.value);
    const calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult, calcDescription);
}

function multiply(){

}

function devide(){

}
//Execute the add function on click
addBtn.addEventListener('click', add);
