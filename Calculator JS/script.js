
var isFirstInput = true;
var isError = false;

    function appendToDisplay(value) {
        if (isFirstInput && !(/^\d+$/.test(value))) {
            // Jika ini adalah input pertama dan bukan angka, abaikan
            return;
        }
        isFirstInput = false;
        document.getElementById('display').value += value;
    }

function calculate() {
    try {
        var result = math.evaluate(document.getElementById('display').value);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid input');
        }
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        isError = true;
                disableButtons();
            } 
}

function backspace() {
    var currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);

     // Set isFirstInput kembali ke true jika display sudah kosong
     if (display.value === '') {
        isFirstInput = true;
    }
}

function clearDisplay() {
    var clear = document.getElementById('display').value = '';

     // Set isFirstInput kembali ke true jika display sudah kosong
     if (display.value === '') {
        isFirstInput = true;
        isError = false;
    }
    enableButtons();
}

function disableButtons() {
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].textContent !== 'C') {
            buttons[i].disabled = true;
        }
    }
    document.getElementById('clear').disabled = false; // Mengaktifkan tombol Clear
}

function enableButtons() {
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
}

