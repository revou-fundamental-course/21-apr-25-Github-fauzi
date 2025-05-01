document.addEventListener('DOMContentLoaded', function () {
    console.log('javascript is workking!');

    // Initialize elements
    const inputCelsius = document.getElementById('celsius');
    const inputFahrenheit = document.getElementById('fahrenheit');
    const inputCalculate = document.getElementById('calculate');

    const btnConvert = document.getElementById('btnConvert');
    const btnReset = document.getElementById('btnReset');
    const btnReverse = document.getElementById('btnReverse');

    // Convert Celsius to Fahrenheit and vice versa
    function convert(reverse = false) {
        if (reverse == false && inputCelsius.value !== '') {
            const celsius = parseFloat(inputCelsius.value);
            const fahrenheit = (celsius * 9) / 5 + 32;
            inputFahrenheit.value = fahrenheit.toFixed(2);
            inputCalculate.value = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
        }

        if (reverse && inputFahrenheit.value !== '') {
            const fahrenheit = parseFloat(inputFahrenheit.value);
            const celsius = ((fahrenheit - 32) * 5) / 9;
            inputCelsius.value = celsius.toFixed(2);
            inputCalculate.value = `(${fahrenheit}°F - 32) * 5/9 = ${celsius.toFixed(
                2
            )}°C`;
        }
    }

    function reset() {
        document.getElementById('celsius').value = '';
        document.getElementById('fahrenheit').value = '';
        document.getElementById('calculate').value = '';
    }

    function reverse() {
        convert(true);
    }

    // Event listeners
    btnConvert.addEventListener('click', () => convert(false));
    btnReset.addEventListener('click', reset);
    btnReverse.addEventListener('click', reverse);
});