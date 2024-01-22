function appendToDisplay(value) {
    if (/[\d+\-*/.]/.test(value)) {
        document.getElementById('display').value += value;
      }
}

function calculate() {
    const result = math.evaluate(document.getElementById('display').value);
    document.getElementById('display').value = result
}

function clearDisplay() {
    var clear = document.getElementById("display").value = '';
}