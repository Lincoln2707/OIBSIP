document.getElementById('convertBtn').addEventListener('click', function() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const kelvinInput = document.getElementById('kelvin');

    let celsius = parseFloat(celsiusInput.value);
    let fahrenheit = parseFloat(fahrenheitInput.value);
    let kelvin = parseFloat(kelvinInput.value);

    if (!isNaN(celsius)) {
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
        fahrenheitInput.value = fahrenheit.toFixed(2);
        kelvinInput.value = kelvin.toFixed(2);
    } else if (!isNaN(fahrenheit)) {
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = (fahrenheit - 32) * 5/9 + 273.15;
        celsiusInput.value = celsius.toFixed(2);
        kelvinInput.value = kelvin.toFixed(2);
    } else if (!isNaN(kelvin)) {
        celsius = kelvin - 273.15;
        fahrenheit = (kelvin - 273.15) * 9/5 + 32;
        celsiusInput.value = celsius.toFixed(2);
        fahrenheitInput.value = fahrenheit.toFixed(2);
    } else {
        alert('Please enter a valid number in at least one field.');
    }
});

