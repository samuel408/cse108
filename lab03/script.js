let outputValue = '0';
let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';
let operatorClicked = false;
let equalsClicked = false;

function updateOutput() {
  document.getElementById('output').innerText = outputValue;
}
function appendNumber(number) {
    if (outputValue === '0' || operatorClicked || equalsClicked) {
      outputValue = '';
      operatorClicked = false;
      equalsClicked = false;
    }
    outputValue += number;
    updateOutput();
  }
  

function appendDecimal() {
  if (!outputValue.includes('.')) {
    outputValue += '.';
    updateOutput();
  }
}

function setOperator(op) {
  operator = op;
  firstNumber = outputValue;
  operatorClicked = true;
  equalsClicked = false;
}
function toggleOperatorHighlight() {
    const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach(button => {
      button.classList.remove('active');
    });
    if (operator) {
      const activeOperatorButton = document.querySelector(`.${operator}`);
      activeOperatorButton.classList.add('active');
    }
}
function calculateResult(first, second, op) {
    switch (op) {
      case '+':
        return parseFloat(first) + parseFloat(second);
      case '-':
        return parseFloat(first) - parseFloat(second);
      case '*':
        return parseFloat(first) * parseFloat(second);
      case '/':
        return parseFloat(first) / parseFloat(second);
      default:
        return 'Error';
    }
}

function calculate() {
    if (operator && !equalsClicked) {
      secondNumber = outputValue;
      result = calculateResult(firstNumber, secondNumber, operator);
      outputValue = result.toString();
      updateOutput();
      firstNumber = outputValue;
      operatorClicked = false;
      equalsClicked = true;
      toggleOperatorHighlight(); // Highlight the active operator
    } else if (equalsClicked) {
      result = calculateResult(firstNumber, secondNumber, operator);
      outputValue = result.toString();
      updateOutput();
      firstNumber = outputValue;
      equalsClicked = true;
    }
}

// Clear the output
function clearOutput() {
    
    outputValue = '0';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = '';
    operatorClicked = false;
    equalsClicked = false;
    toggleOperatorHighlight(); // Remove the active operator highlight
    updateOutput();
}
  

updateOutput();
