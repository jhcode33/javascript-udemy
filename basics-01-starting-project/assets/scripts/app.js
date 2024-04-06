const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, '');
}

// addEnventListner : 브라우저 내장된 함수
addBtn.addEventListener('click', add);