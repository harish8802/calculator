let result = document.getElementById('result');

function display(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Invalid";
  }
}
